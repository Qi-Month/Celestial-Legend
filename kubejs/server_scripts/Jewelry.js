ServerEvents.recipes(e => {
	const { create, kubejs, minecraft } = e.recipes

	// 夜视镜
	kubejs.shaped('artifacts:night_vision_goggles', [
		'LLL',
		'I I',
		'GPG'
	], {
		L: '#forge:leather',
		I: '#forge:ingots/iron',
		P: 'create:precision_mechanism',
		G: '#forge:glass_panes'
	})

	// 生命水晶
	kubejs.shaped('artifacts:crystal_heart', [
		'RRR',
		'RMR',
		' R '
	], {
		R: '#forge:dusts/redstone',
		M: 'kubejs:magic_essence'
	})

	// 烈火手套
	kubejs.shaped('artifacts:fire_gauntlet', [
		'LLL',
		'LRL',
		' I '
	], {
		L: '#forge:leather',
		R: 'botania:rune_fire',
		I: '#forge:ingots/iron'
	})

	// 力量手套
	kubejs.shaped('artifacts:power_glove', [
		'LBL',
		'L L',
		' I '
	], {
		L: '#forge:leather',
		B: '#forge:plates/brass',
		I: '#forge:ingots/iron'
	})

	// 欲望
	e.custom({
		"type": "immersiveengineering:arc_furnace",
		"input": { "item": "botania:rune_lust" },
		"additives": [
			{ "tag": "forge:ingots/signalum" },
			{ "tag": "forge:ingots/signalum", },
			{ "tag": "forge:ingots/steel", },
			{ "tag": "forge:ingots/steel", }
		],
		"time": 100,
		"energy": 51200,
		"results": [{ "base_ingredient": { "item": "celestial_artifacts:desire_etching" } }]
	})

	// 稀有级经验瓶
	e.custom({
		"type": "thermal:smelter",
		"ingredients": [
			{ "value": [{ "tag": "forge:ingots/lumium" },], "count": 2 },
			{ "value": [{ "tag": "forge:dusts/hop_graphite" }], "count": 1 },
			{ "value": [{ "tag": "forge:glass" }], "count": 1 }
		],
		"result": [{ "item": "l2artifacts:artifact_experience_2" }],
		"energy": 6400
	})

	// 虚无
	create.mechanical_crafting('celestial_artifacts:nihility_etching',[
		' I ',
		'UAU',
		' I '
	], {
	  I: '#forge:ingots/steel',
	  U: 'thermal:enderium_ingot',
	  A: 'celestial_core:death_essence'
	})
})