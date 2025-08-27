import React, { useState, useEffect } from 'react';

// --- SVG ICONS ---
// Using inline SVGs for icons to keep the component self-contained.
const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

// --- MOCK DATA ---
// This is the section where you'll add all your personal details.

const personalDetails = {
    // TODO: Add your full name.
    name: "Arnab Mandal",
    // TODO: Add your professional headline.
    headline: "Full-Stack Software Engineer",
    // TODO: Write a brief 1-2 sentence summary about yourself.
    summary: "A passionate Full-Stack Software Engineer specializing in building elegant, efficient, and scalable web applications. I thrive on turning complex problems into simple, beautiful, and intuitive designs.",
    // TODO: Add your email address.
    email: "arnabmandal661@gmail.com",
    // TODO: Add the path to your resume PDF. Place the PDF in the `public` folder of your React project.
    resumeUrl: "/alex-doe-resume.pdf",
    // TODO: Add a URL to a professional headshot. You can use a service like Imgur or a placeholder like below.
    imageUrl: "./my-portfolio-pic.jpg",
};

const professionalExperience = [
    // TODO: Add your work experience here. You can add as many objects as you need.
    {
        // TODO: Add your job title.
        title: "Full Stack web development trainee",
        // TODO: Add the company name.
        company: "Topstack",
        // TODO: Add the dates of your employment.
        dates: "Aug 2025 - Present",
        // TODO: Add a description of your responsibilities and achievements. Each string is a bullet point.
        description: [
            "I am learning about Full Stack web development and build real life projects"
        ]
    }
];

const skills = {
    // TODO: Add your skills, grouped by category.
    languages: ["JavaScript (ES6+)", "TypeScript", "Java", "HTML5", "CSS3"],
    frameworks: ["React", "Node.js", "Express",],
    databases: ["MongoDB","MySQL"],
    tools: ["Docker", "Kubernetes", "AWS", "Git"]
};

const education = {
    // TODO: Add your education details.
    institution: "Supreme Knowledge Foundation Group of Institutions",
    degree: "Bachelor of Technology in Computer Science",
    graduationDate: "june 2025",
    details: "I am in final year"
};


// --- COMPONENTS ---
// You shouldn't need to edit the components below unless you want to change the structure or styling.

