import React from 'react';
import { Layout } from '../containers/Layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../Pages/Login/Login';
import { Signup } from '../Pages/Signup/Signup';
import { Home } from '../Pages/Home/Home';


const App = () => {
	return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home/>} /> 
            <Route exact path="/" element={<About/>} /> 
            <Route exact path="/login" element={<Login/>} /> 
            <Route exact path="/signup" element={<Signup/>} /> 
          </Routes>
        </Layout>
      </BrowserRouter>
	);
}
const About = () => {
  return <p>ESTA ES LA PAG DE ABOUT</p>;
}

export { App };