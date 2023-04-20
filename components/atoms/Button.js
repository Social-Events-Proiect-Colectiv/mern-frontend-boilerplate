import React from 'react';

const Button = ({ label = 'Default', onPress }) => {
  return <button onClick={onPress}>{label}</button>;
};

export default Button;
