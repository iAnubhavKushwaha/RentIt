import React from 'react';

const Products = () => {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans">

      {/* Action Bar */}
      <div className="container mx-auto px-6 py-4 border-b border-zinc-200 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 rounded-full border border-zinc-300 bg-zinc-100 text-zinc-700 text-sm hover:bg-zinc-200 transition-colors">
            Create
          </button>
          <button className="px-4 py-2 rounded-full border border-zinc-300 bg-zinc-100 text-zinc-700 text-sm hover:bg-zinc-200 transition-colors">
            Update Stock
          </button>
        </div>

        {/* Pagination */}
        <div className="flex items-center space-x-2 text-sm text-zinc-600">
          <span>1 / 80</span>
          <button
            className="px-2 py-1 rounded border border-zinc-300 bg-zinc-100 hover:bg-zinc-200 transition-colors"
            aria-label="Previous Page"
          >
            &lt;
          </button>
          <button
            className="px-2 py-1 rounded border border-zinc-300 bg-zinc-100 hover:bg-zinc-200 transition-colors"
            aria-label="Next Page"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: General Product Info */}
        <div className="bg-white shadow-sm rounded-2xl p-6 border border-zinc-200">
          <h2 className="text-lg font-semibold mb-4 text-zinc-900">General Product Info</h2>
          <p className="text-zinc-600 text-sm">Add your general product details here...</p>
        </div>

        {/* Right: Rental Pricing */}
        <div className="bg-white shadow-sm rounded-2xl p-6 border border-zinc-200">
          <h2 className="text-lg font-semibold mb-4 text-zinc-900">Rental Pricing</h2>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-zinc-100 text-left">
                <th className="p-2 border border-zinc-300">Rental Period</th>
                <th className="p-2 border border-zinc-300">Pricelist</th>
                <th className="p-2 border border-zinc-300">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-zinc-300">Daily</td>
                <td className="p-2 border border-zinc-300">Standard</td>
                <td className="p-2 border border-zinc-300">₹500</td>
              </tr>
              <tr>
                <td className="p-2 border border-zinc-300">Weekly</td>
                <td className="p-2 border border-zinc-300">Standard</td>
                <td className="p-2 border border-zinc-300">₹3000</td>
              </tr>
              <tr>
                <td className="p-2 border border-zinc-300">Monthly</td>
                <td className="p-2 border border-zinc-300">Standard</td>
                <td className="p-2 border border-zinc-300">₹10,000</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-md font-semibold mt-6 mb-2 text-zinc-900">Rental Reservation Charges</h3>
          <ul className="text-sm text-zinc-600 space-y-1">
            <li>Extra Hour: ₹50</li>
            <li>Extra Day: ₹400</li>
            <li>Extra Week: ₹2500</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;