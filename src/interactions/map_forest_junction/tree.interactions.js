import { displayDialogue } from "../../utils";
import { interactionHandler } from "../handler.interactions";

const treeDialogue = [
    'You see a mix of vibrant colors—daisies, tulips, and a few flowers you can\'t quite recognize. A small bee buzzes lazily between the blooms.\nThere\'s something almost magical about the way these flowers grow…'
]

export const interactionWithFlowers = (player, k, map) => {
    interactionHandler(player, 'flowers', k, () => {
        player.isInDialog = true;
        displayDialogue({
            k,
            player,
            characterName: 'flowers',
            text: treeDialogue,
            onDisplayEnd: () => {
                player.isInDialog = false;

            },
        });
    });
};