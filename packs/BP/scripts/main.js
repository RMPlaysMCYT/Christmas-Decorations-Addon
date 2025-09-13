import {world, system} from "@minecraft/server";

world.beforeEvents.worldInitialize.subscribe((event) => {
    event.blockComponentRegistry.registeCustomrComponent("christmas_pack:gift_interact", {
        onPlayerInteract: event => {
            const {player, block} = event;
            player.runCommand('say Wow you touch the gift')
        }
    });
});

console.log("Christmas Pack Loaded");