export default function TableHeader({ userType }) {
  const headerItems = [
    "Employee-Name",
    "Employee-Id",
    "Expense-Category",
    "Amount",
    "Date",
    "Status",
  ];

  if (userType === "admin") {
    headerItems.push("Actions");
  }

  return (
    <>
      <tr className="text-gray-700">
        {headerItems.map(function (citem, i) {
          return (
            <th key={i} className="text-start">
              <div className="p-2">{citem}</div>
            </th>
          );
        })}
      </tr>
    </>
  );
}
