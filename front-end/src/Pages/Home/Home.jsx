import React, { useEffect, lazy, Suspense, useState } from 'react';
import Loader from '../../Components/Loader';

const Hero = lazy(() => import('./Hero'));
const Companies = lazy(() => import('./Companies'));
const Testimonial = lazy(() => import('./Testimonial'));
const Learn = lazy(() => import('./Learn'));
const Introduction = lazy(() => import('./Introduction'));

const Home = () => {
  
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      window.scrollTo({ top: 0 });
  
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500);
  
      return () => clearTimeout(timer);
    }, []);

    if (loading) {
      return <Loader />;
    }


  return (
    <Suspense fallback={<Loader />}>
      <div className="flex flex-col items-center space-y-7 text-center">
        <Hero />
        <Introduction />
        <Companies />
        <Testimonial />
        <Learn />
      </div>
    </Suspense>
  );
};

export default Home;
