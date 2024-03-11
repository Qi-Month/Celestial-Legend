PlayerEvents.chat(e => {
	if (e.message.trim().equalsIgnoreCase('-rld')) {
		e.server.runCommandSilent('reload')
		e.server.runCommandSilent('tellraw @a "正在重新加载ing...q(≧▽≦q)"')
		e.cancel();
	}

	if (e.message.trim().equalsIgnoreCase('-kl')) {
		e.server.runCommandSilent('kill @e[type=item]')
		e.server.runCommandSilent('tellraw @a "掉落物已清除"')
		e.cancel();
	}

	if (e.message.trim().equalsIgnoreCase('-hd')) {
		e.player.runCommandSilent('kubejs hand')
		e.cancel()
	}

	if (e.message.trim().equalsIgnoreCase('-kf')) {
		e.player.runCommandSilent('effect give @s minecraft:night_vision infinite')
		e.player.runCommandSilent('effect give @s minecraft:strength infinite 255')
		e.cancel()
	}
})