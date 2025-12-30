import { world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import { world } from "@minecraft/server";

world.afterEvents.worldLoad.subscribe(() => {
  world.sendMessage("World has loaded");
  world.beforeEvents.playerInteractWithBlock.subscribe((event) => {
    const player = event.player;
    const block = event.block;

    if (!block) return;
    if (block.typeId !== "example:smithing_block") return;

    event.cancel = true;

    const ui = new ActionFormData()
      .title("Smithing Table")
      .body("Choose an action")
      .button("Upgrade Item")
      .button("Exit");

    ui.show(player);
  });
});

