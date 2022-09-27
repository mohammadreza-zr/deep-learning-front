import { Route, Routes } from 'react-router-dom';
import Layout from './base/layout/Layout';
import DatasetList from './features/DatasetList/DatasetList';
import DatasetInfo from './features/DatasetInfo/DatasetInfo';
import { Loading } from './base/components/Loading/Loading';
import { useAppSelector } from './base/hooks';
import Login from './features/Login/Login';
import AdminPanel from './features/Admin/AdminPage';
import Register from './features/Register/Register';

function App() {
  const loadingStatus = useAppSelector((state) => state.loading.status);
  const userRole = useAppSelector((state) => state.auth.role);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DatasetList />} />
        <Route path="/datasets" element={<DatasetList />} />
        <Route path="/datasets/:title" element={<DatasetInfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {userRole === 'ADMIN' || userRole === 'SUPER_ADMIN' ? (
          <>
            <Route path="/admin" element={<AdminPanel />} />
          </>
        ) : null}

        <Route path="*" element={<h1>Not Found!</h1>} />
      </Routes>
      {loadingStatus && <Loading />}
    </Layout>
  );
}

export default App;
