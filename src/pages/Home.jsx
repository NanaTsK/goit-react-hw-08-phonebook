import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectLoggedIn, selectUserName } from 'redux/auth/selectors';

const Home = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const name = useSelector(selectUserName);

  return (
    <section>
      <Typography
        variant="h3"
        mb={'20px'}
        sx={{ textAlign: 'center', fontWeight: '600', opacity: '0.4' }}
      >
        PhoneBook App.
      </Typography>
      {isLoggedIn ? (
        <Typography
          variant="h4"
          mb={'20px'}
          sx={{ textAlign: 'center', fontWeight: '600', color: '#4db6ac' }}
        >
          Welcome {name}! <br /> Visit your <Link to="contacts">contacts</Link>!
        </Typography>
      ) : (
        <Typography
          variant="h4"
          mb={'20px'}
          sx={{ textAlign: 'center', fontWeight: '600', color: '#4db6ac' }}
        >
          All your contacts at one place. <br />
          <Link to="login">Login</Link> | <Link to="register">Sign up</Link>
        </Typography>
      )}
    </section>
  );
};

export default Home;
