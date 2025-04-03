import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext"

import { Link } from "react-router-dom"

const NavBar = () => {
    const { theme , toggleTheme } = useContext(ThemeContext);

    return(
        <nav className={`fixed w-full z-20 top-0 start-0 ${
            theme === "light" ? "bg-white border-gray-200" : "bg-gray-900 border-gray-800"
          } transition-all duration-300 ease-in-out`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className={`text-2xl font-extrabold ${
                  theme === "light" ? "text-gray-900" : "text-white"
                }`}>
                  📝 Notes App
                </span>
              </Link>
      
              <div className="flex items-center space-x-6">
                <Link 
                  to="/"
                  className={`font-medium hover:scale-105 transition-transform ${
                    theme === "light" 
                      ? "text-gray-700 hover:text-blue-600" 
                      : "text-gray-200 hover:text-blue-400"
                  }`}
                >
                  Home
                </Link>
                <Link 
                  to="/create"
                  className={`font-medium hover:scale-105 transition-transform ${
                    theme === "light" 
                      ? "text-gray-700 hover:text-blue-600" 
                      : "text-gray-200 hover:text-blue-400"
                  }`}
                >
                  Create Notes
                </Link>
      
                <button
                  onClick={toggleTheme}
                  className={`px-4 py-2 rounded-lg font-medium transform hover:scale-105 transition-all duration-200 ${
                    theme === "light"
                      ? "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      : "bg-gray-700 text-gray-100 hover:bg-gray-600"
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    theme === "light" ? "focus:ring-gray-300" : "focus:ring-gray-600"
                  }`}
                >
                  {theme === "light" ? (
                    <span className="flex items-center">
                      🌙 Dark Mode
                    </span>
                  ) : (
                    <span className="flex items-center">
                      ☀️ Light Mode
                    </span>
                  )}
                </button>
              </div>
            </div>
          </nav>
    );
};

export default NavBar;