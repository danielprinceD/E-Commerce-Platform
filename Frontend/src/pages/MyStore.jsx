import React from "react";
import { useDatabase } from "../contexts/DatabaseContext";
import ProductCard from "../components/Utilities/ProductCard";
import Layout from "../Layout";
import { useNavigate } from "react-router-dom";


const MyStore = () => {
    const { data } = useDatabase();
    const navigate = useNavigate();
    const handleAddProduct = () => {
        navigate('/addProduct');
    }

    return (
        <Layout>
            <section className="container mx-auto mt-4 mb-4">
                <div>
                    <div className="my-6 flex items-center justify-between">
                        <h2 className="text-lg font-bold uppercase">
                            Your Products
                        </h2>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={handleAddProduct}>
                            Add Product
                        </button>

                    </div>
                    <section>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                            {data.map((product, index) => {
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

export default MyStore;
