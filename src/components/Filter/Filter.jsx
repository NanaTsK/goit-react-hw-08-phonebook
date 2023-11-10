import { Box, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/slice';
import { getHoverStyle } from '../../theme/theme';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Box mb={'10px'}>
      <TextField
        label="🔍Search contact"
        placeholder="Enter name"
        sx={getHoverStyle('primary.light')}
        onChange={({ target: { value } }) => {
          dispatch(setFilter(value));
        }}
        fullWidth
      />
    </Box>
  );
};
