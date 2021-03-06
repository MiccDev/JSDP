"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Scoreboard = void 0;
var Command_1 = __importDefault(require("./Command"));
var Scoreboard = /** @class */ (function (_super) {
    __extends(Scoreboard, _super);
    function Scoreboard(opts) {
        var _this = _super.call(this, "scoreboard") || this;
        _this.opts = opts;
        return _this;
    }
    Scoreboard.createScoreboard = function (objective, criteria, displayName) {
        return new Scoreboard({});
    };
    Scoreboard.prototype.getGeneratedData = function () {
        return "";
    };
    return Scoreboard;
}(Command_1["default"]));
exports.Scoreboard = Scoreboard;
var scoreboard = {
    objectives: {
        add: function (objective, criteria, displayName) {
            return new Scoreboard({
                add: true,
                objective: objective,
                criteria: criteria,
                displayName: displayName ? displayName : ""
            });
        },
        list: function () {
        }
    }
};
exports["default"] = scoreboard;
