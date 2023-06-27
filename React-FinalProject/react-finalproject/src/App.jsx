import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import Router from "./routes/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {fetchAllProducts} from './utils/request'

function App() {
  const dispatch = useDispatch()
  const allProducts = useSelector((state) => state.products.products)

  useEffect(() => {
    if (allProducts.length === 0) {
      dispatch(fetchAllProducts())
    }
  }, [])
  return (
    <>
      <GlobalStyle />
      <Router />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
