'use client'

import { RecoilRoot } from 'recoil'
import { ChakraProvider } from '@chakra-ui/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <RecoilRoot>
          <ChakraProvider >
            {children}
          </ChakraProvider></RecoilRoot>
      </body>
    </html>
  )
}
