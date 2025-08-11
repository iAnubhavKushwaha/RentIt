import React from "react";

const RentalSidebar = ({ onFilterSelect }) => {
  const rentalStatuses = [
    { label: "ALL", count: 16 },
    { label: "Quotation", count: 3 },
    { label: "Reserved", count: 8 },
    { label: "Pickedup", count: 4 },
    { label: "Returned", count: 1 },
  ];

  const invoiceStatuses = [
    { label: "Fully Invoiced", count: 5 },
    { label: "Nothing to invoice", count: 5 },
    { label: "To invoice", count: 5 },
  ];

  return (
    <div className="w-60 bg-white border-r border-zinc-300 p-3">
      <div className="mb-4">
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg w-full">
          Create
        </button>
      </div>
      <div>
        <h3 className="font-semibold text-zinc-700 mb-2">RENTAL STATUS</h3>
        {rentalStatuses.map((status, idx) => (
          <button
            key={idx}
            className="flex justify-between w-full px-3 py-1 hover:bg-zinc-100 rounded text-zinc-700"
            onClick={() => onFilterSelect(status.label)}
          >
            <span>{status.label}</span>
            <span>{status.count}</span>
          </button>
        ))}
      </div>
      <div className="mt-4">
        <h3 className="font-semibold text-zinc-700 mb-2">INVOICE STATUS</h3>
        {invoiceStatuses.map((status, idx) => (
          <button
            key={idx}
            className="flex justify-between w-full px-3 py-1 hover:bg-zinc-100 rounded text-zinc-700"
            onClick={() => onFilterSelect(status.label)}
          >
            <span>{status.label}</span>
            <span>{status.count}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RentalSidebar;