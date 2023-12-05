'use client';

import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Button, Heading, Link, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  return (
    <VStack w="full" h="100vh" spacing={6}>
      <VStack
        w="full"
        h="30%"
        alignItems="center"
        justify="center"
        bg="linear-gradient(130deg, rgba(22, 192, 237, 0.5), rgba(150, 131, 206, 0.5))"
      >
        <Heading>Title</Heading>
        <Link href="https://nextjs.org/docs" isExternal>
          Nextjs Document <ExternalLinkIcon mx="2px" />
        </Link>
        <Link href="https://chakra-ui.com/getting-started" isExternal>
          Chakra UI Document <ExternalLinkIcon mx="2px" />
        </Link>
      </VStack>
      <Heading as="h4" size="md">
        Examples
      </Heading>
      <Button
        colorScheme="teal"
        size="lg"
        onClick={() => router.push('/basic')}
      >
        Basic
      </Button>
    </VStack>
  );
}
