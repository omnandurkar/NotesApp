import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Home from "./view/Home";
import AddNote from "./components/AddNote";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/addnote",
      element: <AddNote/>
    }

  ]);

  

  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
