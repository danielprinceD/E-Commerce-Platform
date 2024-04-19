import React, { useEffect, useState } from "react";
import { useDatabase } from "../contexts/DatabaseContext";
import ProductCard from "../components/Utilities/ProductCard";
import Layout from "../Layout";


const Wishlist = () => {
    const { data } = useDatabase();
    const [favouriteItems, setFavouriteItems] = useState([]);

    // useEffect(() => {
    //     const filteredItems = data.filter((item) => item.rating.rate >= 3);
    //     setFavouriteItems(filteredItems);
    // }, [data]);

    return (
        <Layout>
            <section className="container mx-auto mt-4 mb-4">
                <div>
                    <div className="my-6">
                        <h2 className="text-lg font-bold uppercase">
                            Products You Liked
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
        </Layout>
    );
};

export default Wishlist;
