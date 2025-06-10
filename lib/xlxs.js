"use client";
import * as XLSX from "xlsx";

const ExportExcel = ({ filename, data, disabled }) => {
  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const formattedData = formatDataByType(data);
    const ws = XLSX.utils.json_to_sheet(formattedData);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, filename);
  };

  return (
    <button
      onClick={exportToExcel}
      disabled={disabled}
      className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
    >
      Export to Excel
    </button>
  );
};

export default ExportExcel;
