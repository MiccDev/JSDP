import fs from "fs";
import path from "path";
import config from "./Config";
import datapack from "../setup";
import Base from "./Base";

type _MCFunction = {
    load?: boolean,
    tick?: boolean,
    name: string
}

class MCFunction extends Base {

    opts: _MCFunction = null!;
    name: string = null!;
    private func: Function = null!;

    /**
     * @param {Function} func 
     * @param {_McFunction} opts 
     */
    constructor(func: Function, opts: _MCFunction) {
        super();
        this.func = func;
        this.opts = opts;
        if(!opts.name) throw new Error(`MCFunction instance requires a name!`);
        this.name = opts.name;
        datapack.add(this);
    }

    eval() {
        let comps = this.func();
        for(let c in comps) {
            let comp: Base = comps[c];
            this.generatedData += `${comp.getGeneratedData()}\n`;
        }
        return this.generatedData;
    }

    create() {
        let file = path.resolve(config.getDirPath(), config.getNamespace(), 'functions', this.name);
        fs.writeFileSync(file, this.generatedData);
        
    }

}

export default class {
    constructor() {
        throw new Error(`Please use MCFunction.create() to make an McFunction`)
    }

    static create(func: Function, opts: _MCFunction) {
        return new MCFunction(func, opts);
    }
}

export {
    MCFunction
};