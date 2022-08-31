import React from 'react';
import {Button} from '@mui/material'

function MyButton({
  onClick,
  variant,
  size,
  type = 'button',
  children,
	color
}) {
  return (
    <Button type={type} onClick={onClick} color={color} size={size} variant={variant}>
      {children}
    </Button>
  );
}

export default MyButton;
