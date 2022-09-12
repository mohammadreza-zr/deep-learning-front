import { Route, Routes } from 'react-router-dom';
import Layout from './base/layout/Layout';
import Home from './features/Home/Home';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
