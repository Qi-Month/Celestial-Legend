import crafttweaker.api.ingredient.IIngredient;

<tag:items:forge:ingots>.asIIngredient().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, "Extra Power", 1, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:alexscaves:cloak_of_darkness>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:magic_damage>, "0", 1, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:chest>]);
<item:alexscaves:cloak_of_darkness>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, "Extra Power1", 0.5, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:chest>]);
<item:ad_astra:jet_suit>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor>, "9", 2, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:chest>]);
<item:aquamirae:abyssal_brigantine>.anyDamage().addGlobalAttributeModifier(<attribute:celestial_core:regen_rate>, "Extra Power2", 0.25, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:chest>]);
<item:aquamirae:abyssal_brigantine>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor>, "Extra Power3", 4, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:chest>]);
<item:aquamirae:abyssal_leggings>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:crit_rate>, "Extra Power4", 0.25, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_BASE, [<constant:minecraft:equipmentslot:legs>]);
<item:aquamirae:terrible_chestplate>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:crit_rate>, "Extra Power5", 0.5, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_BASE, [<constant:minecraft:equipmentslot:chest>]);
<item:aquamirae:terrible_chestplate>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:crit_damage>, "Extra Power6", 4, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_BASE, [<constant:minecraft:equipmentslot:chest>]);
<item:the_forgotten_dimensions:ice_vessel_helmet>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor>, "Extra Power7", 2, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:head>]);
<item:the_forgotten_dimensions:ice_vessel_helmet>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.luck>, "Extra Power7.5", 2, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:head>]);
<item:the_forgotten_dimensions:ice_vessel_chestplate>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor>, "Extra Power8", 3, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:chest>]);
<item:the_forgotten_dimensions:ice_vessel_chestplate>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.max_health>, "Extra Power8.5", 0.5, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:chest>]);
<item:the_forgotten_dimensions:ice_vessel_leggings>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor>, "Extra Power9", 4, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:legs>]);
<item:the_forgotten_dimensions:ice_vessel_leggings>.anyDamage().addGlobalAttributeModifier(<attribute:celestial_core:regen_rate>, "Extra Power9.5", 0.2, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:legs>]);
<item:the_forgotten_dimensions:ice_vessel_boots>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor>, "Extra Power10", 2, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:feet>]);
<item:the_forgotten_dimensions:ice_vessel_boots>.anyDamage().addGlobalAttributeModifier(
<attribute:l2damagetracker:damage_reduction>, "Extra Power10.5", -0.1, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:feet>]);
<item:the_forgotten_dimensions:heavy_skylite_armor_helmet>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:bow_strength>, "Extra Power11", 0.5, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:head>]);
<item:the_forgotten_dimensions:heavy_skylite_armor_chestplate>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, "Extra Power12", 0.5, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:chest>]);
<item:the_forgotten_dimensions:heavy_skylite_armor_leggings>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:magic_damage>, "Extra Power13", 0.5, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:legs>]);
<item:the_forgotten_dimensions:heavy_skylite_armor_boots>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:crit_damage> , "Extra Power14", 0.5, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:feet>]);
<item:cataclysm:gauntlet_of_bulwark>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage> , "Extra Power15", 11, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:offhand>]);
<item:cataclysm:gauntlet_of_bulwark>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_speed> , "Extra Power15.1", -0.5, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:cataclysm:gauntlet_of_bulwark>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.knockback_resistance> , "Extra Power15.2", 1.5, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:offhand>]);
<item:cataclysm:gauntlet_of_bulwark>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.luck> , "Extra Power15.3", 5, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:offhand>]);
<item:cataclysm:gauntlet_of_bulwark>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:damage_reduction> , "Extra Power15.4", -0.25, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:the_forgotten_dimensions:light_skylite_helmet>.anyDamage().addGlobalAttributeModifier(<attribute:forge:swim_speed>, "Extra Power16", 4, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:head>]);
<item:the_forgotten_dimensions:light_skylite_chestplate>.anyDamage().addGlobalAttributeModifier(<attribute:obscure_api:dodge>, "Extra Power17", 0.3, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:chest>]);
<item:the_forgotten_dimensions:light_skylite_chestplate>.anyDamage().addGlobalAttributeModifier(<attribute:forge:entity_reach>, "Extra Power17.5", 0.3, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:chest>]);
<item:the_forgotten_dimensions:light_skylite_leggings>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.movement_speed>, "Extra Power18", 0.5, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:legs>]);
<item:the_forgotten_dimensions:light_skylite_leggings>.anyDamage().addGlobalAttributeModifier(<attribute:forge:entity_gravity>, "Extra Power18.5", -0.7, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:legs>]);
<item:the_forgotten_dimensions:light_skylite_boots>.anyDamage().addGlobalAttributeModifier(<attribute:forge:step_height_addition> , "Extra Power19", 1.5, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:feet>]);
<item:the_forgotten_dimensions:forgotten_blade>.anyDamage().addGlobalAttributeModifier(<attribute:expanded_combat:heat_dmg> , "Extra 20", 15, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:forgotten_waraxe>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:crit_rate> , "Extra 21", 0.3, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_BASE, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:forgotten_waraxe>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:crit_rate> , "Extra 21.2", 0.3, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:forgotten_waraxe>.anyDamage().addGlobalAttributeModifier(<attribute:expanded_combat:heat_dmg> , "Extra 21.1", 10, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:blazing_sword>.anyDamage().addGlobalAttributeModifier(<attribute:expanded_combat:heat_dmg> , "Extra 22", 5, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:reinforced_metallic_snow_sword>.anyDamage().addGlobalAttributeModifier(<attribute:expanded_combat:cold_dmg> , "Extra 23", 7, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:true_ice_sword>.anyDamage().addGlobalAttributeModifier(<attribute:expanded_combat:cold_dmg> , "Extra 24", 13, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:permafrost_amalgamated_blade>.anyDamage().addGlobalAttributeModifier(<attribute:expanded_combat:cold_dmg> , "Extra 25", 2.5, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:permafrost_amalgamated_blade>.anyDamage().addGlobalAttributeModifier(<attribute:expanded_combat:heat_dmg> , "Extra 25.1", 8, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:permafrost_amalgamated_blade>.anyDamage().addGlobalAttributeModifier(<attribute:expanded_combat:soul_dmg>, "Extra 25.2", 6, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:permafrost_amalgamated_blade>.anyDamage().addGlobalAttributeModifier(<attribute:expanded_combat:void_dmg> , "Extra 25.3", 6, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:pigmy_knife>.anyDamage().addGlobalAttributeModifier(<attribute:expanded_combat:heat_dmg> , "Extra 26", 2, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:pigmy_god_slayer_longsword>.anyDamage().addGlobalAttributeModifier(<attribute:expanded_combat:heat_dmg> , "Extra 27", 20, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:ice_phoenix_bow>.anyDamage().clearTooltip();
<item:the_forgotten_dimensions:ice_phoenix_bow>.anyDamage().addTooltip("\u00A7b\u00A7l冰凰弓");
<item:the_forgotten_dimensions:ice_phoenix_bow>.anyDamage().addTooltip("\u00A7b\u00A7l—冰—");
<item:the_forgotten_dimensions:ice_phoenix_bow>.anyDamage().addTooltip("\u00A75\u00A7l—大师—");
<item:the_forgotten_dimensions:ice_phoenix_bow>.anyDamage().addTooltip("\u00A77原版箭：");
<item:the_forgotten_dimensions:ice_phoenix_bow>.anyDamage().addTooltip("\u00A77造成\u00A7b23点冰元素伤害");
<item:the_forgotten_dimensions:ice_phoenix_bow>.anyDamage().addTooltip("\u00A73元素箭：");
<item:the_forgotten_dimensions:ice_phoenix_bow>.anyDamage().addTooltip("\u00A77造成\u00A7b360~380点冰元素伤害");
<item:the_forgotten_dimensions:ice_phoenix_bow>.anyDamage().addTooltip("\u00A77由\u00A7b寒冰不死鸟\u00A77的羽毛制成");
<item:the_forgotten_dimensions:ice_phoenix_bow>.anyDamage().addTooltip("\u00A78（不太喜欢这个想法）");
<item:the_forgotten_dimensions:ice_phoenix_bow>.anyDamage().addTooltip("\u00A77这弓射出的原版箭被替换成\u00A7b寒冰不死鸟激光");
<item:the_forgotten_dimensions:ice_phoenix_bow>.anyDamage().addTooltip("\u00A7b寒冰不死鸟激光能够追踪目标");
<item:the_forgotten_dimensions:ice_phoenix_bow>.anyDamage().addTooltip(" ");
<item:the_forgotten_dimensions:ice_phoenix_bow>.anyDamage().addTooltip("\u00A77在主手时：");
<item:the_forgotten_dimensions:ice_phoenix_bow>.anyDamage().addTooltip("\u00A79+50% 箭矢伤害");
<item:the_forgotten_dimensions:ice_phoenix_bow>.anyDamage().addTooltip("\u00A79+12 投射物伤害");
<item:the_forgotten_dimensions:ice_phoenix_bow>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:bow_strength> , "Extra 28", 0.5, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:ice_phoenix_bow>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:bow_strength> , "Extra 29", 12, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:skylite_feather_launcher>.anyDamage().addTooltip("\u00A7d其弹药为鹰身女妖羽毛，右击即可一次发射2个，长按连射。");
<item:the_forgotten_dimensions:skylite_feather_launcher>.anyDamage().addTooltip("\u00A7d每个弹药都会在基础伤害上造成0.8点雷电伤害。");
<item:the_forgotten_dimensions:skylite_feather_launcher>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:bow_strength> , "Extra 30", 9, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:skylite_feather_launcher>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:bow_strength> , "Extra C30.1", 0.25, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:the_forgotten_dimensions:icyllium_blowgun>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:bow_strength> , "Extra 30", 15, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:blaze_staff>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:bow_strength> , "Extra 31", 3.5, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:blaze_staff>.anyDamage().addGlobalAttributeModifier(<attribute:expanded_combat:heat_dmg> , "Extra 31.5", 5, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:offhand>]);
<item:the_forgotten_dimensions:icicle_staff>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:bow_strength> , "Extra 32", 6, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:icicle_staff>.anyDamage().addGlobalAttributeModifier(<attribute:expanded_combat:cold_dmg> , "Extra 32.5", 5, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:offhand>]);
<item:the_forgotten_dimensions:ice_ray_cast>.anyDamage().clearTooltip();
<item:the_forgotten_dimensions:ice_ray_cast>.anyDamage().addTooltip("\u00A7b\u00A7l冰霜法杖");
<item:the_forgotten_dimensions:ice_ray_cast>.anyDamage().addTooltip("\u00A7b\u00A7l—冰—");
<item:the_forgotten_dimensions:ice_ray_cast>.anyDamage().addTooltip("\u00A77左击会发射一道具有穿透的短距离射线");
<item:the_forgotten_dimensions:ice_ray_cast>.anyDamage().addTooltip("\u00A77对生物造成\u00A7b冰霜伤害\u00A77并降低生物\u00A7b冰霜抗性");
<item:the_forgotten_dimensions:ice_ray_cast>.anyDamage().addTooltip("   ");
<item:the_forgotten_dimensions:ice_ray_cast>.anyDamage().addTooltip("\u00A77在主手时：");
<item:the_forgotten_dimensions:ice_ray_cast>.anyDamage().addTooltip("\u00A72 2 攻击伤害");
<item:the_forgotten_dimensions:ice_ray_cast>.anyDamage().addTooltip("\u00A72 1.6 攻击速度");
<item:the_forgotten_dimensions:ice_ray_cast>.anyDamage().addTooltip("\u00A79+6 冰霜伤害");
<item:the_forgotten_dimensions:icicle_staff>.anyDamage().addGlobalAttributeModifier(<attribute:expanded_combat:cold_dmg> , "Extra 33", 6, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:lightning_bolt>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:bow_strength> , "Extra 33", 1, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:lightning_bolt>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:bow_strength> , "Extra 33.5", 5, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:baldr_rapier>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:damage_reduction> , "Extra 34", -0.25, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:baldr_rapier>.anyDamage().addGlobalAttributeModifier(<attribute:celestial_core:regen_rate> , "Extra 34.5", 0.25, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:arkhalis_blade>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage> , "Extra 35", 6, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:arkhalis_blade>.anyDamage().addGlobalAttributeModifier(<attribute:expanded_combat:cold_dmg> , "Extra 35.5", 25, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:arkhalis_blade>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:crit_damage> , "Extra 35.6", 1, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:arkhalis_blade>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:crit_damage> , "Extra 35.7", 1, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_BASE, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:baldr_rapier>.anyDamage().addGlobalAttributeModifier(<attribute:ars_nouveau:ars_nouveau.perk.warding> , "Extra 35.8", 1, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:skylite_scythe>.anyDamage().addGlobalAttributeModifier(<attribute:expanded_combat:soul_dmg> , "Extra 36", 12, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:elemental_aspect>.anyDamage().addGlobalAttributeModifier(<attribute:expanded_combat:heat_dmg> , "Extra 36.1", 8, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:elemental_aspect>.anyDamage().addGlobalAttributeModifier(<attribute:expanded_combat:soul_dmg> , "Extra 36.2", 8, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:elemental_aspect>.anyDamage().addGlobalAttributeModifier(<attribute:expanded_combat:cold_dmg> , "Extra 36.3", 8, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:elemental_aspect>.anyDamage().addGlobalAttributeModifier(<attribute:expanded_combat:void_dmg> , "Extra 36.4", 8, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:elemental_aspect>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:magic_damage> , "Extra 36.5", 8, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:elemental_aspect>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:explosion_damage> , "Extra 36.6", 8, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:elemental_aspect>.anyDamage().addGlobalAttributeModifier(<attribute:forge:entity_reach> , "Extra 36.7", 4, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:void_blade>.anyDamage().addGlobalAttributeModifier(<attribute:expanded_combat:void_dmg> , "Extra 37", 25, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:permafrost_claws>.anyDamage().addGlobalAttributeModifier(<attribute:expanded_combat:cold_dmg> , "Extra 38", 15, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);

<item:expanded_combat:leather_quiver>.addGlobalAttributeModifier(<attribute:l2damagetracker:bow_strength> , "Extra 39", 0.15, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:expanded_combat:rabbit_leather_quiver>.addGlobalAttributeModifier(<attribute:l2damagetracker:bow_strength> , "Extra 40", 0.15, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:expanded_combat:iron_quiver>.addGlobalAttributeModifier(<attribute:l2damagetracker:bow_strength> , "Extra 41", 0.3, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:expanded_combat:iron_quiver>.addGlobalAttributeModifier(<attribute:minecraft:generic.movement_speed> , "Extra 41.5", -0.10, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:expanded_combat:diamond_quiver>.addGlobalAttributeModifier(<attribute:l2damagetracker:bow_strength> , "Extra 42", 0.35, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:expanded_combat:diamond_quiver>.addGlobalAttributeModifier(<attribute:minecraft:generic.armor_toughness> , "Extra 42.1", 2, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:offhand>]);
<item:expanded_combat:diamond_quiver>.addGlobalAttributeModifier(<attribute:minecraft:generic.armor> , "Extra 42.4", 3, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:offhand>]);
<item:expanded_combat:netherite_quiver>.addGlobalAttributeModifier(<attribute:l2damagetracker:bow_strength> , "Extra 43", 0.35, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:expanded_combat:netherite_quiver>.addGlobalAttributeModifier(<attribute:l2damagetracker:damage_reduction> , "Extra 43.1", -0.1, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:expanded_combat:netherite_quiver>.addGlobalAttributeModifier(<attribute:l2damagetracker:crit_damage> , "Extra 43.4", 0.5, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:expanded_combat:netherite_quiver>.addGlobalAttributeModifier(<attribute:l2damagetracker:crit_rate> , "Extra 43.4", 0.2, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:expanded_combat:gold_quiver>.addGlobalAttributeModifier(<attribute:ars_nouveau:ars_nouveau.perk.spell_damage> , "Extra 43", 1, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:expanded_combat:gold_quiver>.addGlobalAttributeModifier(<attribute:ars_nouveau:ars_nouveau.perk.mana_regen> , "Extra 43.1", 4, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:offhand>]);
<item:expanded_combat:gold_quiver>.addGlobalAttributeModifier(<attribute:ars_nouveau:ars_nouveau.perk.max_mana> , "Extra 43.2", 1, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:expanded_combat:gold_quiver>.addGlobalAttributeModifier(<attribute:l2damagetracker:magic_damage> , "Extra 43.3", 0.5, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:ec_lec_plugin:ignitium_quiver>.addGlobalAttributeModifier(<attribute:l2damagetracker:bow_strength> , "Extra 44", 0.5, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:ec_lec_plugin:ignitium_quiver>.addGlobalAttributeModifier(<attribute:celestial_core:regen_rate> , "Extra 44.1", 0.2, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:ec_lec_plugin:ignitium_quiver>.addGlobalAttributeModifier(<attribute:l2damagetracker:fire_damage> , "Extra 44.2", 1, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:ec_lec_plugin:ignitium_quiver>.addGlobalAttributeModifier(<attribute:l2damagetracker:damage_reduction> , "Extra 44.3", -0.15, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:ec_lec_plugin:witherite_quiver>.addGlobalAttributeModifier(<attribute:l2damagetracker:bow_strength> , "Extra 45", 0.4, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:ec_lec_plugin:witherite_quiver>.addGlobalAttributeModifier(<attribute:l2damagetracker:bow_strength> , "Extra 45.1", 0.2, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:ec_lec_plugin:witherite_quiver>.addGlobalAttributeModifier(<attribute:celestial_core:arrow_speed> , "Extra 45.2", 1, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:ec_lec_plugin:witherite_quiver>.addGlobalAttributeModifier(<attribute:l2damagetracker:magic_damage> , "Extra 45.3", 1, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:ec_lec_plugin:witherite_quiver>.addGlobalAttributeModifier(<attribute:l2damagetracker:explosion_damage> , "Extra 45.4", 1, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:aquamirae:maze_rose>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:crit_rate> , "Extra 46", 0.15, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_BASE, [<constant:minecraft:equipmentslot:offhand>]);
<item:aquamirae:poisoned_chakra>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:crit_rate> , "Extra 47", 0.1, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_BASE, [<constant:minecraft:equipmentslot:offhand>]);
<item:aquamirae:three_bolt_leggings>.anyDamage().addGlobalAttributeModifier(<attribute:forge:swim_speed> , "Extra 48", 1, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_BASE, [<constant:minecraft:equipmentslot:legs>]);
<item:immersiveengineering:glider>.anyDamage().addGlobalAttributeModifier(<attribute:forge:swim_speed> , "Extra 49", 0.5, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:chest>]);
<item:minecraft:elytra>.anyDamage().addGlobalAttributeModifier(<attribute:forge:entity_gravity> , "Extra 50", -0.4, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:chest>]);
<item:alexsmobs:tarantula_hawk_elytra>.anyDamage().addGlobalAttributeModifier(<attribute:forge:entity_gravity> , "Extra 51", -0.4, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:chest>]);
<item:alexsmobs:tarantula_hawk_elytra>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:damage_reduction> , "Extra 51.2", -0.25, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:chest>]);
<item:cataclysm:ignitium_elytra_chestplate>.anyDamage().addGlobalAttributeModifier(<attribute:forge:entity_gravity> , "Extra 52", -0.4, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:chest>]);
<item:twilightforest:knightmetal_shield>.anyDamage().addGlobalAttributeModifier(<attribute:l2weaponry:shield_defense> , "Extra 53", 100, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:offhand>]);
<item:minecraft:shield>.anyDamage().addGlobalAttributeModifier(<attribute:l2weaponry:shield_defense> , "Extra 54", 25, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:offhand>]);
<item:expanded_combat:shield_1>.anyDamage().addGlobalAttributeModifier(<attribute:l2weaponry:shield_defense> , "Extra 55", 50, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:offhand>]);
<item:expanded_combat:shield_2>.anyDamage().addGlobalAttributeModifier(<attribute:l2weaponry:shield_defense> , "Extra 56", 35, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:offhand>]);
<item:expanded_combat:shield_2>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.movement_speed> , "Extra 56.1", 0.5, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_BASE, [<constant:minecraft:equipmentslot:offhand>]);
<item:expanded_combat:shield_3>.anyDamage().addGlobalAttributeModifier(<attribute:l2weaponry:shield_defense> , "Extra 57", 160, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:offhand>]);
<item:expanded_combat:shield_4>.anyDamage().addGlobalAttributeModifier(<attribute:l2weaponry:shield_defense> , "Extra 58", 150, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:offhand>]);
<item:expanded_combat:shield_4>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:damage_reduction> , "Extra 58.1", -0.2, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:offhand>]);
<item:immersiveengineering:shield>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:damage_absorption> , "Extra 58", 1, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:offhand>]);
<item:alexsmobs:shield_of_the_deep>.anyDamage().addGlobalAttributeModifier(<attribute:forge:swim_speed> , "Extra 58.1", 1, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:alexsmobs:shield_of_the_deep>.anyDamage().addGlobalAttributeModifier(<attribute:forge:swim_speed> , "Extra 59", 1, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:cataclysm:bulwark_of_the_flame>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:damage_reduction> , "Extra 60", -0.15, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:cataclysm:bulwark_of_the_flame>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:damage_absorption> , "Extra 60.1", 1.5, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:offhand>]);
<item:blue_skies:moonstone_shield>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:damage_absorption> , "Extra 61", 2, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:offhand>]);
<item:alexscaves:resistor_shield>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:damage_absorption> , "Extra 62", 4, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:offhand>]);
<item:alexscaves:resistor_shield>.anyDamage().addGlobalAttributeModifier(<attribute:obscure_api:magic_damage> , "Extra 62.1", 12, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:offhand>]);
<item:artifacts:umbrella>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_speed> , "Extra 63", 0.3, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:ars_nouveau:enchanters_shield>.anyDamage().addGlobalAttributeModifier(<attribute:ars_nouveau:ars_nouveau.perk.max_mana> , "Extra 64", 0.5, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:ars_nouveau:enchanters_shield>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:damage_absorption> , "Extra 64.1", 1, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:offhand>]);
<item:ars_nouveau:enchanters_shield>.anyDamage().addGlobalAttributeModifier(<attribute:ars_nouveau:ars_nouveau.perk.spell_damage> , "Extra 64.2", 0.25, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:ars_nouveau:enchanters_shield>.anyDamage().addGlobalAttributeModifier(<attribute:celestial_core:regen_rate> , "Extra 64.3", 0.2, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:blue_skies:spike_shield>.anyDamage().addGlobalAttributeModifier(<attribute:expanded_combat:soul_dmg> , "Extra 65", 6, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:blue_skies:spike_shield>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:crit_rate> , "Extra 65.5", 0.2, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_BASE, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:lightning_bolt>.anyDamage().addGlobalAttributeModifier(<attribute:obscure_api:magic_damage> , "Extra 66", 12, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:offhand>]);
<item:the_forgotten_dimensions:lightning_bolt>.anyDamage().addGlobalAttributeModifier(<attribute:obscure_api:magic_damage> , "Extra 66.1", 12, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:skylite_bow>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:bow_strength> , "Extra 67", 0.5, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_BASE, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:skylite_bow>.anyDamage().addGlobalAttributeModifier(<attribute:celestial_core:arrow_speed> , "Extra 67.1", 1, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_BASE, [<constant:minecraft:equipmentslot:mainhand>]);
<item:twilightforest:ice_sword>.anyDamage().addGlobalAttributeModifier(<attribute:expanded_combat:cold_dmg> , "Extra 68", 7.5, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:icyllium_sword>.anyDamage().addGlobalAttributeModifier(<attribute:expanded_combat:cold_dmg> , "Extra 69", 4, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:the_forgotten_dimensions:icyllium_waraxe>.anyDamage().addGlobalAttributeModifier(<attribute:expanded_combat:cold_dmg> , "Extra 70", 15, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:minecraft:trident>.anyDamage().addGlobalAttributeModifier(<attribute:forge:swim_speed> , "Extra 71", 0.5, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:cataclysm:coral_spear>.anyDamage().addGlobalAttributeModifier(<attribute:forge:swim_speed> , "Extra 72", 1.25, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:cataclysm:coral_bardiche>.anyDamage().addGlobalAttributeModifier(<attribute:forge:swim_speed> , "Extra 73", 2, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
<item:cataclysm:coral_bardiche>.anyDamage().addGlobalAttributeModifier(<attribute:obscure_api:magic_damage> , "Extra 73.1", 10, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:offhand>]);
<item:create:copper_diving_boots>.anyDamage().addGlobalAttributeModifier(<attribute:forge:swim_speed> , "Extra 74", 1.5, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:feet>]);
<item:create:netherite_diving_helmet>.anyDamage().addGlobalAttributeModifier(<attribute:forge:swim_speed> , "Extra 74.2", 2.5, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:feet>]);
<item:create:copper_backtank>.anyDamage().addGlobalAttributeModifier(<attribute:celestial_core:regen_rate> , "Extra 75", 0.5, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:chest>]);
<item:create:netherite_backtank>.anyDamage().addGlobalAttributeModifier(<attribute:celestial_core:regen_rate> , "Extra 75.2", 0.75, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:chest>]);
<item:create:copper_diving_helmet>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:damage_absorption> , "Extra 76", 1, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:head>]);
<item:create:netherite_diving_boots>.anyDamage().addGlobalAttributeModifier(<attribute:l2damagetracker:damage_absorption> , "Extra 76.2", 2, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:head>]);