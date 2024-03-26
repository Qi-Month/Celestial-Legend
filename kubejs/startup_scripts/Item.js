StartupEvents.registry('item', e => {
	const Item = (
		Name,  // Item ID
		Rarity,  // 稀有度
		Glow  // 是否发光
	) => {
		e.create(Name)
			.rarity(Rarity)
			.glow(Glow)
	}
	// 下界图腾
	Item('nether_totem', 'rare', false,)
	// 下界能源核心
	Item('nether_energy_core', 'rare', false)
	// 魔法精华
	Item('magic_essence', 'rare', false)
	// 月币
	Item('mooncoin', 'rare', false)
	// 彩虹月币
	Item('rainbow_mooncoin', 'epic', false)
	// 星月奖卷
	Item('award_ticket', 'rare', false)
	// 食物
	const Food = (
		Name,
		Hunger,
		Saturation
	) => {
		e.create(Name)
			.rarity('epic')
			.food(food => {
				food.hunger(Hunger)
				food.saturation(Saturation)
			})
	}
	// 暮色催化石
	Food('tf_catalytic_stone', 0.1, 1)
	// Never gonna give you up~
	Food('nggyu', 0.1, 1)
})