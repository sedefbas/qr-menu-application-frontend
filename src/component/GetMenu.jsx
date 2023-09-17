import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import axios from "axios";


const GetMenu = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const getCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8080/category/getAll");
      setCategories(response.data.data); // Verileri response.data'dan alın
    } catch (error) {
      console.error("Veri çekme hatası:", error);
    }
  };

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/product/getAll");
      setProducts(response.data.data); // Verileri response.data'dan alın
    } catch (error) {
      console.error("Veri çekme hatası:", error);
    }
  };

  useEffect(() => {
    getCategories();
    getProducts();
    // fetchData işlemini çağırın
  }, []);

  console.log("categoris", categories);
  console.log("products", products);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <div key={index}>
            <MenuItem
              title={category.categoryName}
              items={products
                .filter(
                  (product) =>
                    product.category.categoryName === category.categoryName
                )
                .map((product) => product.name)}
              price={products
                .filter(
                  (product) =>
                    product.category.categoryName === category.categoryName
                )
                .map((product) => product.price)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetMenu;
