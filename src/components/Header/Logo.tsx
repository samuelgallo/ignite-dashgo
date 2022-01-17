import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      width="64"
    >
      dashgo
      <Text color="pink.500" as="span">
        .
      </Text>
    </Text>
  );
}
