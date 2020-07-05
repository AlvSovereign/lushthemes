const buttonBase = {
  borderColor: 'black',
  borderRadius: 0,
  borderStyle: 'solid',
  borderWidth: '1px',
  boxShadow: 1,
  cursor: 'pointer',
  px: 5,
  transition: 'background-color 0.1s, box-shadow 0.1s',
  width: 'auto',
  '&:hover': {
    boxShadow: 0,
  },
  '&:active': {
    boxShadow: 'none',
  },
};

const Button = {
  primary: {
    ...buttonBase,
    backgroundColor: 'white',
    '&:hover': {
      boxShadow: 0,
    },
    '&:active': {
      backgroundColor: 'silver',
      borderColor: 'silver',
    },
  },
  secondary: {
    ...buttonBase,
    backgroundColor: 'black',
    '&:hover': {
      backgroundColor: 'olive',
      borderColor: 'olive',
      boxShadow: 0,
    },
    '&:active': {
      backgroundColor: 'grey',
      borderColor: 'grey',
      boxShadow: 'none',
    },
  },
};

export default Button;
