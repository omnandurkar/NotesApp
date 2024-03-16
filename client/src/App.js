import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Home from "./view/Home";
import AddNote from "./components/AddNote";
import Login from "./view/Login";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/addnote",
      element: <AddNote/>
    },
    // {
    //   path: "/login",
    //   element: <Login/>
    // }

  ]);

  

  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
