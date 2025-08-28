import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';


// Sample projects data
const projectsData: Project[] = [
  {
    id: 1,
    title: "MockMate : A complete capstone project",
    description: "AI-Mock-Interviewer helps students and professionals practice interviews in a realistic, AI-driven environment. Simply choose your role or domain, and the app generates tailored interview questions, evaluates responses, and gives instant feedback on communication, clarity, and technical depth. Deployed on Vercel, it provides accessible, on-demand interview preparation anytime.",
    image: "/lovable-uploads/mockmate.png",
    tags: ["React", "Next.js", "Tailwind CSS", "JS", "Node.js", "Express.js", "Clerk-Auth", "Gemini-API", "Mongodb"],
    demoUrl: "https://mock-mate-pa7l.vercel.app/",
    githubUrl: "https://github.com/shubham220420/MockMate"
  },
  {
    id: 2,
    title: "PitchSpark: A Startup Pitching Platform",
    description: "PitchSpark lets aspiring founders share and refine their startup ideas through interactive pitching. Users can post their concepts, receive feedback, and engage with a community of peers to improve their pitches. Uses Sanity.io for headless content management. Deployed on Vercel, it provides an easy, collaborative space for startup validation and idea exchange.",
    image: "/lovable-uploads/PitchSpark.png",
    tags: ["Next.js", "Node.js", "REST", "NextAuth", "SanityCMS","Express.js","Tailwind CSS"],
    demoUrl: "pitch-spark-delta.vercel.app",
    githubUrl: "https://github.com/shubham220420/PitchSpark"
  },
  {
    id: 3,
    title: "Portfolio with Admin Dashboard",
    description: "A modern, full-stack portfolio website featuring an integrated admin dashboard for seamless content and project management. The platform supports secure authentication with Next-Auth, state management via React Context API. The admin dashboard allows easy updates to portfolio content, project listings, and blog posts, all within a responsive and visually engaging UI",
    image: "/lovable-uploads/portfolio.png",
    tags: ["React", "Next.js", "Tailwind CSS", "JS", "Node.js", "Express.js", "Next-Auth", "Context-API", "Mongo"],
    demoUrl: "https://www.shubhamrakheja.online/",
    githubUrl: "https://github.com/shubham220420/NewPortFolio"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-container relative">
      <h2 className="section-title mb-8">Projects</h2>
      
      {/* Project Description */}
      <motion.div 
        className="text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          Explore my collection of innovative projects that showcase my expertise in AI, web development, and software engineering. 
          Each project represents a unique solution to real-world challenges, combining cutting-edge technologies with practical applications.
        </p>
      </motion.div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

    
    </section>
  );
};

export default Projects;
