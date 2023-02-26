import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState, useEffect } from "react";
import "./styles.css";


export default function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const resp = await fetch('https://api.sampleapis.com/coffee/hot');
    const data = await resp.json();
    setData(data.slice(1, 4));
  }

  useEffect(() => {
    getData();
  }, []);

return (
  <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Café</TableCell>
            <TableCell>Ingredientes</TableCell>
            <TableCell>Foto</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((cafe,key) => (
            <TableRow key={key}>
              <TableCell>{cafe.title}</TableCell>
              <TableCell> | {cafe.ingredients.map((ingrediente) => (ingrediente + ' | '))} <br></br></TableCell>
              <TableCell>{<img id='fotocafe' src={ cafe.image } alt="imagem de representação do cafe"/>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
);
}
////////////////////////////////////////////////////////////////

// function preventDefault(event) {
//   event.preventDefault();
// }

// export default function Orders() {
//   return (
    // <React.Fragment>
    //   <Title>Recent Orders</Title>
    //   <Table size="small">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Café</TableCell>
    //         <TableCell>Ingredientes To</TableCell>
    //         <TableCell>Foto</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {data.map((cafe,key) => (
    //         <TableRow key={key}>
    //           <TableCell>{cafe.title}</TableCell>
    //           <TableCell>{cafe.ingredients}</TableCell>
    //           <TableCell align="right">{`<img width='20px' height='10px'
    //         src={ cafe.image } alt="imagem de representação do cafe" />`}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    //   <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
    //     See more orders
    //   </Link>
    // </React.Fragment>
//   );
// }