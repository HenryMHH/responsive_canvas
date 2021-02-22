export function createImageObject(data, callback) {
	const canvas = document.getElementById('canvas')

	if (data.target.files[0]) {
		const uploadedFile = data.target.files[0]
		const temporaryObjectURL = URL.createObjectURL(uploadedFile)
		let img = new Image()

		let ctx = canvas.getContext('2d')
		// let img = new Image()
		// imgInstance.src = temporaryObjectURL
		// imgInstance.onload = () => {
		// 	console.log(this)
		// }

		img.onload = () => {
			ctx.drawImage(img, 0, 0, 600, 831, 0, 0, 600, 600 * 1.385)
			ctx.font = `${600 / 20}px Arial`
			ctx.fillText('Hello', 600 / 10, 831 / 10)
			console.log(canvas.offsetWidth)
		}
		img.src = temporaryObjectURL
		// img.src =
		// 	'https://cdn.shopify.com/s/files/1/0379/3692/2669/products/UTS127NATBLK_600x.jpg?v=1601910002?v=123'

		callback((pre) => data.target.files[0].name)
	} else {
		canvas.removeAttribute('src')
		callback((pre) => null)
	}
}
