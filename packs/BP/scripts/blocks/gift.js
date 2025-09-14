export class GreenGift {
    onPlayerInteract(event){
        const {player, block, dimension, entity} = event;
        player.runCommand("say Hi");
    }
}