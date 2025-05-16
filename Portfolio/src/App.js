import React from "react";
import { Github, Mail, FileText } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-10 shadow-md">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-2">Kollu Gopi Chand</h1>
          <p className="text-xl text-purple-100">AIML Engineer</p>
          <div className="mt-6 flex justify-center space-x-4">
            <a href="https://github.com/Gopichandkollu" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded shadow hover:bg-indigo-100 transition">
              <Github className="inline-block mr-2" /> GitHub
            </a>
            <a href="mailto:gopichandkollu95@gmail.com" className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded shadow hover:bg-indigo-100 transition">
              <Mail className="inline-block mr-2" /> Contact
            </a>
            <a href="https://drive.google.com/file/d/1_HWy9H23Z7sukfvIEu8amoENjyEOkUwm/view" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded shadow hover:bg-indigo-100 transition">
              <FileText className="inline-block mr-2" /> Resume
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-indigo-700">About Me</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            I’m an enthusiastic AIML Engineer with a passion for solving problems using artificial intelligence. I love creating smart tools and engaging user experiences that make everyday tasks easier.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-700">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-indigo-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-2">AI Chat Bot</h3>
              <p className="text-gray-700 mb-4">An AI-powered chatbot capable of understanding and responding to user queries in natural language, built using NLP and machine learning techniques.</p>
              <a href="https://github.com/Gopichandkollu" target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">View on GitHub</a>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center text-gray-800">
            <li className="bg-gray-100 py-3 rounded shadow">Python</li>
            <li className="bg-gray-100 py-3 rounded shadow">Machine Learning</li>
            <li className="bg-gray-100 py-3 rounded shadow">Deep Learning</li>
            <li className="bg-gray-100 py-3 rounded shadow">Natural Language Processing</li>
            <li className="bg-gray-100 py-3 rounded shadow">React.js</li>
            <li className="bg-gray-100 py-3 rounded shadow">Tailwind CSS</li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-indigo-700">Contact</h2>
          <p className="text-gray-700">Feel free to reach out via email: <a href="mailto:gopichandkollu95@gmail.com" className="text-indigo-600 underline">gopichandkollu95@gmail.com</a></p>
        </section>
      </main>

      <footer className="bg-indigo-600 text-white text-center py-4 mt-10">
        <p>&copy; {new Date().getFullYear()} Kollu Gopi Chand. All rights reserved.</p>
      </footer>
    </div>
  );
}