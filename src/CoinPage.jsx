import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './navigation';
import  Container  from 'react-bootstrap/Container';
// import Container from 'react-bootstrap/Container';
import listCoins from './listCoins';
import coinPriceSection from './coinPriceSection';
import coinPriceChange from './coinPriceChange';
function App(){
  return <Container>
    <Navigation />
    <listCoins />
    <coinPriceSection />
  </Container>
}
export default App;