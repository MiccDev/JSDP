import INBTText from "../../interfaces/INBTText";
import { toColor } from "../../utils";
import Command from "./Command";

import {
    LiteralUnion,
    CRITERIA_TYPES
} from "../../types/index";

interface IDisplayName {
    extra: INBTText[]
}

type _Scoreboard = {
    add?: boolean,
    objective?: string,
    criteria?: string,
    displayName?: string
}


class Scoreboard extends Command {

    private opts: _Scoreboard;

    constructor(opts: _Scoreboard) {
        super("scoreboard");
        this.opts = opts;
    }

    static createScoreboard(objective: string, criteria: LiteralUnion<CRITERIA_TYPES>, displayName?: string): Scoreboard {
        return new Scoreboard({
            
        });
    }

    getGeneratedData(): string {
        return "";
    }

}

const scoreboard = {
    objectives: {
        add: function(objective: string, criteria: string, displayName: string): Scoreboard {
            return new Scoreboard({
                add: true,
                objective: objective,
                criteria: criteria,
                displayName: displayName ? displayName : ""
            });
        },
        list: function() {
             
        }
    }
}

export default scoreboard;
export {
    Scoreboard
}