export function createImageObject(data, callback, canvasWidth) {
	const canvas = document.getElementById('canvas')

	if (data.files[0]) {
		const uploadedFile = data.files[0]
		const temporaryObjectURL = URL.createObjectURL(uploadedFile)
		let img = new Image()

		let ctx = canvas.getContext('2d')

		img.src = temporaryObjectURL
		img.style.border = '1px solid'
		img.onload = () => {
			console.log(img.width, canvasWidth)
			ctx.drawImage(
				img,
				0,
				0,
				img.width,
				img.width * 1.385,
				0,
				0,
				canvasWidth,
				canvasWidth * 1.385
			)
			ctx.font = `${600 / 20}px Arial`
			ctx.fillText('Hello', 600 / 10, 831 / 10)
		}

		// img.src =
		// 	'https://cdn.shopify.com/s/files/1/0379/3692/2669/products/UTS127NATBLK_600x.jpg?v=1601910002?v=123'

		callback((pre) => true)
	} else {
		canvas.removeAttribute('src')
		callback((pre) => null)
	}
}
