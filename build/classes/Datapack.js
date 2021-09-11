"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var Config_1 = __importDefault(require("./Config"));
var generator_1 = __importDefault(require("./utils/generator"));
var Datapack = /** @class */ (function () {
    /**
     * Create a new Datapack
     * @param {string} name
     * @param {string} description
     * @param {string} namespace
     */
    function Datapack(name, description, namespace) {
        this.name = "";
        this.description = "";
        this.datapack = "";
        this.namespace = "";
        this.funcs = [];
        this.name = name;
        this.description = description;
        this.namespace = namespace.toLowerCase();
        this.setup();
    }
    Datapack.prototype.setup = function () {
        this.datapack = generator_1["default"].createMainFolder(this.namespace, this.description);
        Config_1["default"].setDirPath(this.datapack);
    };
    Datapack.prototype.save = function () {
        for (var f in this.funcs) {
            var func = this.funcs[f];
            if (func.opts.load)
                generator_1["default"].addToLoad(this.namespace, func.name);
            if (func.opts.tick)
                generator_1["default"].addToTick(this.namespace, func.name);
            generator_1["default"].createMcFunction(this.namespace, func.name, func.eval());
        }
        generator_1["default"].save(this.name);
    };
    /**
     * Save a datapack to a path,
     * Like .minecraft
     * @param {String} path
     * @deprecated
     */
    // saveLocation(currentPath, newPath) {
    //     while(utils.exists(currentPath + "\\" + this.name + "-datapack.zip")) {
    //         if(utils.exists(currentPath + "\\" + this.name + "-datapack.zip")) {
    //             const cp = path.join(currentPath, this.name + "-datapack.zip");
    //             const np = path.join(newPath, this.name + "-datapack.zip");
    //             try {
    //                 fs.renameSync(cp, np);
    //             } catch(err) {
    //                 throw err;
    //             }
    //             break;
    //         }
    //     }
    // }
    Datapack.prototype.add = function (func) {
        this.funcs.push(func);
    };
    return Datapack;
}());
exports["default"] = Datapack;
