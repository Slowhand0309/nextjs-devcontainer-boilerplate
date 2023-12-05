'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  VStack,
} from '@chakra-ui/react';

const BasicPage = () => {
  return (
    <VStack minH="100vh" p={8} alignItems="flex-start">
      <Breadcrumb fontSize="xl">
        <BreadcrumbItem>
          <BreadcrumbLink href="/" color="blue.400">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Basic</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Heading as="h2" size="xl">
        Basic
      </Heading>
    </VStack>
  );
};

export default BasicPage;
