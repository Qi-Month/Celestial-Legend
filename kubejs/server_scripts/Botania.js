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

	e.custom({
		"type": "botania:mana_infusion",
		"input": {
			"tag": "minecraft:saplings"
		},
		"mana": 5000,
		"output": {
			"item": "twilightforest:liveroot"
		}
	})

	// 魔法水晶
	mechanical_crafting('4x botania:gaia_pylon', [
		' S ',
		'PND',
		'TEC'
	], {
		S: '#forge:ingots/steeleaf',
		P: 'botania:pixie_dust',
		N: 'botania:natura_pylon',
		D: '#forge:gems/dragonstone',
		T: 'blue_skies:summoner_trophy',
		E: '#forge:ingots/elementium',
		C: 'blue_skies:starlit_crusher_trophy'
	}).id('botania:gaia_pylon')

	// 词典
	shapeless(Item.of('botania:lexicon','{"botania:elven_unlock":1b}'), [
		'botania:lexicon',
		'#forge:ingots/gold'
	])

	// 活木枝
	shaped('2x botania:livingwood_twig', [
		' W',
		'W '
	], {
		W: '#botania:livingwood_logs'
	}).id('botania:livingwood_twig')
})