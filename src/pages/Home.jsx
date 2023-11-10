import { Box, Typography } from '@mui/material';
import ContactPhoneTwoToneIcon from '@mui/icons-material/ContactPhoneTwoTone';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectLoggedIn, selectUserName } from 'redux/auth/selectors';

const Home = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const name = useSelector(selectUserName);

  return (
    <section>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
          opacity: '0.6',
          mb: '20px',
        }}
      >
        <ContactPhoneTwoToneIcon
          sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, marginTop: '-3px' }}
        />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/goit-react-hw-08-phonebook"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            marginBottom: 0,
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          PhoneBook
        </Typography>
      </Box>

      {isLoggedIn ? (
        <Typography
          variant="h5"
          mb={'20px'}
          sx={{
            textAlign: 'center',
            fontWeight: '600',
            color: 'primary.light',
          }}
        >
          Welcome {name}! <br /> Visit your <Link to="contacts">Contacts</Link>!
        </Typography>
      ) : (
        <Typography
          variant="h5"
          mb={'20px'}
          sx={{
            textAlign: 'center',
            fontWeight: '600',
            color: 'primary.light',
          }}
        >
          All your contacts at one place. <br />
          <Link to="login">Login</Link> | <Link to="register">Sign up</Link>
        </Typography>
      )}
    </section>
  );
};

export default Home;
