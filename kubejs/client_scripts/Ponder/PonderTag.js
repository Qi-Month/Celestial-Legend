Ponder.tags(e => {
	const ie = 'immersiveengineering:'
	const StructuresArray = [
		'advanced_blast_furnace',
		'alloy_smelter',
		'arc_furnace',
		'assembler',
		'auto_workbench',
		'blast_furnace',
		'bottling_machine',
		'crusher',
		'fermenter',
		'metal_press',
		'mixer',
		'refinery',
		'sawmill',
		'squeezer',
		'coke_oven',
		'diesel_generator'
	]
	e.createTag(`${ie}structure`, `${ie}hammer`, '结构', '多方块机器', StructuresArray.map(
		Structures => `${ie}${Structures}`
	))
})