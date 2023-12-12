
'use client'

import {
    useColorMode, Box, Heading, Text, Button, Flex, Stack, Switch

} from '@chakra-ui/react';

interface Props { }

import Link from 'next/link'

const LandingPage: React.FC<Props> = () => {
    const { colorMode, toggleColorMode } = useColorMode()



    return (
        <Box maxW="800px" m="0 auto" p={5}>
            {/* Hero section */}
            <Switch
                position="fixed"
                top={4}
                right={4}
                color="green"
                isChecked={colorMode === 'dark'}
                onChange={toggleColorMode}
            />
            <Flex align="center">
                <Box flex={1}>
                    <Heading as="h1" size="2xl">Welcome to my app!</Heading>
                    <Text mt={4}>
                        This is a simple landing page built with Chakra UI and TypeScript.
                    </Text>
                    <Button colorScheme="blue" mt={4}>
                        Get Started
                    </Button>
                </Box>

            </Flex>

            {/* Feature section */}
            <Stack spacing={8} direction={{ base: 'column', md: 'row' }} mt={10}>
                <Box>
                    <Text fontSize="xl" fontWeight="bold">Feature 1</Text>
                    <Text>Description of feature 1,<Link href="/blog/readme">read more...</Link></Text>
                </Box>
                <Box>
                    <Text fontSize="xl" fontWeight="bold">Feature 2</Text>
                    <Text>Description of feature 2, <Link href="/blog/product">read more...</Link></Text>
                </Box>
                <Box>
                    <Text fontSize="xl" fontWeight="bold">Feature 3</Text>
                    <Text>Description of feature 3,<Link href="/blog/about">read more...</Link></Text>
                </Box>
            </Stack>

        </Box>
    );
}

export default LandingPage;
