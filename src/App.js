import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LayoutD } from './component/Layout/layout';
import { Dashboard } from './component/dashboard';

function App() {
  return (
    <BrowserRouter>
        <Routes>
              <Route path="/" element={<LayoutD />}>
                <Route index element={<Dashboard />}></Route>
                <Route path="/category" element={''}></Route>
                <Route path="/products" element={''}></Route>
              </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
