// Force build to verify unused import fix
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from './store/store';
import { fetchAllContent } from './store/slices/contentSlice';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
// import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import LoadingScreen from './components/LoadingScreen';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Call the master thunk which triggers all 3 APIs in parallel (passing 2 as the companyId)
    // The LoadingScreen runs until all the promises resolve
    dispatch(fetchAllContent(2))
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch initial content", error);
        setIsLoading(false); // Make sure you hide loading even if there's an error
      });
  }, [dispatch]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        {/* <Testimonials /> */}
        <Contact />
        <Blog />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} /> */}
    </Routes>
  );
}

export default App;
