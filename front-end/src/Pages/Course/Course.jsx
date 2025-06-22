import React, { useState, useEffect, lazy, Suspense } from "react";
import { assets } from "../../assets/assets";
import Loader from "../../Components/Loader";

const CourseCard = lazy(() => import("./CourseCard"));

const courses = [
  {
    id: 1,
    title: "AI & ML Algorithms",
    category: "Data Science",
    description: "Learn AI & ML algorithms from scratch.",
    price: "Free",
    videoUrl: "https://www.youtube.com/embed/JDcZBzb46ts",
    thumbnail: "https://img.youtube.com/vi/JDcZBzb46ts/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "Web Development Essentials",
    category: "Frontend & Backend",
    description: "Master HTML, CSS, JavaScript, and React.",
    price: "Free",
    videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
    thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "Mastering Data Science",
    category: "Data Analytics",
    description: "Learn Python, Pandas, and Data Visualization.",
    price: "Free",
    videoUrl: "https://www.youtube.com/embed/rHux0gMZ3Eg",
    thumbnail: "https://img.youtube.com/vi/rHux0gMZ3Eg/maxresdefault.jpg",
  },
  {
    id: 4,
    title: "JavaScript Advanced Concepts",
    category: "Programming",
    description: "Explore closures, prototypes, and async JS.",
    price: "Free",
    videoUrl: "https://www.youtube.com/embed/PkZNo7MFNFg",
    thumbnail: "https://img.youtube.com/vi/PkZNo7MFNFg/maxresdefault.jpg",
  },
  {
    id: 5,
    title: "React Hooks & State Management",
    category: "Frontend Development",
    description: "Learn React Hooks like useState, useEffect & more.",
    price: "Free",
    videoUrl: "https://www.youtube.com/embed/dpw9EHDh2bM",
    thumbnail: "https://img.youtube.com/vi/dpw9EHDh2bM/maxresdefault.jpg",
  },
  {
    id: 6,
    title: "Spring Boot & Java",
    category: "Backend Development",
    description: "Develop robust Java applications with Spring Boot.",
    price: "Free",
    videoUrl: "https://www.youtube.com/embed/35EQXmHKZYs",
    thumbnail: "https://img.youtube.com/vi/35EQXmHKZYs/maxresdefault.jpg",
  },
  {
    id: 7,
    title: "MongoDB for Beginners",
    category: "Databases",
    description: "NoSQL database fundamentals with MongoDB.",
    price: "Free",
    videoUrl: "https://www.youtube.com/embed/ExcRbA7fy_A",
    thumbnail: "https://img.youtube.com/vi/ExcRbA7fy_A/maxresdefault.jpg",
  },
  {
    id: 8,
    title: "Node.js & Express.js Crash Course",
    category: "Backend Development",
    description: "Build RESTful APIs with Node.js & Express.js.",
    price: "Free",
    videoUrl: "https://www.youtube.com/embed/Oe421EPjeBE",
    thumbnail: "https://img.youtube.com/vi/Oe421EPjeBE/maxresdefault.jpg",
  },
  {
    id: 9,
    title: "SQL & Database Management",
    category: "Databases",
    description: "Learn SQL queries and database management.",
    price: "Free",
    videoUrl: "https://www.youtube.com/embed/HXV3zeQKqGY",
    thumbnail: "https://img.youtube.com/vi/HXV3zeQKqGY/maxresdefault.jpg",
  },
  {
    id: 10,
    title: "Cybersecurity Fundamentals",
    category: "Security",
    description: "Learn ethical hacking & cybersecurity basics.",
    price: "Free",
    videoUrl: "https://www.youtube.com/embed/3Kq1MIfTWCE",
    thumbnail: "https://img.youtube.com/vi/3Kq1MIfTWCE/maxresdefault.jpg",
  },
  {
    id: 11,
    title: "Python for Beginners",
    category: "Programming",
    description: "Learn Python programming from scratch.",
    price: "Free",
    videoUrl: "https://www.youtube.com/embed/rfscVS0vtbw",
    thumbnail: "https://img.youtube.com/vi/rfscVS0vtbw/maxresdefault.jpg",
  },
  {
    id: 12,
    title: "Full-Stack Development Guide",
    category: "Web Development",
    description: "Master frontend & backend with MERN stack.",
    price: "Free",
    videoUrl: "https://www.youtube.com/embed/nu_pCVPKzTk",
    thumbnail: "https://img.youtube.com/vi/nu_pCVPKzTk/maxresdefault.jpg",
  },
  {
    id: 13,
    title: "Blockchain & Cryptocurrency",
    category: "Finance & Tech",
    description: "Understand blockchain technology & cryptocurrency.",
    price: "Free",
    videoUrl: "https://www.youtube.com/embed/bBC-nXj3Ng4",
    thumbnail: "https://img.youtube.com/vi/bBC-nXj3Ng4/maxresdefault.jpg",
  },

];

const Course = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

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
      className="flex flex-col items-center justify-center md:pb-16 pb-12 pt-6"
      style={{ backgroundImage: `url(${assets.BG_Course})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <h1 className="md:text-4xl text-3xl text-blue-700 font-extrabold underline md:underline-offset-10 underline-offset-6 md:mb-8 mb-5">Courses</h1>

      <div className="flex flex-wrap items-center justify-center gap-6 p-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} />
          ))}
      </div>
    </div>
    </Suspense>
  );
};

export default Course;
