export class GreenGift {
    onPlayerInteract(event){
        const {player, block, dimension, entity} = event;
        const {x, y, z} = block.center();
        const blockLocationes = `${x} ${y} ${z}`;
        player.runCommand("say Suprise!!");
        dimension.runCommand(`loot spawn ${blockLocationes} loot "gift2"`);
        dimension.runCommand(`setblock ${blockLocationes} air [] destroy`);
    }
};

export class OrangeGift {
    onPlayerInteract(event){
        const {player, block, dimension, entity} = event;
        const {x, y, z} = block.center();
        const blockLocationes = `${x} ${y} ${z}`;
        player.runCommand("say Surprise!!");
        dimension.runCommand(`loot spawn ${blockLocationes} loot "gift3"`);
        dimension.runCommand(`setblock ${blockLocationes} air [] destroy`);
    }
}