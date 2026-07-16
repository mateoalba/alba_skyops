import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { OperacionesPage } from '../pages/OperacionesPage';
import { ContactoPage } from '../pages/ContactoPage';
import { LoginPage } from '../pages/LoginPage';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/operaciones" element={<OperacionesPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/*
          Proximo entregable:
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="aeronaves" element={<AeronavesPage />} />
              ...
            </Route>
          </Route>
        */}
      </Routes>
    </BrowserRouter>
  );
}