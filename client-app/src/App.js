import logo from './logo.svg';
import './App.css';
import {HomePage} from "./pages/HomePage";
import {ToolsPages} from "./pages/ToolsPages";
import {MainPage} from "./pages/MainPage";
import SimpleSlider from "./pages/SimpleSlider";
import CenterMode from "./pages/CenterMode";
import {GalleryPage} from "./pages/GalleryPage";
import {BrowserRouter} from "react-router-dom";
import {useRoutes} from "./routes";

function App() {
  const routes = useRoutes(true)

  return (
      <BrowserRouter>
        <div>
          {routes}
        </div>
      </BrowserRouter>
  );
}

export default App;
