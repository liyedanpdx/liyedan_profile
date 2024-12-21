import React, { useState } from 'react';
import { Menu, GithubIcon, LinkedinIcon, MailIcon, DownloadIcon, ExternalLinkIcon } from 'lucide-react';
const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = [
    { 
      category: "Front-End", 
      items: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap 4", "Responsive Web Design", "Vue.js", "MVVC"] 
    },
    { 
      category: "Back-End", 
      items: ["Node.js", "Express", "MongoDB", "Mongoose", "LESS/SASS", "Authentication", "PWA"] 
    },
    { 
      category: "Full-Stack", 
      items: ["React.js", "OAuth", "RESTful API", "Data Structures", "Algorithms", "React Router", "Redux"] 
    }
  ];

  const projects = [
    {
      name: "Project 1",
      description: "A React-based web application showcasing front-end development skills.",
      tech: "React, Redux, Bootstrap",
      image: "/placeholder.jpg",
      demo: "#",
      code: "#"
    },
    {
      name: "Project 2",
      description: "Full-stack application with Node.js backend and MongoDB database.",
      tech: "Node.js, Express, MongoDB, React",
      image: "/placeholder.jpg",
      demo: "#",
      code: "#"
    },
    {
      name: "Project 3",
      description: "Vue.js application demonstrating MVVC architecture.",
      tech: "Vue.js, Vuex, Bootstrap",
      image: "/placeholder.jpg",
      demo: "#",
      code: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold">Yedan Li</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
              <a href="#skills" className="text-gray-700 hover:text-gray-900">Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-gray-900">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-500 hover:text-gray-600">
                <Menu size={24} />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
                <a href="#skills" className="text-gray-700 hover:text-gray-900">Skills</a>
                <a href="#projects" className="text-gray-700 hover:text-gray-900">Projects</a>
                <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
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
            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-6"></div>
            <h1 className="text-4xl font-bold mb-4">Your Name</h1>
            <p className="text-xl text-gray-600 mb-6">Full Stack Developer</p>
            <p className="text-gray-700 mb-8">A passionate full-stack developer with experience in modern web technologies. Focused on creating efficient, scalable, and user-friendly applications.</p>
            <div className="flex justify-center space-x-4">
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                <DownloadIcon size={20} />
                <span>Download Resume</span>
              </button>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <GithubIcon size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <LinkedinIcon size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <MailIcon size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
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
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <p className="text-gray-500 text-sm mb-4">{project.tech}</p>
                  <div className="flex space-x-4">
                    <a href={project.demo} className="flex items-center text-blue-600 hover:text-blue-800">
                      <ExternalLinkIcon size={16} className="mr-1" />
                      Demo
                    </a>
                    <a href={project.code} className="flex items-center text-blue-600 hover:text-blue-800">
                      <GithubIcon size={16} className="mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Contact</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Name</label>
              <input 
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Email</label>
              <input 
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="6"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Your Name. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-300">
                <GithubIcon size={24} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <LinkedinIcon size={24} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <MailIcon size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;