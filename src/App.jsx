import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { DataProvider } from "./context/DataContext";
import { MenuProvider } from "./context/MenuContext";
import { Home } from "./pages/home/Home";
import { Users } from "./pages/users/Users";
import "./styles/global.scss";


function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "users",
          element: <Users />,
        },
      ]
    }
  ]);

  return (
    <DataProvider>
      <MenuProvider>
        <RouterProvider router={router} />
      </MenuProvider>
    </DataProvider>
  )
}

export default App;