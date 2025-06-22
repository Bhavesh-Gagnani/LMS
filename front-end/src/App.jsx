import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Loader from './Components/Loader';

const Home = lazy(() => import('./Pages/Home/Home'));
const Course = lazy(() => import('./Pages/Course/Course'));
const Educator = lazy(() => import('./Pages/Educator/Educator'));
const About = lazy(() => import('./Pages/About/About'));
const Contact = lazy(() => import('./Pages/Contact/Contact'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="course" element={<Course />} />
          <Route path="educator" element={<Educator />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
