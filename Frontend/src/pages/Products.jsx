import React, { useState, useEffect } from "react";
import ShopSort from "../components/ShopFilter/ShopSort";
import ProductCard from "../components/Utilities/ProductCard";
import Loading from "../components/Utilities/Loading";
import Layout from "../Layout";
import { useDatabase } from "../contexts/DatabaseContext";

const Products = () => {
  const { fullData } = useDatabase();
  const { data } = useDatabase();
  const [uniqueCat, setUniqueCat] = useState({
    clothing: [],
    jewels: [],
    electronics: [],
  });
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredData, setFilteredData] = useState(data);

  // Effect to extract unique categories from data
  useEffect(() => {
    const uniqueCategories = fullData;
    setUniqueCat(uniqueCategories);
  }, [fullData]);

  // Effect to filter products based on selected category
  useEffect(() => {
    if (selectedCategory) {
      const filtered = data.filter(
        (item) => item.category === selectedCategory,
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [data, selectedCategory]);

  // // Sort products based on selected sorting option
  const sortProducts = (sortBy) => {
    let sortedData;
    if (sortBy === "electronics") {
      sortedData = uniqueCat.electronics;
    } else if (sortBy === "jewels") {
      sortedData = uniqueCat.jewels;
    } else if (sortBy === "clothing") {
      sortedData = uniqueCat.clothing;
    } else {
      sortedData = data;
    }
    setFilteredData(sortedData);
    console.log(filteredData);
  };

  // Effect to update sorted products when data changes
  useEffect(() => {
    sortProducts("all");
  }, [data]);

  // // Handler for category selection
  const categorySortingHandler = (category) => {
    setSelectedCategory(category);
  };

  // // Handler for sorting option selection
  const sortHandler = (event) => {
    sortProducts(event.target.value);
    console.log(event.target.value)
  };

  if (data.length) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h1>Shop Page</h1>
          <ShopSort sortHandler={sortHandler} />

          <div className="flex flex-wrap justify-center">
            <div className="w-full xl:w-11/12">
              <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4 justify-center">
                {filteredData.length > 0 ? (
                  filteredData.map((item, index) => (
                    <ProductCard key={index} product={item} />
                  ))
                ) : (
                  <Loading />
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>

    );
  } else {
    return <Loading />;
  }
};

export default Products;
