import { Route, Routes } from 'react-router-dom';
import Layout from './base/layout/Layout';
import Home from './features/Home/Home';
import DatasetInfo from './features/DatasetInfo/DatasetInfo';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dataset-info" element={<Home />} />
        <Route path="/dataset-info/:title" element={<DatasetInfo />} />

        <Route path="*" element={<h1>Not Found!</h1>} />
      </Routes>
    </Layout>
  );
}

export default App;
