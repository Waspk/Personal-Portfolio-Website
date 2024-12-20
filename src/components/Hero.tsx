import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative">
      <div className="text-center space-y-6 animate-fadeIn">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Simon Abouelkhir
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
          Full Stack Developer specializing in building exceptional digital experiences
        </p>
        <div className="flex space-x-4 justify-center">
          <SocialLink href="https://github.com" icon={<Github />} label="GitHub" />
          <SocialLink href="https://linkedin.com" icon={<Linkedin />} label="LinkedIn" />
          <SocialLink href="mailto:simon.abouelkhir@gmail.com" icon={<Mail />} label="Email" />
        </div>
      </div>
      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown size={32} className="text-gray-400" />
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
      aria-label={label}
    >
      {icon}
    </a>
  );
}