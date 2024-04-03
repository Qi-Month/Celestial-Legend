StartupEvents.registry('fluid', e => {
	// 液态经验
	e.create('experience')
		.flowingTexture('kubejs:block/experience_flow')
		.stillTexture('kubejs:block/experience_still')
		.luminosity(15)

	// 细雪
	e.create('powder_snow')
		.noBlock()
		.noBucket()
		.flowingTexture('minecraft:block/powder_snow')
		.stillTexture('minecraft:block/powder_snow')
})
BlockEvents.modification(e => {
	e.modify('kubejs:experience', modify => {
		modify.setLightEmission(15)
	})
})