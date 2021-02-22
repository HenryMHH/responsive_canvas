import { Box } from '@chakra-ui/react'
import { useEffect } from 'react'

export const Canvas = () => {
	useEffect(() => {
		let canvas = document.getElementById('canvas')
		let container = document.getElementById('container')
		let ctx = canvas.getContext('2d')
		let img = new Image()

		img.onload = () => {
			canvas.setAttribute('border', '1px solid')
			ctx.drawImage(img, 0, 0, 600, 831, 0, 0, 600, 831)
			ctx.font = '50px Arial'
			ctx.fillText('Hello', 250, 250)
		}
		img.src =
			'https://cdn.shopify.com/s/files/1/0379/3692/2669/products/UTS127NATBLK_600x.jpg?v=1601910002?v=123'

		function resize() {
			img.setAttribute('width', 400)
		}

		window.addEventListener('resize', resize)
		return () => window.removeEventListener('resize', resize)
	}, [])
	return (
		<Box>
			<Box id="container">
				<canvas
					id="canvas"
					width="600"
					height="831"
					style={{ border: '1px solid' }}
				/>
			</Box>
		</Box>
	)
}
