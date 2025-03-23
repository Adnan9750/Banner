import React from 'react'
import Navbar from './components/common/Navbar'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'
import Dashboard from './pages/Dashboard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './utils/Layout'
import AluminiumDoosletter from './pages/AluminiumDoosletter';
import UserInfo from './components/common/UserInfo';
import Profiel2 from './pages/Profiel2';
import Profiel3 from './pages/Profiel3';
import Profiel3Lux from './pages/Profiel3Lux';
import Profiel4 from './pages/Profiel4';
import Profiel5 from './pages/Profiel5';
import Profiel5Lux from './pages/Profiel5Lux';

const App = () => {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Dashboard />} />
              <Route path='/aluminium-doosletter' element={<AluminiumDoosletter />} />
              <Route path='/profiel2' element={<Profiel2 />} />
              <Route path='/profiel3' element={<Profiel3 />} />
              <Route path='/profiel3Lux' element={<Profiel3Lux />} />
              <Route path='/profiel4' element={<Profiel4 />} />
              <Route path='/profiel5' element={<Profiel5 />} />
              <Route path='/profiel5Lux' element={<Profiel5Lux />} />
              <Route path='/userInfo' element={<UserInfo />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </Router>
    </>
  )
}

export default App
