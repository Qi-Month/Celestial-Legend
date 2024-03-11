ItemEvents.firstLeftClicked('kubejs:final_sword', e => {
	e.server.runCommandSilent('execute as @p at @p run give @p kubejs:nggyu')
	e.item.count--
})