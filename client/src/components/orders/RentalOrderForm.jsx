import React, { useState } from 'react';

const RentalOrderForm = () => {
  const [customerName, setCustomerName] = useState('');
  const [invoiceAddress, setInvoiceAddress] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [rentalTemplate, setRentalTemplate] = useState('');
  const [products, setProducts] = useState([{ name: 'Product 1', quantity: 1, unitPrice: 200 }]);

  const calculateTotal = () => {
    return products.reduce((total, item) => total + item.quantity * item.unitPrice, 0);
  };

  const handleProductChange = (index, field, value) => {
    const updatedProducts = [...products];
    updatedProducts[index][field] = value;
    setProducts(updatedProducts);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-2xl shadow-sm border border-zinc-200 font-sans shadow-sm space-y-4">
      {/* Header Row 1 */}
      <div className="flex justify-between items-center mb-1">
        {/* Left: Create button */}
        <div>
          <button className="px-5 py-2.5 rounded-full border border-zinc-300 bg-zinc-100 text-zinc-700 text-sm hover:bg-zinc-200 transition-colors">Create</button>
        </div>
        {/* Center: 2 Delivery button */}
        <div>
          <button className="px-5 py-2.5 rounded-full border border-zinc-300 bg-zinc-100 text-zinc-700 text-sm hover:bg-zinc-200 transition-colors">2 Delivery</button>
        </div>
        {/* Right: Pagination controls */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <button
              className="rounded-full border border-zinc-300 bg-zinc-100 text-zinc-600 w-8 h-8 flex items-center justify-center hover:bg-zinc-200 transition-colors"
              aria-label="Previous Page"
            >
              &lt;
            </button>
            <span className="text-zinc-700 text-sm font-medium">1/80</span>
            <button
              className="rounded-full border border-zinc-300 bg-zinc-100 text-zinc-600 w-8 h-8 flex items-center justify-center hover:bg-zinc-200 transition-colors"
              aria-label="Next Page"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>

      {/* Header Row 2 */}
      <div className="flex justify-between items-center mb-2">
        {/* Left: Invoice, Pickup, Print buttons */}
        <div className="flex gap-3 flex-wrap">
          <button className="px-5 py-2.5 rounded-full border border-zinc-300 bg-zinc-100 text-zinc-700 text-sm hover:bg-zinc-200 transition-colors">Invoice</button>
          <button className="px-5 py-2.5 rounded-full border border-zinc-300 bg-zinc-100 text-zinc-700 text-sm hover:bg-zinc-200 transition-colors">Pickup</button>
          <button className="px-5 py-2.5 rounded-full border border-zinc-300 bg-zinc-100 text-zinc-700 text-sm hover:bg-zinc-200 transition-colors">Print</button>
        </div>
        {/* Right: State management buttons */}
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-full bg-zinc-100 border border-zinc-300 text-zinc-700 text-sm font-medium">Quotation</button>
          <button className="px-4 py-2 rounded-full bg-zinc-100 border border-zinc-300 text-zinc-700 text-sm">Quotation Sent</button>
          <button className="px-4 py-2 rounded-full bg-yellow-200 border border-yellow-400 text-yellow-800 text-sm font-medium">Rental Order</button>
        </div>
      </div>

      {/* Order State Badge */}
      <div className="mb-6">
        <span className="inline-block px-3 py-1 text-green-700 bg-green-100 rounded-full text-sm font-semibold border border-green-300">Reserved</span>
      </div>

      {/* Form */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm text-zinc-600">Customer</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full p-2 mt-1 border border-zinc-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-400 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm text-zinc-600">Expiration</label>
          <input
            type="date"
            className="w-full p-2 mt-1 border border-zinc-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-400 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm text-zinc-600">Invoice Address</label>
          <input
            type="text"
            value={invoiceAddress}
            onChange={(e) => setInvoiceAddress(e.target.value)}
            className="w-full p-2 mt-1 border border-zinc-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-400 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm text-zinc-600">Rental Order Date</label>
          <input
            type="date"
            className="w-full p-2 mt-1 border border-zinc-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-400 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm text-zinc-600">Delivery Address</label>
          <input
            type="text"
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
            className="w-full p-2 mt-1 border border-zinc-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-400 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm text-zinc-600">Price List</label>
          <input
            type="text"
            className="w-full p-2 mt-1 border border-zinc-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-400 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm text-zinc-600">Rental Template</label>
          <input
            type="text"
            value={rentalTemplate}
            onChange={(e) => setRentalTemplate(e.target.value)}
            className="w-full p-2 mt-1 border border-zinc-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-400 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm text-zinc-600">Rental Period</label>
          <input
            type="text"
            className="w-full p-2 mt-1 border border-zinc-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-400 text-sm"
          />
        </div>
      </div>

      {/* Table */}
      <table className="w-full border border-zinc-200 mb-4 text-sm">
        <thead className="bg-zinc-50">
          <tr className="border border-zinc-300">
            <th className="border border-zinc-200 px-6 py-6 text-left text-zinc-600 font-medium">Product</th>
            <th className="border border-zinc-200 px-6 py-6 text-left text-zinc-600 font-medium">Quantity</th>
            <th className="border border-zinc-200 px-6 py-6 text-left text-zinc-600 font-medium">Unit Price</th>
            <th className="border border-zinc-200 px-6 py-6 text-left text-zinc-600 font-medium">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              key={index}
              className={
                "border border-zinc-300 transition-colors " +
                (index % 2 === 0 ? "bg-white" : "bg-zinc-50") +
                " hover:bg-zinc-100"
              }
            >
              <td className="border border-zinc-200 px-6 py-6">
                <input
                  type="text"
                  value={product.name}
                  onChange={(e) => handleProductChange(index, 'name', e.target.value)}
                  className="w-full p-1 border border-zinc-300 rounded-lg"
                />
              </td>
              <td className="border border-zinc-200 px-6 py-6">
                <input
                  type="number"
                  value={product.quantity}
                  onChange={(e) => handleProductChange(index, 'quantity', e.target.value)}
                  className="w-full p-1 border border-zinc-300 rounded-lg"
                />
              </td>
              <td className="border border-zinc-200 px-6 py-6">
                <input
                  type="number"
                  value={product.unitPrice}
                  onChange={(e) => handleProductChange(index, 'unitPrice', e.target.value)}
                  className="w-full p-1 border border-zinc-300 rounded-lg"
                />
              </td>
              <td className="border border-zinc-200 px-6 py-6 text-zinc-700">
                ${(product.quantity * product.unitPrice).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Totals */}
      <div className="flex justify-end text-sm font-medium text-zinc-800 mb-4">
        <div className="space-y-1">
          <div>Untaxed Total: ${calculateTotal().toFixed(2)}</div>
          <div>Tax: $0</div>
          <div className="font-bold">Total: ${calculateTotal().toFixed(2)}</div>
        </div>
      </div>

      {/* Terms */}
      <textarea
        className="w-full p-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-400 text-sm"
        placeholder="Terms & Conditions"
      ></textarea>
    </div>
  );
};

export default RentalOrderForm;