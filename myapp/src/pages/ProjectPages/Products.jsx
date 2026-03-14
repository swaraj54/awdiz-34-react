import axios from "axios";
import { useState } from "react";
function Products() {
  const [fakeProducts, setfakeProducts] = useState([]);

  async function getProducts() {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data, "response");
    setfakeProducts(response.data);
  }

  return (
    <div>
      <button onClick={getProducts}>Click to fetch products..</button>
      {fakeProducts?.length > 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {fakeProducts.map((singleProductObject) => (
            <div
              style={{
                paddding: "10px",
                width: "18%",
                height: "300px",
                border: "1px solid black",
                borderRadius: "10px",
                marginBottom: "20px",
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
        <h2>Products not found.</h2>
      )}
    </div>
  );
}

export default Products;
