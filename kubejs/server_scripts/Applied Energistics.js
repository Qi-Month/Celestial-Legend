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

	// 压印器
	shaped('ae2:inscriber', [
		'OSO',
		'CEO',
		'OSO'
	], {
		O: '#forge:ingots/iron',
		C: '#forge:ingots/copper',
		E: 'thermal:energy_cell_frame',
		S: 'minecraft:sticky_piston'
	}).id('ae2:network/blocks/inscribers')

	// 石英纤维
	mixing('3x ae2:quartz_fiber', [
		'6x #forge:glass',
		'3x ae2:certus_quartz_dust'
	]).heated().id('ae2:network/parts/quartz_fiber_part')

	// 充能器
	shaped('ae2:charger', [
		'OCO',
		'OE ',
		'OCO'
	], {
		O: '#forge:ingots/iron',
		C: '#forge:ingots/copper',
		E: 'thermal:energy_cell_frame',
	}).id('ae2:network/blocks/crystal_processing_charger')

	// ME驱动器
	sequenced_assembly(
		'ae2:drive',
		'immersiveengineering:logic_circuit', [
		deploying('immersiveengineering:logic_circuit', [
			'immersiveengineering:logic_circuit',
			'#forge:plates/steel'
		]),
		deploying('immersiveengineering:logic_circuit', [
			'immersiveengineering:logic_circuit',
			'#ae2:cable'
		]),
		deploying('immersiveengineering:logic_circuit', [
			'immersiveengineering:logic_circuit',
			'ae2:engineering_processor'
		])
	])
		.loops(2)
		.transitionalItem('immersiveengineering:logic_circuit')
		.id('ae2:network/blocks/storage_drive')

	// ME终端
	mechanical_crafting('ae2:terminal', [
		'AL ',
		'SF ',
		'C  '
	], {
		A: 'ae2:annihilation_core',
		L: 'ae2:logic_processor',
		S: 'ae2:semi_dark_monitor',
		F: 'ae2:formation_core',
		C: 'immersiveengineering:logic_circuit'
	}).id('ae2:network/parts/terminals')

	// ME控制器
	mechanical_crafting('ae2:controller', [
		'PEP',
		'FCF',
		'PNP'
	], {
		P: '#forge:plates/steel',
		F: 'ae2:fluix_crystal',
		E: 'ae2:engineering_processor',
		N: 'kubejs:nether_energy_core',
		C: 'thermal:energy_cell_frame'
	}).id('ae2:network/blocks/controller')
})