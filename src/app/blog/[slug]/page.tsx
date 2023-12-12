
import Link from 'next/link'
import {
 Box, Heading, Text, Flex
} from '@chakra-ui/react';


function convertToUtf8(input: string): string {
  return decodeURIComponent(input); 
}

export default function Page({ params }: { params: { slug: string } }) {
    return (
      <Box maxW="800px" m="0 auto" p={5}>
      <Flex align="center">
                      <Box flex={1}>
                          <Heading as="h1" size="2xl">My Post: {convertToUtf8(params.slug)}</Heading>
                          <Text mt={4}>
                              This is a simple landing page built with Chakra UI and TypeScript.
                          </Text>
                          <Link href="/">Return Home</Link>
                      </Box>
                  </Flex>
      </Box>
    
 )
  }