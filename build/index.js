"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.scoreboard = exports.datapack = exports.MCFunction = void 0;
var MCFunction_1 = __importDefault(require("./classes/MCFunction"));
exports.MCFunction = MCFunction_1["default"];
var Scoreboard_1 = __importDefault(require("./classes/commands/Scoreboard"));
exports.scoreboard = Scoreboard_1["default"];
var setup_1 = __importDefault(require("./setup"));
exports.datapack = setup_1["default"];
