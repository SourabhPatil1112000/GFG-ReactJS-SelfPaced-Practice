import React from 'react';

// Reusable section component for consistency
const Section = ({ title, children }) => (
  <div className="resume-section mb-8">
    <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-200 pb-2 mb-4 tracking-wide">
      {title}
    </h2>
    {children}
  </div>
);

// Component to render list items with optional sub-items
const ListItem = ({ title, subtitle, period, children }) => (
  <div className="mb-6 hover:bg-gray-50 p-3 rounded transition-colors duration-200">
    <div className="flex flex-wrap justify-between items-baseline mb-1">
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      {period && <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{period}</span>}
    </div>
    {subtitle && <p className="text-md font-semibold text-gray-700 mb-2">{subtitle}</p>}
    {children && <div className="text-gray-700 mt-2 space-y-2 pl-2 border-l-2 border-gray-200">{children}</div>}
  </div>
);

const Resume = () => {
  // Personal Info
  const name = "SOURABH PATIL";
  const phone = "+91 8149118135";
  const email = "patilsourabhsatish@gmail.com";
  const linkedin = "linkedin.com/in/sourabh-patil-1431481ab";
  const github = "github.com/SourabhPatil1112000";

  return (
    <div className="max-w-5xl mx-auto my-10 p-8 bg-white shadow-xl rounded-lg font-sans text-gray-800 border-t-4 border-blue-600">
      {/* Header with Name and Contact */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 mb-6 border-b-2 border-gray-200">
        <div className="mb-4 md:mb-0">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">{name}</h1>
          <p className="text-lg text-blue-600 font-medium mt-1">Java Full Stack Developer</p>
        </div>
        <div className="text-sm text-gray-600 space-y-2 md:text-right bg-gray-50 p-4 rounded-lg">
          <p className="flex items-center md:justify-end">
            <span className="font-semibold mr-2">📞</span> {phone}
          </p>
          <p className="flex items-center md:justify-end">
            <span className="font-semibold mr-2">✉️</span> 
            <a href={`mailto:${email}`} className="text-blue-600 hover:underline">{email}</a>
          </p>
          <p className="flex items-center md:justify-end">
            <span className="font-semibold mr-2">🔗</span>
            <a href={`https://${linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
          </p>
          <p className="flex items-center md:justify-end">
            <span className="font-semibold mr-2">💻</span>
            <a href={`https://${github}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
          </p>
        </div>
      </header>

      {/* Profile Summary */}
      <Section title="PROFILE SUMMARY">
        <p className="text-gray-700 leading-relaxed bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          Java Full Stack Developer with <span className="font-bold text-blue-700">3+ years</span> of experience, having built multiple Java web applications using Spring Boot, Hibernate, and enterprise Java frameworks. In my professional experience, I have worked extensively on Frontend development (JavaScript, React.js), Automation Testing (Jasmine JS, Selenium), and Jenkins CI/CD pipelines. I am pro-active in taking ownership of tasks and projects, ensuring quality-driven solutions that contribute to company growth and success.
        </p>
      </Section>

      {/* Work Experience */}
      <Section title="WORK EXPERIENCE">
        <ListItem title="Dassault Systemes" subtitle="Software Developer Engineer" period="Pune, India | July 2022 - Present">
          <div className="space-y-6">
            {/* Jenkins Role */}
            <div className="bg-white p-3 rounded">
              <h4 className="font-bold text-blue-700 text-base mb-2">Jenkins Automation Engineer - SolidWorks Automation</h4>
              <p className="text-sm text-gray-500 mb-2">June 2025 - Present</p>
              <ul className="list-disc list-outside ml-5 text-gray-700 space-y-2">
                <li className="pl-1">Successfully delivered Jenkins automation project: Automated Solidworks repository setup process, reducing setup time from <span className="font-semibold text-green-600">1-2 days → 45mins-1 hour</span> using Jenkins pipelines.</li>
                <li className="pl-1">Optimized Jenkins Pipeline Performance: Accelerated file download speeds by <span className="font-semibold text-green-600">10x</span> by replacing inefficient FTP transfers with direct network path access.</li>
                <li className="pl-1">Automated Complex Workflows: Developed robust Groovy scripts to automate critical CI/CD processes, enhancing build reliability and execution efficiency.</li>
                <li className="pl-1">Multi-Machine Environment Management: Designed PowerShell scripts to automate Java version upgrades across multiple VMs.</li>
              </ul>
            </div>
            
            {/* SDE Role */}
            <div className="bg-white p-3 rounded">
              <h4 className="font-bold text-blue-700 text-base mb-2">Software Developer Engineer - Solidworks Generative Apps and xReveal</h4>
              <p className="text-sm text-gray-500 mb-2">June 2023 - May 2025</p>
              <ul className="list-disc list-outside ml-5 text-gray-700 space-y-2">
                <li className="pl-1">Developed scalable web applications using MVC architecture with modern JS frameworks.</li>
                <li className="pl-1">Built "Tactical Cut View" feature with dynamic plane selection for enhanced CAD simulation.</li>
                <li className="pl-1">Led development of "Diagnostic Center" implementing real-time error display system.</li>
                <li className="pl-1">Automated testing pipeline covering <span className="font-semibold text-green-600">145+ test cases</span> using Jasmine JS and Cheetah Framework, reducing testing time by <span className="font-semibold text-green-600">65% (1.5hrs → 35mins)</span>.</li>
                <li className="pl-1">Identified and reported <span className="font-semibold text-green-600">15+ software bugs</span>; independently resolved more than <span className="font-semibold text-green-600">12 critical bugs</span>.</li>
              </ul>
            </div>
            
            {/* Intern Role */}
            <div className="bg-white p-3 rounded">
              <h4 className="font-bold text-blue-700 text-base mb-2">Software Developer Intern - Solidworks AI and Motion</h4>
              <p className="text-sm text-gray-500 mb-2">July 2022 - June 2023</p>
              <ul className="list-disc list-outside ml-5 text-gray-700 space-y-2">
                <li className="pl-1">Developed calculator project in xDesign to improve client-server interaction understanding.</li>
                <li className="pl-1">Worked with AI team on Generative AI CAD project using Three JS and JavaScript.</li>
              </ul>
            </div>
          </div>
        </ListItem>
      </Section>

      {/* Skills Section - Using a grid for better presentation */}
      <Section title="TECHNICAL SKILLS">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-md transition">
            <h3 className="font-bold text-blue-700 mb-2 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Languages & Frameworks:
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Java", "Spring Boot", "Hibernate", "JSP", "Servlet", "MVC", "JDBC", "JavaScript", "TypeScript", "React JS", "HTML5", "CSS3", "Tailwind CSS", "Three JS", "C++"].map(skill => (
                <span key={skill} className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200 text-gray-700">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-md transition">
            <h3 className="font-bold text-blue-700 mb-2 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Testing & Automation:
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Jenkins", "Jasmine JS", "Selenium", "TestNG", "Cucumber BDD", "Automation Testing"].map(skill => (
                <span key={skill} className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200 text-gray-700">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2 bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-md transition">
            <h3 className="font-bold text-blue-700 mb-2 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Tools & Platforms:
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Eclipse", "Maven", "Postman", "Git/GitLab/Github", "Jira", "VS Code"].map(tool => (
                <span key={tool} className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200 text-gray-700">{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section title="PROJECTS">
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-lg border-l-4 border-blue-500 hover:shadow-md transition">
            <h3 className="font-bold text-gray-800 mb-2">🏭 Inventory Management System for Patil Batteries and Power Solutions</h3>
            <p className="text-sm text-blue-600 mb-2">Java, Spring Boot, JSP, MVC, Hibernate</p>
            <p className="text-gray-700">Built Full Stack Inventory Management System using Spring Boot with REST APIs for CRUD operations. Implemented MVC architecture with JSP frontend and Hibernate ORM for database interactions. Designed MySQL schema and created responsive UI with Bootstrap.</p>
          </div>
          
          <div className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-lg border-l-4 border-green-500 hover:shadow-md transition">
            <h3 className="font-bold text-gray-800 mb-2">✅ To-Do Web Application with User Login & CRUD</h3>
            <p className="text-sm text-blue-600 mb-2">Java, Spring Boot</p>
            <p className="text-gray-700">Developed a Full Stack To-Do application with user authentication and CRUD operations using Java and Spring Boot.</p>
          </div>
          
          <div className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-lg border-l-4 border-purple-500 hover:shadow-md transition">
            <h3 className="font-bold text-gray-800 mb-2">🔧 SolidWorks Hackathon Projects</h3>
            <p className="text-sm text-blue-600 mb-2">JavaScript</p>
            <p className="text-gray-700">Developed "Screenshot Command for xDesign" and "Share Model as QR Code" feature to improve user functionality and enhance collaboration.</p>
          </div>
        </div>
      </Section>

      {/* Education */}
      <Section title="EDUCATION">
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition">
            <div>
              <span className="font-bold text-gray-800">Vishwakarma Institute of Technology (VIT)</span>
              <p className="text-gray-600">B.Tech in Mechanical Engineering - CGPA: 8.84/10</p>
            </div>
            <span className="text-sm font-medium text-blue-600 bg-white px-3 py-1 rounded-full mt-2 md:mt-0">2023</span>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition">
            <div>
              <span className="font-bold text-gray-800">Government College of Engineering</span>
              <p className="text-gray-600">BTech, Mechanical Engineering - Grade: 7.78</p>
            </div>
            <span className="text-sm font-medium text-blue-600 bg-white px-3 py-1 rounded-full mt-2 md:mt-0">2018 - 2019</span>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition">
            <div>
              <span className="font-bold text-gray-800">R R Shinde Jr. College</span>
              <p className="text-gray-600">12th Grade - Percentage: 83.85%</p>
            </div>
            <span className="text-sm font-medium text-blue-600 bg-white px-3 py-1 rounded-full mt-2 md:mt-0">2016 - 2018</span>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition">
            <div>
              <span className="font-bold text-gray-800">Cygnet Public School</span>
              <p className="text-gray-600">10th Grade - Percentage: 91.2%</p>
            </div>
            <span className="text-sm font-medium text-blue-600 bg-white px-3 py-1 rounded-full mt-2 md:mt-0">2015 - 2016</span>
          </div>
        </div>
      </Section>

      {/* Certifications */}
      <Section title="CERTIFICATIONS">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            "Dassault Systemes R&D Javascript - Web Software Engineer Certification - Level 1 (Sep 2025)",
            "Dassault Systemes R&D C++ Software Engineer Certification - Level 1 (Mar 2024)",
            "PW Skills Full Stack Web Development Course (Jul 2025)",
            "GeeksforGeeks Automation Testing Course (Jun 2025)",
            "The Kiran Academy Pune Java Full Stack Development Course (Jan 2026)",
            "Dassault Systemes Certified SOLIDWORKS Associate (CSWA)"
          ].map((cert, index) => (
            <div key={index} className="flex items-start p-2 hover:bg-gray-50 rounded">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700 text-sm">{cert}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Achievements */}
      <Section title="ACHIEVEMENTS">
        <div className="bg-gradient-to-r from-yellow-50 to-white p-4 rounded-lg border-l-4 border-yellow-500">
          <p className="text-gray-700">
            <span className="font-bold text-gray-800">📺 Patil's Math YouTube Channel (2020)</span> — 12th-grade math tutorials and engineering admission mentoring with <span className="font-bold text-blue-600">800+ subscribers</span>.
          </p>
        </div>
      </Section>

      {/* Footer with ATS-friendly note */}
      <footer className="text-xs text-gray-400 text-center mt-8 pt-4 border-t border-gray-200">
        <p>© 2026 Sourabh Patil - Java Full Stack Developer Resume</p>
        <p className="mt-1">ATS Friendly | Clean Format | Professional Design</p>
      </footer>
    </div>
  );
};

export default Resume;