export function createImageObject(data, cb, canvasWidth, wording) {
	const canvas = document.getElementById('canvas')

	if (data.files[0]) {
		const uploadedFile = data.files[0]
		const temporaryObjectURL = URL.createObjectURL(uploadedFile)
		let img = new Image()

		let ctx = canvas.getContext('2d')

		img.src = temporaryObjectURL
		img.style.border = '1px solid'
		img.onload = () => {
			ctx.drawImage(
				img,
				0,
				0,
				img.width,
				img.width * 1.385,
				0,
				0,
				canvasWidth,
				(canvasWidth * img.height) / img.width
			)
			ctx.font = `${canvasWidth / 14}px Arial`

			let textWidth = ctx.measureText(wording).width

			ctx.fillText(wording, canvasWidth / 2 - textWidth / 2, canvasWidth / 1.2)
		}

		cb((pre) => true)
	} else {
		canvas.removeAttribute('src')
		cb((pre) => null)
	}
}
