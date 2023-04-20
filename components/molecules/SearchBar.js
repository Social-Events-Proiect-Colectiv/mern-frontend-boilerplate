import React, { useState, useEffect } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const SearchBar = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const onPress = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Input />
      <Button label="Press me" className="button" />
      <Button label={count} className="button" onPress={onPress} />
    </>
  );
};

export default SearchBar;
