import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

export default function AgentCards3() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://plus.unsplash.com/premium_photo-1661495862613-9fdbcd14a1e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhbGwlMjBjZW50ZXIlMjBhZ2VudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Andrew Henry</Text>
        <Badge color="pink" variant="light">
         Agent
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        Hello Good Morning! I am Andrew from scalable solutions. How may I help you sir/madam?
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Contact Agent
      </Button>
    </Card>
  );
}