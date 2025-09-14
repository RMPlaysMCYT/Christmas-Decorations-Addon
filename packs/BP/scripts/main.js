/// CORE MODULE
import {world, system} from "@minecraft/server";

///LOCAL MODULE
import { GreenGift, OrangeGift } from "./blocks/gift";


world.beforeEvents.worldInitialize.subscribe(event => {
    event.blockComponentRegistry.registerCustomComponent("christmas_pack:gift_interact", {
        onPlayerInteract: event => {
            const {player, block} = event;
            player.runCommand("say Hi");
        },
        onStepOn: event => {
            const { block, dimension } = event;
            const blockLocationes = block.location;
            const blockLocationes2 = `${blockLocationes.x} ${blockLocationes.y} ${blockLocationes.z}`;
            dimension.runCommand(`execute positioned ${blockLocationes2} run say "Keep Off The Gift"`);
        }
    })
    event.blockComponentRegistry.registerCustomComponent("christmas_pack:gift_green_interact", new GreenGift());
    event.blockComponentRegistry.registerCustomComponent("christmas_pack:gift_orange_interact", new OrangeGift());
});

console.log("Christmas Pack Loaded");