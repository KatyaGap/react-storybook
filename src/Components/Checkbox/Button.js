import React from 'react';
import {Button} from '@mui/material';
import PropTypes from 'prop-types';

function MyButton({
  onClick,
  variant,
  type,
  children,
	color,
	size,
}) {
  return (
    <Button type={type} onClick={onClick} color={color} variant={variant} size={size}>
      {children} 
    </Button>
  );
}
Button.PropTypes = {
	variant: PropTypes.string,
	type: PropTypes.string,
	color: PropTypes.string,
	width: PropTypes.number,
	size: PropTypes.string,
	onClick: PropTypes.func,
}

export default MyButton;
