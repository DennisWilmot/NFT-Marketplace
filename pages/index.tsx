import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import NextLink from 'next/link';
import { Container, Heading, Flex, Stack, Button } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Container maxW={"1200px"}>
      <Flex h={"80vh"} alignItems={"center"} 
      justifyContent={"center"}>
        <Stack>
          <Heading>Marketplace</Heading>
          <Button
          as={NextLink} href='/buy'>Shop Sanctum NFTs</Button>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Home;
