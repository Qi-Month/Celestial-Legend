craftingTable.remove(<item:the_forgotten_dimensions:permafrost_amalgamated_blade>);
craftingTable.remove(<item:minecraft:beacon>);
craftingTable.remove(<item:rats:marbled_cheese_golem_core>);

<tag:items:the_forgotten_dimensions:log>.add(<item:the_forgotten_dimensions:fros_log>, <item:the_forgotten_dimensions:mendalum_log>, <item:the_forgotten_dimensions:mendalum_log>);

craftingTable.addShapeless("new_tag_test", <item:the_forgotten_dimensions:a_guide_to_dimensions>, [<tag:items:the_forgotten_dimensions:log>,<item:minecraft:book>,<tag:items:the_forgotten_dimensions:log>]);
craftingTable.addShapeless("new_tag_test2", <item:the_forgotten_dimensions:permafrost_guide>, [<item:the_forgotten_dimensions:frozen_dirt>,<item:minecraft:book>]);
craftingTable.addShapeless("shapeless_example_1", <item:the_forgotten_dimensions:metallic_snow>, [<item:minecraft:raw_iron>, <item:ad_astra:ice_shard>]);
craftingTable.addShapeless("shapeless_example_2", <item:the_forgotten_dimensions:snowincho_fur>, [<item:minecraft:leather>, <item:minecraft:blue_ice>]);
craftingTable.addShapeless("shapeless_example_3", <item:twilightforest:arctic_fur>, [<item:celestial_core:ice_fragment>, <item:the_forgotten_dimensions:snowincho_fur>]);
craftingTable.addShapeless("shapeless_example_4", <item:the_forgotten_dimensions:permafrost_amalgamated_blade>, [<item:the_forgotten_dimensions:forgotten_blade>, <item:the_forgotten_dimensions:true_ice_sword>,<item:botania:ender_dagger>,<item:celestial_core:void_essence>]);

