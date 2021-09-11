const { MCFunction, scoreboard } = require("../src/index");
const { datapack } = require("../src/index");

MCFunction.create(() => {
    let score = scoreboard.objectives.add("Hello", "dummy", "&3Hello World &8Yes");

    return { score };
}, {
    tick: true,
    name: "test_tick"
});

datapack.save();