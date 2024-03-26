// 召唤袭击
ItemEvents.rightClicked('kubejs:nether_totem', e => {
	// Client.gameRenderer.displayItemActivation(e.item)
	e.server.runCommandSilent(
		'execute as @p at @p run htlib create raid htlib:default_raid htlib:nameless ~ ~2 ~'
	); e.item.count - 1
})
// Shift+Right Click获取Item信息
ItemEvents.rightClicked(e => {
	const { item, player } = e
	if (player.mainHandItem == 'minecraft:air') return;
	const ItemID = item.id
	if (player.shiftKeyDown) {
		if (player.mainHandItem.id == ItemID) {
			player.runCommandSilent('kubejs hand')
		}
	}
})