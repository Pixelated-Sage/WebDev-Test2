import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const ThemeSwitcher = () => {
    const {theme , toggleTheme} = useContext(ThemeContext);
    return(
        <button
        onClick={toggleTheme}
        className="p-2 rounded-lg text-white bg-gray-800 dark:bg-yellow-400 dark:text-black transition duration-300"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    )
}

export default ThemeSwitcher;