import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";
import Tab from "./Tab";


axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const ListItems = () => {
  const [cat, setCat] = useState([{name:"All",id:-1, products:[]}]);
  const [activeTab, setActiveTab] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios
        .get("http://localhost:8080/categories/")
        .then((res) => res.data);
      setCat((res1)=>res1.concat(res))
    }fetchData();
  }, []);

  const onTabClick = (products) => {
    setActiveTab(products);
  };

  return (
    <>
      <Nav />
      <main>
        <div className="content container">
          <div className="product" id="tabs">
            <div className="product__cat">
              <h1>Categories</h1>
              <ul>
                {cat
                  
                  .map((cat, id) => {
                    return (
                      <li key={id}>
                        <div
                          href={`#tabs-${cat.id}`}
                          onClick={() => onTabClick(cat.products)}
                        >
                          {cat.name}
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <Tab activeTab={activeTab} />
          </div>
        </div>
      </main>
    </>
  );
};

export default ListItems;
