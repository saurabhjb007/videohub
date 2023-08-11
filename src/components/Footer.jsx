import { Box, Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} p={16} color={'white'} minH={40}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={4}>
          <Heading size={'md'} textTransform={'uppercase'} textAlign={['center',"left"]} justifyContent={'center'}>
            Login to Watch Amazing videos
          </Heading>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'} size={'lg'}>
            VIDEO HUB
          </Heading>
          <Text>@all rights reserved</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'blank'} href="https://www.youtube.com/">
              Youtube
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'blank'} href="https://www.instagram.com/">
              Instagram
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'blank'} href="https://www.github.com/">
              Github
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
