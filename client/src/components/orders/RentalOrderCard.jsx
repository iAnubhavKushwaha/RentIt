import React from "react";

const statusColors = {
  Quotation: "bg-blue-100 text-blue-700 border-blue-300",
  "Quotation sent": "bg-purple-100 text-purple-700 border-purple-300",
  Reserved: "bg-green-100 text-green-700 border-green-300",
  Pickedup: "bg-yellow-100 text-yellow-700 border-yellow-300",
  Returned: "bg-red-100 text-red-700 border-red-300",
};

const RentalOrderCard = ({ customer, orderId, price, status, latePickup }) => {
  return (
    <div className="border border-zinc-300 rounded-xl p-4 bg-white flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-zinc-800">{customer}</span>
        <span className="text-lg font-bold">₹ {price}</span>
      </div>
      <div className="text-sm text-zinc-600">{orderId}</div>
      {latePickup && (
        <div className="text-xs text-red-600 font-medium">
          Late Pickup: {latePickup}
        </div>
      )}
      <span
        className={`px-3 py-1 text-xs font-medium border rounded-full self-start ${statusColors[status]}`}
      >
        {status}
      </span>
    </div>
  );
};

export default RentalOrderCard;