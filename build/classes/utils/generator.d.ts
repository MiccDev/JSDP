declare function createMainFolder(name: string, description: string): string;
declare function save(name: string): Error;
declare function saveTo(path: string, newPath: string): void;
declare function delDatapack(name: string): void;
declare function createMcFunction(namespace: string, dir: string, data: string): void;
declare function addToLoad(namespace: string, name: string): void;
declare function addToTick(namespace: string, name: string): void;
declare const _default: {
    createMainFolder: typeof createMainFolder;
    save: typeof save;
    saveTo: typeof saveTo;
    delDatapack: typeof delDatapack;
    createMcFunction: typeof createMcFunction;
    addToLoad: typeof addToLoad;
    addToTick: typeof addToTick;
};
export default _default;
