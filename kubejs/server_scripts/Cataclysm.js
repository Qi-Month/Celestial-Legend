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

	// 末影合金块<=>末影合金锭
	shapeless('cataclysm:enderite_block', [
		'9x cataclysm:enderite_ingot'
	])
	shapeless('9x cataclysm:enderite_ingot', [
		'cataclysm:enderite_block'
	])

	// 绞肉锯
	e.custom({
		"type": "create:sequenced_assembly",
		"ingredient": { "tag": "forge:storage_blocks/steel" },
		"sequence": [
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "cataclysm:meat_shredder" },
					{ "item": "cataclysm:witherite_ingot" }
				],
				"results": [
					{ "item": "cataclysm:meat_shredder" }
				]
			},
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "cataclysm:meat_shredder" },
					{ "item": "immersiveengineering:capacitor_mv" }
				],
				"results": [
					{ "item": "cataclysm:meat_shredder" }
				]
			},
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "cataclysm:meat_shredder" },
					{ "item": "immersiveengineering:sawblade" }
				],
				"results": [
					{ "item": "cataclysm:meat_shredder" }
				]
			},
			{
				"type": "create_new_age:energising",
				"energy_needed": 2000000,
				"ingredients": [
					{ "item": "cataclysm:meat_shredder" }
				],
				"results": [
					{ "item": "cataclysm:meat_shredder" }
				]
			}
		],
		"results": [
			{ "item": "cataclysm:meat_shredder" }
		],
		"loops": 1,
		"transitionalItem": { "item": "cataclysm:witherite_ingot" }
	}).id('cataclysm:meat_shredder')

	// 激光加特林
	e.custom({
		"type": "create:sequenced_assembly",
		"ingredient": { "item": "immersiveengineering:revolver" },
		"sequence": [
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "cataclysm:laser_gatling" },
					{ "item": "cataclysm:witherite_ingot" }
				],
				"results": [
					{ "item": "cataclysm:laser_gatling" }
				]
			},
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "cataclysm:laser_gatling" },
					{ "item": "create:precision_mechanism" }
				],
				"results": [
					{ "item": "cataclysm:laser_gatling" }
				]
			},
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "cataclysm:laser_gatling" },
					{ "item": "cataclysm:witherite_ingot" }
				],
				"results": [
					{ "item": "cataclysm:laser_gatling" }
				]
			},
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "cataclysm:laser_gatling" },
					{ "item": "create:nixie_tube" }
				],
				"results": [
					{ "item": "cataclysm:laser_gatling" }
				]
			},
			{
				"type": "create_new_age:energising",
				"energy_needed": 2000000,
				"ingredients": [
					{ "item": "cataclysm:laser_gatling" }
				],
				"results": [
					{ "item": "cataclysm:laser_gatling" }
				]
			}
		],
		"results": [
			{ "item": "cataclysm:laser_gatling" }
		],
		"loops": 1,
		"transitionalItem": { "item": "cataclysm:witherite_ingot" }
	}).id('cataclysm:laser_gatling')

	// 凋零突击肩炮
	e.custom({
		"type": "create:sequenced_assembly",
		"ingredient": { "tag": "forge:rods/steel" },
		"sequence": [
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "cataclysm:wither_assault_shoulder_weapon" },
					{ "item": "cataclysm:witherite_ingot" }
				],
				"results": [
					{ "item": "cataclysm:wither_assault_shoulder_weapon" }
				]
			},
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "cataclysm:wither_assault_shoulder_weapon" },
					{ "item": "create:precision_mechanism" }
				],
				"results": [
					{ "item": "cataclysm:wither_assault_shoulder_weapon" }
				]
			},
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "cataclysm:wither_assault_shoulder_weapon" },
					{ "item": "create:electron_tube" }
				],
				"results": [
					{ "item": "cataclysm:wither_assault_shoulder_weapon" }
				]
			},
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "cataclysm:wither_assault_shoulder_weapon" },
					{ "item": "createaddition:capacitor" }
				],
				"results": [
					{ "item": "cataclysm:wither_assault_shoulder_weapon" }
				]
			},
			{
				"type": "create_new_age:energising",
				"energy_needed": 2000000,
				"ingredients": [
					{ "item": "cataclysm:wither_assault_shoulder_weapon" }
				],
				"results": [
					{ "item": "cataclysm:wither_assault_shoulder_weapon" }
				]
			}
		],
		"results": [
			{ "item": "cataclysm:wither_assault_shoulder_weapon" }
		],
		"loops": 1,
		"transitionalItem": { "item": "cataclysm:witherite_ingot" }
	}).id('cataclysm:wither_assault_shoulder_weapon')
})