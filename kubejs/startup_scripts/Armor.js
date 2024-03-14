ItemEvents.armorTierRegistry(e => {
	e.add('copper', tier => {
		tier.durabilityMultiplier = 12 // 耐久系数,具体得上wiki看公式
		tier.slotProtections = [2, 3, 5, 2] // 护甲值,分别对应[鞋子 裤腿 胸甲 头盔]
		tier.toughness = 1  // 韧性
		tier.knockbackResistance = 0.1  // 防击退,钻石0.3,同时代表着每件各0.3(30%)
		tier.enchantmentValue = 6  // 附魔等级
		tier.repairIngredient = '#forge:plates/copper'  // 修复材料(填写#Tag)
		tier.equipSound = 'minecraft:item.armor.equip_iron'  // 穿戴音效
	})
})
// 物品贴图照常放在item
// 身上的贴图要放在assets\kubejs\textures\models\armor
StartupEvents.registry('item', e => {
	let Item = (
		Name,  // Item ID
		Type, // 类型
		Rarity,  // 稀有度
		Tire,  // 盔甲图层
		Glow  // 是否发光
	) => {
		e.create(Name, Type)
			.rarity(Rarity)
			.tier(Tire)
			.glow(Glow)
	}
	// 铜套
	Item('copper_helmet', 'helmet', 'common', 'copper', false)
	Item('copper_chestplate', 'chestplate', 'common', 'copper', false)
	Item('copper_leggings', 'leggings', 'common', 'copper', false)
	Item('copper_boots', 'boots', 'common', 'copper', false)
})