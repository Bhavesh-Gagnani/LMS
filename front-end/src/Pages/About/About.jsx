import React, { useEffect, lazy, Suspense, useState } from 'react';
import Loader from '../../Components/Loader';

const AboutContent = lazy(() => import('./AboutContent'));

const About = () => {

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
      <AboutContent />
    </Suspense>
  );
};

export default About;
