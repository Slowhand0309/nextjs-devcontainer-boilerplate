'use client';

import { ChakraProvider } from '@chakra-ui/react';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
