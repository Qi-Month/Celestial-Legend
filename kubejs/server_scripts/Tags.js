// Entity
ServerEvents.tags('entity_type', e => {
	e.add('forge:can_drop_ticket_1', [
		'twilightforest:naga',
		'twilightforest:lich',
		'twilightforest:hydra',
		'twilightforest:knight_phantom',
		'twilightforest:ur_ghast',
		'twilightforest:minoshroom',
		'twilightforest:alpha_yeti',
		'twilightforest:snow_queen',
		'botania:doppleganger',
		'blue_skies:summoner',
		'blue_skies:alchemist',
		'blue_skies:starlit_crusher',
		'blue_skies:arachnarch',
		'rats:neo_ratlantean',
		'alexsmobs:warped_mosco',
		'alexsmobs:void_worm',
		'aquamirae:captain_cornelia'
	])

	e.add('forge:can_drop_ticket_2', [
		'cataclysm:ignis',
		'cataclysm:netherite_monstrosity',
		'cataclysm:ender_guardian',
		'cataclysm:the_harbinger',
		'cataclysm:the_leviathan',
		'cataclysm:ancient_remnant',
		'alexscaves:hullbreaker',
		'alexscaves:forsaken',
		'the_forgotten_dimensions:ice_golem',
		'the_forgotten_dimensions:ice_phoenix'
	])

})
// Item
ServerEvents.tags('item', e => {
	// 线缆
	e.add('ae2:cable', [
		'#ae2:smart_cable',
		'#ae2:smart_cable',
		'#ae2:covered_cable',
		'#ae2:glass_cable',
		'#ae2:covered_dense_cable',
		'#ae2:smart_dense_cable'
	])
	// ?
	e.add('blue_skies:ingots/rec', [
		'#blue_skies:ingots/ventium',
		'#blue_skies:ingots/horizonite'
	])

	// 石头
	e.add('forge:stone', [
		'#forge:cobblestone'
	])

	// 赤&青
	e.add('alexscaves:alloy_ingot', [
		'alexscaves:azure_neodymium_ingot',
		'alexscaves:scarlet_neodymium_ingot'
	])

	// 蔚蓝最终奖杯
	e.add('blue_skies:trophy', [
		'blue_skies:summoner_trophy',
		'blue_skies:starlit_crusher_trophy'
	])

	// 土豆
	e.add('forge:crops/potato', [
		'minecraft:poisonous_potato'
	])

	// 生物乙醇原料
	e.add('forge:bioethanol/feedstock', [
		'#forge:crops/potato',
		'#forge:crops/beetroot',
		'bakery:oat',
		'bakery:oat_seeds',
		'#forge:crops/rice',
		'farmersdelight:rice_panicle',
		'minecraft:sugar_cane',
		'minecraft:sugar'
	])

	// 冲压模具
	e.add('immersiveengineering:mold', [
		'immersiveengineering:mold_unpacking',
		'immersiveengineering:mold_plate',
		'immersiveengineering:mold_gear',
		'immersiveengineering:mold_rod',
		'immersiveengineering:mold_bullet_casing',
		'immersiveengineering:mold_wire',
		'immersiveengineering:mold_packing_4',
		'immersiveengineering:mold_packing_9'
	])
})