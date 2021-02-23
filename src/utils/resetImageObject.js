export function resetImageObject(elOfCanvas, elOfInput, cb) {
	let ctx = elOfCanvas.getContext('2d')
	ctx.clearRect(0, 0, elOfCanvas.width, elOfCanvas.height)

	elOfInput.value = null
	cb((pre) => null)
}
