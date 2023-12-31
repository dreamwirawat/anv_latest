import type { AppProps } from 'next/app'

import { StyledEngineProvider } from '@mui/material'
import React from 'react'
import Demo from './Demo'
import { Box, Card, CardBody, Container, Flex, Heading, SimpleGrid,Text, VStack } from '@chakra-ui/react'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<React.StrictMode>
			<StyledEngineProvider injectFirst >
					<Box bg="#171f23" minHeight="100vh" p={5}>
						<Container display={'flex'} justifyContent={'center'} marginTop={50}>
							<Box flexDirection={'column'} >
								<Demo />
								<Text color={'white'} fontSize={[25]} display={'flex'} justifyContent={'center'}>Aniversary 1 year</Text>
							</Box>
						</Container>
					</Box>
			</StyledEngineProvider>
		</React.StrictMode>
	)
}
