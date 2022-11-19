import React from 'react';
import { Layout } from '../containers/Layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../Pages/Login/Login';
import { Signup } from '../Pages/Signup/Signup';
import { Home } from '../Pages/Home/Home';
import { NotFound } from '../Pages/NotFound/NotFound';
import { CarDetails } from '../Pages/CarDetails/CarDetails';

const App = () => {
	return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home/>} /> 
            <Route exact path="/login" element={<Login/>} /> 
            <Route exact path="/signup" element={<Signup/>} /> 
            <Route exact path="/cars/:slug" element={<CarDetails/>} /> 
            <Route exact path="*" element={<NotFound/>} /> 
          </Routes>
        </Layout>
      </BrowserRouter>
	);
}
const About = () => {
  return <p>ESTA ES LA PAG DE ABOUT</p>;
}

export { App };