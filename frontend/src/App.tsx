import { Layout } from 'antd';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import AppHeader from './components/Header';
import Sidebar from './components/Sidebar';

const { Content } = Layout;

export default function App() {
  return (
    <div style={{ width: '100%' }}>
      <BrowserRouter>
        <Layout style={{ minHeight: '100vh', display: 'flex' }}>
          <Sidebar />
          <Layout style={{ flex: 1 }}>
            <AppHeader />
            <Content style={{ margin: '16px' }}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/posts/:id" element={<BlogDetail />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
