//import Image from "next/image";
'use client'

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser';
import ThemeToggle from '@/components/ThemeToggle';


//library.add(faLinkedinIn, faGithub, faFilePdf, faEnvelope);

export default function Page() {
  

  return (
    
    <div className="font-sans bg-gray-50 dark:bg-gray-800 text-black dark:text-white">
      {/* Navbar */}
      <NavBar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
        <a href="#" className="text-blue-600 dark:text-blue-400 text-2xl font-bold w-10 h-10 flex items-center justify-center hover:text-white transition duration-300 transform hover:-translate-y-1">
            <img src="favicon.ico" alt="Logo"/>
          </a>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 hover:-translate-y-1">About Me</a>
            <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 hover:-translate-y-1">Skills</a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 hover:-translate-y-1">Projects</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 hover:-translate-y-1">Contact Me</a>
          </div>
          
          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <SocialIcon href="https://www.linkedin.com/in/jaiminpatel1601" icon={faLinkedinIn} />
            <SocialIcon href="https://github.com/jaiminpatel1601" icon={faGithub} />
            <SocialIcon href="Resume_Jaimin_Patel.pdf" icon={faFilePdf} />
            <SocialIcon href="mailto:jaimin.patel1601@gmail.com" icon={faEnvelope} />
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4 pb-4`}>
          <a href="#about" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About Me</a>
          <a href="#skills" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
          <a href="#projects" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
          <a href="#contact" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact Me</a>
          
          <div className="flex space-x-3 mt-4">
            <ThemeToggle />
            <SocialIcon href="https://www.linkedin.com/in/jaiminpatel1601" icon={faLinkedinIn} />
            <SocialIcon href="https://github.com/jaiminpatel1601" icon={faGithub} />
            <SocialIcon href="Resume_Jaimin_Patel.pdf" icon={faFilePdf} />
            <SocialIcon href="mailto:jaimin.patel1601@gmail.com" icon={faEnvelope} />
          </div>
        </div>
      </div>
    </nav>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition duration-300 transform hover:-translate-y-1"
    >
      <FontAwesomeIcon icon={icon}/>
    </a>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 pb-20 dark:bg-gray-900" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">Software Developer</span>
            <h1 className="text-4xl text-black dark:text-white font-bold mt-2 mb-4">Hi, I'm Jaimin Patel</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">A passionate software developer with a strong foundation in computer science and an innovative mindset.</p>
            
            <div className="mb-8 text-gray-600 dark:text-gray-300">
              <p className="mb-2"><strong>Education:</strong> University of Toronto - Mississauga</p>
              <p className="mb-2"><strong>Program:</strong> Computer Science (specialist) and Math (minor)</p>
              <p className="mb-2"><strong>Interests:</strong> Web Development, Machine Learning, and Robotics</p>
              <p className="mb-2"><strong>Hobbies:</strong> Sports, Chess, and Music</p>
            </div>
            
            <a 
              href="#projects" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1"
            >
              Explore My Projects
            </a>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <img
              src="../../Images/Profile pic removed bg.png" 
              alt="Jaimin Patel" 
              className="rounded-2xl max-w-md w-full transform hover:-translate-y-2 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { skillname: "React", proficiency: 90 },
        { skillname: "Next.js", proficiency: 80 },
        { skillname: "JavaScript", proficiency: 90 },
        { skillname: "HTML/CSS", proficiency: 95 },
        { skillname: "Tailwind CSS", proficiency: 85 },
      ],
    },
    {
      name: "Backend",
      skills: [
        { skillname: "Python", proficiency: 95 },
        { skillname: "C++", proficiency: 85 },
        { skillname: "Java", proficiency: 85},
        { skillname: "Node.js", proficiency: 75 },
        { skillname: "PostgreSQL", proficiency: 80 },
      ],
    },
    {
      name: "Other",
      skills: [
        { skillname: "Machine Learning", proficiency: 85 },
        { skillname: "Robotics", proficiency: 95 },
        { skillname: "Git & GitHub", proficiency: 95 },
        { skillname: "Data Structures", proficiency: 95 },
        { skillname: "Algorithms", proficiency: 90 },
      ],
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800" id="skills">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">My Expertise</span>
          <h2 className="text-3xl font-bold mt-2 text-black dark:text-white">Skills & Technologies</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto dark:text-gray-300">
            Here are the technologies and skills I've gained throughout my academic and professional journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400 border-b border-gray-200 dark:border-gray-600 pb-2">
                {category.name}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-200 font-medium">{skill.skillname}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-300">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div
                        className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all");
  
  const projects = {
    ml_ai: [
      {
        title: "Wellthify - AI-powered Health App",
        image: "../../Images/Wellthify/choices.png",
        description: "Developed a health app that uses Google Gemini AI to analyze user data and provide personalized health recommentations. The app includes an interactive UI and a backend API for data processing.",
        tags: ["React", "JavaScript", "Gemini AI", "Google APIs", "NodeJS"]
      },
      {
        title: "Image Inpainting - Computer Vision with ML",
        image: "../../Images/ImageInpainting/Student_model_diagram.png",
        description: "Distilled a large LaMa inpainting model into a lightweight UNet-based student model. Improved inference speed while maintaining visual fidelity, focusing on enhancing model efficiency for real-time applications.",
        tags: ["PyTorch", "OpenCV", "SciPy", "CUDA", "CNN architectures"]
      },
      {
        title: "City Classification Model",
        image: "../../Images/Python/Machine-learning.png",
        description: "Built several regression and classification ML models such as Linear and Logistic Regressors, Decision Tree and Random Forest Classifiers, and Neural Networks to predict/classify data.",
        tags: ["NumPy", "Scikit-learn", "Pandas", "PyTorch", "Matplotlib"]
      },
    ],
    robotics: [
      {
        title: "Autonomous Medical Robot",
        image: "../../Images/Robotics/Needle_insertion_pic.png",
        description: "Programmed a surgical robot system similar to ROSA ONE, utilized for minimally invasive brain surgery. Implemented through Frank Emika Panda Robot Arm in University of Toronto's Robotics Lab.",
        tags: ["C++", "Eigen", "libfranka", "Robotics"]
      },
      {
        title: "Chhoti Ammi - A Kitchen Robot",
        image: "../../Images/Robotics/robot_demo_day2_ - 170.jpeg",
        description: "A collaborative robot (Franka Emika's Panda Robot Arm) programmed to cook a typical Indian tiffin - paratha and sabzi. Built using Franka Desk GUI and robotics fundamentals.",
        tags: ["Motion Planning", "HRI", "Inverse Kinematics"]
      }
    ],
    other: [
      {
        title: "Image Processing",
        image: "../../Images/Python/ImageCompressionNew.png",
        description: "An image processing software which uses a compression algorithm and QuadTree data structure to compress an image, with a decompression algorithm to convert back to the original state.",
        tags: ["Python", "Compression", "QuadTree", "Algorithms"]
      },
      {
        title: "Game Development",
        image: "../../Images/Python/Meepo is you.png",
        description: "Developed Meepo is You, a game where the dynamic rules are made by the player by connecting blocks together, with a Stack data structure for move history.",
        tags: ["Pygame", "Stack Data Structure", "Game Dev"]
      }
    ]
  };
  
  // Combine all projects for "All" tab
  const allProjects = [...projects.ml_ai, ...projects.robotics, ...projects.other];
  
  // Determine which projects to display based on active tab
  const displayProjects = activeTab === "all" ? allProjects : 
                         activeTab === "ml_ai" ? projects.ml_ai : 
                         activeTab === "robotics" ? projects.robotics :
                         projects.other;
  
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">My Portfolio</span>
          <h2 className="text-3xl font-bold mt-2 text-black dark:text-white">Featured Projects</h2>
        </div>
        
        {/* Project Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-6 py-2 text-sm font-medium rounded-l-lg cursor-pointer ${
                activeTab === "all" 
                  ? "bg-blue-600 text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab("all")}
            >
              All Projects
            </button>
            <button
              type="button"
              className={`px-6 py-2 text-sm font-medium cursor-pointer ${
                activeTab === "ml_ai" 
                  ? "bg-blue-600 text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab("ml_ai")}
            >
              ML/AI
            </button>
            <button
              type="button"
              className={`px-6 py-2 text-sm font-medium cursor-pointer ${
                activeTab === "robotics" 
                  ? "bg-blue-600 text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab("robotics")}
            >
              Robotics (C++)
            </button>
            <button
              type="button"
              className={`px-6 py-2 text-sm font-medium rounded-r-lg cursor-pointer ${
                activeTab === "other" 
                  ? "bg-blue-600 text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab("other")}
            >
              Other
            </button>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 italic">More Projects Coming Soon...</p>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
      <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-200 mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-gray-200 text-blue-600 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Simulate email sending using the existing function
    try {
      const body_message = formData.message.replace(new RegExp('\r?\n','g'), "<br />");
      emailjs.init("6B8uJjerkWde0yS28");
      emailjs.send("portfolio_jmp1601", "template_us1kq2r", {
        Name: formData.name,
        Email: formData.email,
        Message: body_message,
        Subject: "Message from " + formData.name + " through website contact form"
      }).then(message => {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      }).catch(error => {
        setSubmitStatus("error");
        setIsSubmitting(false);
        console.log("ERROR sending email: " + error);
      });
    } catch (error) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      console.log(error);

    }
  };
  
  return (
    <section className="py-20 dark:bg-dark-800" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl text-black dark:text-white font-bold mt-2 mb-4">Spark the Conversation</h2>
          <p className="text-gray-600 dark:text-gray-300">Have a project in mind or just want to connect? Feel free to reach out!</p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black dark:text-white dark:bg-gray-800"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black dark:text-white dark:bg-gray-800"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black dark:text-white dark:bg-gray-800"
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="inline-flex items-center">
                      Send Message
                      <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  )}
                </button>
              </div>
              
              {submitStatus === "success" && (
                <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
                  Thank you for your message! I'll reach out to you as soon as possible.
                </div>
              )}
              
              {submitStatus === "error" && (
                <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
                  Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-4 mb-6">
            <a 
              href="https://www.linkedin.com/in/jaiminpatel1601" 
              target="_blank"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition duration-300"
            >
              <FontAwesomeIcon icon={faLinkedinIn}/>
            </a>
            <a 
              href="https://github.com/jaiminpatel1601" 
              target="_blank"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition duration-300"
            >
              <FontAwesomeIcon icon={faGithub}/>
            </a>
            <a 
              href="mailto:jaimin.patel1601@gmail.com"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition duration-300"
            >
              <FontAwesomeIcon icon={faEnvelope}/>
            </a>
          </div>
          <p className="text-gray-400 text-center">&copy; {new Date().getFullYear()} Jaimin Patel. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
