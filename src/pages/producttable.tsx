import { useState, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";

// Define a type for the product data
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  sales: number;
}

const PRODUCTS_DATA: Product[] = [
  { id: 1, name: "Wireless Earbuds", category: "Electronics", price: 59.99, stock: 143, sales: 1200 },
  { id: 2, name: "Leather Wallet", category: "Accessories", price: 39.99, stock: 89, sales: 800 },
  { id: 3, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 56, sales: 650 },
  { id: 4, name: "Yoga Mat", category: "Fitness", price: 29.99, stock: 210, sales: 950 },
  { id: 5, name: "Coffee Maker", category: "Home", price: 79.99, stock: 78, sales: 720 },
];

const ProductTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [fproducts, setfProducts] = useState<Product[]>(PRODUCTS_DATA);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setfProducts(
      PRODUCTS_DATA.filter(
        (product) =>
          product.name.toLowerCase().includes(term) ||
          product.category.toLowerCase().includes(term)
      )
    );
  };

  // Function to show an alert when a non-admin tries to edit/delete
  const handleAdminAction = () => {
    alert("❌ Only an admin can edit or delete products.");
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">Product List</h2>
        <div className="relative">
          <input
            placeholder="Search product..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className="absolute top-3 left-3 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-xs text-start font-medium text-gray-400 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-xs text-start font-medium text-gray-400 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-xs text-start font-medium text-gray-400 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-xs text-start font-medium text-gray-400 uppercase tracking-wider">Stock</th>
              <th className="px-6 py-3 text-xs text-start font-medium text-gray-400 uppercase tracking-wider">Sales</th>
              <th className="px-6 py-3 text-xs text-start font-medium text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {fproducts.map((product) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="transition"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2">
                  <div className="w-[40px] h-[40px] bg-cyan-500 rounded-full flex items-center justify-center">
                    <img src="/public/lele-removebg-preview.png" className="w-[30px] h-[30px]" alt="" />
                  </div>
                  <div className="flex gap-2 items-center">{product.name}</div>
                </td>

                <td className="px-6 py-3">{product.category}</td>
                <td className="px-6 py-3">${product.price}</td>
                <td className="px-6 py-3">{product.stock}</td>
                <td className="px-6 py-3">{product.sales}</td>

                {/* Buttons with an alert message */}
                <td className="px-6 py-3 items-start h-full">
                  <button
                    className="text-indigo-400 hover:text-indigo-200 mr-2 cursor-pointer"
                    onClick={handleAdminAction}
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    className="text-red-400 hover:text-red-200 cursor-pointer"
                    onClick={handleAdminAction}
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ProductTable;
