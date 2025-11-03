import ProductsList from './components/ProductsList';
import Cart from './components/Cart';
import './App.css';

function App() {
    return (
        <div className="App">
            <h2>🛒 Shopping Cart</h2>
            <hr />
            <ProductsList />
            <hr />
            <Cart />
        </div>
    );
    <div></div>;
}

export default App;