import logo from './logo.svg';
import './App.css';
import {AppBar, Toolbar, Button, Typography, Stack} from '@mui/material'
import AppleIcon from '@mui/icons-material/Apple';
import './NavBar.css'

function App() {
  return (
  <>
  <AppBar position='static'>
          <Toolbar>
            <Button variant="contained">
              <AppleIcon />
              </Button>

              <Typography variant='h6' component='div' className='nav-element' sx={{flexGrow: 1}}>
                  AppCompat
              </Typography>

              <Stack direction='row' spacing={2}>
              <Button  variant="contained"  className='nav'>
              Features
              </Button>

              <Button  variant="contained"  className='nav'>
              Pricing
              </Button>

              <Button  variant="contained"  className='nav'>
              About
              </Button>


              <Button  variant="contained"  className='nav'>
              Login
              </Button>
              </Stack>
          </Toolbar>
      </AppBar>
  </>
  );
}

export default App;
