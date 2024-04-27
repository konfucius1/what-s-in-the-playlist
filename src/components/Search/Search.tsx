import { Button, Container, Flex, Input } from '@mantine/core';
import classes from './Search.module.css';

export function Search() {
  return (
    <Container>
      <Flex m="xl" align="center" justify="space-between" gap="md">
        <Input className={classes.searchInput} />
        <Button>Search</Button>
      </Flex>
    </Container>
  );
}
