import React, { useState, useEffect } from 'react';

// Main App component
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  // State to manage the current theme: 'dark' or 'light'
  const [theme, setTheme] = useState('dark');
  // State to manage the visibility of the mobile navigation menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to handle smooth scrolling and active section tracking
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    // Close mobile menu after clicking a link (headless UI logic)
    setIsMobileMenuOpen(false);
  };

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // Function to toggle mobile menu visibility (headless UI logic)
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  // Effect to apply theme classes to the document body
  useEffect(() => {
    // Set 'font-inter' on the body for global font application
    document.body.className = `font-inter ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`;
  }, [theme]); // Rerun when theme changes

  // Effect to update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Determine active section when it's roughly in the middle of the viewport
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

  // Define theme-dependent classes
  // UPDATED: Navbar background for "headless" effect
  const navbarBgClass = 'bg-transparent backdrop-blur-md'; // Makes background transparent, relies on blur
  const navbarBorderClass = theme === 'dark' ? 'border-b border-gray-700' : 'border-b border-gray-200';
  // UPDATED: Adjusted text colors for better visibility over a transparent background
  const navbarTextClass = theme === 'dark' ? 'text-gray-200' : 'text-gray-800';
  const navbarHoverTextClass = theme === 'dark' ? 'hover:text-teal-400' : 'hover:text-teal-600';
  const navbarActiveTextClass = theme === 'dark' ? 'text-teal-400 border-b-2 border-teal-400' : 'text-teal-600 border-b-2 border-teal-600';

  const sectionBgPrimary = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200';
  const sectionBgSecondary = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50';
  const headingColorClass = theme === 'dark' ? 'text-teal-400' : 'text-teal-600';
  const textColorClass = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const subtextColorClass = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const cardBgClass = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const cardShadowClass = theme === 'dark' ? 'shadow-xl' : 'shadow-lg';
  const buttonBgClass = theme === 'dark' ? 'bg-teal-500 hover:bg-teal-600' : 'bg-teal-600 hover:bg-teal-700';
  const buttonTextColor = 'text-white';
  const inputBgClass = theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300';
  const inputTextClass = theme === 'dark' ? 'text-gray-100 placeholder-gray-400' : 'text-gray-900 placeholder-gray-500';
  const borderColorFocusClass = theme === 'dark' ? 'focus:border-teal-400' : 'focus:border-teal-600';
  const particleColorClass = theme === 'dark' ? 'bg-teal-400' : 'bg-teal-600';
  const profileBorderClass = theme === 'dark' ? 'border-teal-400' : 'border-teal-600';
  const footerBgClass = theme === 'dark' ? 'bg-gray-950' : 'bg-gray-300';
  const footerTextColorClass = theme === 'dark' ? 'text-gray-500' : 'text-gray-700';


  return (
    // Main container dynamic classes based on theme
    <div className={`min-h-screen transition-colors duration-500`}>
      {/* Navbar - UPDATED: Removed bg-opacity-90, using navbarBgClass */}
      <nav className={`fixed w-full ${navbarBgClass} ${navbarBorderClass} z-50 shadow-lg py-4 transition-colors duration-500`}>
        <div className="container mx-auto flex justify-between items-center px-4">
          <a href="#" className={`text-2xl font-bold ${navbarTextClass} ${navbarHoverTextClass}`}>Syaril</a>
          {/* Desktop Navigation Links - hidden on small screens */}
          <ul className="hidden md:flex space-x-6 items-center">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-lg font-medium ${navbarHoverTextClass} transition-colors duration-300 ${
                    activeSection === section ? navbarActiveTextClass : navbarTextClass
                  }`}
                >
                  {section}
                </button>
              </li>
            ))}
            {/* Theme Toggle Button for Desktop */}
            <li>
              <button
                onClick={toggleTheme}
                className={`ml-4 p-2 rounded-full ${cardBgClass} ${cardShadowClass} transition-all duration-300 flex items-center justify-center`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <svg className={`w-6 h-6 ${navbarTextClass}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                ) : (
                  <svg className={`w-6 h-6 ${navbarTextClass}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.459 4.653a.75.75 0 00.912 1.056l.01-.01c.783-.783 1.378-1.636 1.79-2.582a.75.75 0 00-1.285-.603c-.234.546-.576 1.052-.993 1.523l-.01.01zM10 18a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1zM3 10a1 1 0 011-1h1a1 1 0 110 2H4a1 1 0 01-1-1zm-.459-4.653a.75.75 0 00-1.056-.912l.01-.01A6.715 6.715 0 012.21 4.502a.75.75 0 00.603 1.285c.546-.234 1.052-.576 1.523-.993l.01-.01z" clipRule="evenodd"></path>
                  </svg>
                )}
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button (Hamburger/X icon) - visible only on small screens */}
          <div className="md:hidden flex items-center">
            {/* Theme Toggle Button for Mobile */}
            <button
              onClick={toggleTheme}
              className={`mr-4 p-2 rounded-full ${cardBgClass} ${cardShadowClass} transition-all duration-300 flex items-center justify-center`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className={`w-6 h-6 ${navbarTextClass}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              ) : (
                <svg className={`w-6 h-6 ${navbarTextClass}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.459 4.653a.75.75 0 00.912 1.056l.01-.01c.783-.783 1.378-1.636 1.79-2.582a.75.75 0 00-1.285-.603c-.234.546-.576 1.052-.993 1.523l-.01.01zM10 18a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1zM3 10a1 1 0 011-1h1a1 1 0 110 2H4a1 1 0 01-1-1zm-.459-4.653a.75.75 0 00-1.056-.912l.01-.01A6.715 6.715 0 012.21 4.502a.75.75 0 00.603 1.285c.546-.234 1.052-.576 1.523-.993l.01-.01z" clipRule="evenodd"></path>
                </svg>
              )}
            </button>
            <button
              onClick={toggleMobileMenu}
              className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 ${
                theme === 'dark' ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-200'
              }`}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay (Headless UI component) - UPDATED: Reflects new navbar styles */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-transparent bg-opacity-95 backdrop-blur-md transition-transform transform ease-in-out duration-300`}
        >
          <ul className="flex flex-col space-y-8 text-2xl font-bold">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`capitalize ${navbarHoverTextClass} transition-colors duration-300 ${
                    activeSection === section ? navbarActiveTextClass : navbarTextClass
                  }`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}


      {/* Home Section */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden pt-24">
        {/* Background gradient (always dark for this vibrant effect) */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900 opacity-70"></div>
        {/* Animated particles (simple circles for demonstration) */}
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className={`absolute ${particleColorClass} rounded-full animate-particle opacity-0`}
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
        <div className={`relative z-30 p-8 rounded-lg shadow-2xl backdrop-blur-sm ${cardBgClass} bg-opacity-70`}>
          <img
            src="/Profile.jpg"
            alt="Profile"
            className={`rounded-full mx-auto mb-2 border-4 ${profileBorderClass} shadow-lg`}
          />
          {/* REVERTED: Main header back to original theme-dependent color */}
          <h1 className={`text-6xl font-extrabold mb-4 drop-shadow-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Hello, I'm <span className={headingColorClass}>Syaril</span></h1>
          <p className={`text-3xl font-light mb-8 ${textColorClass}`}>A passionate Web Developer | Designer </p>
          {/* Buttons for View My Work and Download Resume */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => scrollToSection('projects')}
              className={`${buttonBgClass} ${buttonTextColor} font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300`}
            >
              View My Work
            </button>
            <a
              href="/Syaril-Resume.pdf"
              download="Syaril-Resume.pdf"
              className={`flex items-center justify-center ${buttonBgClass} ${buttonTextColor} font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300`}
            >
              {/* Download icon SVG */}
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 11.586V3a1 1 0 112 0v8.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${sectionBgPrimary} transition-colors duration-500`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-5xl font-extrabold mb-10 ${headingColorClass}`}>About Me</h2>
          <div className={`max-w-4xl mx-auto text-lg leading-relaxed ${textColorClass}`}>
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
      <section id="skills" className={`py-20 ${sectionBgSecondary} transition-colors duration-500`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-5xl font-extrabold mb-10 ${headingColorClass}`}>Skills</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Node.js', 'Wordpress', 'PhpMyAdmin', 'Git', 'Figma','Elementor'].map((skill) => (
              <div key={skill} className={`${cardBgClass} p-6 rounded-lg ${cardShadowClass} hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300`}>
                <h3 className={`text-2xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${sectionBgPrimary} transition-colors duration-500`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-5xl font-extrabold mb-10 ${headingColorClass}`}>Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-centre">

            {/* Project 3 */}
            <div className={`${sectionBgSecondary} rounded-lg ${cardShadowClass} overflow-hidden transform hover:scale-105 transition-transform duration-300`}>
              <img
                src="POLY-VR.jpeg" // Placeholder image
                alt="Project 1"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className={`text-3xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>POLY-VR</h3>
                <h2 className={`text-2xl font-medium italic mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>2024</h2>
                <p className={`${subtextColorClass} mb-4`}>
                  A gamified augmented reality mobile application designed to enhance
                  learning in polymer chemistry. Developed as a final-year project using Unity 3D,
                  Blender, and C#, integrating interactive AR elements to improve engagement and understanding for students.
                </p>
                <a
                  href="https://github.com/SyarilRusmizi/PolymerAR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block ${buttonBgClass} ${buttonTextColor} font-semibold py-2 px-6 rounded-full transition-colors duration-300`}
                >
                  Github
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className={`${sectionBgSecondary} rounded-lg ${cardShadowClass} overflow-hidden transform hover:scale-105 transition-transform duration-300`}>
              <img
                src="Qudwah.png" // Placeholder image
                alt="Project 2"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className={`text-3xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Akademiqudwah.com</h3>
                <h2 className={`text-2xl font-medium italic mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>2024</h2>
                <p className={`${subtextColorClass} mb-4`}>
                  Managed and customized WordPress websites for responsiveness, performance, and SEO.
                  Created engaging layouts with Elementor and Canva, integrated HTML/CSS features, and ensured
                  alignment with branding goals through testing, debugging, and content optimization..
                </p>
                <a
                  href="https://akademiqudwah.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block ${buttonBgClass} ${buttonTextColor} font-semibold py-2 px-6 rounded-full transition-colors duration-300`}
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Project 1 */}
            <div className={`${sectionBgSecondary} rounded-lg ${cardShadowClass} overflow-hidden transform hover:scale-105 transition-transform duration-300`}>
              <img
                src="Teracell.png" // Placeholder image
                alt="Project 1"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className={`text-3xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Teracell.com.my</h3>
                <h2 className={`text-2xl font-medium italic mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>2025</h2>
                <p className={`${subtextColorClass} mb-4`}>
                  A corporate website built for Teracell Network Sdn. Bhd., featuring a modern responsive design,
                  optimized navigation, and SEO-friendly structure. Developed using WordPress with custom theme adjustments
                  to enhance brand identity and improve user experience.
                </p>
                <a
                  href="https://teracell.com.my/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block ${buttonBgClass} ${buttonTextColor} font-semibold py-2 px-6 rounded-full transition-colors duration-300`}
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${sectionBgSecondary} transition-colors duration-500`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-5xl font-extrabold mb-10 ${headingColorClass}`}>Get In Touch</h2>
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${textColorClass}`}>
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
          <form className={`max-w-xl mx-auto ${cardBgClass} p-8 rounded-lg ${cardShadowClass}`}>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className={`w-full p-4 ${inputBgClass} rounded-md ${inputTextClass} focus:outline-none ${borderColorFocusClass}`}
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                className={`w-full p-4 ${inputBgClass} rounded-md ${inputTextClass} focus:outline-none ${borderColorFocusClass}`}
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Your Message"
                rows="6"
                className={`w-full p-4 ${inputBgClass} rounded-md ${inputTextClass} focus:outline-none ${borderColorFocusClass} resize-y`}
              ></textarea>
            </div>
            <button
              type="submit"
              className={`w-full ${buttonBgClass} ${buttonTextColor} font-bold py-4 rounded-md shadow-lg transition-colors duration-300`}
            >
              Send Message
            </button>
          </form>
          <div className={`mt-12 text-lg ${subtextColorClass}`}>
            <p>Email: <a href="mailto:muhammadsyaril13@gmail.com" className={`${headingColorClass} hover:underline`}>muhammadsyaril13@gmail.com</a></p>
            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mt-6">
              {/* LinkedIn Icon */}
              <a href="https://www.linkedin.com/in/muhammad-syaril-80aab8329/" target="_blank" rel="noopener noreferrer" className={`hover:${headingColorClass} transition-colors duration-300`}>
                <svg className={`w-8 h-8 ${headingColorClass}`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.625c0-1.706-1.026-2.093-1.993-2.093-.974 0-1.748.529-1.748 2.093V19H10V8h3v1.857c.725-1.07 1.802-1.857 3.39-1.857 3.033 0 4.5 2.083 4.5 5.518V19z" />
                </svg>
              </a>
              {/* GitHub Icon */}
              <a href="https://github.com/SyarilRusmizi" target="_blank" rel="noopener noreferrer" className={`hover:${headingColorClass} transition-colors duration-300`}>
                <svg className={`w-8 h-8 ${headingColorClass}`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.875 8.207 11.417.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.043-1.61-4.043-1.61-.54-.913-1.314-1.157-1.314-1.157-1.082-.74.082-.725.082-.725 1.205.086 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.49.997.108-.775.418-1.305.762-1.605-2.665-.3-5.464-1.334-5.464-5.932 0-1.31.468-2.38.123-3.227-.123-.3-.418-1.523.117-3.176 0 0 1.006-.322 3.3.3.957-.266 1.983-.4 3.003-.4s2.046.134 3.003.4c2.293-.622 3.298-.3 3.298-.3.535 1.653.24 2.876.117 3.176-.345.847.123 1.917.123 3.227 0 4.59-2.804 5.624-5.474 5.922.43.37.818 1.102.818 2.222 0 1.606-.015 2.895-.015 3.284 0 .318.22.69.825.577C20.565 21.873 24 17.301 24 12c0-6.627-5.373-12-12-12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${footerBgClass} text-center ${footerTextColorClass} text-sm transition-colors duration-500`}>
        <p>&copy; {new Date().getFullYear()} Syaril. All rights reserved.</p>
      </footer>

      {/* Global styles for body and custom animations */}
      <style>{`
        /* Note: @import url for fonts should ideally be in index.html or index.css for Vite */
        /* It's included here as a fallback if not added elsewhere. */

        body {
          scroll-behavior: smooth; /* Ensure smooth scrolling for anchors */
        }

        /* Particle animation (remains the same) */
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
