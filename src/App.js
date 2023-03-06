import { Fragment } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Home, Login, Public } from './containers/public';
import { Route, Routes } from "react-router-dom";
import path from "./ultis/path";


function App() {
  return (
    <Fragment>
      <div>
        <Routes>
          <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.LOGIN} element={<Login />} />



            <Route path={path.STAR} element={<Home />} />
          </Route>
        </Routes>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </Fragment>
  );
}

export default App;
