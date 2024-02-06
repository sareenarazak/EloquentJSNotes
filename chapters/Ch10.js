// Module --> specifies dependencies and functionality
// Putting JS code in diff files does not provide private scope
// Package --> distributable code with one or more modules and info about pkg depencies

// old way of modules --> use function to get local scope, objects for module interface
// but does not declare dependencies

// Function constructor --> takes comma sep input , and function body --> both string


//let dogSpeakFun = Function("message", "console.log(message)");
//dogSpeakFun("woof");

//Common JS --> require ("dependency name")  --> makes sure it is loaded
// put export to make it available as a module
// exports.dogSpeakModule = function (message) {
//     console.log(message);
// }

// minimum require code

// require.cache = Object.create(null);
// function require(name) {
//     if (!(name in require.cache)) { --> checks if function name is in cache
//         let code = readFile(name); // if node reads file
//         let module = {exports: {}}; // creates object called module that has exports as key
//         require.cache[name] = module; // puts in cache
//         let wrapper = Function("require, exports, module", code); // creates a wrapper as seen before
//         wrapper(require, module.exports, module); // calls function to load
//     }
//     return require.cache[name].exports;
// }

// You can overwrite module.exports with anything


// ******* ECMASCRIPTS module ******** //

// uses the new notation import --> instead of require("something"); --> import s from "something"
// to export --> export function name() ...

function ch10EcmaExport() {
    console.log("Exporting the ECMA way");
}

export default ch10EcmaExport;


