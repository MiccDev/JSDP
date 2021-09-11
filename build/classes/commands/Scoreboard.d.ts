import Command from "./Command";
import { LiteralUnion, CRITERIA_TYPES } from "../../types/index";
declare type _Scoreboard = {
    add?: boolean;
    objective?: string;
    criteria?: string;
    displayName?: string;
};
declare class Scoreboard extends Command {
    private opts;
    constructor(opts: _Scoreboard);
    static createScoreboard(objective: string, criteria: LiteralUnion<CRITERIA_TYPES>, displayName?: string): Scoreboard;
    getGeneratedData(): string;
}
declare const scoreboard: {
    objectives: {
        add: (objective: string, criteria: string, displayName: string) => Scoreboard;
        list: () => void;
    };
};
export default scoreboard;
export { Scoreboard };
