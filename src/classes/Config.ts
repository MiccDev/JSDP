import path from "path";
import fs from "fs";

class Config {

    ns = "";
    dirPath = "";
    path = "";

    constructor() {
        this.path = process.cwd();
    }

    loadConfig() {
        let configPath = path.resolve(this.path, 'jsdp-config.json');
        if(fs.existsSync(configPath)) {
            let file = fs.readFileSync(configPath, {encoding: 'utf-8'});
            let res = JSON.parse(file);
            if(res.namespace && res.name && res.description) return res;
            throw new Error(`JsDatapack Config file does not contian a name, namespace or description!`);
        }
        throw new Error(`Path '${this.path}' does not contain a JsDatapack config file!`);
    }

    setNamespace(ns: string) {
        this.ns = ns;
    }

    getNamespace(): string {
        return this.ns;
    }

    setDirPath(dirPath: string) {
        this.dirPath = dirPath;
    }

    getDirPath(): string {
        return this.dirPath;
    }

}

const config = new Config();

export default config;