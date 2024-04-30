import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { IconCookie, IconVideo, IconPlaylistAdd } from '@tabler/icons-react';
import classes from './FeaturesCards.module.css';
import { useNavigate } from 'react-router-dom';

const mockdata = [
  {
    title: 'YouTube Playlist Utilities',
    description: 'Just extract video titles from a playlist for now',
    icon: IconPlaylistAdd,
    path: '/playlist-tool',
  },
  {
    title: 'Video to GIF Converter',
    description: 'Sandbox with some WASM and FFMPEG. Built for memers by memers',
    icon: IconVideo,
    path: '/video-to-gif-converter',
  },
  {
    title: 'In the works 🚧',
    description: 'Learning and building new things, everyday (not really)',
    icon: IconCookie,
  },
];

export function FeaturesCards() {
  const navigate = useNavigate();
  const theme = useMantineTheme();

  function handleClick(path: string) {
    navigate(path);
  }

  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
      onClick={() => handleClick(feature.path)}
    >
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.blue[6]}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg">
          Studiophone
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Random YouTube and Video toolings I make for fun.
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when
        hunger drives it to try biting a Steel-type Pokémon.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
