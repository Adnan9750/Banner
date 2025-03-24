import React, { useEffect } from 'react'
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
import AluminiumDoorsletterDetail from './components/Aluminium/AluminiumDoorsletterDetail';
import Profiel2Detail from './components/Profiel2Detail';
import Profiel3Detail from './components/Profiel3Detail';
import Profiel3LuxDetail from './components/Profiel3LuxDetail';
import Profiel4Detail from './components/Profiel4Detail';
import Profiel5Detail from './components/Profiel5Detail';
import Profiel5LuxDetail from './components/Profiel5LuxDetail';
import API from './API';

const App = () => {

  useEffect(() => {
    API.get('/')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, [])
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Dashboard />} />
              <Route path='/aluminium-doosletter' element={<AluminiumDoosletter />} />
              <Route path='/aluminium-doosletter-detail' element={<AluminiumDoorsletterDetail />} />
              <Route path='/profiel2' element={<Profiel2 />} />
              <Route path='/profiel2Detail' element={<Profiel2Detail />} />
              <Route path='/profiel3' element={<Profiel3 />} />
              <Route path='/profiel3Detail' element={<Profiel3Detail />} />
              <Route path='/profiel3Lux' element={<Profiel3Lux />} />
              <Route path='/profiel3LuxDetail' element={<Profiel3LuxDetail />} />
              <Route path='/profiel4' element={<Profiel4 />} />
              <Route path='/profiel4Detail' element={<Profiel4Detail />} />
              <Route path='/profiel5' element={<Profiel5 />} />
              <Route path='/profiel5Detail' element={<Profiel5Detail />} />
              <Route path='/profiel5Lux' element={<Profiel5Lux />} />
              <Route path='/profiel5LuxDetail' element={<Profiel5LuxDetail />} />
              <Route path='/userInfo' element={<UserInfo />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </Router>
    </>
  )
}

export default App
