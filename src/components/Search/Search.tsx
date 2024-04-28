import { Button, Container, Flex, Input } from '@mantine/core';
import { useState } from 'react';
import classes from './Search.module.css';

export function Search() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = async () => {
    console.log(inputValue);
  };

  return (
    <Container>
      <Flex m="xl" align="center" justify="space-between" gap="md">
        <Input className={classes.searchInput} onChange={handleInputChange} />
        <Button onClick={handleButtonClick}>Search</Button>
      </Flex>
    </Container>
  );
}
