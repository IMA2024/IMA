import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

export default function AgentCards() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://plus.unsplash.com/premium_photo-1661515904404-362b8c4f374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Anna Hathway</Text>
        <Badge color="pink" variant="light">
         Agent
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        Hello Good Morning! I am Anna from scalable solutions. How may I help you sir/madam?
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Contact Agent
      </Button>
    </Card>
  );
}