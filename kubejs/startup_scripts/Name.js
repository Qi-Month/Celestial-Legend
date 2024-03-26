const ce = 'Celestial'
let DisplayName = {
	kubejs: `${ce} Legend`,
	celestial_artifacts: `${ce} Artifacts`,
	celestial_core: `${ce} Core`,
	celestial_forge: `${ce} Forge`,
	botania: 'Plant Magic'
}
Object.keys(DisplayName).forEach(key => {
	Platform.mods[key].name = DisplayName[key]
})