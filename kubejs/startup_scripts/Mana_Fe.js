// 植物魔法魔力1:1发电
CapabilityEvents.blockEntity(e => {
	e.attach('thermal:energy_cell',
		BotaniaCapabilityBuilder.MANA.blockEntity()
			.receiveMana((be, amout) => {
				let energy = be.getCapability(ForgeCapabilities.ENERGY).orElse(null)
				energy.receiveEnergy(amout, false)
			})
			.getCurrentMana(be => {
				let energy = be.getCapability(ForgeCapabilities.ENERGY).orElse(null)
				return energy.energyStored
			})
			.isFull(be => {
				let energy = be.getCapability(ForgeCapabilities.ENERGY).orElse(null)
				return energy.energyStored >= energy.maxEnergyStored
			})
	)
})