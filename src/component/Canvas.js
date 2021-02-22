import { Box, FormLabel, Image, Input, Link, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { createImageObject } from '../utils/createImageObject'

export const Canvas = () => {
	const [canvasWidth, setCanvasWidth] = useState(600)
	const [isUpload, setIsUpload] = useState(null)

	useEffect(() => {}, [canvasWidth])

	useEffect(() => {
		if (isUpload) {
			// const downloadLink = document.querySelector('.downloadLink')
			// downloadLink.setAttribute('href', document.querySelector('.img').src)
		}

		// let canvas = document.getElementById('canvas')
		// let ctx = canvas.getContext('2d')
		// let img = new Image()

		// img.onload = () => {
		// 	canvas.setAttribute('border', '1px solid')
		// 	ctx.drawImage(img, 0, 0, 600, 831, 0, 0, canvasWidth, canvasWidth * 1.385)
		// 	ctx.font = `${canvasWidth / 8}px Arial`
		// 	ctx.fillText('Hello', canvasWidth / 3, canvasWidth / 2)
		// }
		// img.src =
		// 	'https://cdn.shopify.com/s/files/1/0379/3692/2669/products/UTS127NATBLK_600x.jpg?v=1601910002?v=123'
		function resize() {
			setCanvasWidth(window.innerWidth / 2)
		}

		window.addEventListener('resize', resize)
		return () => window.removeEventListener('resize', resize)
	}, [isUpload])

	return (
		<Box w="100%" border="1px solid" h="100vh">
			<canvas
				id="canvas"
				width={canvasWidth}
				height={canvasWidth * 1.385}
				style={{ border: '1px solid red' }}
			/>

			<Box
				id="container"
				d="flex"
				justifyContent="center"
				pos="absolute"
				bottom="5%"
				right="0"
				left="0"
				flexWrap="wrap"
			>
				<Stack spacing={3}>
					<Input
						className="imgInput"
						type="file"
						accept="image/*"
						onChange={(e) => {
							createImageObject(e, setIsUpload)
						}}
						w="300px"
						maxW="95vw"
					/>
					<Box>
						<FormLabel mb="0">輸入文字</FormLabel>
						<Input placeholder="輸入字樣" w="300px" maxW="95vw" />
					</Box>

					{isUpload ? (
						<Box d="flex" justifyContent="space-around">
							<Link
								className="downloadLink"
								download="download"
								onClick={() => {
									document.querySelector(
										'.downloadLink'
									).href = document.getElementById('canvas').toDataURL()
								}}
							>
								下載圖片
							</Link>
							<Box
								onClick={() => {
									const canvas = document.getElementById('canvas')
									let ctx = canvas.getContext('2d')
									ctx.drawImage('', 0, 0, 0, 0, 0, 0)
									document.querySelector('.imgInput').value = null
									setIsUpload((pre) => null)
								}}
							>
								清除圖片
							</Box>
						</Box>
					) : null}
				</Stack>
			</Box>
		</Box>
	)
}
