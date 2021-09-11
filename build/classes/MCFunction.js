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
exports.MCFunction = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var Config_1 = __importDefault(require("./Config"));
var setup_1 = __importDefault(require("../setup"));
var Base_1 = __importDefault(require("./Base"));
var MCFunction = /** @class */ (function (_super) {
    __extends(MCFunction, _super);
    /**
     * @param {Function} func
     * @param {_McFunction} opts
     */
    function MCFunction(func, opts) {
        var _this = _super.call(this) || this;
        _this.opts = null;
        _this.name = null;
        _this.func = null;
        _this.func = func;
        _this.opts = opts;
        if (!opts.name)
            throw new Error("MCFunction instance requires a name!");
        _this.name = opts.name;
        setup_1["default"].add(_this);
        return _this;
    }
    MCFunction.prototype.eval = function () {
        var comps = this.func();
        for (var c in comps) {
            var comp = comps[c];
            this.generatedData += comp.getGeneratedData() + "\n";
        }
        return this.generatedData;
    };
    MCFunction.prototype.create = function () {
        var file = path_1["default"].resolve(Config_1["default"].getDirPath(), Config_1["default"].getNamespace(), 'functions', this.name);
        fs_1["default"].writeFileSync(file, this.generatedData);
    };
    return MCFunction;
}(Base_1["default"]));
exports.MCFunction = MCFunction;
var default_1 = /** @class */ (function () {
    function default_1() {
        throw new Error("Please use MCFunction.create() to make an McFunction");
    }
    default_1.create = function (func, opts) {
        return new MCFunction(func, opts);
    };
    return default_1;
}());
exports["default"] = default_1;
