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

	// 安山岩
	shapeless('2x minecraft:andesite', [
		'#forge:cobblestone',
		'minecraft:granite'
	])

	// 砂砾
	milling('minecraft:gravel', [
		'#forge:cobblestone'
	]).id('create:milling/cobblestone')

	// 钢锭
	mixing('2x ad_astra:steel_ingot', [
		'#forge:coal_coke',
		'#forge:ingots/ironwood'
	]).superheated()

	// 下界图腾
	mixing('kubejs:nether_totem', [
		'#forge:ingots/gold',
		'#forge:gems/emerald',
		'2x create:cinder_flour',
		'4x #forge:ingots/brass'
	]).heated()

	// 暮色催化石
	mixing('kubejs:tf_catalytic_stone', [
		'4x #forge:plates/brass',
		'4x #forge:plates/iron',
		'kubejs:magic_essence'
	]).heated()

	// 熔岩
	mixing(Fluid.of('minecraft:lava', 100), [
		'16x #forge:cobblestone'
	])

	// 腐肉
	compacting('minecraft:leather', [
		'8x minecraft:rotten_flesh'
	])

	// 沙子
	mixing('minecraft:sand', [
		'4x #forge:gravel',
		Fluid.of('minecraft:water', 500)
	])

	// 黏土块
	mixing('minecraft:clay', [
		'4x #forge:sand',
		Fluid.of('minecraft:water', 500)
	])

	// 砂砾
	shaped('minecraft:gravel', [
		'SF',
		'FS'
	], {
		F: 'minecraft:flint',
		S: '#forge:sand'
	})

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
		'CC ',
		'CR ',
		' R '
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
		'CC ',
		' R ',
		' R '
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
	/*
		// 树皮
		Ingredient.of('#minecraft:logs').getItemIds().forEach(e => {
			let pos = e.indexOf(':')
			let result = e.substring(0, pos + 1) + 'stripped_' + e.substring(pos + 1)
			e.custom({
				"type": "farmersdelight:cutting",
				"ingredients": [
					{ "item": e }
				],
				"result": [
					{ "item": result },
					{ "item": "farmersdelight:tree_bark" }
				],
				"tool": {
					"type": "farmersdelight:tool_action",
					"action": "pickaxe_dig"
				}
			})
		})
	*/
	
	// 石磨(粉)
	let Milling = {
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
	]) => {
		milling(Output, Input)
	})
})