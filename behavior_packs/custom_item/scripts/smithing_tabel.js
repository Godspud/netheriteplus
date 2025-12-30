import { world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

world.beforeEvents.playerInteractWithBlock.subscribe((event) => {
  const player = event.player;
  const block = event.block;

  if (!block) return;
  if (block.typeId !== "netheriteplus:smithing_table") return;

  event.cancel = true;

  const ui = new ActionFormData()
    .title("Smithing Table")
    .body("Choose an action")
    .button("Upgrade")
    .button("Cancel");

  ui.show(player);
});
