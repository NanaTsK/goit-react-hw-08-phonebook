import { AppBar, Container, Toolbar } from '@mui/material';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { teal } from '@mui/material/colors';

export const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: teal[700],
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Navigation />
          <AuthNav />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
