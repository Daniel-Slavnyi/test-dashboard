import { Route, Routes } from 'react-router-dom';
import Layout from 'pages/Layout/Layout';
import Dashboard from './Dashboard/Dashboard';
import Product from './Product/Product';
import Customer from './Customer/Customer';
import Income from './Income/Income';
import Promote from './Promote/Promote';
import Help from './Help/Help';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="product" element={<Product />} />
        <Route path="customers" element={<Customer />} />
        <Route path="income" element={<Income />} />
        <Route path="promote" element={<Promote />} />
        <Route path="help" element={<Help />} />
      </Route>
    </Routes>
  );
};
