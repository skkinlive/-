/**
 * Custom TRPG System for Foundry VTT
 * 자작 TRPG 시스템 - 서열 기반 판정 시스템
 */

// Import document classes
import { CustomActor } from "./documents/actor.mjs";
import { CustomItem } from "./documents/item.mjs";

// Import sheet classes
import { CustomActorSheet } from "./sheets/actor-sheet.mjs";
import { CustomItemSheet } from "./sheets/item-sheet.mjs";

// Import helper classes
import { preloadHandlebarsTemplates } from "./helpers/templates.mjs";
import { registerHandlebarsHelpers } from "./helpers/handlebars.mjs";

/* -------------------------------------------- */
/*  Init Hook                                   */
/* -------------------------------------------- */

Hooks.once('init', async function() {
  console.log('Custom TRPG | 시스템 초기화 중...');

  // Add custom constants
  game.customtrpg = {
    CustomActor,
    CustomItem
  };

  // Define custom Document classes
  CONFIG.Actor.documentClass = CustomActor;
  CONFIG.Item.documentClass = CustomItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("custom-trpg", CustomActorSheet, {
    makeDefault: true,
    label: "CUSTOM.SheetClassCharacter"
  });

  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("custom-trpg", CustomItemSheet, {
    makeDefault: true,
    label: "CUSTOM.SheetClassItem"
  });

  // Register Handlebars helpers
  registerHandlebarsHelpers();

  // Preload Handlebars templates
  await preloadHandlebarsTemplates();

  console.log('Custom TRPG | 시스템 초기화 완료');
});

/* -------------------------------------------- */
/*  Ready Hook                                  */
/* -------------------------------------------- */

Hooks.once('ready', async function() {
  console.log('Custom TRPG | 시스템 준비 완료');
});

/* -------------------------------------------- */
/*  Dice Rolling Hooks                          */
/* -------------------------------------------- */

Hooks.on('renderChatMessage', (message, html, data) => {
  // 채팅 메시지 커스터마이징
});
