import { BrowserRouter,Routes,Route } from "react-router-dom";
import Details from "./Views/Details";
import GraphicsMovie from "./Views/GraphicsMovie";
import { Home } from "./Views/Home";
import LandingPage from "./Views/LandingPage";
import Loading from "./Views/Loading";
import Themes from "./Theme/Themes";
import { ThemeProvider } from "styled-components";
import { useState } from "react";


function App() {
  const [themeSelector, setThemeSelector] = useState("dark");
  
  return (
    <>
    <ThemeProvider theme={Themes[themeSelector]}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage setThemeSelector={setThemeSelector}/>}/>
        <Route path="/home" theme={themeSelector} element={<Home></Home>}></Route>
        <Route path="/Loading"  element={<Loading></Loading>}/>
        <Route path="/home/:id" theme={themeSelector} element={<Details></Details>}></Route>
        <Route path="/home/graphics/:id" theme={themeSelector} element={<GraphicsMovie></GraphicsMovie>}></Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </>

  );
}

export default App;
