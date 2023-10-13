import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'src/components';
import { LoginPage, LogoutPage, RegisterPage } from './views';

const Auth: FC = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="logout" element={<LogoutPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </Layout>
  );
};

export { Auth };
