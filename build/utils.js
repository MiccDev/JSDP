"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.path = exports.toColor = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var dpPath = path_1["default"].join("C:", "JSDP-Temp", "datapacks");
exports.path = dpPath;
function init() {
    var tempDp = path_1["default"].join("C:", "JSDP-Temp");
    if (!fs_1["default"].existsSync(tempDp)) {
        fs_1["default"].mkdirSync(tempDp);
        if (!fs_1["default"].existsSync(dpPath))
            fs_1["default"].mkdirSync(dpPath);
    }
}
init();
var ColorCodes = {
    "&0": "black",
    "&1": "dark_blue",
    "&2": "dark_green",
    "&3": "dark_aqua",
    "&4": "dark_red",
    "&5": "dark_purple",
    "&6": "gold",
    "&7": "grey",
    "&8": "dark_grey",
    "&9": "green",
    "&a": "aqua",
    "&b": "red",
    "&c": "red",
    "&d": "light_purple",
    "&e": "yellow",
    "&f": "white"
};
var SecondaryCodes = {
    "&k": "obfuscated",
    "&l": "bold",
    "&m": "strike",
    "&n": "underline",
    "&o": "italic"
};
var ResetCodes = {
    "&r": true
};
function toColor(text) {
    var place = 0;
    var output = { "text": "", "color": "white" };
    var lastNode = output;
    var skipOne = false;
    for (var charKey in text) {
        if (skipOne == true) {
            skipOne = false;
            continue;
        }
        var char = text[charKey];
        var charAndNext = text[charKey] + text[Number(charKey) + 1];
        if (ColorCodes[charAndNext] != undefined || ResetCodes[charAndNext] != undefined) {
            var nextNode = { "text": "" };
            nextNode.color = ColorCodes[charAndNext] || "white";
            lastNode.extra = [nextNode];
            lastNode = nextNode;
            skipOne = true;
        }
        else {
            if (SecondaryCodes[charAndNext] != undefined) {
                lastNode[SecondaryCodes[charAndNext]] = true;
                skipOne = true;
            }
            else {
                lastNode.text += char;
            }
        }
    }
    return output;
}
exports.toColor = toColor;
