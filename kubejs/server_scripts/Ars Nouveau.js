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

	// 法师的魔法书
	shaped('ars_nouveau:apprentice_spell_book', [
		'NRD',
		'DDQ',
		'QBB'
	], {
		N: 'ars_nouveau:novice_spell_book',
		R: '#botania:runes',
		D: '#forge:gems/diamond',
		Q: '#forge:storage_blocks/quartz',
		B: '#forge:rods/blaze'
	}).id('ars_nouveau:apprentice_spell_book_upgrade')

	// 潜能之戒
	shaped('ars_nouveau:ring_of_potential', [
		'III',
		'I I',
		'III'
	], {
		I: '#forge:nuggets/iron'
	}).id('ars_nouveau:ring_of_potential')
})