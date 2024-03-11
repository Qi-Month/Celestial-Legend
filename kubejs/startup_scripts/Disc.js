/*
const music_list = {
	hyperfun: 'Hyperfun',
}

StartupEvents.registry('sound_event', e => {
	Object.keys(music_list).forEach((key) => {
		e.create(`music.${key}`);
	})
})

StartupEvents.registry('item', e => {
	Object.keys(music_list).forEach((key, index) => {
		e.create(key, 'music_disc')
			.song(`kubejs:music.${key}`, 1)
			.analogOutput(index + 1)
			.texture(`highland:item/${key}`)
			.displayName(music_list[key])
	})
})

StartupEvents.registry('sound_event', e => {
	e.create('music.test')
})

StartupEvents.registry('item', e => {
	e.create('test_dc', 'music_disc')
		.song('kubejs:sounds/test')
})
*/