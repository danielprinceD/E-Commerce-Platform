import React, { useState } from 'react';
import Layout from '../Layout';

export const Support = () => {
    const [expanded, setExpanded] = useState({});

    const toggleExpansion = (id) => {
        setExpanded(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    return (
        <Layout>
            <div className="container mx-auto py-8">
                <h1 className="text-lg font-bold uppercase mb-5">
                    Support
                </h1>

                <div className="flex flex-col">
                    <div className="w-full mb-6">
                        <div className="bg-white rounded shadow p-6 border border-gray-200">
                            <h2 className="text-lg font-bold mb-3 uppercase">Contact Information</h2>
                            <p>Email: support@example.com</p>
                            <p>Phone: +123 456 7890</p>
                            <p>Address: 123 Main St, City, Country</p>
                        </div>
                    </div>

                    <div className="w-full mb-6">
                        <div className="bg-white rounded shadow p-6 border border-gray-200">
                            <h2 className="text-lg font-bold mb-3">FAQs</h2>
                            <ul>
                                <li className="pb-4 border-b border-gray-200 mb-4">
                                    <button
                                        className="flex items-center justify-between w-full"
                                        onClick={() => toggleExpansion('faq1')}
                                    >
                                        How do I track my order?
                                        <span className="text-sm">{expanded['faq1'] ? '-' : '+'}</span>
                                    </button>
                                    {expanded['faq1'] && (
                                        <div className="bg-gray-100 rounded p-4 mt-2">
                                            <p className="text-sm">Tracking your order is easy. Just log into your account and go to the order history page. From there, you can see the status of all your orders.</p>
                                        </div>
                                    )}
                                </li>
                                <li className="pb-4 border-b border-gray-200 mb-4">
                                    <button
                                        className="flex items-center justify-between w-full"
                                        onClick={() => toggleExpansion('faq2')}
                                    >
                                        What is your return policy?
                                        <span className="text-sm">{expanded['faq2'] ? '-' : '+'}</span>
                                    </button>
                                    {expanded['faq2'] && (
                                        <div className="bg-gray-100 rounded p-4 mt-2">
                                            <p className="text-sm">Our return policy allows returns within 30 days of purchase. Items must be in their original condition and packaging.</p>
                                        </div>
                                    )}
                                </li>
                                <li className="pb-4 border-b border-gray-200 mb-4">
                                    <button
                                        className="flex items-center justify-between w-full"
                                        onClick={() => toggleExpansion('faq3')}
                                    >
                                        How can I contact customer support?
                                        <span className="text-sm">{expanded['faq3'] ? '-' : '+'}</span>
                                    </button>
                                    {expanded['faq3'] && (
                                        <div className="bg-gray-100 rounded p-4 mt-2">
                                            <p className="text-sm">You can contact customer support by emailing us at support@example.com or by calling +123 456 7890.</p>
                                        </div>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full mb-6">
                        <div className="bg-white rounded shadow p-6 border border-gray-200">
                            <h2 className="text-lg font-bold mb-3 uppercase">Submit a Request</h2>
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                    <input type="text" id="subject" name="subject" className="form-input w-full border border-gray-300" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea id="message" name="message" rows="4" className="form-textarea w-full border border-gray-300"></textarea>
                                </div>
                                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
