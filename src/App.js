import { Canvas } from './component/Canvas'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
	return (
		<ChakraProvider>
			<div className="App">
				<Canvas />
			</div>
		</ChakraProvider>
	)
}

export default App
