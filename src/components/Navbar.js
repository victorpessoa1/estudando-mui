import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Button } from '@mui/material';


const Navbar = () => {
    return (
        <AppBar position="static">
        <Toolbar>
            <Button component={Link} to="/cadastra" color="inherit">Cadastrar</Button>
            <Button component={Link} to="/lista" color="inherit">Listar</Button>
        </Toolbar>
      </AppBar>
        );
}

export default Navbar;