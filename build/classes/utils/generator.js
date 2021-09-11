"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fs_1 = __importDefault(require("fs"));
var archiver_1 = __importDefault(require("archiver"));
var path_1 = __importDefault(require("path"));
var datapacks = require('../../utils').path;
function createMainFolder(name, description) {
    name = name.toLowerCase();
    if (exists(name)) {
        throw new Error("That is already a datapack");
    }
    // CREATE DATAPACK FOLDER
    var datapack = datapacks + name;
    fs_1["default"].mkdirSync(datapack);
    // CREATE MCMETA FILE
    var mcMetaTemp = {
        "pack": {
            "pack_format": 5,
            "description": description
        }
    };
    fs_1["default"].writeFileSync(datapack + "/pack.mcmeta", JSON.stringify(mcMetaTemp, null, 4));
    // CREATE DATA FOLDER
    var dataFolder = datapack + "/data";
    fs_1["default"].mkdirSync(dataFolder);
    // CREATE NAMESPACE
    var namespace = dataFolder + "/" + name;
    fs_1["default"].mkdirSync(namespace);
    // NAMESPACE CHILDREN
    var nsfunctions = namespace + "/functions";
    fs_1["default"].mkdirSync(nsfunctions);
    // CREATE MINECRAFT NAMESPACE
    var mcnamespace = dataFolder + "/minecraft";
    fs_1["default"].mkdirSync(mcnamespace);
    // MC NAMESPACE CHILDREN
    var tags = mcnamespace + "/tags";
    fs_1["default"].mkdirSync(tags);
    var functions = tags + "/functions";
    fs_1["default"].mkdirSync(functions);
    // FUNCTIONS CHILDREN
    var tickTemp = {
        "values": [
            name + ":tick"
        ]
    };
    fs_1["default"].writeFileSync(functions + "/tick.json", JSON.stringify(tickTemp, null, 4));
    var loadTemp = {
        "values": [
            name + ":load"
        ]
    };
    fs_1["default"].writeFileSync(functions + "/load.json", JSON.stringify(loadTemp, null, 4));
    console.log("Created " + name);
    return datapack;
}
//#######################################\\
//            UTIL FUNCTIONS             \\
//#######################################\\
function save(name) {
    name = name.toLowerCase();
    if (!exists(name)) {
        return new Error("That is not a datapack");
    }
    var output = fs_1["default"].createWriteStream(name + "-datapack.zip");
    var archive = archiver_1["default"]('zip');
    // output.on('close', function() {
    //     console.log(archive.pointer() + ' total bytes.');
    //     console.log("Made into a zip.");
    // });
    archive.on('error', function (err) {
        throw err;
    });
    archive.pipe(output);
    archive.directory(__dirname + "/datapacks/" + name, false);
    archive.finalize();
}
function saveTo(path, newPath) {
    fs_1["default"].rename(path, newPath, function (err) {
        if (err)
            throw err;
    });
}
function delDatapack(name) {
    name = name.toLowerCase();
    fs_1["default"].rmdirSync(datapacks + name);
}
function exists(name) {
    name = name.toLowerCase();
    return fs_1["default"].existsSync(datapacks + name);
}
function fileExists(path) {
    return fs_1["default"].existsSync(path);
}
function createMcFunction(namespace, dir, data) {
    var filePath = dir.split("/");
    filePath.splice(filePath.length - 1, 1);
    var funcPath = path_1["default"].join(datapacks, namespace, "data", namespace, "functions");
    if (filePath.length > 0) {
        filePath.forEach(function (p) {
            if (!fileExists(path_1["default"].join(funcPath, p)))
                fs_1["default"].mkdirSync(path_1["default"].join(funcPath, p));
        });
    }
    var mcFuncPath = path_1["default"].join(funcPath, dir + ".mcfunction");
    fs_1["default"].writeFileSync(mcFuncPath, data);
}
function addToLoad(namespace, name) {
    var loadJSONPath = path_1["default"].join(datapacks, namespace, "data", "minecraft", "tags", "functions", "load.json");
    var currentData = JSON.parse(fs_1["default"].readFileSync(loadJSONPath, "utf-8"));
    currentData["values"].push(namespace + ":" + name);
    fs_1["default"].writeFileSync(loadJSONPath, JSON.stringify(currentData, null, 4), "utf-8");
}
function addToTick(namespace, name) {
    var tickJSONPath = path_1["default"].join(datapacks, namespace, "data", "minecraft", "tags", "functions", "tick.json");
    var currentData = JSON.parse(fs_1["default"].readFileSync(tickJSONPath, "utf-8"));
    currentData["values"].push(namespace + ":" + name);
    fs_1["default"].writeFileSync(tickJSONPath, JSON.stringify(currentData, null, 4), "utf-8");
}
exports["default"] = {
    createMainFolder: createMainFolder,
    save: save,
    saveTo: saveTo,
    delDatapack: delDatapack,
    createMcFunction: createMcFunction,
    addToLoad: addToLoad,
    addToTick: addToTick
};
