import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Link} from 'react-router-dom'
import { Toolbar, Button } from '@mui/material';
import { useState, useEffect } from "react";


const Exibe = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    fetch('http://192.168.56.1:3001/colaboradores')
      .then(response => response.json())
      .then(data => setData(data))
      .catch((error) => console.error("Erro ao buscar os colaboradores", error));
  }

  useEffect(() => {
    getData();
  }, []);

  const deletar = (uuid) => {
    fetch(`http://192.168.56.1:3001/deletarcolaborador/${uuid}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(() => {
      setData(data.filter((data) => data.uuid !== uuid));
      console.log("Colaborador deletado com sucesso!");
      
    })
    .catch(error => {
      console.error("Erro ao deletar colaborador", error);
    })
  };


return (
  <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Uuid</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>CPF</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((colaborador,key) => (
            <TableRow key={key}>
              <TableCell>{colaborador.uuid}</TableCell>
              <TableCell>{colaborador.nomeCompleto}</TableCell>
              <TableCell>{colaborador.email}</TableCell>
              <TableCell>{colaborador.cpf}</TableCell>
              <TableCell>
                <Toolbar>
                  <Button component={Link} to={`/atualiza/${colaborador.uuid}`} color="warning">Editar</Button>
                  <Button color = "error" onClick={() => deletar(colaborador.uuid)}>Excluir</Button>
                </Toolbar>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
);
}

export default Exibe;