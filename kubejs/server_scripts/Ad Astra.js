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

	// NASA工程装配站
	sequenced_assembly(
		'ad_astra:nasa_workbench',
		'thermal:machine_frame', [
		deploying('thermal:machine_frame', [
			'thermal:machine_frame',
			'create:electron_tube'
		]),
		deploying('thermal:machine_frame', [
			'thermal:machine_frame',
			'#forge:ingots/lumium'
		]),
		deploying('thermal:machine_frame', [
			'thermal:machine_frame',
			'#forge:storage_blocks/redstone'
		]),
		deploying('thermal:machine_frame', [
			'thermal:machine_frame',
			'botania:gaia_ingot'
		]),
		deploying('thermal:machine_frame', [
			'thermal:machine_frame',
			'create:mechanical_arm'
		]),
		deploying('thermal:machine_frame', [
			'thermal:machine_frame',
			'cataclysm:witherite_ingot'
		])
	])
		.loops(2)
		.transitionalItem('ad_astra:steel_pillar')
		.id('ad_astra:recipes/nasa_workbench')

	// 戴斯引擎
	mechanical_crafting('ad_astra:desh_engine', [
		'PPP',
		'EFE',
		' V '
	], {
		P: '#forge:plates/desh',
		E: 'ad_astra:engine_fan',
		F: 'ad_astra:engine_frame',
		V: 'alexsmobs:void_worm_mandible'
	}).id('ad_astra:recipes/desh_engine')

	// 紫金引擎
	mechanical_crafting('ad_astra:ostrum_engine', [
		'PPP',
		'EFE',
		'OAO'
	], {
		P: '#forge:plates/ostrum',
		E: 'ad_astra:engine_fan',
		F: 'ad_astra:engine_frame',
		O: '#forge:ingots/oratchalcum',
		A: 'rats:arcane_technology'
	}).id('ad_astra:recipes/ostrum_engine')

	// 耐热金属引擎
	mechanical_crafting('ad_astra:calorite_engine', [
		'PPP',
		'EFE',
		'RAT'
	], {
		P: '#forge:plates/calorite',
		E: '#forge:ingots/enderium',
		F: 'ad_astra:engine_frame',
		R: 'rats:psionic_rat_brain',
		T: 'rats:ratlantean_flame',
		A: 'ad_astra:engine_fan'
	}).id('ad_astra:recipes/calorite_engine')

	// 太阳能
	mechanical_crafting('ad_astra:solar_panel', [
		'GGG',
		'SDS',
		'DDD'
	], {
		G: '#forge:glass_panes/blue',
		S: '#forge:plates/steel',
		D: '#forge:plates/desh'
	}).id('ad_astra:recipes/solar_panel')

	// 一阶漫游车
	mechanical_crafting('ad_astra:tier_1_rover', [
		'D E',
		'SCY',
		'WPW'
	], {
		D: '#forge:storage_blocks/desh',
		S: '#forge:storage_blocks/steel',
		W: 'ad_astra:wheel',
		C: '#create:seats',
		E: '#forge:rods/electrum',
		Y: 'ad_astra:desh_engine',
		P: '#forge:plates/desh'
	}).id('ad_astra:recipes/tier_1_rover')

	// 压缩机
	mechanical_crafting('ad_astra:compressor', [
		'SMS',
		'C C',
		'BDB'
	], {
		S: '#forge:ingots/steel',
		C: 'ad_astra:steel_cable',
		D: 'create:depot',
		B: '#forge:storage_blocks/steel',
		M: 'create:mechanical_press'
	}).id('ad_astra:recipes/compressor')

	// 燃煤发电机
	mechanical_crafting('ad_astra:coal_generator', [
		'SSS',
		'CFC',
		'SPS'
	], {
		S: '#forge:ingots/steel',
		C: '#ad_astra:cable',
		P: '#forge:plates/steel',
		F: 'minecraft:blast_furnace'
	}).id('ad_astra:recipes/coal_generator')

	// 车轮
	shaped('ad_astra:wheel', [
		' C ',
		'CDC',
		' C '
	], {
		C: 'thermal:cured_rubber',
		D: '#forge:plates/desh'
	}).id('ad_astra:recipes/wheel')

	// 电缆
	let Cable = (Output, Outside, Middle, Recipe_id) => {
		shaped(Output, [
			'OOO',
			'MMM',
			'OOO'
		], {
			O: Outside,
			M: Middle
		}).id(Recipe_id)
	}
	Cable('6x ad_astra:steel_cable', '#forge:plates/steel', '#forge:ingots/copper', 'ad_astra:recipes/steel_cable')
	Cable('6x ad_astra:desh_cable', '#forge:plates/desh', '#forge:ingots/silver', 'ad_astra:recipes/desh_cable')

	// 充能器
	mechanical_crafting('ad_astra:energizer', [
		'PMP',
		'PCP',
		'BBB'
	], {
		P: '#forge:plates/ostrum',
		M: '#forge:gems/mana_diamond',
		C: 'ae2:charged_certus_quartz_crystal',
		B: '#forge:storage_blocks/ostrum'
	}).id('ad_astra:recipes/energizer')

	// 发射台
	mechanical_crafting('ad_astra:launch_pad', [
		'OOOOO',
		'OSSSO',
		'OSISO',
		'OSSSO',
		'OOOOO'
	], {
		O: '#forge:plates/obsidian',
		S: '#forge:plates/steel',
		I: '#forge:plates/iron'
	}).id('ad_astra:recipes/launch_pad')

	// 引擎扇叶
	shaped('ad_astra:engine_fan', [
		' P ',
		'PIP',
		' I '
	], {
		I: '#forge:ingots/steel',
		P: '#forge:plates/steel'
	}).id('ad_astra:recipes/engine_fan')

	// 引擎框架
	shaped('ad_astra:engine_frame', [
		'SSS',
		'SIS',
		'SSS'
	], {
		S: '#forge:rods/steel',
		I: '#forge:ingots/steel'
	}).id('ad_astra:recipes/engine_frame')

	// 燃油精炼机
	mechanical_crafting('ad_astra:fuel_refinery', [
		'SES',
		'FTF',
		'BSB'
	], {
		S: '#forge:plates/steel',
		F: 'pipez:fluid_pipe',
		E: 'ad_astra:engine_fan',
		B: '#forge:storage_blocks/steel',
		T: 'create:fluid_tank'
	}).id('ad_astra:recipes/fuel_refinery')

	// 氧气装载机
	mechanical_crafting('ad_astra:oxygen_loader', [
		'SES',
		'FTF',
		'BPB'
	], {
		S: 'create:shadow_steel',
		E: 'ad_astra:engine_fan',
		F: 'ad_astra:oxygen_tank',
		T: 'createaddition:tesla_coil',
		B: '#forge:storage_blocks/steel',
		P: '#forge:plates/steel'
	}).id('ad_astra:recipes/oxygen_loader')

	// 凛冰冻结装置
	mechanical_crafting('ad_astra:cryo_freezer', [
		' III ',
		' IDI ',
		'IPOPI',
		'BDGDB',
		'BBPBB'
	], {
		O: 'create_new_age:overcharged_diamond',
		I: '#forge:ingots/ostrum',
		D: '#forge:gems/mana_diamond',
		P: '#forge:plates/ostrum',
		B: '#forge:storage_blocks/ostrum',
		G: 'the_forgotten_dimensions:ice_golem_essence'
	}).id('ad_astra:recipes/cryo_freezer')
})