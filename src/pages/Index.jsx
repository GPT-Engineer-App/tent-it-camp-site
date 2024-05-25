import { Container, Box, VStack, Text, Heading, Image, Button, IconButton, HStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      <Box bg="teal.500" color="white" p={6} borderRadius="md" textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to IT Camp
        </Heading>
        <Text fontSize="lg">Your ultimate destination for IT training and adventure</Text>
      </Box>

      <VStack spacing={8} mt={8}>
        <Box textAlign="center">
          <Image src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZW50fGVufDB8fHx8MTcxNjYxNjA1OHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Tent" borderRadius="md" />
          <Text fontSize="xl" mt={4}>
            Join us for an immersive IT experience in the great outdoors!
          </Text>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Our Services
          </Heading>
          <Text>We offer a variety of IT training programs, workshops, and outdoor activities to help you learn and grow in a fun and engaging environment.</Text>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Contact Us
          </Heading>
          <Text>If you have any questions or would like to learn more, feel free to reach out to us!</Text>
          <Button colorScheme="teal" mt={4}>
            Get in Touch
          </Button>
        </Box>

        <HStack spacing={4} justifyContent="center">
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
