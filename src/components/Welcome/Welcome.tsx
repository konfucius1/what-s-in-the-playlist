import { Title, Text } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        What&lsquo;s in the{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'cyan', to: 'blue' }}>
          Pack?
        </Text>
      </Title>
    </>
  );
}
