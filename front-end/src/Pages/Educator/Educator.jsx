import React, { useEffect, lazy, Suspense, useState } from 'react';
import { assets } from '../../assets/assets';
import Loader from '../../Components/Loader';

const ProfileCard = lazy(() => import('./ProfileCard'));

const Educator = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const profiles = [
    { name: "James Smith", title: "Data Scientist @ Google", img: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Matthew Martinez", title: "Backend Developer @ Amazon", img: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: "Ethan Scott", title: "Cloud Architect @ IBM", img: "https://randomuser.me/api/portraits/men/3.jpg" },
    { name: "Christopher Lee", title: "UI/UX Designer @ Adobe", img: "https://randomuser.me/api/portraits/men/4.jpg" },
    { name: "Daniel Garcia", title: "Mobile App Developer @ Tesla", img: "https://randomuser.me/api/portraits/men/5.jpg" },
    { name: "Andrew Wilson", title: "CTO @ StartupX", img: "https://randomuser.me/api/portraits/men/6.jpg" },
    { name: "Joshua Taylor", title: "Project Manager @ Salesforce", img: "https://randomuser.me/api/portraits/men/7.jpg" },
    { name: "Benjamin Clark", title: "DevOps Engineer @ Atlassian", img: "https://randomuser.me/api/portraits/men/8.jpg" },
    { name: "David Williams", title: "Cybersecurity Analyst @ Cisco", img: "https://randomuser.me/api/portraits/men/9.jpg" },
    { name: "Ryan Cooper", title: "AI Researcher @ OpenAI", img: "https://randomuser.me/api/portraits/men/10.jpg" },
  ];

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
    <div
      className="flex flex-col items-center justify-center md:pb-18 pb-12 pt-8"
      style={{ backgroundImage: `url(${assets.BG_Educator})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h1 className="md:text-4xl text-3xl text-blue-700 font-extrabold underline md:underline-offset-10 underline-offset-6 md:mb-12 mb-6">
        Our Educators
      </h1>

      <div className="flex flex-wrap md:gap-16 gap-6 justify-center p-6">
          {profiles.map((profile, index) => (
            <ProfileCard key={index} {...profile} />
          ))}
      </div>
    </div>
    </Suspense>
  );
};

export default Educator;
