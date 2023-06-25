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
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>

        <Routes>
          {/* auth */}
          <Route path="/login" element={(<Login />)} />

          {/* dashboard  */}
          <Route path="/" element={(<Ecommerce />)} />
          <Route path="/ecommerce" element={(<Ecommerce />)} />

          {/* pages  */}
          <Route path="/orders" element={<Orders />} />
          <Route path="/users" element={<Employees />} />
          <Route path="/customers" element={<Customers />} />

          <Route path="/hotels" element={<HotelProvider> <Hotel /> </HotelProvider>} />

          {/* apps  */}
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/color-picker" element={<ColorPicker />} />

          {/* charts  */}
          <Route path="/line" element={<Line />} />
          <Route path="/area" element={<Area />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/pie" element={<Pie />} />
          <Route path="/financial" element={<Financial />} />
          <Route path="/color-mapping" element={<ColorMapping />} />
          <Route path="/pyramid" element={<Pyramid />} />
          <Route path="/stacked" element={<Stacked />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
};

export default App;
