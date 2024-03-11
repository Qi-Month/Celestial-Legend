/*
Ponder.registry(e => {
	e.create('immersiveengineering:blastbrick')
		.scene(
			'Title',
			'Ponder',
			scene => {
				// 自定义底盘大小,如果自己搭建了底盘应该不用
				scene.configureBasePlate(0, 0, 5)
				// 显示底盘(这不就是显示该区域的方块吗)
				scene.world.showSection([4, 0, 0, 0, 0, 4], 'down')
				scene.idle(20)
				// 在看不见的地方放置block
				scene.world.setBlocks([3, 1, 1, 1, 3, 3], 'immersiveengineering:blastbrick')
				// 设置坐标数组
				let blocks = [
					[3, 1, 1], [2, 1, 1], [1, 1, 1],
					[3, 1, 2], [2, 1, 2], [1, 1, 2],
					[3, 1, 3], [2, 1, 3], [1, 1, 3],
					//
					[3, 2, 1], [2, 2, 1], [1, 2, 1],
					[3, 2, 2], [2, 2, 2], [1, 2, 2],
					[3, 2, 3], [2, 2, 3], [1, 2, 3],
					//
					[3, 3, 1], [2, 3, 1], [1, 3, 1],
					[3, 3, 2], [2, 3, 2], [1, 3, 2],
					[3, 3, 3], [2, 3, 3], [1, 3, 3],
				]
				
				解释:
				?比如说一个数组a，里面有11，45，14
				?for (let b of a)
				?循环这个数组，回循环3次
				?第一次变量b的内容是11，第二次是45，第三次是14
				
				// 循环操作
				for (let block of blocks) {
					scene.world.showSection(block, Direction.down)
					scene.idle(2)
				}
				scene.idle(20)
			})
})
*/