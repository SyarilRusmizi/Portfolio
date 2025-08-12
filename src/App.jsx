import React, { useState, useEffect } from 'react';

// Main App component
const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Function to handle smooth scrolling and active section tracking
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  // Effect to update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-inter">
      {/* Navbar */}
      <nav className="fixed w-full bg-gray-900 bg-opacity-90 z-50 shadow-lg py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <a href="#" className="text-2xl font-bold text-teal-400">Syaril</a>
          <ul className="flex space-x-6">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-lg font-medium hover:text-teal-400 transition-colors duration-300 ${
                    activeSection === section ? 'text-teal-400 border-b-2 border-teal-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900 opacity-70"></div>
        {/* Animated particles (simple circles for demonstration) */}
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-teal-400 rounded-full animate-particle opacity-0"
              style={{
                width: `${Math.random() * 5 + 2}px`,
                height: `${Math.random() * 5 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 10 + 5}s`,
              }}
            ></div>
          ))}
        </div>
        <div className="relative z-30 p-8 rounded-lg shadow-2xl backdrop-blur-sm bg-gray-800 bg-opacity-70">
          <img
            src="/Profile.jpg"
            alt="Profile"
            className="rounded-full mx-auto mb-6 border-4 border-teal-400 shadow-lg"
          />
          <h1 className="text-6xl font-extrabold mb-4 text-white drop-shadow-lg">Hello, I'm <span className="text-teal-400">Syaril</span></h1>
          <p className="text-3xl text-gray-300 font-light mb-8">A passionate Web Developer | Designer </p>
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300"
          >
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-extrabold mb-10 text-teal-400">About Me</h2>
          <div className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-300">
            <p className="mb-6">
              I am Muhammad Syaril, a Computer Science graduate with a strong foundation in web development and a 
              proven ability to deliver responsive, high-performance websites. My expertise includes WordPress, HTML, CSS, PHP, and Elementor, 
              with additional skills in SEO optimization, secure hosting configurations, and theme customization.
            </p>
            <p>
              I have successfully managed website projects from concept to deployment, ensuring alignment with 
              branding objectives, accessibility standards, and optimal user experience. I excel at collaborating 
              with cross-functional teams, applying problem-solving skills to technical challenges, and maintaining 
              meticulous attention to detail in both development and design. I am committed to continuous learning and 
              professional growth, with the goal of contributing to innovative projects and driving impactful results in a fast-paced technology environment.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-extrabold mb-10 text-teal-400">Skills</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Node.js', 'Wordpress', 'PhpMyAdmin', 'Git', 'Figma','Elementor'].map((skill) => (
              <div key={skill} className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-2 text-white">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
<section id="projects" className="py-20 bg-gray-800">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-5xl font-extrabold mb-10 text-teal-400">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-centre">



      {/* Project 2 */}
      <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <img
          src="Qudwah.png"
          alt="Project 2"
          className="w-full h-52 object-cover"
        />
        <div className="p-6">
          <h3 className="text-3xl font-bold mb-3 text-white">Akademiqudwah.com</h3>
          <h2 className="text-2xl font-medium italic mb-3 text-white">2024</h2>
          <p className="text-gray-400 mb-4">
            Managed and customized WordPress websites for responsiveness, performance, and SEO. 
            Created engaging layouts with Elementor and Canva, integrated HTML/CSS features, and ensured 
            alignment with branding goals through testing, debugging, and content optimization..
          </p>
          <a
            href="https://akademiqudwah.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300"
          >
            View Project
          </a>
        </div>
      </div>

      {/* Project 1 */}
      <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <img
          src="Teracell.png"
          alt="Project 1"
          className="w-full h-52 object-cover"
        />
        <div className="p-6">
          <h3 className="text-3xl font-bold mb-3 text-white">Teracell.com.my</h3>
          <h2 className="text-2xl font-medium mb-3 text-white">2025</h2>
          <p className="text-gray-400 mb-4">
            A corporate website built for Teracell Network Sdn. Bhd., featuring a modern responsive design, 
            optimized navigation, and SEO-friendly structure. Developed using WordPress with custom theme adjustments 
            to enhance brand identity and improve user experience.
          </p>
          <a
            href="https://teracell.com.my/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300"
          >
            View Project
          </a>
        </div>
      </div>

      

      {/* Add more project cards here if needed */}

    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-extrabold mb-10 text-teal-400">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
          <form className="max-w-xl mx-auto bg-gray-800 p-8 rounded-lg shadow-xl">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-md text-gray-100 placeholder-gray-400 focus:outline-none focus:border-teal-400"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-md text-gray-100 placeholder-gray-400 focus:outline-none focus:border-teal-400"
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Your Message"
                rows="6"
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-md text-gray-100 placeholder-gray-400 focus:outline-none focus:border-teal-400 resize-y"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 rounded-md shadow-lg transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
          <div className="mt-12 text-lg text-gray-400">
            <p>Email: <a href="mailto:muhammadsyaril13@gmail.com" className="text-teal-400 hover:underline">muhammadsyaril13@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/muhammad-syaril-80aab8329/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">linkedin.com/in/MuhammadSyaril</a></p>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-950 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Syaril. All rights reserved.</p>
      </footer>

      {/* Global styles for body and custom animations */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        body {
          font-family: 'Inter', sans-serif;
          scroll-behavior: smooth;
        }

        .animate-particle {
          animation: float 10s infinite ease-in-out forwards;
        }

        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 1;
          }
          50% {
            transform: translateY(0) translateX(-10px);
            opacity: 0.5;
          }
          75% {
            transform: translateY(20px) translateX(5px);
            opacity: 1;
          }
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default App;
