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
		splashing
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

// 钢锭
	mixing('2x immersiveengineering:ingot_steel', [
		'#forge:coal_coke',
		'#forge:ingots/ironwood'
	]).superheated()
	
	// 木杆
	shaped('immersiveengineering:treated_post', [
		'T',
		'T',
		'D'
	], {
		T: 'immersiveengineering:treated_fence',
		D: 'minecraft:deepslate_tiles'
	}).id('immersiveengineering:crafting/treated_post')

	// 高炉砖
	shaped('3x immersiveengineering:blastbrick', [
		'CSC',
		'SMS',
		'CSC'
	], {
		C: '#forge:ingots/nether_brick',
		S: '#forge:ingots/brick',
		M: '#forge:gems/carminite'
	}).id('immersiveengineering:crafting/blastbrick')

	// 石磨锭
	mixing([
		'immersiveengineering:ingot_hop_graphite',
		Item.of('immersiveengineering:ingot_hop_graphite').withChance(0.02)
	], [
		'#forge:dusts/obsidian',
		'2x #forge:ingots/iron',
		'create:cinder_flour',
		'#forge:dusts/hop_graphite'
	]).superheated()

	// 焦炉砖
	mixing('9x immersiveengineering:cokebrick', [
		'4x #forge:storage_blocks/clay',
		'4x minecraft:bricks',
		'twilightforest:fiery_tears'
	]).id('immersiveengineering:crafting/cokebrick')

	// 防腐木板
	mixing('immersiveengineering:treated_wood_horizontal', [
		Fluid.of('immersiveengineering:creosote', 125),
		'#minecraft:planks'
	])
	mixing('8x immersiveengineering:treated_wood_horizontal', [
		Fluid.of('immersiveengineering:creosote', 1000),
		'8x #minecraft:planks'
	])

	// 红石酸桶
	mixing(Fluid.of('immersiveengineering:redstone_acid', 1000), [
		'4x #forge:dusts/redstone',
		Fluid.of('minecraft:water', 1000)
	]).id('immersiveengineering:crafting/redstone_acid')

	// 逻辑电路板
	sequenced_assembly(
		'immersiveengineering:logic_circuit',
		'create:precision_mechanism', [
		deploying('immersiveengineering:logic_circuit', [
			'immersiveengineering:logic_circuit',
			'#forge:plates/brass'
		]),
		deploying('immersiveengineering:logic_circuit', [
			'immersiveengineering:logic_circuit',
			'createaddition:capacitor'
		]),
		deploying('immersiveengineering:logic_circuit', [
			'immersiveengineering:logic_circuit',
			'#forge:nuggets/signalum'
		]),
		filling('immersiveengineering:logic_circuit', [
			'immersiveengineering:logic_circuit',
			Fluid.of('immersiveengineering:redstone_acid', 500)
		])
	]).loops(2).transitionalItem('immersiveengineering:logic_circuit')

	// 锯片
	shaped('immersiveengineering:sawblade', [
		'SSS',
		'S S',
		'SSS'
	], {
		S: '#forge:plates/steel'
	}).id('immersiveengineering:crafting/sawblade')

	// 焦煤
	e.custom({
		"type": "immersiveengineering:coke_oven",
		"creosote": 250,
		"input": { "tag": "minecraft:coals" },
		"result": { "tag": "forge:coal_coke" },
		"time": 400
	}).id('immersiveengineering:cokeoven/coke')

	// 焦煤块
	e.custom({
		"type": "immersiveengineering:coke_oven",
		"creosote": 2250,
		"input": { "tag": "forge:storage_blocks/coal" },
		"result": { "tag": "forge:storage_blocks/coal_coke" },
		"time": 3600
	}).id('immersiveengineering:cokeoven/coke_block')

	// 石墨电极棒
	e.custom({
		"type": "immersiveengineering:metal_press",
		"energy": 9600,
		"input": {
			"base_ingredient": { "tag": "forge:ingots/hop_graphite" },
			"count": 8
		},
		"result": { "item": "immersiveengineering:graphite_electrode" },
		"mold": "immersiveengineering:mold_rod"
	}).id('immersiveengineering:metalpress/electrode')

	// 矿渣<=>矿渣砂砾
	e.custom({
		"type": "immersiveengineering:crusher",
		"energy": 1600,
		"input": { "item": "immersiveengineering:slag_gravel" },
		"result": { "tag": "forge:slag" },
		"secondaries": []
	}).id('immersiveengineering:crusher/slag')

	// 矿渣砂砾
	compacting('immersiveengineering:slag_gravel', [
		'9x #forge:slag'
	])

	// 钢锭
	e.custom({
		"type": "immersiveengineering:arc_furnace",
		"additives": [{ "tag": "forge:dusts/coal_coke" }],
		"energy": 204800,
		"input": { "tag": "forge:ingots/iron" },
		"results": [{ "tag": "forge:ingots/steel" }],
		"slag": { "tag": "forge:slag" },
		"time": 400
	}).id('immersiveengineering:arcfurnace/steel')

	// 钢块
	e.custom({
		"type": "immersiveengineering:arc_furnace",
		"additives": [{ "tag": "forge:dusts/coal_coke" }],
		"energy": 1843200,
		"input": { "tag": "forge:storage/iron" },
		"results": [{ "tag": "forge:storage/steel" }],
		"slag": { "tag": "forge:slag" },
		"time": 3600
	}).id('immersiveengineering:arcfurnace/steel_block')
})