import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { DataProvider } from "./context/DataContext";
import { MenuProvider } from "./context/MenuContext";
import { Home } from "./pages/home/Home";
import { Users } from "./pages/users/Users";
import "./styles/global.scss";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./context/Theme";


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
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </MenuProvider>
    </DataProvider>
  )
}

export default App;