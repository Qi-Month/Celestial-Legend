LootJS.modifiers(e => {
	e.addLootTypeModifier([LootType.ENTITY])
		.matchEntity(entity => {
			entity.anyType('#forge:can_drop_ticket_1')
		})
		.randomChance(0.3)
		.addLoot('kubejs:award_ticket');
	e.addLootTypeModifier([LootType.ENTITY])
		.matchEntity(entity => {
			entity.anyType('#forge:can_drop_ticket_2')
		})
		.addLoot('kubejs:award_ticket')
	// 删除奥秘引擎
	e.addEntityLootModifier('alexscaves:hullbreaker')
		.removeLoot('alexscaves:enigmatic_engine')
})