craftingTable.addShaped("recipe_test_2", <item:the_forgotten_dimensions:baldr_rapier>, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:botania:thunder_sword>],
    [<item:minecraft:air>, <item:celestial_artifacts:thunder_ring>, <item:minecraft:air>],
    [<item:the_forgotten_dimensions:thunderite_waraxe>, <item:minecraft:air>, <item:minecraft:air>]
]);
craftingTable.addShaped("beacon", <item:minecraft:beacon>, [
    [<item:minecraft:glass>, <item:minecraft:glass>, <item:minecraft:glass>],
    [<item:minecraft:glass>, <item:minecraft:nether_star>, <item:minecraft:glass>],
    [<item:minecraft:obsidian>, <item:create:shadow_steel>, <item:minecraft:obsidian>]
]);
craftingTable.addShaped("marbled_cheese_golem_core", <item:rats:marbled_cheese_golem_core>, [
    [<item:rats:marbled_cheese>, <item:cataclysm:ignitium_ingot>, <item:rats:marbled_cheese>],
    [<item:rats:marbled_cheese>, <item:rats:gem_of_ratlantis>, <item:rats:marbled_cheese>],
    [<item:rats:marbled_cheese>, <item:cataclysm:ignitium_ingot>, <item:rats:marbled_cheese>]
]);
craftingTable.remove(<item:expanded_combat:gold_quiver>);
craftingTable.addShaped("gold_quiver", <item:expanded_combat:gold_quiver>, [
    [<item:ars_nouveau:magebloom_fiber>, <item:ars_nouveau:glyph_touch>, <item:minecraft:air>],
    [<item:ars_nouveau:glyph_projectile>, <item:minecraft:air>, <item:ars_nouveau:glyph_orbit>],
    [<item:create_new_age:overcharged_gold>, <item:ars_nouveau:glyph_self>, <item:minecraft:air>]
]);
craftingTable.remove(<item:aquamirae:three_bolt_leggings>);
craftingTable.addShaped("aquamirae", <item:aquamirae:three_bolt_leggings>, [
    [<item:ad_astra:steel_block>, <item:the_forgotten_dimensions:snowincho_fur>, <item:ad_astra:steel_block>],
    [<item:the_forgotten_dimensions:snowincho_fur>, <item:minecraft:air>, <item:the_forgotten_dimensions:snowincho_fur>],
    [<item:the_forgotten_dimensions:snowincho_fur>, <item:minecraft:air>, <item:the_forgotten_dimensions:snowincho_fur>]
]);
craftingTable.remove(<item:aquamirae:three_bolt_boots>);
craftingTable.addShaped("aquamirae1", <item:aquamirae:three_bolt_boots>, [
    [<item:ad_astra:steel_block>, <item:minecraft:air>, <item:ad_astra:steel_block>],
    [<item:the_forgotten_dimensions:snowincho_fur>, <item:minecraft:air>, <item:the_forgotten_dimensions:snowincho_fur>]
]);
craftingTable.remove(<item:ec_aquamirae_plugin:three-bolt_gauntlet>);
craftingTable.addShaped("aquamirae2", <item:ec_aquamirae_plugin:three-bolt_gauntlet>, [
    [<item:ad_astra:steel_block>, <item:the_forgotten_dimensions:snowincho_fur>, <item:minecraft:air>],
    [<item:the_forgotten_dimensions:snowincho_fur>, <item:minecraft:air>, <item:minecraft:air>]
]);
craftingTable.remove(<item:aquamirae:three_bolt_suit>);
craftingTable.addShaped("aquamirae3", <item:aquamirae:three_bolt_suit>, [
    [<item:ad_astra:steel_block>, <item:ad_astra:steel_block>, <item:ad_astra:steel_block>],
	[<item:ad_astra:oxygen_tank>, <item:the_forgotten_dimensions:snowincho_fur>, <item:ad_astra:oxygen_tank>],
    [<item:the_forgotten_dimensions:snowincho_fur>,<item:the_forgotten_dimensions:snowincho_fur>, <item:the_forgotten_dimensions:snowincho_fur>]
]);
craftingTable.addShaped("charm1", <item:twilightforest:charm_of_life_1>, [
	[<item:create_new_age:overcharged_golden_sheet>, <item:the_forgotten_dimensions:lesser_redstone_nucleus>, <item:minecraft:totem_of_undying>],
    [<item:minecraft:air>,<item:farmersdelight:melon_juice>, <item:minecraft:air>]
]);
craftingTable.remove(<item:twilightforest:charm_of_life_2>);
craftingTable.remove(<item:twilightforest:charm_of_keeping_2>);
craftingTable.remove(<item:twilightforest:charm_of_keeping_3>);
craftingTable.addShaped("charm2", <item:twilightforest:charm_of_life_2>, [
	[<item:minecraft:air>, <item:twilightforest:charm_of_life_1>, <item:minecraft:air>],
	[<item:twilightforest:charm_of_life_1>, <item:the_forgotten_dimensions:greater_redstone_nucleus>, <item:twilightforest:charm_of_life_1>],
    [<item:minecraft:air>,<item:farmersdelight:melon_juice>, <item:minecraft:air>]
]);
craftingTable.addShapeless("charm3", <item:twilightforest:charm_of_keeping_1>, [<item:botania:living_root> | <item:twilightforest:liveroot>,<item:twilightforest:phantom_chestplate> | <item:twilightforest:phantom_helmet>]);
craftingTable.addShaped("charm4", <item:twilightforest:charm_of_keeping_2>, [
	[<item:minecraft:air>, <item:twilightforest:charm_of_keeping_1>, <item:minecraft:air>],
	[<item:twilightforest:charm_of_keeping_1>, <item:minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 1, id: "minecraft:silk_touch"}]}), <item:twilightforest:charm_of_keeping_1>],
    [<item:minecraft:air>,<item:twilightforest:charm_of_keeping_1>, <item:minecraft:air>]
]);
craftingTable.addShaped("charm5", <item:twilightforest:charm_of_keeping_3>, [
	[<item:minecraft:air>, <item:twilightforest:charm_of_keeping_2>, <item:minecraft:air>],
	[<item:twilightforest:charm_of_keeping_2>, <item:celestial_core:the_end_dust>, <item:twilightforest:charm_of_keeping_2>],
    [<item:minecraft:air>,<item:twilightforest:charm_of_keeping_2>, <item:minecraft:air>]
]);
craftingTable.addShaped("sophisticatedbackpacks", <item:sophisticatedbackpacks:netherite_backpack>.withTag({inventorySlots: 120, borderColor: 1908001, renderInfo: {upgradeItems: [{id: "sophisticatedbackpacks:stack_upgrade_tier_4", Count: 1}, {id: "sophisticatedbackpacks:stack_upgrade_tier_4", Count: 1}, {id: "sophisticatedbackpacks:stack_upgrade_tier_4", Count: 1}, {id: "sophisticatedbackpacks:stack_upgrade_tier_4", Count: 1}, {id: "sophisticatedbackpacks:stack_upgrade_tier_4", Count: 1}, {id: "sophisticatedbackpacks:stack_upgrade_tier_4", Count: 1}, {id: "sophisticatedbackpacks:stack_upgrade_tier_4", Count: 1}]}, contentsUuid: [-1112925149, -2071114629, -1203945385, -271292424], display: {Name: "{\"text\":\"\\u00A7e基岩背包\"}"}, upgradeSlots: 7, AttributeModifiers: [{Amount: 1.0, Slot: "chest", AttributeName: "generic.armor", Operation: 2, UUID: [-48714819, -1258927122, -1816747965, -1171242508], Name: "generic.armor"}, {Amount: 1.0, Slot: "chest", AttributeName: "generic.max_health", Operation: 2, UUID: [-103145341, 1819560240, -1613900158, -1115500619], Name: "generic.max_health"}, {Amount: 1.0, Slot: "chest", AttributeName: "generic.armor_toughness", Operation: 2, UUID: [1449103258, -1293859097, -1443023165, 1508807328], Name: "generic.armor_toughness"}, {Amount: 1.0, Slot: "chest", AttributeName: "generic.luck", Operation: 2, UUID: [-2022146717, -148356404, -1843408119, 1402675272], Name: "generic.luck"}], clothColor: 13394234}), [
	[<item:cataclysm:altar_of_amethyst>, <item:minecraft:barrier>, <item:cataclysm:altar_of_abyss>],
	[<item:minecraft:bedrock>, <item:sophisticatedbackpacks:netherite_backpack>, <item:minecraft:command_block>],
    [<item:cataclysm:altar_of_fire>,<item:minecraft:end_portal_frame>, <item:cataclysm:altar_of_void>]
]);
craftingTable.addShaped("glass", <item:twilightforest:glass_sword>, [
	[<item:thermal:obsidian_glass>],
	[<item:alexscaves:depth_glass> | <item:ae2:quartz_vibrant_glass>],
    [<item:celestial_core:warden_sclerite>]
]);
craftingTable.addShaped("glass2", <item:twilightforest:glass_sword>.withTag({Unbreakable: 1, display: {Lore: ["{\"translate\":\"item.twilightforest.glass_sword.desc\",\"italic\":false,\"color\":\"gray\"}"]}}), [
	[<item:minecraft:barrier>],
	[<item:minecraft:barrier>],
    [<item:minecraft:bedrock>]
]);
craftingTable.addShaped("etching", <item:celestial_artifacts:truth_etching>, [
	[<item:twilightforest:glass_sword>, <item:twilightforest:glass_sword>, <item:twilightforest:glass_sword>],
	[<item:twilightforest:glass_sword>, <tag:items:curios:etching>, <item:twilightforest:glass_sword>],
    [<item:twilightforest:glass_sword>,<item:twilightforest:glass_sword>, <item:twilightforest:glass_sword>]
]);
craftingTable.addShaped("scepter", <item:twilightforest:zombie_scepter>, [
	[<item:minecraft:air>, <item:celestial_artifacts:twisted_brain>],
    [<item:celestial_core:warden_sclerite>, <item:minecraft:air>]
]);
craftingTable.addShaped("scepter1", <item:twilightforest:lifedrain_scepter>, [
	[<item:minecraft:air>, <item:celestial_artifacts:greedy_heart>],
    [<item:celestial_core:warden_sclerite>, <item:minecraft:air>]
]);
craftingTable.addShaped("scepter2", <item:twilightforest:fortification_scepter>, [
	[<item:minecraft:air>, <item:celestial_artifacts:knight_shelter>],
    [<item:celestial_core:warden_sclerite>, <item:minecraft:air>]
]);
craftingTable.addShaped("scepter3", <item:twilightforest:twilight_scepter>, [
	[<item:minecraft:air>, <item:celestial_artifacts:evil_eye>],
    [<item:celestial_core:warden_sclerite>, <item:minecraft:air>]
]);
craftingTable.remove(<item:immersiveengineering:armor_steel_helmet>);
craftingTable.remove(<item:immersiveengineering:armor_steel_chestplate>);
craftingTable.remove(<item:immersiveengineering:armor_steel_leggings>);
craftingTable.remove(<item:immersiveengineering:armor_steel_boots>);
craftingTable.remove(<item:immersiveengineering:armor_faraday_helmet>);
craftingTable.remove(<item:immersiveengineering:armor_faraday_chestplate>);
craftingTable.remove(<item:immersiveengineering:armor_faraday_leggings>);
craftingTable.remove(<item:immersiveengineering:armor_faraday_boots>);
craftingTable.remove(<item:immersiveengineering:plate_aluminum>);
craftingTable.remove(<item:ad_astra:iron_plate>);
craftingTable.remove(<item:immersiveengineering:plate_iron>);
craftingTable.remove(<item:ad_astra:steel_plate>);
craftingTable.remove(<item:ad_astra:desh_plate>);
craftingTable.remove(<item:ad_astra:ostrum_plate>);
craftingTable.remove(<item:ad_astra:calorite_plate>);
craftingTable.remove(<item:immersiveengineering:plate_steel>);
craftingTable.remove(<item:immersiveengineering:plate_copper>);
craftingTable.remove(<item:immersiveengineering:plate_silver>);
craftingTable.remove(<item:immersiveengineering:plate_lead>);
craftingTable.remove(<item:immersiveengineering:plate_nickel>);
craftingTable.remove(<item:immersiveengineering:plate_uranium>);
craftingTable.remove(<item:immersiveengineering:plate_constantan>);
craftingTable.remove(<item:immersiveengineering:plate_gold>);
craftingTable.remove(<item:immersiveengineering:plate_electrum>);

