ItemEvents.tooltip(e => {
	const { translate } = Text;

	// Catalytic Stone
	e.add('kubejs:tf_catalytic_stone', [
		translate('tooltip.kubejs.tf_catalytic_stone')
	])

	// Copper Tools
	const copperTools = [
		'sword', 'pickaxe', 'axe', 'hoe', 'shovel',
		'helmet', 'chestplate', 'leggings', 'boots'
	]

	copperTools.forEach(tool => {
		e.add(`kubejs:copper_${tool}`, [
			translate('tooltip.kubejs.copper_tools')
		])
	})
})