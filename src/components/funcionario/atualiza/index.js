/* eslint-disable no-restricted-globals */
import React, {useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import { useParams, Link, useNavigate } from 'react-router-dom';



const theme = createTheme();

const Atualiza = () => {

  const {uuid} = useParams();

  const navigate = useNavigate();

  const[nomeCompleto, setNomeCompleto] = useState("");
  const[cpf, setCpf] = useState("");
  const[email, setEmail] = useState("");
  

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.put(`http://192.168.56.1:3001/atualizarcolaborador/${uuid}`, {
      nomeCompleto,
      cpf,
      email,
    })
    .then((response) => {
      console.log("Colaborador Atualizado com sucesso!", response.data);
      return navigate("/lista")
    })
    .catch((error) => {
      console.error("Erro ao Atualizar colaborador", error);
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <h2>Atualizando informações do {uuid}</h2>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="nomeCompleto"
              label="Nome Completo"
              onChange={(event) => setNomeCompleto(event.currentTarget.value)}
              name="nomeCompleto"
              autoComplete="nomeCompleto"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Endereço de Email"
              onChange={(event) => setEmail(event.currentTarget.value)}
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="cpf"
              label="CPF"
              onChange={(event) => setCpf(event.currentTarget.value)}
              name="cpf"
              autoComplete="cpf"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              component={Link} to="/lista"
              sx={{ mt: 3, mb: 2 }}
            >
              Atualizar
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Atualiza;