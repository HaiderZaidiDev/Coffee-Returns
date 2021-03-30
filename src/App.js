import './App.css';
import Conversion from './Conversion'

var starbucks = {
  coffee_price: '2.10'
}
function App() {
  return (
    <div>
      <Conversion price={starbucks.coffee_price}/>
    </div>
  );
}

export default App;
