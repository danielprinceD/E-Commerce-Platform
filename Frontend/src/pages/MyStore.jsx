import React, { useEffect, useState } from "react";
import { useDatabase } from "../contexts/DatabaseContext";
import ProductCard from "../components/Utilities/ProductCard";


const MyStore = () => {
    const { data } = useDatabase();
    const [favouriteItems, setFavouriteItems] = useState([]);

    useEffect(() => {
        const filteredItems = data.filter((item) => item.rating.rate >= 3);
        setFavouriteItems(filteredItems);
    }, [data]);

    return (
        <>
            <section className="container mx-auto mt-4 mb-4">
                <div>
                    <div className="my-6 flex items-center justify-between">
                        <h2 className="text-lg font-bold uppercase">
                            Your Products
                        </h2>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                            Add Product
                        </button>

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

export default MyStore;
