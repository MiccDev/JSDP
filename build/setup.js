"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var Datapack_1 = __importDefault(require("./classes/Datapack"));
var Config_1 = __importDefault(require("./classes/Config"));
var c = Config_1["default"].loadConfig();
var datapack = new Datapack_1["default"](c.name, c.description, c.namespace);
exports["default"] = datapack;
