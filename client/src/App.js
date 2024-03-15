import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Home from "./view/Home";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

  ]);

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={router} />);

  return (
    <div className="App">

    </div>
  );
}

export default App;
