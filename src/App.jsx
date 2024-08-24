import { Routes, Route } from 'react-router-dom';
import SampleCRUD from './pages/SampleCRUD';
import ListProducts from './components/ListProducts/Products';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SampleCRUD />} />
      <Route path="/products" element={<ListProducts />} />
    </Routes>
  );
}

export default App;
