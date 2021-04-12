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
import {compose, createStore, applyMiddleware} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {Alert} from "./components/Alert";
import {AlertState} from "./context/alert/AlertState";
import {FireBaseContext} from "./context/firebase/firebaseContext";
import {FirebaseState} from "./context/firebase/FirebaseState";


const store = createStore(rootReducer, compose (
    applyMiddleware(
        thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

function App() {
  const routes = useRoutes(true)

  return (
      <Provider store={store}>
          <FirebaseState>
              <AlertState>
                  <BrowserRouter>
                      <Alert />
                    <div>
                      {routes}
                    </div>

                  </BrowserRouter>
              </AlertState>
          </FirebaseState>
      </Provider>

  );
}

export default App;
