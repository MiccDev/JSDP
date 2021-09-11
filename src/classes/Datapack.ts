import { MCFunction } from "./MCFunction";
import config from "./Config";
import utils from "./utils/generator";

class Datapack {

    name: string = "";
    description: string = "";
    datapack: string = "";
    namespace: string = "";

    private funcs: MCFunction[] = [];

    /**
     * Create a new Datapack
     * @param {string} name 
     * @param {string} description 
     * @param {string} namespace
     */
    constructor(name: string, description: string, namespace: string) {
        this.name = name;
        this.description = description;
        this.namespace = namespace.toLowerCase();
        this.setup();
    }

    private setup() {
        this.datapack = utils.createMainFolder(this.namespace, this.description);
        config.setDirPath(this.datapack);
    }

    save() {
        for(let f in this.funcs) {
            let func = this.funcs[f];
            if(func.opts.load) utils.addToLoad(this.namespace, func.name);
            if(func.opts.tick) utils.addToTick(this.namespace, func.name);
            utils.createMcFunction(this.namespace, func.name, func.eval());
        } 
        utils.save(this.name);
    }

    /**
     * Save a datapack to a path,
     * Like .minecraft
     * @param {String} path 
     * @deprecated
     */
    // saveLocation(currentPath, newPath) {
        
    //     while(utils.exists(currentPath + "\\" + this.name + "-datapack.zip")) {
    //         if(utils.exists(currentPath + "\\" + this.name + "-datapack.zip")) {
    //             const cp = path.join(currentPath, this.name + "-datapack.zip");
    //             const np = path.join(newPath, this.name + "-datapack.zip");

    //             try {
    //                 fs.renameSync(cp, np);
    //             } catch(err) {
    //                 throw err;
    //             }
    //             break;
    //         }
    //     }
    // }

    add(func: MCFunction) {
        this.funcs.push(func);
    }

}

export default Datapack;