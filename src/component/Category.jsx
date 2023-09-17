import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/categorySlice";
import axios from "axios";

const Category = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categorys.category);
  const [inputValue, setInputValue] = useState("");
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8080/category/getAll");
      setCategories(response.data.data); // Verileri response.data'dan alın
    } catch (error) {
      console.error("Veri çekme hatası:", error);
    }
  };

  const postCategoryNames = async (item) => {
    try {
      // categoryList dizisini uygun formatta sunucuya post etmek için bir dizi oluşturun
      const formattedItem = {
        categoryName: item,
      };
      const response = await axios.post(
        "http://localhost:8080/category/add",
        formattedItem
      );

      // Post işlemi başarılı olduysa response'dan gelen veriyi işleyebilirsiniz
      console.log("Veri ekleme işlemi başarılı:", response.data.data);

      // Yeni kategori ekledikten sonra kategori listesini güncellemek istiyorsanız
      // Aşağıdaki kodla kategori listesini yeniden getirebilirsiniz:
      getCategories();
    } catch (error) {
      console.error("Veri ekleme hatası:", error);
    }
  };


  const deleteCategory = async (categoryId) => {
    try {
      const response = await axios.delete(`http://localhost:8080/category/delete?id=${categoryId}`);
  
      // Silme işlemi başarılı olduysa response'dan gelen veriyi işleyebilirsiniz
      console.log("Kategori silme işlemi başarılı:", response.data);
  
      // Kategori silindikten sonra kategori listesini güncellemek istiyorsanız
      // Aşağıdaki kodla kategori listesini yeniden getirebilirsiniz:
      getCategories();
    } catch (error) {
      console.error("Kategori silme hatası:", error);
    }
  };
  
  useEffect(() => {
    getCategories();
  }, []);

  console.log(categoryList, "categorylist");
  console.log(inputValue, "valueiinput");
  console.log(categories, "categories");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      dispatch(add(inputValue)); // Redux'a yeni veriyi ekleyin
      setInputValue(""); // Input alanını sıfırlayın
    }
  };

  const handleAddItem = () => {
    dispatch(add(inputValue)); // Redux'a yeni veriyi ekleyin
    setInputValue(""); // Input alanını sıfırlayın
  };

  const handleDelete = (itemIndex) => {
    dispatch(remove(itemIndex));
    console.log("çalıştı"); // Redux'ta tanımladığınız "remove" eylemi ile ilgili öğeyi silin
  };

  return (
    <div className="flex flex-col  items-center">
      <div className="flex items-center mt-12 ml-8 text-3xl font-serif text-white">
        Kategori
      </div>
      <div className="flex items-center mt-4 ml-8">
        <div className="relative w-[400px]">
          <input
            className="rounded-xl w-full h-[45px] placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 pr-[50px] pl-2"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleEnterPress}
            placeholder="  kategori ismini giriniz"
          />
          <div className="bg-green-600 rounded-full text-white absolute top-5 transform -translate-y-1/2 right-1 m-1 cursor-pointer">
            <AiOutlinePlusCircle size={30} onClick={handleAddItem} />
          </div>
        </div>
      </div>
      <div className="ml-8 ">
        <ul className="mt-4 flex flex-col">
          {categoryList &&
            categoryList.map((item, index) => (
              <div className="flex">
                <div>
                  <li
                    key={index}
                    className="bg-white w-[400px] h-[45px] p-2 flex items-center justify-between rounded-lg shadow-md mb-4"
                  >
                    <div className="text-lg font-semibold">
                      KATEGORİ İSMİ:{" "}
                      <span className="text-gray-500 ">{item} </span>
                    </div>
                  </li>
                </div>
                <div className="">
                  <button
                    className="m-2 w-[70px] bg-red-500 hover:bg-red-700 text-white font-bold p-1 rounded-lg"
                    onClick={() => handleDelete(index)}
                  >
                    Sil
                  </button>
                  <button
                    className=" m-2 w-[70px] text-white rounded-lg bg-green-500 text-xl hover:bg-green-600"
                    onClick={() => postCategoryNames(item)}
                  >
                    Kaydet
                  </button>
                </div>
              </div>
            ))}
        </ul>
      </div>

      <div className="ml-8 mt-4 flex flex-col ">
        <div className="text-white mt-16 ">
          <table className="table-auto ">
            {categories && categories.length > 0 && (
              <thead>
                <tr>
                  <th> kategoriler</th>
                </tr>
              </thead>
            )}
            <tbody>
              {categories &&
                categories.map((category, index) => (
                  <tr key={index}>
                    <td className="border border-slate-300 text-white">
                      {category.categoryName}
                    </td>
                    <div>
                      <button className=" flex items-center justify-center  ml-2 mt-3 w-[70px] bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer" onClick={()=>deleteCategory(category.id)}>
                        sil
                      </button>
                    </div>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Category;
