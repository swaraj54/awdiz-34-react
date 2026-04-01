import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import api from "../../config/axiosConfig";
function Products() {
  const [loading, setLoading] = useState(null);
  const [fakeProducts, setfakeProducts] = useState([]);
  const router = useNavigate();

  async function getProducts() {
    try {
      setLoading(true);
      // const response = await axios.get("https://fakestoreapi.com/products");
      // const response = await api.get("/products/get-all-products");
      // const response = await api.get("/products/single-product/1");
      // const response = await api.get("/auth/login");
      // const response = await api.get("/auth/register");
      const response = { data: [] };
      console.log(response.data, "response");
      setfakeProducts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <button onClick={getProducts}>Click to fetch products..</button>
      {/* {fakeProducts.length > 0 &&
        (loading ? <h1>Loading...</h1> : <h1>Products recevied...</h1>)} */}

      {!loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {fakeProducts.map((singleProductObject, index) => (
            <div
              key={singleProductObject.id}
              onClick={() =>
                router(`/single-product/${singleProductObject.id}`)
              }
              style={{
                paddding: "10px",
                width: "18%",
                height: "300px",
                border: "1px solid black",
                borderRadius: "10px",
                marginBottom: "20px",
                cursor: "pointer",
              }}
            >
              <img
                style={{ width: "100%", height: "200px" }}
                src={singleProductObject.image}
              />
              <h3>{singleProductObject.title}</h3>
              <h3>{singleProductObject.price}</h3>
            </div>
          ))}
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default Products;
