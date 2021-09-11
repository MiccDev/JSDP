"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var MCFunction_1 = __importDefault(require("./classes/MCFunction"));
var Scoreboard_1 = __importDefault(require("./classes/commands/Scoreboard"));
var setup_1 = __importDefault(require("./setup"));
exports["default"] = {
    MCFunction: MCFunction_1["default"],
    datapack: setup_1["default"],
    scoreboard: Scoreboard_1["default"]
};
