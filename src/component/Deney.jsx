import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct } from "../redux/productSlice";
import axios from "axios";

const Deney = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products.products);
  const productId = useSelector((state) => state.products.productID);
  const [categories, setCategories] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    id: { productId },
    productName: "",
    productPrice: 0,
    productCategory: "",
  });

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
console.log(products,"products")
  const postProduct = async (item) => {
   
    try {
      const selectedCategory = categories.find(
        (category) => category.categoryName === item.productCategory
      );

      if (!selectedCategory) {
        console.error("Seçilen kategori bulunamadı.");
        return;
      }

      const formattedItem = {
        id: 0,
        name: item.productName,
        price: item.productPrice,
        category: {
          id: selectedCategory.id,
          categoryName: selectedCategory.categoryName,
        },
      };

      const response = await axios.post(
        "http://localhost:8080/product/add",
        formattedItem
      );
      console.log(selectedCategory, "selected");
      console.log("Veri ekleme işlemi başarılı:", response.data);

      setIsSaved(true);
      setTimeout(() => {
        setIsSaved(false);
      }, 2000); 
    
    } catch (error) {
      console.error("Veri ekleme hatası:", error);
    }
  };

  const handleAddProduct = () => {
    dispatch(addProduct(newProduct));
  };

  const handleDeleteProduct = (index) => {
    dispatch(deleteProduct(index));
  };
  console.log(categories, "categories");
  console.log(productList, "productList");
  console.log(productId, "productId");

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className=" flex flex-col items-center  justify-center ">
      <div className="flex items-center mt-12 ml-8 text-3xl font-serif text-white">
        Ürün
      </div>
      <div className="flex flex-col text-white text-xl pt-4 ">
        <div className="flex m-2 ">
          <div className="mr-2 ">Ürün ismi:</div>
          <input
            type="text"
            className="text-black rounded-lg ml-12 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 pl-2"
            placeholder=" Ürün Adı"
            value={newProduct.productName}
            onChange={(e) =>
              setNewProduct({ ...newProduct, productName: e.target.value })
            }
          ></input>
        </div>
        <div className="flex m-2">
          <div className="mr-2">Ürün fiyatı:</div>
          <input
            type="text"
            className=" text-black rounded-lg ml-10 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 pl-2 "
            placeholder="Fiyat"
            value={newProduct.productPrice}
            onChange={(e) =>
              setNewProduct({ ...newProduct, productPrice: e.target.value })
            }
          ></input>
        </div>
        <div className="flex m-2">
          <div className="mr-2">Ürün kategorisi:</div>
          <label
            for="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
          ></label>
          <select
            id="productCategory"
            className="text-black rounded-lg focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 pl-2 w-[220px]"
            value={newProduct.productCategory}
            onChange={(e) =>
              setNewProduct({ ...newProduct, productCategory: e.target.value })
            }
          >
            <option value="" disabled>
              Kategori seçiniz
            </option>
            {categories.map((category, index) => (
              <option key={index} value={category.categoryName}>
                {category.categoryName}
              </option>
            ))}
          </select>
        </div>
        <div
          className="flex justify-center items-center w-[220px]   ml-40 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
          onClick={handleAddProduct}
        >
          oluştur
        </div>
      </div>
      <div className="text-white mt-16 ">
        <table className="table-auto ">
          {productList.length > 0 && (
            <thead>
              <tr>
                <th> ürün</th>
                <th> kategori</th>
                <th> fiyat</th>
              </tr>
            </thead>
          )}
          <tbody>
            {productList &&
              productList.map((item, index) => (
                <tr key={index}>
                  <td className="border border-slate-300">
                    {item.productName}
                  </td>
                  <td className="border border-slate-300">
                    {item.productCategory}
                  </td>
                  <td className="border border-slate-300">
                    {item.productPrice}
                  </td>
                  <td>
                    <button
                      className=" flex items-center justify-center w-[70px]  ml-2 mt-3 py-2 px-4 bg-red-500 hover:bg-red-700 text-white font-bold  rounded-full"
                      onClick={() => handleDeleteProduct(item.id)}
                    >
                      Sil
                    </button>
                  </td>
                  <td>
                    <div
                      className=" flex items-center justify-center  ml-2 mt-3 w-[70px] bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer"
                      onClick={() => postProduct(item)}
                    >
                      Kaydet
                    </div>
                  </td>
                </tr>
              ))}  {isSaved && <div className="mt-8 ml-4">kaydedildi</div>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Deney;

/* 
   value={newProduct.productCategory}
            onChange={(e) =>
              setNewProduct({ ...newProduct, productCategory: e.target.value })
            }*/
