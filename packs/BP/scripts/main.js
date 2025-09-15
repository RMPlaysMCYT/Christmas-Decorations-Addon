/// CORE MODULE
import {world, system} from "@minecraft/server";

///LOCAL MODULE
import { GreenGift, OrangeGift } from "./blocks/gift";


world.beforeEvents.worldInitialize.subscribe(event => {
    event.blockComponentRegistry.registerCustomComponent("christmas_pack:gift_interact", {
        onPlayerInteract: event => {
            const {player, block, dimension} = event;
            const {x, y, z} = block.center();
            const blockLocationes = `${x} ${y} ${z}`;
            event.dimension.runCommand("say Suprise!");
            dimension.runCommand(`loot spawn ${blockLocationes} loot "gift1"`);
            dimension.runCommand(`setblock ${blockLocationes} air [] destroy`);
        }
        // ,
        // onStepOn: event => {
        //     const { block, player, entity } = event;
        //     const blockLocationes = block.location;
        //     const blockLocationes2 = `${blockLocationes.x} ${blockLocationes.y} ${blockLocationes.z}`;
        //     entity.runCommand("say Block Location:" + blockLocationes2);
        // }
    })
    event.blockComponentRegistry.registerCustomComponent("christmas_pack:gift_green_interact", new GreenGift());
    event.blockComponentRegistry.registerCustomComponent("christmas_pack:gift_orange_interact", new OrangeGift());
});

console.log("Christmas Pack Loaded");
console.warn("Christmas Pack Loaded");