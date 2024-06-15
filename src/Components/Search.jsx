import React, { useContext, useEffect, useState } from "react";

import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../useContext";
import { fetchDataFromApi } from "./Api";
const Search = () => {
  const { showSearch, set_showSearch } = useContext(ThemeContext);
  const [query, setquery] = useState("");
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  const onChange = (event) => {
    setquery(event.target.value);
  };
  useEffect(() => {
    if (!query.length) {
      setdata([]);
    } else {
      const getSearchResult = async () => {
        const result = await fetchDataFromApi(
          `/api/alls?populate=*&filters[$or][0][email][$containsi]=${query}&filters[$or][1][price][$contains]=${query}&filters[$or][2][title][$contains]=${query}&filters[$or][3][owner][$contains]=${query}&filters[$or][4][type][$contains]=${query}&filters[$or][5][description][$contains]=${query}&filters[$or][6][location][$contains]=${query}`
        );
        if (result){
            setdata(result.data);
        }
        
      };
      getSearchResult();
    }
  }, [query]);
  
  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          autoFocus
          type="text"
          placeholder="Search for Artworks"
          value={query}
          onChange={onChange}
        />
        <MdClose
          className="text-black close-btn"
          onClick={() => set_showSearch(false)}
        />
      </div>

      <div className="search-result-content">
        <div className="start-msg">
          Start typing to see what you are looking for.
        </div>

        <div className="search-results">
          {
            data.map((item) => (
                
              <div
                key={item.id}
                className="flex justify-around search-result-item"
                onClick={() => {
                  navigate(`/art/${item.id}`);
                  set_showSearch(false);
                }}
              >
    
                <div className="image-container">
                 <img
                    src={
                      process.env.REACT_APP_DEV_URL +
                      item.attributes.img.data.attributes.url
                    }
                    alt="imagesearched"
                    width={600}
                    height={600}
                  />
                </div>
                <div className="text-black prod-details">
                  <span className="name">Title: {item.attributes.title}</span>
                  <span className="name">
                    owner:
                    {item.attributes.owner}
                  </span>
                  <span className="price">
                    Email:
                    {item.attributes.email}
                  </span>

                  <span className="desc">
                    Description:
                    {item.attributes.description}
                  </span>
                </div>
                <div className="text-black prod-details">
                  <span className="name">
                    Location: {item.attributes.location}
                  </span>
                  <span className="name">
                    Category:
                    {item.attributes.type}
                  </span>
                  <span className="price">
                    रू
                    {item.attributes.price}
                  </span>

                  <span className="desc">
                    Published At:
                    {item.attributes.publishedAt}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Search;