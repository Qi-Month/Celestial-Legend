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

	// 潜水头盔
	shaped('alexscaves:diving_helmet', [
		'CCC',
		'AGA'
	], {
		C: '#forge:plates/copper',
		A: 'create:andesite_alloy',
		G: '#forge:glass'
	})
	// 潜水胸甲
	shaped('alexscaves:diving_chestplate', [
		'C C',
		'CCC',
		'AAA'
	], {
		C: '#forge:plates/copper',
		A: 'create:andesite_alloy',
	})
	// 潜水裤腿
	shaped('alexscaves:diving_leggings', [
		'CCC',
		'C C',
		'A A'
	], {
		C: '#forge:plates/copper',
		A: 'create:andesite_alloy',
	})
	// 潜水靴子
	shaped('alexscaves:diving_boots', [
		'C C',
		'A A'
	], {
		C: '#forge:plates/copper',
		A: 'create:andesite_alloy',
	})

	// 磁力采石场
	mechanical_crafting('alexscaves:quarry', [
		'SAS',
		'EHE',
		'SAS'
	], {
		A: 'alexscaves:azure_neodymium_ingot',
		S: 'alexscaves:scrap_metal_plate',
		E: '#forge:ingots/enderium',
		H: 'alexscaves:heart_of_iron'
	}).id('alexscaves:magnetic_quarry')

	// 潜水艇
	sequenced_assembly(
		'kubejs:in_submarine',
		'create:brass_casing', [
		deploying('kubejs:in_submarine', [
			'kubejs:in_submarine',
			'#forge:gears/bronze'
		]),
		deploying('kubejs:in_submarine', [
			'kubejs:in_submarine',
			'#forge:plates/steel'
		]),
		deploying('kubejs:in_submarine', [
			'kubejs:in_submarine',
			'create:precision_mechanism'
		]),
		deploying('kubejs:in_submarine', [
			'kubejs:in_submarine',
			'create:nixie_tube'
		]),
		deploying('kubejs:in_submarine', [
			'kubejs:in_submarine',
			'thermal:obsidian_glass'
		])
	]).loops(4).transitionalItem('kubejs:in_submarine')
	// 第二步
	deploying('alexscaves:submarine', [
		'kubejs:in_submarine',
		'aquamirae:three_bolt_helmet'
	])
})