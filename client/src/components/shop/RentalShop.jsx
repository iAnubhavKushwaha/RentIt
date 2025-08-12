import React, { useState, useEffect } from "react";
import ProductCard from "./ProductListing/ProductCard";
import RentalShopHeader from "./RentalShopHeader";
import api from "../../utils/api";

const RentalShop = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto font-sans bg-zinc-50 min-h-screen">

      <RentalShopHeader />

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {currentProducts.map((product) => (
          <ProductCard key={product.id || product._id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 rounded-full border font-medium text-sm transition-colors
              ${
                currentPage === i + 1
                  ? "bg-purple-600 text-white border-purple-600"
                  : "bg-zinc-100 text-zinc-700 border-zinc-300 hover:bg-zinc-200"
              }`}
            aria-label={`Page ${i + 1}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RentalShop;
