ServerEvents.recipes(e => {
	const { deploying, filling, sequenced_assembly } = e.recipes.create
	const transitionalItem = 'minecraft:written_book'

	// 电元素II
	e.custom({
		"type": "create:sequenced_assembly",
		"ingredient": { "item": "minecraft:book" },
		"sequence": [
			{
				"type": "create_new_age:energising",
				"energy_needed": 1000,
				"ingredients": [{ "item": "minecraft:enchanted_book" }],
				"results": [{ "item": "minecraft:enchanted_book" }]
			}
		],
		"results": [{
			"item": "minecraft:enchanted_book",
			"nbt": { StoredEnchantments: [{ id: "the_forgotten_dimensions:electric_aspect", lvl: 2 }] }
		}],
		"loops": 1,
		"transitionalItem": { "item": transitionalItem }
	})

	// 电元素V
	e.custom({
		"type": "create:sequenced_assembly",
		"ingredient": { "item": "minecraft:book" },
		"sequence": [
			{
				"type": "create:filling",
				"ingredients": [{ "item": "minecraft:enchanted_book" },
				{
					"amount": 1000,
					"fluid": "kubejs:experience"
				}],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create_new_age:energising",
				"energy_needed": 25000,
				"ingredients": [{ "item": "minecraft:enchanted_book" }],
				"results": [{ "item": "minecraft:enchanted_book" }]
			}
		],
		"results": [{
			"item": "minecraft:enchanted_book",
			"nbt": { StoredEnchantments: [{ id: "the_forgotten_dimensions:electric_aspect", lvl: 5 }] }
		}],
		"loops": 1,
		"transitionalItem": { "item": transitionalItem }
	})

	// 电元素X
	e.custom({
		"type": "create:sequenced_assembly",
		"ingredient": { "item": "minecraft:book" },
		"sequence": [
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "minecraft:enchanted_book" },
					{ "item": "create_new_age:overcharged_golden_sheet" }
				],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create:filling",
				"ingredients": [{ "item": "minecraft:enchanted_book" },
				{
					"amount": 1000,
					"fluid": "kubejs:experience"
				}],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create_new_age:energising",
				"energy_needed": 100000,
				"ingredients": [{ "item": "minecraft:enchanted_book" }],
				"results": [{ "item": "minecraft:enchanted_book" }]
			}
		],
		"results": [{
			"item": "minecraft:enchanted_book",
			"nbt": { StoredEnchantments: [{ id: "the_forgotten_dimensions:electric_aspect", lvl: 10 }] }
		}],
		"loops": 1,
		"transitionalItem": { "item": transitionalItem }
	})

	// 保护II
	e.custom({
		"type": "create:sequenced_assembly",
		"ingredient": { "item": "minecraft:book" },
		"sequence": [
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "minecraft:enchanted_book" },
					{ "tag": "forge:storage_blocks/iron" }
				],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create:filling",
				"ingredients": [{ "item": "minecraft:enchanted_book" },
				{
					"amount": 1000,
					"fluid": "kubejs:experience"
				}],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create_new_age:energising",
				"energy_needed": 1000,
				"ingredients": [{ "item": "minecraft:enchanted_book" }],
				"results": [{ "item": "minecraft:enchanted_book" }]
			}
		],
		"results": [{
			"item": "minecraft:enchanted_book",
			"nbt": { StoredEnchantments: [{ id: "'minecraft:protection", lvl: 2 }] }
		}],
		"loops": 1,
		"transitionalItem": { "item": transitionalItem }
	})

	// 保护V
	e.custom({
		"type": "create:sequenced_assembly",
		"ingredient": { "item": "minecraft:book" },
		"sequence": [
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "minecraft:enchanted_book" },
					{ "tag": "forge:storage_blocks/netherite" }
				],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create:filling",
				"ingredients": [{ "item": "minecraft:enchanted_book" },
				{
					"amount": 1000,
					"fluid": "kubejs:experience"
				}],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create_new_age:energising",
				"energy_needed": 10000,
				"ingredients": [{ "item": "minecraft:enchanted_book" }],
				"results": [{ "item": "minecraft:enchanted_book" }]
			}
		],
		"results": [{
			"item": "minecraft:enchanted_book",
			"nbt": { StoredEnchantments: [{ id: "minecraft:protection", lvl: 5 }] }
		}],
		"loops": 1,
		"transitionalItem": { "item": transitionalItem }
	})

	// 火焰保护II
	e.custom({
		"type": "create:sequenced_assembly",
		"ingredient": { "item": "minecraft:book" },
		"sequence": [
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "minecraft:enchanted_book" },
					{ "item": "minecraft:magma_block" }
				],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create:filling",
				"ingredients": [{ "item": "minecraft:enchanted_book" },
				{
					"amount": 1000,
					"fluid": "kubejs:experience"
				}],
				"results": [{ "item": "minecraft:enchanted_book" }]
			}
		],
		"results": [{
			"item": "minecraft:enchanted_book",
			"nbt": { StoredEnchantments: [{ id: "minecraft:fire_protection", lvl: 2 }] }
		}],
		"loops": 1,
		"transitionalItem": { "item": transitionalItem }
	})

	// 火焰保护V
	e.custom({
		"type": "create:sequenced_assembly",
		"ingredient": { "item": "minecraft:book" },
		"sequence": [
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "minecraft:enchanted_book" },
					{ "item": "botania:endoflame" }
				],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create:filling",
				"ingredients": [{ "item": "minecraft:enchanted_book" },
				{
					"amount": 1000,
					"fluid": "kubejs:experience"
				}],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create_new_age:energising",
				"energy_needed": 10000,
				"ingredients": [{ "item": "minecraft:enchanted_book" }],
				"results": [{ "item": "minecraft:enchanted_book" }]
			}
		],
		"results": [{
			"item": "minecraft:enchanted_book",
			"nbt": { StoredEnchantments: [{ id: "minecraft:fire_protection", lvl: 2 }] }
		}],
		"loops": 1,
		"transitionalItem": { "item": transitionalItem }
	})

	// 抢夺II
	e.custom({
		"type": "create:sequenced_assembly",
		"ingredient": { "item": "minecraft:book" },
		"sequence": [
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "minecraft:enchanted_book" },
					{ "tag": "forge:gems/emerald" }
				],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create:filling",
				"ingredients": [{ "item": "minecraft:enchanted_book" },
				{
					"amount": 1000,
					"fluid": "kubejs:experience"
				}],
				"results": [{ "item": "minecraft:enchanted_book" }]
			}
		],
		"results": [{
			"item": "minecraft:enchanted_book",
			"nbt": { StoredEnchantments: [{ id: "minecraft:looting", lvl: 2 }] }
		}],
		"loops": 1,
		"transitionalItem": { "item": transitionalItem }
	})

	// 抢夺IV
	e.custom({
		"type": "create:sequenced_assembly",
		"ingredient": { "item": "minecraft:book" },
		"sequence": [
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "minecraft:enchanted_book" },
					{ "tag": "forge:storage_blocks/emerald" }
				],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create:filling",
				"ingredients": [{ "item": "minecraft:enchanted_book" },
				{
					"amount": 1000,
					"fluid": "kubejs:experience"
				}],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "minecraft:enchanted_book" },
					{ "item": "botania:mana_diamond_block" }
				],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
		],
		"results": [{
			"item": "minecraft:enchanted_book",
			"nbt": { StoredEnchantments: [{ id: "minecraft:looting", lvl: 4 }] }
		}],
		"loops": 1,
		"transitionalItem": { "item": transitionalItem }
	})

	// 抢夺VI
	e.custom({
		"type": "create:sequenced_assembly",
		"ingredient": { "item": "minecraft:book" },
		"sequence": [
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "minecraft:enchanted_book" },
					{ "item": "botania:rune_lust" }
				],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create:filling",
				"ingredients": [{ "item": "minecraft:enchanted_book" },
				{
					"amount": 1000,
					"fluid": "kubejs:experience"
				}],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create_new_age:energising",
				"energy_needed": 20000,
				"ingredients": [{ "item": "minecraft:enchanted_book" }],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "minecraft:enchanted_book" },
					{ "item": "botania:itemfinder" }
				],
				"results": [{ "item": "minecraft:enchanted_book" }]
			}
		],
		"results": [{
			"item": "minecraft:enchanted_book",
			"nbt": { StoredEnchantments: [{ id: "minecraft:looting", lvl: 6 }] }
		}],
		"loops": 1,
		"transitionalItem": { "item": transitionalItem }
	})

	// 时运II
	e.custom({
		"type": "create:sequenced_assembly",
		"ingredient": { "item": "minecraft:book" },
		"sequence": [
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "minecraft:enchanted_book" },
					{ "tag": "forge:gems/lapis" }
				],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create:filling",
				"ingredients": [{ "item": "minecraft:enchanted_book" },
				{
					"amount": 1000,
					"fluid": "kubejs:experience"
				}],
				"results": [{ "item": "minecraft:enchanted_book" }]
			}
		],
		"results": [{
			"item": "minecraft:enchanted_book",
			"nbt": { StoredEnchantments: [{ id: "minecraft:fortune", lvl: 2 }] }
		}],
		"loops": 1,
		"transitionalItem": { "item": transitionalItem }
	})

	// 时运IV
	e.custom({
		"type": "create:sequenced_assembly",
		"ingredient": { "item": "minecraft:book" },
		"sequence": [
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "minecraft:enchanted_book" },
					{ "tag": "forge:storage_blocks/lapis" }
				],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create:filling",
				"ingredients": [{ "item": "minecraft:enchanted_book" },
				{
					"amount": 1000,
					"fluid": "kubejs:experience"
				}],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "minecraft:enchanted_book" },
					{ "item": "botania:mana_diamond_block" }
				],
				"results": [{ "item": "minecraft:enchanted_book" }]
			}
		],
		"results": [{
			"item": "minecraft:enchanted_book",
			"nbt": { StoredEnchantments: [{ id: "minecraft:fortune", lvl: 4 }] }
		}],
		"loops": 1,
		"transitionalItem": { "item": transitionalItem }
	})

	// 时运VI
	e.custom({
		"type": "create:sequenced_assembly",
		"ingredient": { "item": "minecraft:book" },
		"sequence": [
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "minecraft:enchanted_book" },
					{ "item": "botania:rune_greed" }
				],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create:filling",
				"ingredients": [{ "item": "minecraft:enchanted_book" },
				{
					"amount": 1000,
					"fluid": "kubejs:experience"
				}],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create_new_age:energising",
				"energy_needed": 20000,
				"ingredients": [{ "item": "minecraft:enchanted_book" }],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "minecraft:enchanted_book" },
					{ "item": "botania:mining_ring" }
				],
				"results": [{ "item": "minecraft:enchanted_book" }]
			}
		],
		"results": [{
			"item": "minecraft:enchanted_book",
			"nbt": { StoredEnchantments: [{ id: "minecraft:fortune", lvl: 6 }] }
		}],
		"loops": 1,
		"transitionalItem": { "item": transitionalItem }
	})

	// 效率IV
	e.custom({
		"type": "create:sequenced_assembly",
		"ingredient": { "item": "minecraft:book" },
		"sequence": [
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "minecraft:enchanted_book" },
					{ "tag": "forge:dusts/redstone" }
				],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create:filling",
				"ingredients": [{ "item": "minecraft:enchanted_book" },
				{
					"amount": 1000,
					"fluid": "kubejs:experience"
				}],
				"results": [{ "item": "minecraft:enchanted_book" }]
			}
		],
		"results": [{
			"item": "minecraft:enchanted_book",
			"nbt": { StoredEnchantments: [{ id: "minecraft:efficiency", lvl: 4 }] }
		}],
		"loops": 1,
		"transitionalItem": { "item": transitionalItem }
	})

	// 效率VII
	e.custom({
		"type": "create:sequenced_assembly",
		"ingredient": { "item": "minecraft:book" },
		"sequence": [
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "minecraft:enchanted_book" },
					{ "tag": "forge:storage_blocks/redstone" }
				],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create:filling",
				"ingredients": [{ "item": "minecraft:enchanted_book" },
				{
					"amount": 1000,
					"fluid": "kubejs:experience"
				}],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "minecraft:enchanted_book" },
					{ "item": "botania:mana_diamond_block" }
				],
				"results": [{ "item": "minecraft:enchanted_book" }]
			}
		],
		"results": [{
			"item": "minecraft:enchanted_book",
			"nbt": { StoredEnchantments: [{ id: "minecraft:efficiency", lvl: 7 }] }
		}],
		"loops": 1,
		"transitionalItem": { "item": transitionalItem }
	})

	// 效率X
	e.custom({
		"type": "create:sequenced_assembly",
		"ingredient": { "item": "minecraft:book" },
		"sequence": [
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "minecraft:enchanted_book" },
					{ "item": "botania:rune_sloth" }
				],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create:filling",
				"ingredients": [{ "item": "minecraft:enchanted_book" },
				{
					"amount": 1000,
					"fluid": "kubejs:experience"
				}],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create_new_age:energising",
				"energy_needed": 30000,
				"ingredients": [{ "item": "minecraft:enchanted_book" }],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "minecraft:enchanted_book" },
					{ "item": "botania:lens_efficiency" }
				],
				"results": [{ "item": "minecraft:enchanted_book" }]
			}
		],
		"results": [{
			"item": "minecraft:enchanted_book",
			"nbt": { StoredEnchantments: [{ id: "minecraft:efficiency", lvl: 10 }] }
		}],
		"loops": 1,
		"transitionalItem": { "item": transitionalItem }
	})

	// 精准采集
	e.custom({
		"type": "create:sequenced_assembly",
		"ingredient": { "item": "minecraft:book" },
		"sequence": [
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "minecraft:enchanted_book" },
					{ "item": "botania:reach_ring" }
				],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create:filling",
				"ingredients": [{ "item": "minecraft:enchanted_book" },
				{
					"amount": 1000,
					"fluid": "kubejs:experience"
				}],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "minecraft:enchanted_book" },
					{ "item": "botania:lens_gravity" }
				],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create_new_age:energising",
				"energy_needed": 10000,
				"ingredients": [{ "item": "minecraft:enchanted_book" }],
				"results": [{ "item": "minecraft:enchanted_book" }]
			}
		],
		"results": [{
			"item": "minecraft:enchanted_book",
			"nbt": { StoredEnchantments: [{ id: "minecraft:silk_touch", lvl: 1 }] }
		}],
		"loops": 1,
		"transitionalItem": { "item": transitionalItem }
	})

	// 经验修补
	e.custom({
		"type": "create:sequenced_assembly",
		"ingredient": { "item": "minecraft:book" },
		"sequence": [
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "minecraft:enchanted_book" },
					{ "item": "botania:dragonstone_block" }
				],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create:filling",
				"ingredients": [{ "item": "minecraft:enchanted_book" },
				{
					"amount": 1000,
					"fluid": "kubejs:experience"
				}],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "minecraft:enchanted_book" },
					{ "tag": "forge:storage_blocks/terrasteel" }
				],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create_new_age:energising",
				"energy_needed": 2222,
				"ingredients": [{ "item": "minecraft:enchanted_book" }],
				"results": [{ "item": "minecraft:enchanted_book" }]
			}
		],
		"results": [{
			"item": "minecraft:enchanted_book",
			"nbt": { StoredEnchantments: [{ id: "minecraft:mending", lvl: 1 }] }
		}],
		"loops": 1,
		"transitionalItem": { "item": transitionalItem }
	})

	// 力量V
	e.custom({
		"type": "create:sequenced_assembly",
		"ingredient": { "item": "minecraft:book" },
		"sequence": [
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "minecraft:enchanted_book" },
					{ "item": "create:rose_quartz" }
				],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create:filling",
				"ingredients": [{ "item": "minecraft:enchanted_book" },
				{
					"amount": 1000,
					"fluid": "kubejs:experience"
				}],
				"results": [{ "item": "minecraft:enchanted_book" }]
			}
		],
		"results": [{
			"item": "minecraft:enchanted_book",
			"nbt": { StoredEnchantments: [{ id: "minecraft:power", lvl: 5 }] }
		}],
		"loops": 1,
		"transitionalItem": { "item": transitionalItem }
	})

	// 力量VII
	e.custom({
		"type": "create:sequenced_assembly",
		"ingredient": { "item": "minecraft:book" },
		"sequence": [
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "minecraft:enchanted_book" },
					{ "item": "botania:lens_power" }
				],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create:filling",
				"ingredients": [{ "item": "minecraft:enchanted_book" },
				{
					"amount": 1000,
					"fluid": "kubejs:experience"
				}],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create_new_age:energising",
				"energy_needed": 5000,
				"ingredients": [{ "item": "minecraft:enchanted_book" }],
				"results": [{ "item": "minecraft:enchanted_book" }]
			}
		],
		"results": [{
			"item": "minecraft:enchanted_book",
			"nbt": { StoredEnchantments: [{ id: "minecraft:power", lvl: 7 }] }
		}],
		"loops": 1,
		"transitionalItem": { "item": transitionalItem }
	})

	// 力量XIV
	e.custom({
		"type": "create:sequenced_assembly",
		"ingredient": { "item": "minecraft:book" },
		"sequence": [
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "minecraft:enchanted_book" },
					{ "item": "botania:lens_piston" }
				],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create:filling",
				"ingredients": [{ "item": "minecraft:enchanted_book" },
				{
					"amount": 1000,
					"fluid": "kubejs:experience"
				}],
				"results": [{ "item": "minecraft:enchanted_book" }]
			},
			{
				"type": "create:deploying",
				"ingredients": [
					{ "item": "minecraft:enchanted_book" },
					{ "item": "botania:laputa_shard" }
				],
				"results": [{ "item": "minecraft:enchanted_book" }]
			}
		],
		"results": [{
			"item": "minecraft:enchanted_book",
			"nbt": { StoredEnchantments: [{ id: "minecraft:power", lvl: 14 }] }
		}],
		"loops": 1,
		"transitionalItem": { "item": transitionalItem }
	})

	// 冰霜之触II
	sequenced_assembly([
		Item.of('minecraft:enchanted_book')
			.enchant('the_forgotten_dimensions:ice_aspect', 2)
	], 'minecraft:book', [
		deploying('minecraft:enchanted_book', ['minecraft:enchanted_book', 'minecraft:ice']),
		filling('minecraft:enchanted_book', ['minecraft:enchanted_book', Fluid.of('kubejs:experience', 1000)])
	]).loops(1).transitionalItem(transitionalItem)

	// 冰霜之触V
	sequenced_assembly([
		Item.of('minecraft:enchanted_book')
			.enchant('the_forgotten_dimensions:ice_aspect', 5)
	], 'minecraft:book', [
		deploying('minecraft:enchanted_book', ['minecraft:enchanted_book', 'minecraft:blue_ice']),
		filling('minecraft:enchanted_book', ['minecraft:enchanted_book', Fluid.of('kubejs:experience', 1000)]),
		filling('minecraft:enchanted_book', ['minecraft:enchanted_book', Fluid.of('minecraft:water', 1000)])
	]).loops(1).transitionalItem(transitionalItem)

	// 冰霜之触X
	sequenced_assembly([
		Item.of('minecraft:enchanted_book')
			.enchant('the_forgotten_dimensions:ice_aspect', 10)
	], 'minecraft:book', [
		filling('minecraft:enchanted_book', ['minecraft:enchanted_book', Fluid.of('minecraft:water', 1000)]),
		filling('minecraft:enchanted_book', ['minecraft:enchanted_book', Fluid.of('kubejs:experience', 1000)]),
		filling('minecraft:enchanted_book', ['minecraft:enchanted_book', Fluid.of('minecraft:water', 1000)]),
		deploying('minecraft:enchanted_book', ['minecraft:enchanted_book', 'minecraft:blue_ice']),
	]).loops(1).transitionalItem(transitionalItem)

	// 锋利IV
	sequenced_assembly([
		Item.of('minecraft:enchanted_book')
			.enchant('minecraft:sharpness', 4)
	], 'minecraft:book', [
		deploying('minecraft:enchanted_book', ['minecraft:enchanted_book', '#forge:gems/quartz']),
		filling('minecraft:enchanted_book', ['minecraft:enchanted_book', Fluid.of('kubejs:experience', 1000)])
	]).loops(1).transitionalItem(transitionalItem)

	// 锋利VIII
	sequenced_assembly([
		Item.of('minecraft:enchanted_book')
			.enchant('minecraft:sharpness', 8)
	], 'minecraft:book', [
		deploying('minecraft:enchanted_book', ['minecraft:enchanted_book', '#forge:storage_blocks/quartz']),
		filling('minecraft:enchanted_book', ['minecraft:enchanted_book', Fluid.of('kubejs:experience', 1000)]),
		deploying('minecraft:enchanted_book', ['minecraft:enchanted_book', 'minecraft:diamond_sword']),
	]).loops(1).transitionalItem(transitionalItem)

	// 锋利XVI
	sequenced_assembly([
		Item.of('minecraft:enchanted_book')
			.enchant('minecraft:sharpness', 16)
	], 'minecraft:book', [
		deploying('minecraft:enchanted_book', ['minecraft:enchanted_book', 'minecraft:netherite_sword']),
		filling('minecraft:enchanted_book', ['minecraft:enchanted_book', Fluid.of('kubejs:experience', 1000)]),
		deploying('minecraft:enchanted_book', ['minecraft:enchanted_book', 'botania:mana_quartz']),
		deploying('minecraft:enchanted_book', ['minecraft:enchanted_book', 'botania:lens_damage'])
	]).loops(1).transitionalItem(transitionalItem)

	// 火焰附加II
	sequenced_assembly([
		Item.of('minecraft:enchanted_book')
			.enchant('minecraft:fire_aspect', 2)
	], 'minecraft:book', [
		deploying('minecraft:enchanted_book', ['minecraft:enchanted_book', 'minecraft:blaze_powder']),
		filling('minecraft:enchanted_book', ['minecraft:enchanted_book', Fluid.of('kubejs:experience', 1000)])
	]).loops(1).transitionalItem(transitionalItem)

	// 火焰附加V
	sequenced_assembly([
		Item.of('minecraft:enchanted_book')
			.enchant('minecraft:fire_aspect', 5)
	], 'minecraft:book', [
		filling('minecraft:enchanted_book', ['minecraft:enchanted_book', Fluid.of('minecraft:lava', 1000)]),
		filling('minecraft:enchanted_book', ['minecraft:enchanted_book', Fluid.of('kubejs:experience', 1000)]),
		deploying('minecraft:enchanted_book', ['minecraft:enchanted_book', 'minecraft:fire_charge'])
	]).loops(1).transitionalItem(transitionalItem)

	// 火焰附加X
	sequenced_assembly([
		Item.of('minecraft:enchanted_book')
			.enchant('minecraft:fire_aspect', 10)
	], 'minecraft:book', [
		deploying('minecraft:enchanted_book', ['minecraft:enchanted_book', 'botania:lens_fire']),
		filling('minecraft:enchanted_book', ['minecraft:enchanted_book', Fluid.of('kubejs:experience', 1000)]),
		deploying('minecraft:enchanted_book', ['minecraft:enchanted_book', 'minecraft:magma_cream']),
		deploying('minecraft:enchanted_book', ['minecraft:enchanted_book', 'botania:orechid_ignem'])
	]).loops(1).transitionalItem(transitionalItem)

	// 冰霜保护II
	sequenced_assembly([
		Item.of('minecraft:enchanted_book')
			.enchant('the_forgotten_dimensions:freeze_resistance', 2)
	], 'minecraft:book', [
		deploying('minecraft:enchanted_book', ['minecraft:enchanted_book', 'minecraft:snow_block']),
		filling('minecraft:enchanted_book', ['minecraft:enchanted_book', Fluid.of('kubejs:experience', 1000)])
	]).loops(1).transitionalItem(transitionalItem)

	// 冰霜保护V
	sequenced_assembly([
		Item.of('minecraft:enchanted_book')
			.enchant('the_forgotten_dimensions:freeze_resistance', 5)
	], 'minecraft:book', [
		deploying('minecraft:enchanted_book', ['minecraft:enchanted_book', 'twilightforest:arctic_fur_block']),
		filling('minecraft:enchanted_book', ['minecraft:enchanted_book', Fluid.of('kubejs:experience', 1000)])
	]).loops(1).transitionalItem(transitionalItem)

	// 激流III
	sequenced_assembly([
		Item.of('minecraft:enchanted_book')
			.enchant('minecraft:riptide', 3)
	], 'minecraft:book', [
		deploying('minecraft:enchanted_book', ['minecraft:enchanted_book', 'minecraft:prismarine']),
		filling('minecraft:enchanted_book', ['minecraft:enchanted_book', Fluid.of('kubejs:experience', 1000)])
	]).loops(1).transitionalItem(transitionalItem)

	// 激流VI
	sequenced_assembly([
		Item.of('minecraft:enchanted_book')
			.enchant('minecraft:riptide', 6)
	], 'minecraft:book', [
		deploying('minecraft:enchanted_book', ['minecraft:enchanted_book', 'minecraft:trident']),
		filling('minecraft:enchanted_book', ['minecraft:enchanted_book', Fluid.of('kubejs:experience', 1000)]),
		deploying('minecraft:enchanted_book', ['minecraft:enchanted_book', 'minecraft:dark_prismarine'])
	]).loops(1).transitionalItem(transitionalItem)

	// 激流IX
	sequenced_assembly([
		Item.of('minecraft:enchanted_book')
			.enchant('minecraft:riptide', 9)
	], 'minecraft:book', [
		deploying('minecraft:enchanted_book', ['minecraft:enchanted_book', 'botania:water_ring']),
		filling('minecraft:enchanted_book', ['minecraft:enchanted_book', Fluid.of('kubejs:experience', 1000)]),
		deploying('minecraft:enchanted_book', ['minecraft:enchanted_book', 'minecraft:dark_prismarine']),
		deploying('minecraft:enchanted_book', ['minecraft:enchanted_book', 'botania:dodge_ring'])
	]).loops(1).transitionalItem(transitionalItem)

	// 忠诚III
	sequenced_assembly([
		Item.of('minecraft:enchanted_book')
			.enchant('minecraft:loyalty', 3)
	], 'minecraft:book', [
		deploying('minecraft:enchanted_book', ['minecraft:enchanted_book', 'botania:thorn_chakram']),
		filling('minecraft:enchanted_book', ['minecraft:enchanted_book', Fluid.of('kubejs:experience', 1000)])
	]).loops(1).transitionalItem(transitionalItem)

	// 忠诚VI
	sequenced_assembly([
		Item.of('minecraft:enchanted_book')
			.enchant('minecraft:loyalty', 6)
	], 'minecraft:book', [
		deploying('minecraft:enchanted_book', ['minecraft:enchanted_book', 'minecraft:sea_lantern']),
		filling('minecraft:enchanted_book', ['minecraft:enchanted_book', Fluid.of('kubejs:experience', 1000)]),
		deploying('minecraft:enchanted_book', ['minecraft:enchanted_book', 'botania:thorn_chakram'])
	]).loops(1).transitionalItem(transitionalItem)

	// 忠诚IX
	sequenced_assembly([
		Item.of('minecraft:enchanted_book')
			.enchant('minecraft:loyalty', 6)
	], 'minecraft:book', [
		deploying('minecraft:enchanted_book', ['minecraft:enchanted_book', 'botania:flare_chakram']),
		filling('minecraft:enchanted_book', ['minecraft:enchanted_book', Fluid.of('kubejs:experience', 1000)]),
		deploying('minecraft:enchanted_book', ['minecraft:enchanted_book', 'minecraft:sea_lantern'])
	]).loops(1).transitionalItem(transitionalItem)

	// 穿刺V
	sequenced_assembly([
		Item.of('minecraft:enchanted_book')
			.enchant('minecraft:impaling', 5)
	], 'minecraft:book', [
		deploying('minecraft:enchanted_book', ['minecraft:enchanted_book', 'botania:lens_damage']),
		filling('minecraft:enchanted_book', ['minecraft:enchanted_book', Fluid.of('kubejs:experience', 1000)])
	]).loops(1).transitionalItem(transitionalItem)

	// 穿刺X
	sequenced_assembly([
		Item.of('minecraft:enchanted_book')
			.enchant('minecraft:impaling', 10)
	], 'minecraft:book', [
		deploying('minecraft:enchanted_book', ['minecraft:enchanted_book', 'minecraft:dark_prismarine']),
		filling('minecraft:enchanted_book', ['minecraft:enchanted_book', Fluid.of('kubejs:experience', 1000)]),
		deploying('minecraft:enchanted_book', ['minecraft:enchanted_book', 'botania:lens_damage'])
	]).loops(1).transitionalItem(transitionalItem)

	// 穿刺XV
	sequenced_assembly([
		Item.of('minecraft:enchanted_book')
			.enchant('minecraft:impaling', 15)
	], 'minecraft:book', [
		filling('minecraft:enchanted_book', ['minecraft:enchanted_book', Fluid.of('minecraft:water', 250)]),
		filling('minecraft:enchanted_book', ['minecraft:enchanted_book', Fluid.of('kubejs:experience', 1000)]),
		deploying('minecraft:enchanted_book', ['minecraft:enchanted_book', 'botania:lens_damage']),
		deploying('minecraft:enchanted_book', ['minecraft:enchanted_book', 'botania:mining_ring'])
	]).loops(1).transitionalItem(transitionalItem)
})