import MCFunction from "./classes/MCFunction";
declare const _default: {
    MCFunction: typeof MCFunction;
    datapack: import("./classes/Datapack").default;
    scoreboard: {
        objectives: {
            add: (objective: string, criteria: string, displayName: string) => import("./classes/commands/Scoreboard").Scoreboard;
            list: () => void;
        };
    };
};
export default _default;
