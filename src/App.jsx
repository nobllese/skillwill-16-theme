import useLocalStorage from "use-local-storage-state";
import { useWindowSize } from "@react-hook/window-size";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [width] = useWindowSize();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className={`app ${theme}`}>
      <Header toggleTheme={toggleTheme} />
      <Footer theme={theme} width={width} />
    </div>
  );
}

export default App;
