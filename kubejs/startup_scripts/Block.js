StartupEvents.registry('block', e => {
	let Block = (
		Name, // 命名ID
		SoundType,  // 挖掘声音
		Hardness,  // 硬度
		Resistance,  // 爆炸抗性
		Tool, // 所需工具类型
		Grade,  // 挖掘等级(如木,石,铁等)
		RequiresTool // 是否需要工具挖掘(填true或false)
	) => {
		e.create(Name)
			.soundType(SoundType)
			.hardness(Hardness)
			.resistance(Resistance)
			.tagBlock(Tool)
			.tagBlock(Grade)
			.requiresTool(RequiresTool)
	}
	const pickaxe = 'minecraft:mineable/pickaxe'
	const shovel = 'minecraft:mineable/shovel'
	const axe = 'minecraft:mineable/axe'
	const sword = 'minecraft:mineable/swoed'
	const hoe = 'minecrafr:mineable/hoe'
	const wooden = 'minecraft:needs_wooder_tool'
	const stone = 'minecraft:needs_stone_tool'
	const iron = 'minecraft:needs_iron_tool'
	const gold = 'minecraft:needs_gold_tool'
	const nether = 'forge:needs_netherite_tool'

	// 潜水艇核心
	Block('submarine_core', 'metal', 10, 10, pickaxe, iron, true)
})