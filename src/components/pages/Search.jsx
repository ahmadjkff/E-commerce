import { useContext, useEffect, useState } from "react";
import { WishlistContext } from "../../Contexts/WishlistContext";
import Product from "../Product";
import { fetchSearch } from "../../API";
import { useLocation } from "react-router-dom";
import Loading from "../common/Loading";

function Search() {
  const { wishList } = useContext(WishlistContext);
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get("q");
    setQuery(searchQuery);

    const getSearchResults = async () => {
      if (searchQuery) {
        setLoading(true);
        const result = await fetchSearch(searchQuery);
        setProducts(result?.products || []);
        setLoading(false);
      }
    };

    getSearchResults();
  }, [location.search]);

  return (
    <div className="flex flex-col gap-8 mx-[135px] my-32 items-center">
      <div className="flex gap-8 flex-wrap">
        {loading ? (
          <Loading />
        ) : products.length > 0 ? (
          products.map((product) => (
            <Product
              isWishList={wishList.some((item) => item?.id === product?.id)}
              product={product}
              key={product?.id}
            />
          ))
        ) : (
          <h1 className="text-4xl">No products found for "{query}"</h1>
        )}
      </div>
    </div>
  );
}

export default Search;
