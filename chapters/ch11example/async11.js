import { bigOak, everywhere, defineRequestType } from "./crowtech.js";
export const async11 = () => {
    // // this demonstrates the indentation level when you use callback style when
    // // there is more than one async action performed, in this case reading storage iteratively
    // bigOak.readStorage("food caches", caches => {
    //     console.log(caches);
    //     let firstCache = caches[0];
    //     bigOak.readStorage(firstCache, info => {
    //         console.log(info);
    //     });
    // });
    //
    // // before registering handler it prints "Note delivered"
    // bigOak.send("Cow Pasture", "note", "Let's caw loudly at 7PM",
    //     () => console.log("Note delivered."));
    //
    //
    // // defines request type is from Network class defineRequestType  of "note"
    // // handler is called as
    // //  handler(toNode, ser(message), this.name, (error, response )
    // // nest, content, source, done
    // // done is a callback function that takes in two params (error, response )
    // defineRequestType("note", (nest, content, source, done) => {
    //     console.log(`${nest.name} received note: ${content}`);
    //     done();
    // });
    //
    // bigOak.send("Cow Pasture", "note", "Let's caw loudly at 7PM",
    //     () => console.log("Note delivered."));
    //


    // creating a function that returns a promise
    // Promise constructor takes in a function which it calls immediately
    // the function itself can have either 0,1,2 params --> they are functions too
    // if the promise resolves the first argument function is called with the result
    // if rejected the second argument function is called with the rejection reason


    /**
     * new Promise(executor)
     * param => executor
     * A function to be executed by the constructor. It receives two functions as parameters:
     * resolveFunc and rejectFunc. Any errors thrown in the executor will cause the promise to be rejected, --> this has nothing to do with the resolve reject functions
     * error thrown by the executor needs to be handled by the catch block of a promise then catch chain
     * and the return value will be neglected. The semantics of executor are detailed below.
     *
     * Return value
     *
     * When called via new, the Promise constructor returns a promise object.
     * The promise object will become resolved when either of the functions resolveFunc or rejectFunc are invoked --> Most important
     *
     *
     * If an error is thrown in the executor, the promise is rejected, unless resolveFunc or rejectFunc has already been called.
     */
    function storage(nest, name) {
        return new Promise((resolve, reject) => {
               try {
                   nest.readStorage(name, result => resolve(result));
                   throw new Error("exception thrown");
            } catch(error) {
                   console.log("Catch block")
                   reject(error.message);
            }
        });
    }


    storage(bigOak, "enemies")
        .then(value => console.log("Got", value)) // ==> this is the resolve fun --> this is just the registering part
        .catch(e => console.log("logging error " + e)); // ==> this is the reject fun



    function storageNoFail(nest, name) {
        return new Promise(resolve => {
            nest.readStorage(name, result => resolve(result));
        });
    }

    storageNoFail(bigOak, "enemies")
        .then(value => console.log("Got", value))
        .catch(e => console.log("logging error" + e));



    const Timeout = class Timeout extends Error {
    }

    function request(nest, target, type, content) {
        return new Promise((resolve, reject) => {
            let done = false;

            function attempt(n) {
                nest.send(target, type, content, (failed, value) => {
                    done = true;
                    if (failed) reject(failed);
                    else resolve(value);
                });
                setTimeout(() => {
                    if (done) return;
                    else if (n < 3) attempt(n + 1);
                    else reject(new Timeout("Timed out"));
                }, 250);
            }

            attempt(1);
        });
    }

    function requestType(name, handler) {
        defineRequestType(name, (nest, content, source,
                                 callback) => {
            try {
                Promise.resolve(handler(nest, content, source))
                    .then(response => callback(null, response),
                        failure => callback(failure));
            } catch (exception) {
                callback(exception);
            }
        });
    }

    requestType("ping", () => "pong");

    // function availableNeighbors(nest) {
    //     let requests = nest.neighbors.map(neighbor => {
    //         return request(nest, neighbor, "ping")
    //             .then(() => true, () => false);
    //     });
    //     return Promise.all(requests).then(result => {
    //         return nest.neighbors.filter((_, i) => result[i]);
    //     });
    // }
    //
    // everywhere(nest => {
    //     nest.state.gossip = [];
    // });
    //
    // function sendGossip(nest, message, exceptFor = null) {
    //     nest.state.gossip.push(message);
    //     for (let neighbor of nest.neighbors) {
    //         if (neighbor == exceptFor) continue;
    //         request(nest, neighbor, "gossip", message);
    //     }
    // }
    //
    // requestType("gossip", (nest, message, source) => {
    //     if (nest.state.gossip.includes(message)) return;
    //     console.log(`${nest.name} received gossip '${
    //         message}' from ${source}`);
    //     sendGossip(nest, message, source);
    // });
    //
    // requestType("connections", (nest, {name, neighbors},
    //                             source) => {
    //     let connections = nest.state.connections;
    //     if (JSON.stringify(connections.get(name)) ==
    //         JSON.stringify(neighbors)) return;
    //     connections.set(name, neighbors);
    //     broadcastConnections(nest, name, source);
    // });
    //
    // function broadcastConnections(nest, name, exceptFor = null) {
    //     for (let neighbor of nest.neighbors) {
    //         if (neighbor == exceptFor) continue;
    //         request(nest, neighbor, "connections", {
    //             name,
    //             neighbors: nest.state.connections.get(name)
    //         });
    //     }
    // }
    //
    // everywhere(nest => {
    //     nest.state.connections = new Map();
    //     nest.state.connections.set(nest.name, nest.neighbors);
    //     broadcastConnections(nest, nest.name);
    // });
    //
    // function findRoute(from, to, connections) {
    //     let work = [{at: from, via: null}];
    //     for (let i = 0; i < work.length; i++) {
    //         let {at, via} = work[i];
    //         for (let next of connections.get(at) || []) {
    //             if (next == to) return via;
    //             if (!work.some(w => w.at == next)) {
    //                 work.push({at: next, via: via || next});
    //             }
    //         }
    //     }
    //     return null;
    // }
    //
    // function routeRequest(nest, target, type, content) {
    //     if (nest.neighbors.includes(target)) {
    //         return request(nest, target, type, content);
    //     } else {
    //         let via = findRoute(nest.name, target,
    //             nest.state.connections);
    //         if (!via) throw new Error(`No route to ${target}`);
    //         return request(nest, via, "route",
    //             {target, type, content});
    //     }
    // }
    //
    // requestType("route", (nest, {target, type, content}) => {
    //     return routeRequest(nest, target, type, content);
    // });
    //
    // requestType("storage", (nest, name) => storage(nest, name));
    //
    // function findInStorage(nest, name) {
    //     return storage(nest, name).then(found => {
    //         if (found != null) return found;
    //         else return findInRemoteStorage(nest, name);
    //     });
    // }
    //
    // function network(nest) {
    //     return Array.from(nest.state.connections.keys());
    // }
    //
    // function findInRemoteStorage(nest, name) {
    //     let sources = network(nest).filter(n => n != nest.name);
    //
    //     function next() {
    //         if (sources.length == 0) {
    //             return Promise.reject(new Error("Not found"));
    //         } else {
    //             let source = sources[Math.floor(Math.random() *
    //                 sources.length)];
    //             sources = sources.filter(n => n != source);
    //             return routeRequest(nest, source, "storage", name)
    //                 .then(value => value != null ? value : next(),
    //                     next);
    //         }
    //     }
    //
    //     return next();
    // }
    //
    // const Group = class Group {
    //     constructor() {
    //         this.members = [];
    //     }
    //
    //     add(m) {
    //         this.members.add(m);
    //     }
    // }
    //
    // function anyStorage(nest, source, name) {
    //     if (source == nest.name) return storage(nest, name);
    //     else return routeRequest(nest, source, "storage", name);
    // }
    //
    // async function chicks(nest, year) {
    //     let list = "";
    //     await Promise.all(network(nest).map(async name => {
    //         list += `${name}: ${
    //             await anyStorage(nest, name, `chicks in ${year}`)
    //         }\n`;
    //     }));
    //     return list;
    // }
};
