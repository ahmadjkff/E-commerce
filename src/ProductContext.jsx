import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const fetchProductsData = async (category = "", limit) => {
  const url = category
    ? `https://dummyjson.com/products/category/${category}?limit=${limit}`
    : `https://dummyjson.com/products?limit=${limit}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.products || []; // Return an empty array if products are undefined
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};

const fetchSingleProduct = async (id) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const ProductProvider = ({ children }) => {
  const [wishList, setWishList] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(8);
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState(null);
  const [id, setId] = useState(null);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const setWishListItems = (product) => {
    setWishList((prevWishList) => {
      const isProductInWishlist = prevWishList.some(
        (item) => item.id === product.id
      );

      return isProductInWishlist
        ? prevWishList.filter((item) => item.id !== product.id)
        : [...prevWishList, product];
    });
  };

  const setCartItems = (product) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.some((item) => item.id === product.id);
      if (isProductInCart) {
        window.alert("Product already in cart");
        return [...prevCart];
      }
      return [...prevCart, product];
    });
  };

  const removeCartItem = (id) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== id);
    });
  };

  useEffect(() => {
    const loadWishList = () => {
      const data = localStorage.getItem("wishlist"); // Make sure this key is consistent
      if (data) {
        setWishList(JSON.parse(data));
      } else {
        setWishList([]); // Initialize with an empty array if no data exists
      }
    };

    loadWishList();
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishList));
  }, [wishList]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetchProductsData(category, limit);
      setProducts(data);
    };

    fetchProducts();
  }, [category, limit]);

  useEffect(() => {
    if (id !== null) {
      const fetchProduct = async () => {
        const data = await fetchSingleProduct(id);
        setProduct(data);
      };
      fetchProduct();
    }
  }, [id]);

  return (
    <ProductContext.Provider
      value={{
        wishList,
        setWishListItems,
        products,
        limit,
        setLimit,
        setCategory,
        fetchProductsData,
        setProducts,
        fetchSingleProduct,
        product,
        setId,
        setProduct,
        setWishList,
        cart,
        setCart,
        setCartItems,
        removeCartItem,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
