import Datapack   from './classes/Datapack';
import config     from './classes/Config';

const c        = config.loadConfig();
const datapack = new Datapack(c.name, c.description, c.namespace);

export default datapack;