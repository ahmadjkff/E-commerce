import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Header from "./components/Header";
import SignUp from "./components/pages/SignUp";
import Error from "./components/pages/Error";
import LogIn from "./components/pages/LogIn";
import WishList from "./components/pages/WishList";
import Footer from "./components/Footer";
import Products from "./components/pages/Products";
import ProductView from "./components/pages/ProductView";
import Cart from "./components/pages/Cart/Cart";
import Checkout from "./components/pages/CheckOut";
import { ProductProvider } from "./Contexts/ProductContext";
import { WishlistProvider } from "./Contexts/WishlistContext";
import { CartProvider } from "./Contexts/CartContext";
import { useEffect } from "react";
import Search from "./components/pages/Search";
import Account from "./components/pages/Account";
import Reviews from "./components/pages/Reviews";
import { AuthContextProvider } from "./Contexts/auth";
import Top from "./components/Top";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="font-poppins">
      <ProductProvider>
        <WishlistProvider>
          <CartProvider>
            <AuthContextProvider>
              <Router>
                <Top />
                <Header />
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/login" element={<LogIn />} />
                  <Route path="/wishlist" element={<WishList />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/account" element={<Account />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/products/:id" element={<ProductView />} />
                  <Route path="/reviews" element={<Reviews />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
              </Router>
            </AuthContextProvider>
          </CartProvider>
        </WishlistProvider>
      </ProductProvider>
    </div>
  );
}

export default App;
