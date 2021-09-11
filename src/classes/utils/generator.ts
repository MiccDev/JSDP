import fs from 'fs';
import archiver from 'archiver';
import path from 'path';
const datapacks = require('../../utils').path;

function createMainFolder(name: string, description: string) {
    name = name.toLowerCase();
    if(exists(name)) {
        throw new Error("That is already a datapack");
    }

    // CREATE DATAPACK FOLDER

    var datapack = datapacks + name;
    fs.mkdirSync(datapack);

    // CREATE MCMETA FILE


    var mcMetaTemp = {
        "pack": {
            "pack_format": 5,
            "description": description
        }
    }
    fs.writeFileSync(datapack + "/pack.mcmeta", JSON.stringify(mcMetaTemp, null, 4));

    // CREATE DATA FOLDER

    var dataFolder = datapack + "/data";
    fs.mkdirSync(dataFolder);

    // CREATE NAMESPACE

    var namespace = dataFolder + "/" + name;
    fs.mkdirSync(namespace);
    
    // NAMESPACE CHILDREN

    var nsfunctions = namespace + "/functions";
    fs.mkdirSync(nsfunctions);

    // CREATE MINECRAFT NAMESPACE

    var mcnamespace = dataFolder + "/minecraft";
    fs.mkdirSync(mcnamespace);

    // MC NAMESPACE CHILDREN

    var tags = mcnamespace + "/tags";
    fs.mkdirSync(tags);

    var functions = tags + "/functions";
    fs.mkdirSync(functions);

    // FUNCTIONS CHILDREN

    var tickTemp = {
        "values": [
            `${name}:tick`
        ]
    }
    fs.writeFileSync(functions + "/tick.json", JSON.stringify(tickTemp, null, 4));
    var loadTemp = {
        "values": [
            `${name}:load`
        ]
    }
    fs.writeFileSync(functions + "/load.json", JSON.stringify(loadTemp, null, 4));

    console.log(`Created ${name}`);
    return datapack;
}

//#######################################\\
//            UTIL FUNCTIONS             \\
//#######################################\\

function save(name: string) {
    name = name.toLowerCase();
    if(!exists(name)) {
        return new Error("That is not a datapack");
    }

    var output = fs.createWriteStream(name + "-datapack.zip");
    var archive = archiver('zip');
    // output.on('close', function() {
    //     console.log(archive.pointer() + ' total bytes.');
    //     console.log("Made into a zip.");
    // });

    archive.on('error', function(err) {
        throw err;
    });

    archive.pipe(output);
    archive.directory(__dirname + "/datapacks/" + name, false);
    archive.finalize();
}

function saveTo(path: string, newPath: string) {
    fs.rename(path, newPath, (err) => {
        if(err) throw err;
    });
}

function delDatapack(name: string) {
    name = name.toLowerCase();
    fs.rmdirSync(datapacks + name);
}

function exists(name: string) {
    name = name.toLowerCase();
    return fs.existsSync(datapacks + name);
}

function fileExists(path: string) {
    return fs.existsSync(path);
}

function createMcFunction(namespace: string, dir: string, data: string) {
    let filePath = dir.split("/");
    filePath.splice(filePath.length - 1, 1);
    let funcPath = path.join(datapacks, namespace, "data", namespace, "functions");
    if(filePath.length > 0) {
        filePath.forEach(p => {
            if(!fileExists(path.join(funcPath, p))) fs.mkdirSync(path.join(funcPath, p));
        })
    }
    let mcFuncPath = path.join(funcPath, `${dir}.mcfunction`);
    fs.writeFileSync(mcFuncPath, data);
}

function addToLoad(namespace: string, name: string) {
    let loadJSONPath = path.join(datapacks, namespace, "data", "minecraft", "tags", "functions", "load.json");
    let currentData = JSON.parse(fs.readFileSync(loadJSONPath, "utf-8"));
    currentData["values"].push(`${namespace}:${name}`);
    fs.writeFileSync(loadJSONPath, JSON.stringify(currentData, null, 4), "utf-8");
}

function addToTick(namespace: string, name: string) {
    let tickJSONPath = path.join(datapacks, namespace, "data", "minecraft", "tags", "functions", "tick.json");
    let currentData = JSON.parse(fs.readFileSync(tickJSONPath, "utf-8"));
    currentData["values"].push(`${namespace}:${name}`);
    fs.writeFileSync(tickJSONPath, JSON.stringify(currentData, null, 4), "utf-8");
}

export default {
    createMainFolder,
    save,
    saveTo,
    delDatapack,
    createMcFunction,
    addToLoad,
    addToTick
}