const Header = ({ navLinks }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => document.getElementById(link.id));
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navLinks]);

    const handleLinkClick = (e, id) => {
        e.preventDefault();
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-gray-900 bg-opacity-80 backdrop-blur-md text-white sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#hero" onClick={(e) => handleLinkClick(e, 'hero')} className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    {personalDetails.name}
                </a>
                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    {navLinks.map(link => (
                        <a key={link.id} href={`#${link.id}`} onClick={(e) => handleLinkClick(e, link.id)}
                           className={`text-lg hover:text-cyan-400 transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 ${activeSection === link.id ? 'text-cyan-400 after:w-full' : 'text-gray-300'}`}>
                            {link.name}
                        </a>
                    ))}
                </nav>
                {/* Mobile Menu Button */}
                <button className="md:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                    </svg>
                </button>
            </div>
            {/* Mobile Navigation */}
            <div className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-95 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-40`}>
                <nav className="flex flex-col items-center justify-center h-full space-y-8">
                    {navLinks.map(link => (
                        <a key={link.id} href={`#${link.id}`} onClick={(e) => handleLinkClick(e, link.id)} className="text-2xl text-gray-200 hover:text-cyan-400 transition-colors duration-300">
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

const Hero = () => (
    <section id="hero" className="bg-gray-900 text-white min-h-screen flex items-center">
        <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
                    Hi, I'm <span className="text-cyan-400">{personalDetails.name}</span>
                </h1>
                <p className="text-2xl md:text-3xl text-gray-300 mb-8">{personalDetails.headline}</p>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">{personalDetails.summary}</p>
                <div className="flex justify-center">
                    <a href={personalDetails.resumeUrl} target="_blank" rel="noopener noreferrer"
                       className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 duration-300 shadow-lg">
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    </section>
);

const About = () => (
    <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-12">About Me</h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/3">
                    <img src={personalDetails.imageUrl} alt={personalDetails.name} className="rounded-full w-64 h-64 md:w-80 md:h-80 mx-auto shadow-2xl border-4 border-cyan-400" />
                </div>
                <div className="md:w-2/3 text-gray-300 text-lg">
                    <p className="mb-4">
                        Hello! I'm {personalDetails.name}, a software engineer with a deep-seated passion for creating impactful technology. My journey into the world of code began with a fascination for how things work, and it has evolved into a career dedicated to building high-quality, user-centric applications.
                    </p>
                    <p className="mb-4">
                        I specialize in full-stack development, with a strong focus on modern JavaScript frameworks like React and Node.js. I enjoy the challenge of architecting scalable backend systems as much as I love crafting beautiful and responsive user interfaces. My goal is always to write clean, maintainable, and efficient code.
                    </p>
                    <p>
                        Beyond coding, I'm interested in AI, FinTech, and open-source developer tools. I'm always eager to learn new technologies and take on challenging projects that push my skills to the next level. I'm currently looking for a role where I can contribute to a meaningful product and collaborate with a talented team.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

const Experience = () => (
    <section id="experience" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Professional Experience</h2>
            <div className="relative max-w-3xl mx-auto">
                {/* Vertical line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>

                {professionalExperience.map((job, index) => (
                    <div key={index} className="mb-12 flex items-center w-full">
                        <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                            <p className="text-cyan-400 font-semibold">{job.dates}</p>
                            <h3 className="text-xl font-bold text-white mt-1">{job.title}</h3>
                            <p className="text-gray-400">{job.company}</p>
                        </div>
                        {/* Dot on the timeline */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-gray-900"></div>
                        <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                            <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {job.description.map((point, i) => <li key={i}>{point}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Skills = () => (
    <section id="skills" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category} className="bg-gray-800 p-6 rounded-lg shadow-xl">
                        <h3 className="text-xl font-bold text-cyan-400 mb-4 capitalize">{category}</h3>
                        <ul className="space-y-2">
                            {skillList.map(skill => (
                                <li key={skill} className="text-gray-300 flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Education = () => (
    <section id="education" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Education</h2>
            <div className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-lg shadow-xl">
                <h3 className="text-2xl font-bold text-cyan-400">{education.institution}</h3>
                <p className="text-xl text-white mt-2">{education.degree}</p>
                <p className="text-gray-400 mt-1">{education.graduationDate}</p>
                <p className="text-gray-300 mt-4">{education.details}</p>
            </div>
        </div>
    </section>
);

const Contact = () => (
    <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
                I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect!
            </p>
            <a href={`mailto:${personalDetails.email}`} className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 duration-300 shadow-lg text-lg">
                Say Hello
            </a>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6 py-8 text-center text-gray-400">
            <div className="flex justify-center space-x-6 mb-4">
                {/* TODO: Add the URL to your GitHub profile in the href attribute. */}
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300"><GithubIcon /></a>
                {/* TODO: Add the URL to your LinkedIn profile in the href attribute. */}
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300"><LinkedinIcon /></a>
            </div>
            <p>&copy; {new Date().getFullYear()} {personalDetails.name}. All Rights Reserved.</p>
        </div>
    </footer>
);


// --- MAIN APP COMPONENT ---

export default function App() {
    // Updated navLinks to remove "Projects"
    const navLinks = [
        { id: 'about', name: 'About' },
        { id: 'experience', name: 'Experience' },
        { id: 'skills', name: 'Skills' },
        { id: 'contact', name: 'Contact' },
    ];

    return (
        <div className="bg-gray-900 font-sans leading-normal tracking-tight">
            <Header navLinks={navLinks} />
            <main>
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Education />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
