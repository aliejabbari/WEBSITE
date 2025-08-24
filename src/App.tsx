import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MathematicalVintageAscii from './components/MathematicalVintageAscii';
import VintageMysteryWrapper from './components/VintageMysteryWrapper';
import VintageTypography from './components/VintageTypography';
import VintageFloatingElements from './components/VintageFloatingElements';
import VintageMysteryBackground from './components/VintageMysteryBackground';
import MathMysteryOverlay from './components/MathMysteryOverlay';
import './App.css';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [hoveredGridItem, setHoveredGridItem] = useState<string | null>(null);

  const sections = [
    { id: 'home', label: 'HOME', variant: 'golden_ratio' as const },
    { id: 'about', label: 'ABOUT', variant: 'sacred_geometry' as const },
    { id: 'projects', label: 'PROJECTS', variant: 'geometric_volumes' as const },
    { id: 'cv', label: 'CV', variant: 'cosmic_flow' as const },
    { id: 'contact', label: 'CONTACT', variant: 'space_harmonics' as const }
  ];

  const scrollToSection = (sectionId: string) => {
    setCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const projects = [
    {
      title: "Advanced Multimodal Image Matching System",
      description: "Developed a novel deep learning system for high-precision matching of RGB and Infrared images, outperforming traditional methods in challenging conditions. Utilized CUDA and TensorRT for real-time performance.",
      tech: ["Deep Learning", "CUDA", "TensorRT", "RGB-IR Fusion"],
      year: "2023-Present",
      achievement: "Improved matching accuracy by over 29% compared to SuperPoint-Lightglue."
    },
    {
      title: "Airborne Object Detection and Tracking System",
      description: "Implemented a comprehensive YOLOv5-based object detection and tracking system for autonomous drone collision avoidance. Developed for the Airborne Object Tracking Challenge, focusing on Sense and Avoid (SAA) capabilities using monocular vision.",
      tech: ["YOLOv5", "PyTorch", "OpenCV", "Docker", "TensorRT", "NVIDIA Jetson"],
      year: "2024",
      achievement: "Real-time object detection, multi-object tracking, collision prediction, containerized deployment."
    },
    {
      title: "EfficientLoFTR ONNX Optimization",
      description: "Optimized EfficientLoFTR (Efficient Local Feature Transform) model for ONNX deployment, achieving faster inference speeds while maintaining high accuracy in feature matching tasks. Implemented both indoor and outdoor variants.",
      tech: ["PyTorch", "ONNX", "EfficientLoFTR", "Kornia", "PyTorch Lightning", "CUDA"],
      year: "2024",
      achievement: "Reduced inference time by 40% while maintaining 95%+ matching accuracy on ScanNet and MegaDepth datasets."
    },
    {
      title: "OMR (Optical Mark Recognition) System",
      description: "Developed an automated answer sheet processing system using computer vision techniques. Implemented robust bubble detection, grid recognition, and answer extraction with high accuracy across various sheet formats.",
      tech: ["OpenCV", "NumPy", "Computer Vision", "Image Processing", "Contour Detection"],
      year: "2024",
      achievement: "Automatic sheet alignment, bubble detection, answer clustering, and high-accuracy parsing."
    },
    {
      title: "NLP Text Processing and Analysis",
      description: "Implemented comprehensive text processing pipeline for SMS spam detection and analysis. Developed XML parsing, text preprocessing, and machine learning classification systems.",
      tech: ["Pandas", "XML Processing", "Scikit-learn", "Machine Learning"],
      year: "2024",
      achievement: "Processed 5,572 SMS messages with automated spam classification."
    },
    {
      title: "Low-Light Image Enhancement",
      description: "Engineered a deep learning pipeline to dramatically enhance image quality in low-light conditions, focusing on noise reduction and detail preservation. Implemented and compared multiple state-of-the-art architectures.",
      tech: ["Deep Learning", "Image Enhancement", "Noise Reduction", "PyTorch"],
      year: "2024",
      achievement: "Achieved significant visual and metric improvements (PSNR/SSIM) on standard datasets."
    }
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <motion.nav 
        className="navigation"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="nav-content">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="logo-text">ALIEJ</span>
            <span className="logo-dot">.</span>
          </motion.div>
          
          <div className="nav-links">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                className={`nav-link ${currentSection === section.id ? 'active' : ''}`}
                onClick={() => scrollToSection(section.id)}
                whileHover={{ 
                  scale: 1.05, 
                  textShadow: "0 0 15px rgba(212, 175, 55, 0.9), 0 0 30px rgba(212, 175, 55, 0.4)",
                  boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: sections.indexOf(section) * 0.1 }}
              >
                <span className="nav-link-text">{section.label}</span>
                <motion.div 
                  className="nav-link-glow"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Home Section */}
        <section id="home" className="section home-section">
          {/* Mystery Background */}
          <VintageMysteryBackground />
          
          {/* Floating Elements */}
          <VintageFloatingElements />
          
          <div className="hero-grid">
            <motion.div 
              className="hero-grid-item"
              onHoverStart={() => setHoveredGridItem('golden_ratio')}
              onHoverEnd={() => setHoveredGridItem(null)}
              whileHover={{ 
                scale: 1.05,
                zIndex: 10
              }}
              transition={{ duration: 0.3 }}
            >
              <VintageMysteryWrapper variant="mystery" intensity={0.8}>
                <MathematicalVintageAscii variant="golden_ratio" intensity={0.8} size="large" />
              </VintageMysteryWrapper>
              <MathMysteryOverlay 
                variant="golden_ratio" 
                isVisible={hoveredGridItem === 'golden_ratio'} 
              />
            </motion.div>
            
            <motion.div 
              className="hero-grid-item"
              onHoverStart={() => setHoveredGridItem('fibonacci_spiral')}
              onHoverEnd={() => setHoveredGridItem(null)}
              whileHover={{ 
                scale: 1.05,
                zIndex: 10
              }}
              transition={{ duration: 0.3 }}
            >
              <VintageMysteryWrapper variant="fade" intensity={0.7}>
                <MathematicalVintageAscii variant="fibonacci_spiral" intensity={0.7} size="large" />
              </VintageMysteryWrapper>
              <MathMysteryOverlay 
                variant="fibonacci_spiral" 
                isVisible={hoveredGridItem === 'fibonacci_spiral'} 
              />
            </motion.div>
            
            <motion.div 
              className="hero-grid-item"
              onHoverStart={() => setHoveredGridItem('sacred_geometry')}
              onHoverEnd={() => setHoveredGridItem(null)}
              whileHover={{ 
                scale: 1.05,
                zIndex: 10
              }}
              transition={{ duration: 0.3 }}
            >
              <VintageMysteryWrapper variant="mystery" intensity={0.9}>
                <MathematicalVintageAscii variant="sacred_geometry" intensity={0.9} size="large" />
              </VintageMysteryWrapper>
              <MathMysteryOverlay 
                variant="sacred_geometry" 
                isVisible={hoveredGridItem === 'sacred_geometry'} 
              />
            </motion.div>
            
            <motion.div 
              className="hero-grid-item"
              onHoverStart={() => setHoveredGridItem('cosmic_flow')}
              onHoverEnd={() => setHoveredGridItem(null)}
              whileHover={{ 
                scale: 1.05,
                zIndex: 10
              }}
              transition={{ duration: 0.3 }}
            >
              <VintageMysteryWrapper variant="drift" intensity={0.6}>
                <MathematicalVintageAscii variant="cosmic_flow" intensity={0.6} size="large" />
              </VintageMysteryWrapper>
              <MathMysteryOverlay 
                variant="cosmic_flow" 
                isVisible={hoveredGridItem === 'cosmic_flow'} 
              />
            </motion.div>
            
            <motion.div 
              className="hero-grid-item"
              onHoverStart={() => setHoveredGridItem('mathematical_waves')}
              onHoverEnd={() => setHoveredGridItem(null)}
              whileHover={{ 
                scale: 1.05,
                zIndex: 10
              }}
              transition={{ duration: 0.3 }}
            >
              <VintageMysteryWrapper variant="pulse" intensity={0.8}>
                <MathematicalVintageAscii variant="mathematical_waves" intensity={0.8} size="large" />
              </VintageMysteryWrapper>
              <MathMysteryOverlay 
                variant="mathematical_waves" 
                isVisible={hoveredGridItem === 'mathematical_waves'} 
              />
            </motion.div>
            
            <motion.div 
              className="hero-grid-item"
              onHoverStart={() => setHoveredGridItem('geometric_volumes')}
              onHoverEnd={() => setHoveredGridItem(null)}
              whileHover={{ 
                scale: 1.05,
                zIndex: 10
                }}
              transition={{ duration: 0.3 }}
            >
              <VintageMysteryWrapper variant="vintage" intensity={0.7}>
                <MathematicalVintageAscii variant="geometric_volumes" intensity={0.7} size="large" />
              </VintageMysteryWrapper>
              <MathMysteryOverlay 
                variant="geometric_volumes" 
                isVisible={hoveredGridItem === 'geometric_volumes'} 
              />
            </motion.div>
          </div>
          
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
                      <VintageTypography 
            variant="title"
            delay={0.8}
          >
            ALIEJ
            <span className="title-dot">.</span>
          </VintageTypography>
          
          <VintageTypography 
            variant="subtitle"
            delay={1.2}
          >
            AI & Image Processing Engineer
          </VintageTypography>
            
            <motion.div 
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <VintageTypography variant="body" delay={1.5}>
                <p>Specializing in deep learning, computer vision, and biomedical signal processing.</p>
                <p>Building intelligent systems for real-time image analysis and brain-computer interfaces.</p>
              </VintageTypography>
            </motion.div>
            
            <motion.button 
              className="cta-button vintage-button"
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 175, 55, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              EXPLORE MY WORK
            </motion.button>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="section about-section">
          <div className="section-background">
            <VintageMysteryWrapper variant="mystery" intensity={0.6}>
              <MathematicalVintageAscii variant="sacred_geometry" intensity={0.6} size="medium" />
            </VintageMysteryWrapper>
          </div>
          
          <motion.div 
            className="section-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <VintageTypography variant="heading">ABOUT</VintageTypography>
            <div className="about-grid">
              <div className="about-text">
                <p>
                  I'm a passionate AI and Image Processing Engineer with a deep fascination for the intersection 
                  of deep learning, computer vision, and biomedical engineering. My journey spans from 
                  brain-computer interfaces to cutting-edge computer vision applications.
                </p>
                <p>
                  I believe in building AI systems that not only solve complex problems but 
                  also push the boundaries of what's possible in real-time image processing 
                  and biomedical signal analysis.
                </p>
                <p>
                  When I'm not coding, you'll find me researching new AI architectures, 
                  contributing to open source computer vision projects, or exploring the 
                  fascinating world of brain-computer interfaces.
                </p>
              </div>
              
              <div className="skills-container">
                <h3>Core Skills</h3>
                <div className="skills-grid">
                  {['Deep Learning', 'Computer Vision', 'Biomedical Engineering', 'Real-time Systems', 'Model Optimization', 'BCI Systems'].map((skill, index) => (
                    <motion.div 
                      key={skill}
                      className="skill-item"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section projects-section">
          <div className="section-background">
            <VintageMysteryWrapper variant="drift" intensity={0.7}>
              <MathematicalVintageAscii variant="geometric_volumes" intensity={0.7} size="medium" />
            </VintageMysteryWrapper>
          </div>
          
          <motion.div 
            className="section-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <VintageTypography variant="heading">PROJECTS</VintageTypography>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <motion.div 
                  key={project.title}
                  className="project-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02, 
                    boxShadow: "0 8px 25px rgba(0,0,0,0.15), 0 0 40px rgba(212, 175, 55, 0.2)",
                    y: -5
                  }}
                >
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-year">{project.year}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  {project.achievement && (
                    <div className="project-achievement">
                      <strong>Achievement:</strong> {project.achievement}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CV Section */}
        <section id="cv" className="section cv-section">
          <div className="section-background">
            <VintageMysteryWrapper variant="pulse" intensity={0.8}>
              <MathematicalVintageAscii variant="cosmic_flow" intensity={0.8} size="large" />
            </VintageMysteryWrapper>
          </div>
          
          <motion.div 
            className="section-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <VintageTypography variant="heading">CURRICULUM VITAE</VintageTypography>
            <div className="cv-container">
              {/* Personal Information */}
              <motion.div 
                className="cv-header"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <MathematicalVintageAscii variant="golden_ratio" intensity={0.9} size="medium" />
                <VintageTypography variant="title" className="cv-name">Ali Jabbari</VintageTypography>
                <VintageTypography variant="subtitle" className="cv-title">AI and Image Processing Engineer</VintageTypography>
                <div className="cv-contact">
                  <p>📍 Tehran, Iran</p>
                  <p>📱 +98 902 919 6151</p>
                  <p>📧 alijabbari.contact@gmail.com</p>
                  <p>💻 github.com/aliejabbari</p>
                </div>
              </motion.div>

              {/* Professional Summary */}
              <motion.div 
                className="cv-section"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <MathematicalVintageAscii variant="fibonacci_spiral" intensity={0.7} size="small" />
                <h3 className="cv-section-title">Professional Summary</h3>
                <p className="cv-summary">
                  Seasoned AI and Image Processing Engineer specializing in deep learning, computer vision, and 
                  biomedical signal processing. Combines hands-on industry experience in model optimization 
                  and real-time systems with a strong academic background in Brain-Computer Interfaces (BCI). 
                  Passionate about architecting innovative solutions for complex challenges in multimodal 
                  image matching, visual navigation in GPS-denied environments, low-light enhancement, and 
                  EEG-based control systems.
                </p>
              </motion.div>

              {/* Professional Experience */}
              <motion.div 
                className="cv-section"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <MathematicalVintageAscii variant="sacred_geometry" intensity={0.8} size="small" />
                <h3 className="cv-section-title">Professional Experience</h3>
                <div className="timeline">
                  <motion.div 
                    className="timeline-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="timeline-date">May 2024 - Present</div>
                    <div className="timeline-content">
                      <h4 className="job-title">AI and Image Processing Engineer</h4>
                      <p className="company-name">Rayan Hoshmand Ghadir, Tehran, Iran</p>
                      <ul className="job-achievements">
                        <li>Architect and optimize deep learning models for advanced image processing applications</li>
                        <li>Implement robust multimodal matching algorithms for RGB and Infrared (IR) sensor fusion</li>
                        <li>Develop and deploy high-precision, real-time visual navigation system for GPS-denied environments</li>
                        <li>Engineer real-time computer vision solutions using PyTorch, OpenCV, and NVIDIA Jetson platform</li>
                        <li>Accelerate model inference speed using TensorRT and ONNX optimization</li>
                      </ul>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="timeline-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="timeline-date">October 2022 - Present</div>
                    <div className="timeline-content">
                      <h4 className="job-title">Research Assistant</h4>
                      <p className="company-name">Sharif Brain Center, Tehran, Iran</p>
                      <ul className="job-achievements">
                        <li>Spearheaded research and development of Brain-Computer Interface (BCI) systems</li>
                        <li>Implemented advanced EEG signal processing pipelines with ICA and adaptive filters</li>
                        <li>Conducted ERD/ERS analysis for motor imagery task classification</li>
                        <li>Designed and trained deep learning models for high-accuracy EEG data classification</li>
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Education */}
              <motion.div 
                className="cv-section"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <MathematicalVintageAscii variant="mathematical_waves" intensity={0.6} size="small" />
                <h3 className="cv-section-title">Education</h3>
                <motion.div 
                  className="education-item"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h4 className="degree-title">Master of Science in Biomedical Engineering</h4>
                  <p className="institution">Sharif University of Technology, Tehran, Iran</p>
                  <p className="graduation-year">2022 - Present</p>
                  <p className="specialization">Specialization: Bioelectric Engineering</p>
                  <p className="gpa">GPA: 16/20</p>
                  <div className="thesis-info">
                    <h5>Thesis: Design of an Online BCI System for Rehabilitation Robot Control via Motor Imagery</h5>
                    <p>Developed deep learning models with attention mechanisms for real-time classification of EEG signals, specifically for lower limb motor imagery (e.g., knee flexion/extension). Created a novel dataset to address data scarcity in this domain.</p>
                    <p><strong>Supervisors:</strong> Dr. Ali Ghazi-Zahedi Ahsaei & Dr. Mohammad Bagher Shamsollahi</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="education-item"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h4 className="degree-title">Bachelor of Science in Biomedical Engineering</h4>
                  <p className="institution">Tabriz University, Tabriz, Iran</p>
                  <p className="graduation-year">2018 - 2021</p>
                  <p className="specialization">Specialization: Bioelectric Engineering</p>
                  <p className="gpa">GPA: 18/20</p>
                  <div className="thesis-info">
                    <h5>Thesis: Brain-Computer Interface System Based on Common Spatial Patterns (CSP)</h5>
                    <p><strong>Key areas:</strong> Signal Processing, Machine Learning, Medical Device Design, Signal Decomposition Techniques</p>
                    <p><strong>Technologies:</strong> MATLAB, Python, Scikit-learn, CSP Algorithms</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Technical Skills */}
              <motion.div 
                className="cv-section"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <MathematicalVintageAscii variant="vintage_equations" intensity={0.8} size="small" />
                <h3 className="cv-section-title">Technical Skills</h3>
                <div className="skills-grid">
                  <motion.div 
                    className="skill-category"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h4>Programming & Languages</h4>
                    <div className="skill-tags">
                      <span className="skill-tag expert">Python (Expert)</span>
                      <span className="skill-tag expert">C++ (Expert)</span>
                      <span className="skill-tag expert">MATLAB (Expert)</span>
                      <span className="skill-tag expert">JavaScript/TypeScript (Expert)</span>
                      <span className="skill-tag proficient">SQL (Proficient)</span>
                      <span className="skill-tag proficient">Shell Scripting (Proficient)</span>
                      <span className="skill-tag proficient">HTML/CSS (Proficient)</span>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="skill-category"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <h4>AI & Deep Learning</h4>
                    <div className="skill-tags">
                      <span className="skill-tag">PyTorch</span>
                      <span className="skill-tag">TensorFlow</span>
                      <span className="skill-tag">Keras</span>
                      <span className="skill-tag">PyTorch Lightning</span>
                      <span className="skill-tag">LLM Integration</span>
                      <span className="skill-tag">RAG</span>
                      <span className="skill-tag">LangChain</span>
                      <span className="skill-tag">Prompt Engineering</span>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="skill-category"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h4>Computer Vision</h4>
                    <div className="skill-tags">
                      <span className="skill-tag">OpenCV</span>
                      <span className="skill-tag">YOLO</span>
                      <span className="skill-tag">EfficientLoFTR</span>
                      <span className="skill-tag">SuperPoint</span>
                      <span className="skill-tag">Feature Matching</span>
                      <span className="skill-tag">Image Processing</span>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="skill-category"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    <h4>Platforms & Tools</h4>
                    <div className="skill-tags">
                      <span className="skill-tag">NVIDIA Jetson</span>
                      <span className="skill-tag">Docker</span>
                      <span className="skill-tag">Git</span>
                      <span className="skill-tag">TensorRT</span>
                      <span className="skill-tag">ONNX</span>
                      <span className="skill-tag">CUDA</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Key Projects */}
              <motion.div 
                className="cv-section"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <MathematicalVintageAscii variant="geometric_volumes" intensity={0.7} size="small" />
                <h3 className="cv-section-title">Key Projects</h3>
                <div className="projects-grid">
                  <motion.div 
                    className="project-item"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <MathematicalVintageAscii variant="golden_ratio" intensity={0.6} size="small" />
                    <h4 className="project-title">Advanced Multimodal Image Matching System</h4>
                    <p className="project-description">Developed a novel deep learning system for high-precision matching of RGB and Infrared images, outperforming traditional methods in challenging conditions. Utilized CUDA and TensorRT for real-time performance.</p>
                    <div className="project-tech">
                      <span className="tech-tag">Deep Learning</span>
                      <span className="tech-tag">CUDA</span>
                      <span className="tech-tag">TensorRT</span>
                      <span className="tech-tag">RGB-IR Fusion</span>
                    </div>
                    <p className="project-achievement">Improved matching accuracy by over 25% compared to baseline SIFT/ORB algorithms.</p>
                  </motion.div>
                  
                  <motion.div 
                    className="project-item"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <MathematicalVintageAscii variant="fibonacci_spiral" intensity={0.7} size="small" />
                    <h4 className="project-title">EfficientLoFTR ONNX Optimization</h4>
                    <p className="project-description">Optimized EfficientLoFTR model for ONNX deployment, achieving faster inference speeds while maintaining high accuracy in feature matching tasks. Implemented both indoor and outdoor variants.</p>
                    <div className="project-tech">
                      <span className="tech-tag">PyTorch</span>
                      <span className="tech-tag">ONNX</span>
                      <span className="tech-tag">EfficientLoFTR</span>
                      <span className="tech-tag">CUDA</span>
                    </div>
                    <p className="project-achievement">Reduced inference time by 40% while maintaining 95%+ matching accuracy.</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Languages */}
              <motion.div 
                className="cv-section"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="cv-section-title">Languages</h3>
                <div className="languages-grid">
                  <motion.div 
                    className="language-item"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <span className="language-name">Persian</span>
                    <span className="language-level">Native</span>
                  </motion.div>
                  <motion.div 
                    className="language-item"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <span className="language-name">English</span>
                    <span className="language-level">Professional Working Proficiency</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact-section">
          <div className="section-background">
            <VintageMysteryWrapper variant="fade" intensity={0.6}>
              <MathematicalVintageAscii variant="space_harmonics" intensity={0.6} size="medium" />
            </VintageMysteryWrapper>
          </div>
          
          <motion.div 
            className="section-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <VintageTypography variant="heading">CONTACT</VintageTypography>
            <div className="contact-container">
              <div className="contact-info">
                <div className="contact-item">
                  <h4>Email</h4>
                  <p>alijabbari.contact@gmail.com</p>
                </div>
                <div className="contact-item">
                  <h4>Phone</h4>
                  <p>+98 902 919 6151</p>
                </div>
                <div className="contact-item">
                  <h4>Location</h4>
                  <p>Tehran, Iran</p>
                </div>
                <div className="contact-item">
                  <h4>GitHub</h4>
                  <p>github.com/aliejabbari</p>
                </div>
              </div>
              
              <div className="contact-message">
                <p>
                  I'm passionate about AI, computer vision, and biomedical engineering. 
                  Always interested in hearing about new opportunities, interesting projects, 
                  or just connecting with fellow technologists and researchers.
                </p>
                <p>
                  Let's build something amazing together in the world of AI and computer vision.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <motion.footer 
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="footer-content">
          <p>&copy; 2024 ALIEJ. Built with passion and precision.</p>
          <p>Mathematical Vintage Warm Space Design</p>
        </div>
      </motion.footer>
    </div>
  );
};

export default App;
