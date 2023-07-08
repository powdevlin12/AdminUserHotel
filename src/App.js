import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import './App.css';
import Login from './pages/auth/login';

import { useStateContext } from './contexts/ContextProvider';
import Hotel from './pages/Hotels';
import { HotelProvider } from './contexts/HotelProvider';
import PrivateRoute from './components/PrivateRoute';
import { get } from './utils/localstorage';
import { useAuthContext } from './contexts/AuthProvider';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={(<PrivateRoute><Employees /></PrivateRoute>)} />
          {/* auth */}
          <Route path="/login" element={(<Login />)} />

          <Route path="/users" element={<PrivateRoute><Employees /></PrivateRoute>} />

          <Route path="/hotels" element={<HotelProvider><PrivateRoute> <Hotel /> </PrivateRoute></HotelProvider>} />

        </Routes>

      </BrowserRouter>
    </div>
  );
};

export default App;
