StartupEvents.registry('block', e => {
	// 工具类型
	const ToolType = {
		pickaxe: 'minecraft:mineable/pickaxe',
		shovel: 'minecraft:mineable/shovel',
		axe: 'minecraft:mineable/axe',
		sword: 'minecraft:mineable/sword',
		hoe: 'minecraft:mineable/hoe'
	}
	// 挖掘等级
	const MiningLevel = {
		wooden: 'minecraft:needs_wooden_tool',
		stone: 'minecraft:needs_stone_tool',
		iron: 'minecraft:needs_iron_tool',
		gold: 'minecraft:needs_gold_tool',
		nether: 'forge:needs_netherite_tool'
	}

	// 定义方块
	let Block = [
		// 潜水艇核心
		['submarine_core', 'cardinal', 'metal', 10, 10, 'pickaxe', 'iron', true]
	]

	// 循环
	Block.forEach(([
		Name, Type,
		SoundType,
		Hardness,
		Resistance,
		Tool,
		Grade,
		RequiresTool
	]) => {
		e.create(Name, Type)
			.soundType(SoundType)
			.hardness(Hardness)
			.resistance(Resistance)
			.tagBlock(ToolType[Tool])
			.tagBlock(MiningLevel[Grade])
			.requiresTool(RequiresTool)
	})
})