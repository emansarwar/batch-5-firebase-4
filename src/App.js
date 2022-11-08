// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./App.css";
import About from "./components/About/About";
// import Main from './layouts/Main';
import Shop from "./components/Shop/Shop";
import Orders from "./components/Orders/Orders";
import Login from "./components/Login/Login";
import Inventory from "./components/Inventory/Inventory";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import SignUp from "./components/SignUp/SignUp";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Shipment from "./components/Shipment/Shipment";
// import { productsAndCartLoader } from './loaders/productsAndCartLoader';

function App() {
  //   {
  //     path:'/',
  //     element: <Main></Main>,
  //     children: [
  //       {
  //         path: '/',
  //         loader: () => fetch('products.json'),
  //         element: <Shop></Shop>
  //       },
  //       {
  //         path:'orders',
  //         loader: productsAndCartLoader,
  //         element: <Orders></Orders>
  //       },
  //       {
  //         path: 'inventory',
  //         element: <Inventory></Inventory>
  //       },
  //       {
  //         path:'about',
  //         element:<About></About>
  //       }
  //     ]
  //   },

  // ])
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        ></Route>

        <Route path="/shipment" element={
        <RequireAuth>
          <Shipment />
        </RequireAuth>
      }></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
