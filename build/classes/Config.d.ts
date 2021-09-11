declare class Config {
    ns: string;
    dirPath: string;
    path: string;
    constructor();
    loadConfig(): any;
    setNamespace(ns: string): void;
    getNamespace(): string;
    setDirPath(dirPath: string): void;
    getDirPath(): string;
}
declare const config: Config;
export default config;
