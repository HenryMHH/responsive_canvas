import { Box, FormLabel, Input, Link, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { createImageObject } from '../utils/createImageObject'
import { resetImageObject } from '../utils/resetImageObject'

export const Canvas = () => {
	const [canvasWidth, setCanvasWidth] = useState(600)
	const [isUpload, setIsUpload] = useState(null)

	useEffect(() => {
		window.addEventListener('resize', print)
		return () => window.removeEventListener('resize', print)
	})

	useEffect(() => {
		console.log(456)
		document.querySelector('.imgInput').addEventListener('change', print)
		return () =>
			document.querySelector('.imgInput').removeEventListener('change', print)
	}, [])

	useEffect(() => {
		document.querySelector('.wording').addEventListener('keyup', print)
		return () =>
			document.querySelector('.wording').removeEventListener('keyup', print)
	}, [])

	useEffect(() => {
		if (window.innerWidth < 600) {
			setCanvasWidth(window.innerWidth)
		}
	}, [])

	function print() {
		let input = document.querySelector('.imgInput')
		let wording = document.querySelector('.wording')
		console.log(canvasWidth)

		if (window.innerWidth > canvasWidth) {
			setCanvasWidth(canvasWidth)
			createImageObject(input, setIsUpload, canvasWidth, wording.value)
		}
		if (window.innerWidth > canvasWidth && window.innerWidth < 600) {
			setCanvasWidth(window.innerWidth)
			createImageObject(input, setIsUpload, window.innerWidth, wording.value)
		}
		if (window.innerWidth < canvasWidth) {
			setCanvasWidth(window.innerWidth)
			createImageObject(input, setIsUpload, window.innerWidth, wording.value)
		}
	}

	return (
		<Box w="100%" h="100vh">
			<canvas
				id="canvas"
				width={canvasWidth}
				height={canvasWidth * 1.385}
				style={{ margin: '0 auto' }}
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
						<Input
							placeholder="輸入字樣"
							w="300px"
							maxW="95vw"
							type="text"
							maxLength="4"
							className="wording"
						/>
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
