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

	// 炽热的血液
	mixing('2x twilightforest:fiery_blood', [
		'twilightforest:fiery_blood',
		'#blue_skies:ingots/rec',
		Fluid.of('immersiveengineering:redstone_acid', 1000)
	]).heated()

	// 火炬浆果
	shapeless('twilightforest:torchberries', [
		'3x #forge:berries',
		'minecraft:blaze_powder'
	])

	// 虫蛀木板
	haunting('twilightforest:infested_towerwood', [
		'#twilightforest:towerwood'
	])

	// 塔木木板
	stonecutting('4x twilightforest:towerwood', [
		'#twilightforest:darkwood_logs'
	]).id('twilightforest:stonecutting/dark_log/towerwood')

	// 活根
	haunting('twilightforest:liveroot_block', [
		'botania:root'
	])
	haunting("twilightforest:liveroot", [
		'botania:living_root'
	])

	// 砷铅铁矿石
	shaped('2x twilightforest:carminite', [
		'BRB',
		'RIR',
		'BRB'
	], {
		B: 'twilightforest:borer_essence',
		R: '#forge:dusts/redstone',
		I: '#forge:ingots/iron'
	}).id('twilightforest:material/carminite')
})