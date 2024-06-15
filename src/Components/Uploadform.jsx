import React, { useState } from "react";

import { postDataToApi } from "./Api";

const Uploadform = () => {
  const [title, setTitle] = useState("");
  const [category, setCaterogy] = useState("greens");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [img, setImg] = useState(null);
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleImgChange = (e) => {
    setImg(e.target.files[0]);
  };

  const handleCategoryChange = (e) => {
    setCaterogy(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Img_Data = new FormData();
    Img_Data.append("files", img);
    try {
      let imageData = await postDataToApi("/api/upload", Img_Data, true);
      const imageId = imageData[0].id;
      const formData = {
        email: localStorage.getItem("USER_EMAIL"),
        owner: localStorage.getItem("USER_NAME"),
        title: title,
        type: category,
        description: description,
        price: price,
        img: imageId,
        location: location,
      };

      let { data } = await postDataToApi("/api/alls", formData, false);
      if (data) {
        alert("account created successfully");
      }
    } catch (error) {}
  };
  return (
    <div className="bg-lime-100">
      <div>
        <div>
          <div className="relative flex items-center justify-center min-h-screen ">
            <div className=" w-full p-10 bg-lime-100 rounded-xl z-10">
              <div className="text-center">
                <h2 className="mt-5 text-3xl font-bold text-gray-200">
                  UPLOAD YOUR PRODUCT!
                </h2>
                <p className="mt-2 text-sm text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <form onSubmit={handleSubmit} className="mt-8 space-y-3">
                {/* onSubmit={onSubmit} */}
                <div className="grid grid-cols-1 space-y-2">
                  <label className="text-sm font-bold tracking-wide text-gray-500">
                    Title of the Product
                  </label>
                  <input
                    className="p-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    type="text"
                    name="artistname"
                    placeholder="Title"
                    value={title}
                    onChange={handleTitleChange}
                  />

                  <label
                    htmlFor="art"
                    className="text-sm font-bold tracking-wide text-gray-500"
                  >
                    Category
                  </label>
                  <select
                    className="p-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    name="category"
                    id="art"
                    required
                    value={category}
                    onChange={handleCategoryChange}
                  >
                    <option value="greens" selected>
                      Greens
                    </option>
                    <option value="fruits">Fruits</option>
                    <option value="home">Home Made</option>
                    <option value="groceries">Groceries</option>
                    <option value="meat">Meat Product</option>
                    
                  </select>
                  <label className="text-sm font-bold tracking-wide text-gray-500">
                    Description
                  </label>
                  <textarea
                    className="p-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    type="text"
                    placeholder="Describe your Art in short"
                    name="description"
                    value={description}
                    onChange={handleDescriptionChange}
                  />
                  <label className="text-sm font-bold tracking-wide text-gray-500">
                    Price
                  </label>
                  <input
                    className="p-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    type="text"
                    placeholder="Set Price"
                    name="price"
                    value={price}
                    onChange={handlePriceChange}
                  />
                   <label className="text-sm font-bold tracking-wide text-gray-500">
                    Location
                  </label>
                  <input
                    className="p-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    type="text"
                    placeholder="Location"
                    name="price"
                    value={location}
                    onChange={handleLocationChange}
                  />
                  
                </div>
                <div className="grid grid-cols-1 space-y-2">
                  <label className="text-sm font-bold tracking-wide text-gray-500">
                    Attach Document
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col w-full p-10 text-center border-4 border-dashed rounded-lg">
                      <div className="flex flex-col items-center justify-center w-full h-full text-center ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-10 h-20 text-blue-400 group-hover:text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <p className="text-gray-500 pointer-none ">
                          <span className="text-sm text-blue-500 underline ">
                            CHOOSE YOUR ARTWORK HERE.
                          </span>
                        </p>
                        <input
                          type="file"
                          name="img"
                          onChange={handleImgChange}
                          className="justify-center mt-4 text-center text-gray-500"
                        />
                      </div>
                    </label>
                  </div>
                </div>
                <div className="text-center">
                  <input
                    type="submit"
                    value="Submit"
                    className="px-8 py-2 mt-4 text-white border"
                  />
                </div>
                {/* this was input ko div mathi/// prev ui changed but not removed
                 <button className="flex justify-center p-4 my-5 font-semibold tracking-wide text-gray-100 transition duration-300 ease-in bg-blue-500 rounded-full shadow-lg cursor-pointer focus:outline-none focus:shadow-outline hover:bg-blue-600">
                  Upload
                </button> */}
                {/* <div>
                  <input
                    type="file"
                    name="img"
                    onChange={(e) => setFiles(e.target.files)}
                  />
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uploadform;