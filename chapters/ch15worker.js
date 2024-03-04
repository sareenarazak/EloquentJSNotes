onmessage = (msg) => {
    postMessage(`I got a message  ${msg.data}`);
};
