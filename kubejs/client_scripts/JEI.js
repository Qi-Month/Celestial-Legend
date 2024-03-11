// 添加Item到JEI
JEIEvents.addItems(e => {
	let Item = [
		'create:shadow_steel',
		'create:shadow_steel_casing',
		'create:refined_radiance',
		'create:refined_radiance_casing',
		'cataclysm:enderite_ingot'
	]
	Item.forEach(Item => {
		e.add(Item)
	})
})
// 添加Fluid到JEI
JEIEvents.addFluids(e => {
	let Fluid = [

	]
	Fluid.forEach(e => {
		e.add(Fluid)
	})
})