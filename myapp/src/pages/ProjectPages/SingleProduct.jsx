import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router";

const SingleProduct = () => {
  const [productData, setProductData] = useState(null);
  const { id } = useParams();
  async function getSingleProductData(productId) {
    try {
      if (id) {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`,
        );
        console.log(response.data, "single product response");
        setProductData(response.data);
      } else {
        alert("Product id is missing in the url");
      }
    } catch (error) {
      console.log(error, "error while fetching single product data");
    }
  }
  getSingleProductData(id);
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {productData ? (
        <>
          <div
            style={{ width: "45%", border: "1px solid black", height: "70vh" }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={productData?.image || ""}
              alt="Img"
            />
          </div>
          <div
            style={{ width: "45%", border: "1px solid black", height: "70vh" }}
          >
            <h1>Name : {productData?.title || ""}</h1>
            <h2>Price : ${productData?.price || ""}/-</h2>
          </div>
        </>
      ) : (
        <h1>Loading.</h1>
      )}
    </div>
  );
};

export default SingleProduct;
