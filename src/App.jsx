import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "./Pages/AuthPages/AuthLayout";
import Login from "./Pages/AuthPages/Login/Login";
import Register from "./Pages/AuthPages/Register/Register";
import MainLayout from "./Pages/MainPages/MainLayout";
import Home from "./Pages/MainPages/Home/Home";
import ProtectRoute from "./Components/ProtectRoute";
import { Bounce, ToastContainer } from "react-toastify";
import CountNoteProvider from "./lib/Context/CountNote";

function App() {
  const route = createBrowserRouter([
    {
      path: "",
      element: <AuthLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: (
            <ProtectRoute>
              <Home />
            </ProtectRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <>
    <CountNoteProvider>
       <RouterProvider router={route}></RouterProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />

    </CountNoteProvider>
     
    </>
  );
}

export default App;
