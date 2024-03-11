ServerEvents.recipes(e => {
	// Create
	let {
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
		splashing
	} = e.recipes.create
	// KubeJS
	let {
		shaped,
		shapeless
	} = e.recipes.kubejs
	// Minecraft
	let {
		blasting,
		campfire_cooking,
		crafting_shaped,
		crafting_shapeless,
		smelting,
		smithing_transform,
		smoking,
		stonecutting
	} = e.recipes.minecraft

	// 信素
	mixing('6x thermal:signalum_ingot', [
		'4x #blue_skies:ingots/rec',
		'4x #forge:dusts/redstone',
		'#forge:ingots/silver',
		'twilightforest:fiery_blood'
	]).superheated()

	//末影锭
	mixing('thermal:enderium_ingot', [
		'#forge:ingots/netherite',
		'#forge:gems/diamond',
		'2x #forge:ender_pearls',
		'minecraft:chorus_fruit',
		'blue_skies:charoite'
	]).superheated()

	// 硬化玻璃
	mixing('2x thermal:obsidian_glass', [
		'#forge:glass',
		'2x #forge:obsidian',
		'2x #forge:dusts/quartz'
	]).heated().id('thermal:fire_charge/obsidian_glass_2')

	// 机器框架
	sequenced_assembly(
		'thermal:machine_frame',
		'thermal:energy_cell_frame', [
		deploying('immersiveengineering:logic_circuit', [
			'immersiveengineering:logic_circuit',
			'immersiveengineering:logic_circuit'
		]),
		deploying('immersiveengineering:logic_circuit', [
			'immersiveengineering:logic_circuit',
			'thermal:obsidian_glass'
		]),
		deploying('immersiveengineering:logic_circuit', [
			'immersiveengineering:logic_circuit',
			'#forge:gears/tin'
		]),
		deploying('immersiveengineering:logic_circuit', [
			'immersiveengineering:logic_circuit',
			'create:electron_tube'
		]),
		deploying('immersiveengineering:logic_circuit', [
			'immersiveengineering:logic_circuit',
			'create:precision_mechanism'
		])
	])
		.loops(4)
		.transitionalItem('immersiveengineering:logic_circuit')
		.id('thermal:machine_frame')

	e.custom({
		"type": "thermal:smelter",
		"ingredients": [
			{ "item": "thermal:machine_frame", },
			{ "item": "immersiveengineering:logic_circuit", }
		],
		"result": [
			{ "item": "rftoolsbase:machine_frame" }
		],
		"energy": 4800
	}).id('rftoolsbase:machine_frame')

	// 橡胶
	compacting('2x thermal:rubber', [
		Fluid.of('thermal:latex', 200)
	])

	/*
	树汁提取器
	*/

	// 樱花
	e.custom({
		"type": "thermal:tree_extractor",
		"trunk": 'minecraft:cherry_log',
		"leaves": 'minecraft:cherry_leaves',
		"result": {
			"fluid": "thermal:latex",
			"amount": 250
		}
	}).id('thermal:devices/tree_extractor/tree_extractor_cherry')
	//金合欢
	e.custom({
		"type": "thermal:tree_extractor",
		"trunk": 'minecraft:acacia_log',
		"leaves": 'minecraft:acacia_leaves',
		"result": {
			"fluid": "thermal:latex",
			"amount": 250
		}
	}).id('thermal:devices/tree_extractor/tree_extractor_acacia')
	// 白桦
	e.custom({
		"type": "thermal:tree_extractor",
		"trunk": 'minecraft:birch_log',
		"leaves": 'minecraft:birch_leaves',
		"result": {
			"fluid": "thermal:latex",
			"amount": 2250
		}
	}).id('thermal:devices/tree_extractor/tree_extractor_birch')
	// 橡树
	e.custom({
		"type": "thermal:tree_extractor",
		"trunk": 'minecraft:oak_log',
		"leaves": 'minecraft:oak_leaves',
		"result": {
			"fluid": "thermal:latex",
			"amount": 250
		}
	}).id('thermal:devices/tree_extractor/tree_extractor_oak')
	// 云杉
	e.custom({
		"type": "thermal:tree_extractor",
		"trunk": 'minecraft:spruce_log',
		"leaves": 'minecraft:spruce_leaves',
		"result": {
			"fluid": "thermal:latex",
			"amount": 250
		}
	}).id('thermal:devices/tree_extractor/tree_extractor_spruce')
	//丛林
	e.custom({
		"type": "thermal:tree_extractor",
		"trunk": "minecraft:jungle_log",
		"leaves": "minecraft:jungle_leaves",
		"result": {
			"fluid": "thermal:latex",
			"amount": 250
		}
	})
	//深色
	e.custom({
		"type": "thermal:tree_extractor",
		"trunk": "minecraft:dark_oak_log",
		"leaves": "minecraft:dark_oak_leaves",
		"result": {
			"fluid": "thermal:latex",
			"amount": 250
		}
	})
})