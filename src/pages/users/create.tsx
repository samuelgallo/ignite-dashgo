import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Stack,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
  return (
    <Box>
      <Head>
        <title>Create User</title>
      </Head>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
          <Heading size="lg" fontWeight="normal">
            Create user
          </Heading>
          <Divider my="6" borderColor="gray.700" />

          <Stack spacing="8" direction={["column", "row"]}>
            <SimpleGrid minChildWidth="240px" p={["4", "8"]} w="100%">
              <Input name="name" label="Full name" mb="8" />
              <Input name="email" type="email" label="E-mail" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" p={["4", "8"]} w="100%">
              <Input name="password" type="password" label="Password" mb="8" />
              <Input
                name="password_confirmation"
                type="password"
                label="Password confirmation"
              />
            </SimpleGrid>
          </Stack>

          <Flex mt={["4", "8"]} justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancel
                </Button>
              </Link>

              <Link href="" passHref>
                <Button colorScheme="pink">Save</Button>
              </Link>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
