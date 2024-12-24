import React, { useState, useEffect } from 'react';
import { Menu, GithubIcon, LinkedinIcon, MailIcon, DownloadIcon, ExternalLinkIcon } from 'lucide-react';
import meImage from '../images/me.jpg';
import project1Image from '../images/p1.png';
import project2Image from '../images/p2.png';
import project3Image from '../images/p3.png';
import emailjs from '@emailjs/browser';
import ReactGA from 'react-ga4';

emailjs.init("EJ1TMzy1NNy8TnKuI");

const Portfolio = () => {
  //GA
  useEffect(() => {
    ReactGA.initialize('G-D1VYBTCMEW'); // 这里需要替换为你的实际 ID
    ReactGA.send("pageview");
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //email status
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });


  // add event tracking ga functions
  const handleResumeDownload = () => {
    ReactGA.event({
      category: 'User',
      action: 'Downloaded Resume',
      label: 'Resume'
    });
  };

  const handleProjectClick = (projectName, type) => {
    ReactGA.event({
      category: 'Project',
      action: type === 'demo' ? 'Viewed Demo' : 'Viewed Code',
      label: projectName
    });
  };

  const handleContactSubmit = () => {
    ReactGA.event({
      category: 'Contact',
      action: 'Form Submitted',
      label: 'Contact Form'
    });
  };

  // email input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // email submit  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ isSubmitting: true, isSubmitted: false, error: null });
  
    try {
      await emailjs.send(
        'service_re5erby', // 从 EmailJS 获取
        'template_yvd3um6', // 从 EmailJS 获取
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          to_email: 'lyd1477349909@outlook.com'
        },
        'EJ1TMzy1NNy8TnKuI' // 从 EmailJS 获取
      );

      handleContactSubmit(); 
      setSubmitStatus({ isSubmitting: false, isSubmitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({ isSubmitting: false, isSubmitted: false, error: error.text });
    }
  };
  
  const skills = [
    { 
      category: "Front-End Development", 
      items: ["HTML5", "CSS3", "JavaScript (ES6+)", "jQuery", "Bootstrap 4/5", "Responsive Design", "Vue.js", "MVVC Pattern"] 
    },
    { 
      category: "Back-End Development", 
      items: ["Node.js", "Express.js", "MongoDB", "Mongoose ODM", "LESS/SASS", "Authentication Systems", "Progressive Web Apps"] 
    },
    { 
      category: "Full-Stack Expertise", 
      items: ["React.js", "OAuth 2.0", "RESTful APIs", "Data Structures", "Algorithms", "React Router", "Redux/Context API"] 
    }
  ];

  const projects = [
    {
      name: "Lindell Animal Home",
      description: "An interactive web application for an animal shelter, featuring a modern UI design and responsive gallery. Implements advanced JavaScript functionality for image handling and user interactions with optimized performance.",
      tech: "JavaScript, CSS3, HTML5, Responsive Design, jQuery",
      image: project1Image,
      demo: "https://lindellanimalhome.netlify.app/gallery",
      code: "https://github.com/liyedanpdx/m1-assignment"
    },
    {
      name: "Progressive Swimming App",
      description: "A comprehensive web application for a swimming organization, delivering essential features in a progressive web app format. Features include dynamic content updates, offline functionality, and a responsive interface that adapts seamlessly across all devices.",
      tech: "Bootstrap 5, PWA, JavaScript, Responsive Design",
      image: project2Image,
      demo: "https://liyedanpdx.github.io/Project1-Group-Blue/",
      code: "https://github.com/liyedanpdx/Project1-Group-Blue"
    },
    {
      name: "Travel Blog Platform",
      description: "A feature-rich MERN stack travel blog platform focusing on user experience and content management. Implements secure authentication, real-time post editing, dynamic content loading, and an interactive commenting system.",
      tech: "React, MongoDB, Express.js, Node.js, SASS, JWT Authentication, RESTful API",
      image: project3Image,
      demo: "https://travelblog-web603.netlify.app/",
      code: "https://github.com/liyedanpdx/web-403-project-3"
    }
];

  return (
    <div className="min-h-screen bg-gray-50">
{/* Navigation */}
<nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-gray-800">Yedan Li</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">About</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 rounded-lg"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 bg-white border-t">
              <div className="flex flex-col space-y-4">
                <a 
                  href="#about" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#skills" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </a>
                <a 
                  href="#projects" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </a>
                <a 
                  href="#contact" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 pt-20">
        {/* About Section */}
        <section id="about" className="py-20 flex flex-col items-center">
          <div className="text-center max-w-2xl">
            <img 
              src={meImage} 
              alt="Yedan Li"
              className="w-32 h-32 rounded-full object-cover mx-auto mb-6 shadow-lg"
            />
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Yedan Li</h1>
            <p className="text-xl text-gray-600 mb-6">Full Stack Developer</p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              A passionate and innovative full-stack developer with expertise in modern web technologies 
              and best practices. Specialized in creating efficient, scalable, and user-centric applications 
              with a focus on React and Node.js ecosystems. Committed to writing clean, maintainable code 
              and building intuitive user experiences.
            </p>
            <div className="flex justify-center space-x-4">
            <a 
              href={process.env.PUBLIC_URL + "/files/Yedan_Li_Resume.docx"}  // 使用 PUBLIC_URL
              download="Yedan_Li_Resume.docx"
              onClick={handleResumeDownload}
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <DownloadIcon size={20} />
              <span>Download Resume</span>
            </a>
              <div className="flex space-x-4">
                <a 
                href="https://github.com/liyedanpdx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  <GithubIcon size={24} />
                </a>
                <a 
                href="https://www.linkedin.com/in/yedan-daniel-li-579133184/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  <LinkedinIcon size={24} />
                </a>
                <a href="mailto:lyd1477349909@outlook.com" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                  <MailIcon size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <p className="text-gray-500 text-sm mb-4 font-medium">{project.tech}</p>
                  <div className="flex space-x-4">
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => handleProjectClick(project.name, 'demo')}
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                    >
                      <ExternalLinkIcon size={16} className="mr-1" />
                      Live Demo
                    </a>
                    <a 
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer" 
                      onClick={() => handleProjectClick(project.name, 'code')} 
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                    >
                      <GithubIcon size={16} className="mr-1" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Get In Touch</h2>
          <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                rows="6"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <button 
              type="submit"
              disabled={submitStatus.isSubmitting}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {submitStatus.isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {/* 显示提交状态 */}
            {submitStatus.isSubmitted && (
              <div className="mt-4 text-green-600 text-center">
                Message sent successfully!
              </div>
            )}
            {submitStatus.error && (
              <div className="mt-4 text-red-600 text-center">
                Error sending message: {submitStatus.error}
              </div>
            )}
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-row justify-between items-center">
            <div className="flex items-center space-x-2">
              <p>&copy; 2025 Yedan Li. All rights reserved.</p>
              <div>
                <img 
                  src="https://visitor-badge.laobi.icu/badge?page_id=liyedanpdx.liyedan_profile" 
                  alt="visitors" 
                  className="ml-3 inline"
                />
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <a 
                href="https://github.com/liyedanpdx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                <GithubIcon size={20} /> {/* 稍微减小图标尺寸 */}
              </a>
              <a 
                href="https://www.linkedin.com/in/yedan-daniel-li-579133184/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                <LinkedinIcon size={20} />
              </a>
              <a 
                href="mailto:lyd1477349909@outlook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                <MailIcon size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;