import { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("currentMode");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("currentMode", newTheme);
  };

  return (
    <header className="flex">
      <button
        onClick={() => setShowModal(true)}
        className="menu icon-menu flex"
      ></button>
      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Articles</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Speaking</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <button onClick={toggleTheme} className="mode flex">
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-close"
                onClick={() => setShowModal(false)}
              />
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Articles</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Speaking</a>
            </li>
            <li>
              <a href="#">Uses</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
