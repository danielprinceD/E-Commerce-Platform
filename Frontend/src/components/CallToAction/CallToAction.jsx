import React, { useEffect, useState } from "react";
import { useDatabase } from "../../contexts/DatabaseContext";
import ProductCard from "../Utilities/ProductCard";


const CallToAction = () => {
  const { data } = useDatabase();
  const [favouriteItems, setFavouriteItems] = useState([]);

  useEffect(() => {
    const filteredItems = data;
    setFavouriteItems(filteredItems);
  }, []);

  return (
    <>
      <section className="container mx-auto mt-4 mb-4">
        <div>
          <div className="my-6">
            <span className="block text-sm font-bold capitalize text-gray-500">
              Most loved
            </span>
            <h2 className="text-lg font-bold uppercase">
              Favourite Products This Season
            </h2>
          </div>
          <section>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {favouriteItems.map((product, index) => {
                return (
                  <React.Fragment key={index}>
                    <ProductCard index={index} product={product} />
                  </React.Fragment>
                );
              })}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
