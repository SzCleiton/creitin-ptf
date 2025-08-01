import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4 text-center bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400">
      <p>
        &copy; {currentYear} Cleiton Souza. Todos os direitos reservados.
      </p>
      <a 
        href="https://github.com/SzCleiton" 
        target="_blank" 
        rel="noopener noreferrer"
        className="underline hover:text-blue-500"
      >
        Visite meu GitHub
      </a>
    </footer>
  );
};

export default Footer;