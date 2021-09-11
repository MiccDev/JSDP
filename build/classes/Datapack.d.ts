import { MCFunction } from "./MCFunction";
declare class Datapack {
    name: string;
    description: string;
    datapack: string;
    namespace: string;
    private funcs;
    /**
     * Create a new Datapack
     * @param {string} name
     * @param {string} description
     * @param {string} namespace
     */
    constructor(name: string, description: string, namespace: string);
    private setup;
    save(): void;
    /**
     * Save a datapack to a path,
     * Like .minecraft
     * @param {String} path
     * @deprecated
     */
    add(func: MCFunction): void;
}
export default Datapack;
