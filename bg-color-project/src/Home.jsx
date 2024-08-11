import { useContext, createContext, useState } from "react";

export const BioContext = createContext();

export const Context = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const handleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <BioContext.Provider value={{ theme, handleTheme }}>
      {children}
    </BioContext.Provider>
  );
};

export const DarkLight = () => {
  const {theme,handleTheme}=useContext(BioContext);
  return (
    <>
      <div
        className={`h-screen ${
          theme === "dark" ? "bg-white text-black" : "bg-black text-white"
        }`}>
        <div className="flex gap-x-40 items-start">
          <div>Home</div>
          <div>Contact</div>
          <div>Help</div>
          <button onClick={handleTheme} className="btn">
            {theme === "dark" ? "🌑" : "☀️"}
          </button>
        </div>
        <div className="h-60 w-60 border-2 m-10 p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          amet esse aut, dignissimos enim impedit.
        </div>
        <div className="h-60 w-60 border-2 m-10 p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          amet esse aut, dignissimos enim impedit.
        </div>
      </div>
    </>
  );
};
