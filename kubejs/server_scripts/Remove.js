ServerEvents.recipes(e => {
	// Remove Item Recipes
	let Remove_Item = [
		'twilightforest:uncrafting_table',
		'immersiveengineering:alloybrick',
		'createendertransmission:energy_transmitter',
		'torcherino:blocktorcherino',
		'projecte:transmutation_table',
		'projecte:condenser_mk1',
		'projecte:condenser_mk2',
		'projecte:item.pe_time_watch'
	]
	Remove_Item.forEach(Item => {
		e.remove({ output: Item })
	})

	// Remove Recipe Id
	let Remove_ID = [
		'create:milling/lapis_lazuli',
		'thermal:machines/smelter/smelter_glass_obsidian',
		'immersiveengineering:crafting/treated_wood_horizontal',
		'thermal:fire_charge/electrum_ingot_2',
		'botania:elven_trade/lexicon_elven',
		'immersiveengineering:smelting/ingot_hop_graphite_from_blasting',
		'immersiveengineering:smelting/ingot_hop_graphite',
		'thermal:furnace_365216125',
		'thermal:energy_cell_frame',
		'thermal:fire_charge/signalum_ingot_4',
		'thermal:machines/smelter/smelter_alloy_signalum',
		'thermal:signalum_dust_4',
		'thermal:lumium_dust_4',
		'createaddition:mixing/netherrack',
		'thermal:fire_charge/lumium_ingot_4',
		'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot',
		'thermal:fire_charge/enderium_ingot_2',
		'thermal:enderium_dust_2',
		'create:crushing/asurine',
		'create:crushing/crimsite',
		'create:crushing/ochrum',
		'create:crushing/veridium_recycling',
		'create:mixing/lava_from_cobble',
		'thermal:machine/crucible/crucible_obsidian_to_lava',
		'thermal:devices/tree_extractor/tree_extractor_jungle',
		'thermal:devices/tree_extractor/tree_extractor_dark_oak',
		'thermal:rubber_3',
		'immersiveengineering:arcfurnace/dust_steel',
		'createaddition:liquid_burning/compat/thermal/refined_fuel',
		'immersiveengineering:mixer/redstone_acid',
		'create:crushing/gravel',
		'create_new_age:thorium/nuclear_fuel',
		'create:milling/gravel',
		'create_dd:haunting/spirit_planks'
	]
	Remove_ID.forEach(function (ID) {
		e.remove({ id: ID })
	})
})