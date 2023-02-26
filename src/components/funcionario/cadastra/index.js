/* eslint-disable no-restricted-globals */
import React, {useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import {  useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function Cadastra() {

  const[nomeCompleto, setNomeCompleto] = useState("");
  const[cpf, setCpf] = useState("");
  const[email, setEmail] = useState("");
  const[senha, setSenha] = useState("");

  const navigate = useNavigate();
  

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://192.168.56.1:3001/cadastrarcolaborador", {
      nomeCompleto,
      cpf,
      email,
      senha,
    })
    .then((response) => {
      console.log("Colaborador cadastrado com sucesso!", response.data);
      return navigate("/lista")
    })
    .catch((error) => {
      console.error("Erro ao cadastrar colaborador", error);
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="senha"
              label="Senha"
              onChange={(event) => setSenha(event.currentTarget.value)}
              type="password"
              id="senha"
              autoComplete="senha"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Cadastrar
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}