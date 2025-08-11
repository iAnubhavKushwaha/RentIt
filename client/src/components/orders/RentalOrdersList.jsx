import React, { useState } from "react";
import RentalSidebar from "./RentalSidebar.jsx";
import RentalOrderCard from "./RentalOrderCard";

const RentalOrdersList = () => {
  const [filter, setFilter] = useState("ALL");

  const orders = [
    { customer: "Customer1", orderId: "R0001", price: 2000, status: "Quotation" },
    { customer: "Customer2", orderId: "R0002", price: 1000, status: "Pickedup" },
    { customer: "Customer3", orderId: "R0005", price: 3000, status: "Reserved", latePickup: "09/03/2025" },
    { customer: "Customer4", orderId: "R0006", price: 1400, status: "Returned" },
  ];

  const filteredOrders = filter === "ALL" ? orders : orders.filter(o => o.status === filter);

  return (
    <div className="flex">
      <RentalSidebar onFilterSelect={setFilter} />

      <div className="flex-1 p-4">
        {/* Top Controls */}
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="border border-zinc-300 rounded-lg px-3 py-2 w-1/3"
          />
          <div className="flex items-center gap-2">
            <span className="text-sm text-zinc-600">1-4/80</span>
            <button className="border px-2 py-1 rounded">{"<"}</button>
            <button className="border px-2 py-1 rounded">{">"}</button>
          </div>
        </div>

        {/* Orders Grid */}
        <div className="grid grid-cols-3 gap-4">
          {filteredOrders.map((order, idx) => (
            <RentalOrderCard key={idx} {...order} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RentalOrdersList;