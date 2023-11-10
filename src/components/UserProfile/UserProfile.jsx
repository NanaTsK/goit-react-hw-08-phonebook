import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { teal } from '@mui/material/colors';
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
            bgcolor: teal[300],
            marginBottom: '16px',
            width: 60,
            height: 60,
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
          sx={{
            bgcolor: teal[700],
          }}
          onClick={() => dispatch(logOut())}
        >
          Logout
        </Button>
      </CardActions>
    </Card>
  );
};
