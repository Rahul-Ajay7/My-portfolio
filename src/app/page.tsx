'use client';
import Image from 'next/image';
import Contact from './contact';
import Skills from './skills';

export default function Home() {
  return (
    <main className="min-h-screen pt-2 pb-0.5 flex flex-col items-center justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-black
 px-6">
      
      <nav className="w-full bg-black text-white px-5 py-4  flex justify-between items-center shadow-md border-b border-white fixed top-0 z-50">
 
          <h2 className="text-2xl font-bold">Portfolio</h2>

  
          <div className="flex gap-6">
            <a
              href="https://github.com/Rahul-Ajay7"
              target="_blank"
              rel="noopener noreferrer"

              className="hover:text-green-400 transition-colors duration-250"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-a-8b6849291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              rel="noopener noreferrer"

              target="_blank"
              className="hover:text-blue-400 transition-colors duration-250"
            >
              LinkedIn
            </a>
          </div>
      </nav>
      
      <div className="flex items-center justify-between mb-8 px-4 pt-20">
        <h1 className="text-4xl font-bold mb-4 text-white">Hi, I'm Rahul 👋</h1>
        <div className="mt-6 md:mt-0 md:ml-10">
          <Image
            src="/my-photo.jpg"
            alt="My Photo"
            className="w-40 h-40 md:w-52 md:h-52 object-cover border-4 rounded-full  border-white shadow-lg"
          />
        </div>
      </div>      
      <p className="text-lg text-white max-w-2xl text-center mb-8">
        I'm a Computer Science student passionate about Full Stack Development and Machine Learning.
        I build modern web apps using <strong>React</strong> and <strong>Firebase</strong>, and I love working on
        systems using <strong>Python</strong>, <strong>TensorFlow</strong> and <strong>scikit-learn</strong>.
        I am also interested in <strong>Digital Marketing</strong>.
      </p>
      <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-3 ">
        <div className="bg-yellow-500 shadow p-6 rounded-xl">
          <h2 className="text-xl  mb-2 font-semibold">💻 React Projects</h2>
          <p>Dynamic and responsive sites using React, NextJs, Tailwind CSS, and TypeScript.</p>
        </div>
        <div className="bg-red-400 shadow p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">🔐 Firebase</h2>
          <p>Authentication, Firestore, Cloud Functions, and Realtime Apps using Firebase.</p>
        </div>
        <div className="bg-purple-500 shadow p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">🤖 Machine Learning</h2>
          <p>Model training, evaluation and deployment with Python, Scikit-learn and TensorFlow.</p>
        </div>
      </div>
      <div className="fixed bottom-6 right-6 z-30">
        <a
          href="/Resume Updated.pdf"
          download
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold px-5 py-2 shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 rounded-full "
        >
          📄 Download CV
        </a>
      </div>
      <section className="w-full max-w-4xl mx-auto py-16 px-4" id="projects">
      <h2 className="text-3xl font-bold text-white text-center mb-8">Projects</h2>

      <div className="space-y-6">
    
       <div className="bg-red-700 hover:bg-red-600 transition-colors rounded-lg overflow-hidden shadow-md">
          <div className="flex flex-col sm:flex-row">
           <Image
          src="/rect.png"
          alt="Project Thumbnail"
          className="w-full sm:w-40 h-40 p-1 object-cover"
        />
        <div className="p-4 flex-1 text-white">
          <h3 className="text-xl font-bold">RECT - Social Site</h3>
          <p className="text-sm mt-2">
            A smart chat system built with React and Firebase that can help you to communicate with everyone in the world
            using an encrypted id.
          </p>
          <a
            href="https://rect-social-site.netlify.app"
            target="_blank"
            rel="Rect site link"
            className="text-green-300 mt-3 inline-block hover:underline break-all"
          >
            Click here!
          </a>
            </div>
          </div>
        </div>
        <div className="bg-yellow-600 hover:bg-yellow-500 transition-colors rounded-lg overflow-hidden shadow-md">
          <div className="flex flex-col sm:flex-row">
            <Image
              src="/calculator.jpg"
              alt="Project Thumbnail"
              className="w-full sm:w-40 h-40 p-1 object-cover"
            />
            <div className="p-4 flex-1 text-white">
              <h3 className="text-xl font-bold">Calculator</h3>
              <p className="text-sm mt-2">
                Build a virtual Calculator using HTML,CSS and Javascript to perform all the arithematic Calculations.
              </p>
              <a
                href="https://calculator-project-minor-web.netlify.app/"
                target="_blank"
                rel="Calculator link"
                className="text-green-300 mt-3 inline-block hover:underline break-all"
              >
                Click here!
              </a>
            </div>
          </div>
        </div>
        <div className="bg-purple-700 hover:bg-purple-600 transition-colors rounded-lg overflow-hidden shadow-md">
          <div className="flex flex-col sm:flex-row">
            <Image
              src="/Form.jpg"
              alt="Project Thumbnail"
              className="w-full sm:w-40 h-40 p-1 object-cover"
            />
            <div className="p-4 flex-1 text-white">
              <h3 className="text-xl font-bold">Form Registration</h3>
              <p className="text-sm mt-2">
                Build a Form system to collect the details of Clients.
              </p>
              <a
                href="https://formregistration-major-web.netlify.app/"
                target="_blank"
                rel="Form link"
                className="text-green-300 mt-3 inline-block hover:underline break-all"
              >
                Click here!
              </a>
            </div>
          </div>
        </div>

        
      </div>
    </section>
    <Skills/>

    <Contact/>
    <footer className="w-full bg-black border-t border-white flex  justify-center text-white py-6 mt-12">
     
        <p className="mb-4 sm:mb-0">© {new Date().getFullYear()} Rahul A. All rights reserved.</p>
        
        
       
    </footer>


      
    </main>
  );
}
