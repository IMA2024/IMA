import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

export default function AgentCards2() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://media.istockphoto.com/id/1483001877/photo/telemarketing-call-center-and-portrait-of-black-woman-and-ecommerce-worker-with-crm-work.jpg?b=1&s=170667a&w=0&k=20&c=sRZX0eLycmXUMlIlE8DV_bISfGQGweCDvbpFKdgKdzA="
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Lilly Stanford</Text>
        <Badge color="pink" variant="light">
         Agent
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        Hello Good Morning! I am Lilly from scalable solutions. How may I help you sir/madam?
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Contact Agent
      </Button>
    </Card>
  );
}