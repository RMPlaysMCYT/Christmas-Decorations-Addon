import {world, system} from "@minecraft/server";

world.beforeEvents.worldInitialize.subscribe(event => {
    event.blockComponentRegistry.registerCustomComponent("christmas_pack:gift_interact", {
        onPlayerInteract: event => {
            const {player, block} = event;
            player.runCommand("say Hi");
        }
    })
});

console.log("Christmas Pack Loaded");