<recipetype:farmersdelight:cooking>.addRecipe("cooking_pot_test1", <item:minecraft:enchanted_golden_apple>, [<item:minecraft:enchanted_book>,<item:minecraft:gold_block>], <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:golden_apple>, 100, 400);
<recipetype:farmersdelight:cooking>.addRecipe("cooking_pot_test2", <item:the_forgotten_dimensions:ice_golem_essence>, [<item:the_forgotten_dimensions:ice_golem_essence_core>,<item:the_forgotten_dimensions:ice_golem_essence_strength>,<item:the_forgotten_dimensions:ice_golem_essence_will>,<item:the_forgotten_dimensions:ice_golem_essence_resistance>], <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:celestial_core:curse_essence>, 100, 400);
<recipetype:farmersdelight:cooking>.addRecipe("cooking_pot_test3", <item:the_forgotten_dimensions:golem_chasis>, [<item:ars_nouveau:amethyst_golem_charm>,<item:botania:spell_cloth>,<item:twilightforest:carminite_block>], <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:the_forgotten_dimensions:true_ice_metal_block>, 100, 400);
<recipetype:farmersdelight:cooking>.addRecipe("cooking_pot_test4", <item:the_forgotten_dimensions:void_blade>, [<item:ars_nouveau:void_prism>,<item:cataclysm:void_assault_shoulder_weapon>,<item:botania:blood_pendant>,<item:alexsmobs:void_worm_eye>,<item:sophisticatedbackpacks:advanced_void_upgrade>,<item:cataclysm:void_forge>.withTag({itemModifier: "celestial_forge:bold"})], <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:rats:ghost_pirat_cutlass>, 100, 400);
<recipetype:farmersdelight:cooking>.addRecipe("cooking_pot_test5", <item:the_forgotten_dimensions:elemental_aspect>, [<item:ars_nouveau:glyph_explosion>,<item:alexsmobs:soul_heart>,<item:ae2:facade>.withTag({item: "cataclysm:void_lantern_block"}),<item:twilightforest:ice_sword>,<item:cataclysm:the_incinerator>,<item:botania:mana_pylon>], <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:the_forgotten_dimensions:permafrost_amalgamated_blade>, 100, 400);