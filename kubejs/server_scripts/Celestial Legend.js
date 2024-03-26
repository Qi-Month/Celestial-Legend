ServerEvents.recipes(e => {
	// Create
	const {
		compacting,
		crushing,
		cutting,
		deploying,
		emptying,
		filling,
		haunting,
		mechanical_crafting,
		milling,
		mixing,
		pressing,
		sandpaper_polishing,
		sequenced_assembly,
		splashing,
		item_application
	} = e.recipes.create
	// KubeJS
	const {
		shaped,
		shapeless
	} = e.recipes.kubejs
	// Minecraft
	const {
		blasting,
		campfire_cooking,
		crafting_shaped,
		crafting_shapeless,
		smelting,
		smithing_transform,
		smoking,
		stonecutting
	} = e.recipes.minecraft

	// 安山岩
	shapeless('2x minecraft:andesite', [
		'#forge:cobblestone',
		'minecraft:granite'
	])

	// 砂砾
	milling('minecraft:gravel', [
		'#forge:cobblestone'
	]).id('create:milling/cobblestone')

	// 下界图腾
	mixing('kubejs:nether_totem', [
		'#forge:ingots/gold',
		'#forge:gems/emerald',
		'2x create:cinder_flour',
		'4x #forge:ingots/brass'
	]).heated()

	// 暮色催化石
	compacting('kubejs:tf_catalytic_stone', [
		'4x #forge:plates/brass',
		'4x #forge:plates/iron',
		'kubejs:magic_essence'
	]).heated()

	// 熔岩
	mixing(Fluid.of('minecraft:lava', 100), [
		'8x #forge:cobblestone'
	]).heated()

	// 腐肉
	compacting('minecraft:leather', [
		'8x minecraft:rotten_flesh'
	])

	// 沙子
	mixing('2x minecraft:sand', [
		'4x #forge:gravel',
		Fluid.of('minecraft:water', 500)
	])

	// 黏土块
	mixing('2x minecraft:clay', [
		'4x #forge:sand',
		Fluid.of('minecraft:water', 500)
	])

	// 下界岩
	haunting('minecraft:netherrack', [
		'#forge:cobblestone'
	]).id('create:haunting/blackstone')

	// 砂砾
	shaped('2x minecraft:gravel', [
		'SF',
		'FS'
	], {
		F: 'minecraft:flint',
		S: '#forge:sand'
	})

	// 液态经验
	compacting(Fluid.of('kubejs:experience', 6), [
		'create:experience_nugget'
	]).heated()

	emptying([Fluid.of('kubejs:experience', 250), 'minecraft:book'], [
		'minecraft:enchanted_book'
	])

	// 细雪
	emptying([Fluid.of('kubejs:powder_snow', 1000), 'minecraft:bucket'], [
		'minecraft:powder_snow_bucket'
	])
	mixing(Fluid.of('kubejs:powder_snow', 1000), [
		'minecraft:snow_block'
	])

	// 祛魔编辑台
	e.custom({
		"type": "botania:terra_plate",
		"ingredients": [
			{ "item": "botania:rune_sloth" },
			{ "item": "botania:rune_wrath" },
			{ "item": "botania:rune_envy" },
			{ "item": "botania:rune_pride" },
			{ "item": "thermal:machine_frame" }
		],
		"mana": 2000000,
		"result": { "item": "editenchanting:enchantment_edit_table" }
	}).id('editenchanting:enchantment_edit_table')

	// 挖掘爪
	shaped('artifacts:digging_claws', [
		'MI ',
		'M S',
		'MI '
	], {
		M: '#forge:ingots/manasteel',
		I: '#forge:ingots/iron',
		S: '#forge:string'
	})

	// 狂野爪
	shaped('artifacts:feral_claws', [
		'TM ',
		'T S',
		'TM '
	], {
		M: '#forge:ingots/manasteel',
		S: '#forge:string',
		T: '#forge:ingots/terrasteel'
	})

	// 潜水艇核心
	sequenced_assembly(
		'kubejs:submarine_core',
		'#forge:storage_blocks/steel', [
		deploying('kubejs:submarine_core', [
			'kubejs:submarine_core',
			'botania:rune_water'
		]),
		deploying('kubejs:submarine_core', [
			'kubejs:submarine_core',
			'create:propeller'
		]),
		deploying('kubejs:submarine_core', [
			'kubejs:submarine_core',
			'create:precision_mechanism'
		]),
		deploying('kubejs:submarine_core', [
			'kubejs:submarine_core',
			'create:electron_tube'
		])
	]).loops(2).transitionalItem('create:precision_mechanism')

	// 石磨(粉)
	const Milling = {
		'thermal:iron_dust': '#forge:ingots/iron',
		'thermal:copper_dust': '#forge:ingots/copper',
		'thermal:gold_dust': '#forge:ingots/gold',
		'thermal:tin_dust': '#forge:raw_materials/tin',
		'thermal:lead_dust': '#forge:ingots/lead',
		'thermal:silver_dust': '#forge:ingots/silver',
		'thermal:nickel_dust': '#forge:raw_materials/nickel',
		'thermal:bronze_dust': '#forge:ingots/bronze',
		'thermal:electrum_dust': '#forge:ingots/electrum',
		'thermal:invar_dust': '#forge:ingots/invar',
		'thermal:constantan_dust': '#forge:ingots/constantan',
		'thermal:signalum_dust': '#forge:ingots/signalum',
		'thermal:lumium_dust': '#forge:ingots/lumium',
		'thermal:enderium_dust': '#forge:ingots/enderium',
		'thermal:diamond_dust': '#forge:gems/diamond',
		'thermal:lapis_dust': '#forge:gems/lapis',
		'thermal:emerald_dust': '#forge:gems/emerald',
		'thermal:quartz_dust': '#forge:gems/quartz',
		'thermal:ruby_dust': '#forge:gems/ruby',
		'thermal:sapphire_dust': '#forge:gems/sapphire',
		'thermal:nickel_dust': '#forge:ingots/nickel'
	}
	Object.entries(Milling).forEach(([
		Output, Input
	]) => { milling([Output], [Input]) })

	// 铜剑
	shaped('kubejs:copper_sword', [
		'C',
		'C',
		'R'
	], {
		C: '#forge:ingots/copper',
		R: '#forge:rods/wooden'
	})

	// 铜镐
	shaped('kubejs:copper_pickaxe', [
		'CCC',
		' R ',
		' R '
	], {
		C: '#forge:ingots/copper',
		R: '#forge:rods/wooden'
	})

	// 铜斧
	shaped('kubejs:copper_axe', [
		'CC',
		'CR',
		' R'
	], {
		C: '#forge:ingots/copper',
		R: '#forge:rods/wooden'
	})

	// 铜锹
	shaped('kubejs:copper_shovel', [
		'C',
		'R',
		'R'
	], {
		C: '#forge:ingots/copper',
		R: '#forge:rods/wooden'
	})

	// 铜锄
	shaped('kubejs:copper_hoe', [
		'CC',
		' R',
		' R'
	], {
		C: '#forge:ingots/copper',
		R: '#forge:rods/wooden'
	})

	// 铜头盔
	shaped('kubejs:copper_helmet', [
		'CCC',
		'C C'
	], {
		C: '#forge:ingots/copper'
	})

	// 铜胸甲
	shaped('kubejs:copper_chestplate', [
		'C C',
		'CCC',
		'CCC'
	], {
		C: '#forge:ingots/copper'
	})

	// 铜裤腿
	shaped('kubejs:copper_leggings', [
		'CCC',
		'C C',
		'C C'
	], {
		C: '#forge:ingots/copper'
	})

	// 铜靴子
	shaped('kubejs:copper_boots', [
		'C C',
		'C C'
	], {
		C: '#forge:ingots/copper'
	})
})