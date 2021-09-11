"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var Config = /** @class */ (function () {
    function Config() {
        this.ns = "";
        this.dirPath = "";
        this.path = "";
        this.path = process.cwd();
    }
    Config.prototype.loadConfig = function () {
        var configPath = path_1["default"].resolve(this.path, 'jsdp-config.json');
        if (fs_1["default"].existsSync(configPath)) {
            var file = fs_1["default"].readFileSync(configPath, { encoding: 'utf-8' });
            var res = JSON.parse(file);
            if (res.namespace && res.name && res.description)
                return res;
            throw new Error("JsDatapack Config file does not contian a name, namespace or description!");
        }
        throw new Error("Path '" + this.path + "' does not contain a JsDatapack config file!");
    };
    Config.prototype.setNamespace = function (ns) {
        this.ns = ns;
    };
    Config.prototype.getNamespace = function () {
        return this.ns;
    };
    Config.prototype.setDirPath = function (dirPath) {
        this.dirPath = dirPath;
    };
    Config.prototype.getDirPath = function () {
        return this.dirPath;
    };
    return Config;
}());
var config = new Config();
exports["default"] = config;
