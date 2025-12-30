import { world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

world.beforeEvents.playerInteractWithBlock.subscribe((event) => {
  const player = event.player;
  const block = event.block;

  if (!block || block.typeId !== "example:smithing_block") return;

  event.cancel = true; // cancel default behavior

  // Simple ChestUI-style form using buttons
  const ui = new ActionFormData()
    .title("Smithing Table")
    .body("Select an item to upgrade:")
    .button("⬜ Slot 1")  // you can replace text with icons later
    .button("⬜ Slot 2")
    .button("Upgrade")
    .button("Cancel");

  ui.show(player).then((selection) => {
    switch (selection.selection) {
      case 2: // Upgrade button
        // Dummy output - replace with your real upgrade logic
        player.runCommand("give @s minecraft:netherite_ingot 1");
        player.sendMessage("Item upgraded!");
        break;
      case 3: // Cancel button
        player.sendMessage("Cancelled.");
        break;
    }
  });
});
