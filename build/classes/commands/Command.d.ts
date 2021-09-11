import Base from "../Base";
import MCFunction from "../MCFunction";
declare class Command extends Base {
    commandName: string;
    parent: MCFunction;
    constructor(commandName: string);
}
export default Command;
