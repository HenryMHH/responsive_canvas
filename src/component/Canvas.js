import { Box, FormLabel, Image, Input, Link, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { createImageObject } from '../utils/createImageObject'
import { resetImageObject } from '../utils/resetImageObject'

export const Canvas = () => {
	const [canvasWidth, setCanvasWidth] = useState(600)
	const [isUpload, setIsUpload] = useState(null)
	const [nw, setnw] = useState(window.innerWidth)

	useEffect(() => {
		if (isUpload) {
			// const downloadLink = document.querySelector('.downloadLink')
			// downloadLink.setAttribute('href', document.querySelector('.img').src)
		}

		window.addEventListener('resize', print)
		return () => window.removeEventListener('resize', print)
	}, [isUpload])

	useEffect(() => {
		document.querySelector('.imgInput').addEventListener('change', print)
		return () =>
			document.querySelector('.imgInput').removeEventListener('change', print)
	}, [])

	function print() {
		let input = document.querySelector('.imgInput')
		setCanvasWidth(window.innerWidth * 0.9)

		createImageObject(input, setIsUpload, window.innerWidth * 0.9)
	}

	return (
		<Box w="100%" h="100vh">
			<canvas
				id="canvas"
				width={canvasWidth}
				height={canvasWidth * 1.385}
				style={{ border: '1px solid red', margin: '0 auto' }}
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
									const input = document.querySelector('.imgInput')
									resetImageObject(canvas, input, setIsUpload)
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
