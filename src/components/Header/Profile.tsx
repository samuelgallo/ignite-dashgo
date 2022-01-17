import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Samuel Gallo</Text>
          <Text color="gray.300" fontSize="small">
            samuel@samuelgallo.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Samuel Gallo"
        src="https://avatars.githubusercontent.com/u/3643301?v=4"
      />
    </Flex>
  );
}
