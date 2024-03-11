// 潜水艇
BlockCrafting.addMultiblockStructure(
	MultiblockStructureFileBuilder.create('submarine')
		.file("BlockCraft/submarine.nbt")
		.center('immersiveengineering:sheetmetal_aluminum')
		.craftingItem('immersiveengineering:hammer')
		.resultEntity('alexscaves:submarine')
		.build()
)