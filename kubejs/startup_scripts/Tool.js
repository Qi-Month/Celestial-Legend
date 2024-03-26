StartupEvents.registry('item', e => {
	const Tool = (
		Name, // Item id
		Type, // 类型
		Damage, // 基础伤害(所填数值+3=游戏内面板数值)
		Use, // 耐久
		Speed, // 挖掘速度
		Setlevel // 工具等级
		/*
		*0木或金
		*1石
		*2铁
		*3钻
		*4合金
		*/
	) => {
		e.create(Name, Type)
			.attackDamageBaseline(Damage)
			.unstackable()
			.modifyTier(tier => {
				tier.uses = Use
				tier.speed = Speed
				tier.setLevel(Setlevel)
			})
	}
	// 铜剑
	Tool('copper_sword', 'sword', 3, 220, 5.0, 2)
	// 铜镐
	Tool('copper_pickaxe', 'pickaxe', 1, 220, 5.0, 2)
	// 铜斧
	Tool('copper_axe', 'axe', 6, 220, 5.0, 2)
	// 铜锹
	Tool('copper_shovel', 'shovel', 1.5, 220, 5.0, 2)
	// 铜锄
	Tool('copper_hoe', 'hoe', 1, 220, 5.0, 2)
	// 最终之剑
	e.create('final_sword', 'sword')
		.attackDamageBaseline(114511)
		.rarity('epic')
		.modifyTier(tier => {
			tier.uses = 1
		})
})