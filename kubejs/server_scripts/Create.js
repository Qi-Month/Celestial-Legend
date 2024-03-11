ServerEvents.recipes(e => {
	const cca = 'createaddition'
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

	// 烈焰人燃烧室
	shaped('create:empty_blaze_burner', [
		'OPO',
		'P P',
		'NON'
	], {
		O: '#forge:obsidian',
		P: '#forge:plates/iron',
		N: '#forge:netherrack'
	}).id('create:crafting/kinetics/empty_blaze_burner')

	// 暗影钢
	mixing('create:shadow_steel', [
		'alexscaves:azure_neodymium_ingot',
		'alexscaves:scarlet_neodymium_ingot',
		'#forge:ingots/enderium',
		'cataclysm:enderite_ingot',
		'#forge:ingots/ironwood'
	]).superheated()

	// 暗影钢机壳
	mechanical_crafting('create:shadow_steel_casing', [
		'AEA',
		'EOE',
		'AEA'
	], {
		A: 'create:shadow_steel',
		E: 'ae2:ender_dust',
		O: '#forge:obsidian'
	})

	// 流体传输器
	mechanical_crafting('createendertransmission:fluid_transmitter', [
		'SSCSS',
		'SFEFS',
		'CEWEC',
		'SFEFS',
		'SSCSS'
	], {
		S: '#forge:plates/steel',
		C: 'create:shadow_steel_casing',
		W: 'create:fluid_tank',
		E: 'rftoolsbase:infused_enderpearl',
		F: 'pipez:fluid_pipe'
	}).id('createendertransmission:fluid_transmitter')

	// 物品传输器
	mechanical_crafting('createendertransmission:item_transmitter', [
		'SSCSS',
		'SIEIS',
		'CEBEC',
		'SIEIS',
		'SSCSS'
	], {
		S: '#forge:plates/steel',
		C: 'create:shadow_steel_casing',
		B: '#forge:barrels/wooden',
		I: 'pipez:item_pipe',
		E: 'rftoolsbase:infused_enderpearl',
	}).id('createendertransmission:item_transmitter')

	// 区块加载器
	shaped('createendertransmission:chunk_loader', [
		'SSS',
		'SBS',
		'SSS'
	], {
		S: '#forge:plates/steel',
		B: 'minecraft:beacon'
	}).id('createendertransmission:chunk_loader')

	// 流体储罐
	shaped('create:fluid_tank', [
		'C',
		'G',
		'C'
	], {
		C: '#forge:plates/copper',
		G: '#forge:glass'
	}).id('create:crafting/kinetics/fluid_tank')

	// 粉碎轮
	mechanical_crafting('2x create:crushing_wheel', [
		' AAA ',
		'AAPAA',
		'APPPA',
		'AAPAA',
		' AAA '
	], {
		A: 'create:andesite_alloy',
		P: '#minecraft:planks'
	}).id('create:mechanical_crafting/crushing_wheel')

	// 烈焰蛋糕
	filling('create:blaze_cake', [
		'create:blaze_cake_base',
		Fluid.of('minecraft:lava', 500)
	]).id('create:filling/blaze_cake')

	// 激发器
	shaped('create_new_age:energiser_t1', [
		'S',
		'A',
		'L'
	], {
		A: 'create:andesite_casing',
		L: 'minecraft:lightning_rod',
		S: '#forge:plates/steel'
	}).id('create_new_age:shapeless/energiser_t1')

	// 太阳能板
	shaped('create_new_age:basic_solar_heating_plate', [
		'GGG',
		'IPI',
		'ISI'
	], {
		G: '#forge:glass',
		I: '#forge:ingots/iron',
		S: '#forge:ingots/signalum',
		P: 'ad_astra:solar_panel'
	}).id('create_new_age:shaped/basic_solar_plate')

	// 锅炉加热器
	shaped('create_new_age:heater', [
		'IDI',
		'IBI',
		'HOH'
	], {
		I: '#forge:nuggets/iron',
		B: 'create:empty_blaze_burner',
		O: 'create_new_age:overcharged_iron',
		H: 'create_new_age:heat_pipe',
		D: '#forge:dusts/hop_graphite'
	}).id('create_new_age:shaped/boiler_heater')

	// 发电机线圈
	mechanical_crafting('create_new_age:generator_coil', [
		'III',
		'ISI',
		'III'
	], {
		I: '#forge:ingots/silver',
		S: 'create:shadow_steel'
	}).id('create_new_age:shaped/generator_coil')

	// 核反应燃料
	sequenced_assembly(
		'create_new_age:nuclear_fuel',
		'create_new_age:radioactive_thorium', [
		pressing('create_new_age:nuclear_fuel', [
			'create_new_age:nuclear_fuel'
		]),
		deploying('create_new_age:nuclear_fuel', [
			'create_new_age:nuclear_fuel',
			'#forge:plates/iron'
		]),
		deploying('create_new_age:nuclear_fuel', [
			'create_new_age:nuclear_fuel',
			'#alexscaves:alloy_ingot'
		]),
		pressing('create_new_age:nuclear_fuel', [
			'create_new_age:nuclear_fuel'
		])
	]).loops(1).transitionalItem('ad_astra:iron_plate')

	// 核反应堆砖块
	e.custom({
		"type": "create:sequenced_assembly",
		"ingredient": { "item": "minecraft:bricks" },
		"loops": 1,
		"results": [
			{
				"item": "create_new_age:reactor_casing",
				"count": 4
			}
		],
		"sequence": [
			{
				"type": "create_new_age:energising",
				"energy_needed": 500,
				"ingredients": [
					{ "item": "create_new_age:incomplete_casing" }
				],
				"results": [
					{ "item": "create_new_age:incomplete_casing" }
				]
			},
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "create_new_age:incomplete_casing" },
					[
						{ "tag": "forge:plates/steel" }
					]
				],
				"results": [
					{ "item": "create_new_age:incomplete_casing" }
				]
			},
			{
				"type": "create:pressing",
				"ingredients": [
					{ "item": "create_new_age:incomplete_casing" }
				],
				"results": [
					{ "item": "create_new_age:incomplete_casing" }
				]
			}
		],
		"transitionalItem": { "item": "create_new_age:incomplete_casing" }
	}).id('create_new_age:reactor/reactor_casing')

	// 坚固板
	sequenced_assembly([
		Item.of('create:sturdy_sheet').withChance(0.75),
		Item.of('minecraft:gravel').withChance(0.25)
	], '#forge:dusts/obsidian', [
		pressing('create:unprocessed_obsidian_sheet', [
			'create:unprocessed_obsidian_sheet'
		])
	]).loops(10).transitionalItem('create:unprocessed_obsidian_sheet')

	// 生物乙醇
	mixing(Fluid.of(`${cca}:bioethanol`, 100), [
		'create:cinder_flour',
		'#forge:bioethanol/feedstock',
		'#forge:seeds',
		Fluid.of(`${cca}:seed_oil`, 200)
	]).superheated

	// 种子油
	compacting(Fluid.of(`${cca}:seed_oil`, 25), [
		'#forge:seeds'
	]).id('createaddition:compacting/seed_oil')

	// 出矿
	milling([
		Item.of('create:crushed_raw_iron').withChance(0.07),
		Item.of('create:crushed_raw_copper').withChance(0.08),
		Item.of('create:crushed_raw_zinc').withChance(0.06),
		Item.of('create:crushed_raw_tin').withChance(0.08)
	], '#forge:gravel')

	crushing([
		Item.of('create:crushed_raw_iron').withChance(0.10),
		Item.of('create:crushed_raw_copper').withChance(0.12),
		Item.of('create:crushed_raw_zinc').withChance(0.04),
		Item.of('create:crushed_raw_tin').withChance(0.10),
		Item.of('create:crushed_raw_silver').withChance(0.04),
		Item.of('create:crushed_raw_lead').withChance(0.04),
		Item.of('create:crushed_raw_nickel').withChance(0.08),
		Item.of('create:crushed_raw_gold').withChance(0.06)
	], '#forge:cobblestone')

	//石磨
	milling([
		Item.of('create:crushed_raw_zinc').withChance(0.15),
		Item.of('create:zinc_nugget').withChance(0.15)
	], '#create:stone_types/asurine').id('create:milling/asurine_recycling')
	milling([
		Item.of('minecraft:iron_nugget').withChance(0.15),
		Item.of('create:crushed_raw_iron').withChance(0.15)
	], '#create:stone_types/crimsite').id('create:milling/crimsite_recycling')
	milling([
		Item.of('create:copper_nugget').withChance(0.15),
		Item.of('create:crushed_raw_copper').withChance(0.15)
	], '#create:stone_types/veridium').id('create:milling/veridium')
	milling([
		Item.of('minecraft:gold_nugget').withChance(0.15),
		Item.of('create:crushed_raw_gold').withChance(0.15)
	], '#create:stone_types/ochrum').id('create:milling/ochrum_recycling')

	// 粉碎
	crushing([
		Item.of('create:crushed_raw_zinc').withChance(0.3),
		Item.of('create:zinc_nugget').withChance(0.3)
	], '#create:stone_types/asurine').id('create:crushing/asurine_recycling')
	crushing([
		Item.of('minecraft:iron_nugget').withChance(0.3),
		Item.of('create:crushed_raw_iron').withChance(0.3)
	], '#create:stone_types/crimsite').id('create:crushing/crimsite_recycling')
	crushing([
		Item.of('create:copper_nugget').withChance(0.3),
		Item.of('create:crushed_raw_copper').withChance(0.3)
	], '#create:stone_types/veridium').id('create:crushing/veridium')
	crushing([
		Item.of('minecraft:gold_nugget').withChance(0.3),
		Item.of('create:crushed_raw_gold').withChance(0.3)
	], '#create:stone_types/ochrum').id('create:crushing/ochrum_recycling')

	// 修改生物乙醇燃烧时间
	e.custom({
		"type": "createaddition:liquid_burning",
		"input": {
			"fluid": "createaddition:bioethanol",
			"amount": 1000
		},
		"burnTime": 6000,
		"superheated": true
	}).id('createaddition:liquid_burning/biofuel')

	// 修改生物柴油燃烧时间
	e.custom({
		"type": "createaddition:liquid_burning",
		"input": {
			"fluid": "immersiveengineering:biodiesel",
			"amount": 1000
		},
		"burnTime": 9000,
		"superheated": true
	}).id('createaddition:liquid_burning/biodiesel')
})