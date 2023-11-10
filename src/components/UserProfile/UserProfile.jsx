import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail, selectUserName } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/thunks';

export const UserProfile = () => {
  const dispatch = useDispatch();

  const name = useSelector(selectUserName);
  const email = useSelector(selectUserEmail);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Avatar
          sx={{
            bgcolor: 'primary.light',
            marginBottom: '16px',
            width: 56,
            height: 56,
          }}
        >
          {name?.at(0)?.toUpperCase()}
        </Avatar>
        <Typography variant="h5">
          <b>Name:</b> {name}
        </Typography>
        <Typography variant="h5">
          <b>Email:</b> {email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="large"
          variant="contained"
          onClick={() => dispatch(logOut())}
        >
          Logout
        </Button>
      </CardActions>
    </Card>
  );
};
