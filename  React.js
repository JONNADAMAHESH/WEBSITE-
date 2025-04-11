import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Tutorials } from "./pages/Tutorials";
import { Blog } from "./pages/Blog";
import { About } from "./pages/About";
import { Footer } from "./components/Footer";
import { AISection } from "./pages/AISection";
import { CloudComputing } from "./pages/CloudComputing";
import { CyberSecurity } from "./pages/CyberSecurity";
import { DataScience } from "./pages/DataScience";
import { WebDevelopment } from "./pages/WebDevelopment";
import { MachineLearning } from "./pages/MachineLearning";
import { Contact } from "./pages/Contact";
import { Resources } from "./pages/Resources";
import { Forum } from "./pages/Forum";
import { Courses } from "./pages/Courses";
import { Blockchain } from "./pages/Blockchain";
import { DevOps } from "./pages/DevOps";
import { InternetOfThings } from "./pages/InternetOfThings";
import { QuantumComputing } from "./pages/QuantumComputing";
import { ARVR } from "./pages/ARVR";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/ai" element={<AISection title="Artificial Intelligence" description="Explore AI fundamentals, deep learning, and practical applications." sections={["Getting Started", "Introduction & Why", "Why Choose AI?", "Installation & Setup", "Create a Simple AI Model", "Key Differences Between AI and Traditional Programming"]} />} />
        <Route path="/cloud-computing" element={<CloudComputing title="Cloud Computing" description="Understand cloud models, platforms, and deployment strategies." sections={["Getting Started", "Introduction & Why", "Why Choose Cloud?", "Installation & Setup", "Deploying a Simple Cloud Application", "Key Differences Between Cloud and On-Premise Solutions"]} />} />
        <Route path="/cyber-security" element={<CyberSecurity title="Cyber Security" description="Learn about security protocols, encryption, and cyber threats." sections={["Getting Started", "Introduction & Why", "Why Cyber Security Matters", "Installation & Setup", "Setting Up a Basic Firewall", "Key Differences Between Cyber Security and Ethical Hacking"]} />} />
        <Route path="/data-science" element={<DataScience title="Data Science" description="Dive into data analytics, machine learning, and big data processing." sections={["Getting Started", "Introduction & Why", "Why Data Science?", "Installation & Setup", "Creating Your First Data Science Model", "Key Differences Between Data Science and Data Analytics"]} />} />
        <Route path="/web-development" element={<WebDevelopment title="Web Development" description="Master front-end, back-end, and full-stack web technologies." sections={["Getting Started", "Introduction & Why", "Why Choose Web Development?", "Installation & Setup", "Creating Your First Webpage", "Key Differences Between Frontend and Backend"]} />} />
        <Route path="/machine-learning" element={<MachineLearning title="Machine Learning" description="Explore ML algorithms, model training, and AI-powered applications." sections={["Getting Started", "Introduction & Why", "Why Choose ML?", "Installation & Setup", "Building Your First ML Model", "Key Differences Between ML and AI"]} />} />
        <Route path="/blockchain" element={<Blockchain title="Blockchain" description="Understand decentralized networks, smart contracts, and cryptographic security." sections={["Getting Started", "Introduction & Why", "Why Blockchain?", "Installation & Setup", "Creating a Simple Blockchain", "Key Differences Between Blockchain and Traditional Databases"]} />} />
        <Route path="/devops" element={<DevOps title="DevOps" description="Learn about CI/CD, infrastructure automation, and deployment strategies." sections={["Getting Started", "Introduction & Why", "Why DevOps?", "Installation & Setup", "Setting Up a CI/CD Pipeline", "Key Differences Between DevOps and Traditional IT"]} />} />
        <Route path="/iot" element={<InternetOfThings title="Internet of Things" description="Explore IoT applications, sensor networks, and real-time data processing." sections={["Getting Started", "Introduction & Why", "Why IoT?", "Installation & Setup", "Building a Simple IoT Device", "Key Differences Between IoT and Embedded Systems"]} />} />
        <Route path="/quantum-computing" element={<QuantumComputing title="Quantum Computing" description="Dive into quantum algorithms, computing principles, and applications." sections={["Getting Started", "Introduction & Why", "Why Quantum Computing?", "Installation & Setup", "Running a Basic Quantum Algorithm", "Key Differences Between Quantum and Classical Computing"]} />} />
        <Route path="/ar-vr" element={<ARVR title="Augmented & Virtual Reality" description="Learn about AR/VR development, immersive experiences, and applications." sections={["Getting Started", "Introduction & Why", "Why Choose AR/VR?", "Installation & Setup", "Creating a Basic AR Experience", "Key Differences Between AR and VR"]} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
