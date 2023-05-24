import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RouteConfigComponents from './RouteConfig';
import { Provider } from "react-redux";
import store from "./Store/store";
// import { Helmet } from 'react-helmet'
import Seo from "./Components/Seo/Seo.jsx";

function App() {
  return (
    <Provider store={store}>
      <Seo />
      {/* <Helmet>
        <html lang="en" />
        <title>React Helmet Tutorial</title>
        <meta name='keywords' content='ecomerce, cart' />
        <meta
          name="description"
          content="Description for Tutorial for React Helmet"
        />
        <meta name="theme-color" content="#E6E6FA" />
      </Helmet> */}

      <RouteConfigComponents />
    </Provider>

  );
}

export default App;
