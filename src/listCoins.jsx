import Table from 'react-bootstrap/Table';

function listCoins() {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>tn</th>
          <th>Name</th>
          <th>price</th>
          <th>1h</th>
          <th>24h</th>
          <th>7h</th>
          <th>1Volume(24h)</th>
          <th>Licviditi</th>
          <th>MarketCap</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default listCoins;