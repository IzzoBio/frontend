import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Newsletter */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold mb-4">Inscrivez-vous pour plus d'actualités</h2>
          <div className="flex justify-center items-center space-x-4">
            <div className="relative">
              
            </div>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-500">
              Subscribe
            </button>
          </div>
        </div>

        {/* Logo et Navigation */}
        <div className="w-full flex flex-col items-center border-t border-gray-700 pt-8">
          <div className="flex justify-between items-center w-full max-w-4xl">
          
            <ul className="flex space-x-6">
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">A propos de nous</li>
              <li className="hover:text-white cursor-pointer">Fonctionalité</li>
              <li className="hover:text-white cursor-pointer">Centre d'aide</li>
              <li className="hover:text-white cursor-pointer">Contactez nous</li>
              <li className="hover:text-white cursor-pointer">FAQs</li>
              <li className="hover:text-white cursor-pointer">Emploie</li>
            </ul>
          </div>

          {/* Sélection de langue */}
          <div className="flex justify-between items-center w-full max-w-4xl mt-8">
            
            <p className="text-gray-500">© 2024 Iza Ary Oh ?</p>
            {/* Réseaux sociaux */}
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.56v14.91c0 .98-.8 1.77-1.77 1.77H1.77C.8 21.23 0 20.43 0 19.46V4.56c0-.98.8-1.77 1.77-1.77h20.46c.97 0 1.77.8 1.77 1.77zM9.43 19.44v-7.53h-2.7v7.53h2.7zm-1.35-8.7a1.57 1.57 0 11-.01-3.14 1.57 1.57 0 01.01 3.14zM21 19.44v-4.15c0-.99-.36-1.67-1.24-1.67-.68 0-1.08.46-1.26.91-.06.14-.08.33-.08.53v4.38h-2.7c.04-7.12 0-7.53 0-7.53h2.7v1.07h-.01c.36-.56 1-.95 1.74-.95 1.27 0 2.22.83 2.22 2.6v4.8h-.01z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.52 0-9.96 4.44-9.96 9.96 0 4.41 3.61 8.05 8.17 8.76v-6.19H8.7v-2.57h2.51V9.92c0-2.49 1.49-3.86 3.75-3.86 1.07 0 2 .08 2.26.12v2.63h-1.55c-1.22 0-1.46.58-1.46 1.43v1.87h2.93l-.39 2.57h-2.54V21c4.55-.71 8.16-4.35 8.16-8.76 0-5.52-4.44-9.96-9.96-9.96z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 12c0-1.61 1.3-2.91 2.91-2.91H15.1c1.61 0 2.91 1.3 2.91 2.91v5.09C18.01 18.7 16.7 20 15.1 20H10.91C9.3 20 8 18.7 8 17.09V12zm-4-6c0-1.61 1.3-2.91 2.91-2.91h10.18C16.7 3.1 18.01 4.39 18.01 6v.99H3.98V6zm0 5.09v6.91c0 1.61 1.3 2.91 2.91 2.91H15.1C16.7 20 18.01 18.7 18.01 17.09V11.1H3.98zm5.09 6.91H12c.7 0 1.09-.39 1.09-1.09v-.18c0-.7-.39-1.09-1.09-1.09H9.07c-.7 0-1.09.39-1.09 1.09v.18c0 .7.39 1.09 1.09 1.09z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15 2.04c-3.53 0-6.46 2.93-6.46 6.46S11.47 15 15 15 21.46 12.07 21.46 8.5 18.53 2.04 15 2.04zM10 14.6c-3.26 0-5.91-2.65-5.91-5.91 0-3.26 2.65-5.91 5.91-5.91 3.26 0 5.91 2.65 5.91 5.91 0 3.26-2.65 5.91-5.91 5.91zm4.45 6.29H8.55v-.01c-.41 0-.74-.33-.74-.74v-.01c0-.41.33-.74.74-.74h5.9c.41 0 .74.33.74.74v.01c0 .41-.33.74-.74.74z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
