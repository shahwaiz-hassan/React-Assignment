import React from 'react'
import { Helmet } from 'react-helmet';
import Navbar from './Components/Navbar';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';

export default function App() {
  return (
    <>
    <Helmet>
        <script src="app.js" async></script>
    </Helmet>
    <Navbar/>
    <Gallery/>
    <Contact/>
    </>
  )
}
