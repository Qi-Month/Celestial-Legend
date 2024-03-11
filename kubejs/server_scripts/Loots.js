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

/*
LootJS.modifiers(e => {
	e.addEntityLootModifier('entity.id')
		.randomChance(0.3)
		.addLoot('kubejs:award_ticket')
	e.addEntityLootModifier('#entity.tag')
		.addLoot('kubejs:award_ticket')
});
*/

/*
30%
twilightforest:naga  //娜迦
twilightforest:lich  //巫妖
twilightforest:hydra  //九头蛇
twilightforest:knight_phantom  //幻影骑士
twilightforest:ur_ghast  //暮初恶魂
twilightforest:minoshroom  //米诺菇
twilightforest:alpha_yeti //雪怪首领
twilightforest:snow_queen //冰雪女王
botania:doppleganger  //盖亚守护者
blue_skies:summoner  //召唤师
blue_skies:alchemist  //炼金师
blue_skies:starlit_crusher //星荧粉碎者
blue_skies:arachnarch //蛛王
rats:neo_ratlantean  //新、鼠西族
alexsmobs:warped_mosco //诡异蚊鬼
alexsmobs:void_worm //虚空蠕虫
aquamirae:captain_cornelia //船长

100%
cataclysm:ignis  //焰魔
cataclysm:netherite_monstrosity  //下界合金巨兽
cataclysm:ender_guardian  //末影守卫
cataclysm:the_harbinger  //先驱者
cataclysm:the_leviathan  //利维坦
cataclysm:ancient_remnant  //远古遗魂
alexscaves:hullbreaker //碎船兽
alexscaves:forsaken //遗弃者
the_forgotten_dimensions:ice_golem  //冰霜傀儡
the_forgotten_dimensions:ice_phoenix  //不死鸟
*/