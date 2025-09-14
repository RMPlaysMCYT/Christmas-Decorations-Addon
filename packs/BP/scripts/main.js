/// CORE MODULE
import {world, system} from "@minecraft/server";

///LOCAL MODULE
import { GreenGift } from "./blocks/gift";


world.beforeEvents.worldInitialize.subscribe(event => {
    event.blockComponentRegistry.registerCustomComponent("christmas_pack:gift_interact", {
        onPlayerInteract: event => {
            const {player, block} = event;
            player.runCommand("say Hi");
        },
        onStepOn: event => {
            const {player, block} = event;
            player.runCommand("say Keep Off The Gifts!!");
        }
    })
    event.blockComponentRegistry.registerCustomComponent("christmas_pack:gift_green_interact", new GreenGift());
});

console.log("Christmas Pack Loaded");