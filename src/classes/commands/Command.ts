import Base from "../Base";
import MCFunction from "../MCFunction";

class Command extends Base {

    parent: MCFunction = null!;

    constructor(public commandName: string) {
        super();
        this.generatedData += `${commandName} `;
    }

}

export default Command;