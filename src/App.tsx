import { Route, Routes } from "react-router-dom";
import Overview from "./pages/overflow";
import Sidbar from "./pages/Sidbar";
import Product from "./pages/Product";
import Users from "./pages/Users";
import Salesbar from "./pages/Salesbar";
import Orderpage from "./pages/Orderpage";
import { ShoppingBag, User } from "lucide-react"; // ✅ Proper icon imports


const App = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <Sidbar />
      <Routes>
        {/* Passing correct icon */}
        <Route 
          path="/" 
          element={<Overview 
            name="Overview" 
            icon={ShoppingBag} // Use ShoppingBag icon
            value="Some Value" 
            color="#6366F1" 
          />} 
        />
        <Route path="/products" element={<Product name="Product" icon={ShoppingBag} value="Product Value" color="#4CAF50" />} />
        <Route path="/users" element={<Users name="Users" icon={User} value="User Value" color="#4CAF50" />} />
        <Route path="/sales" element={<Salesbar name="Sales" icon={ShoppingBag} value="Sales Value" color="#F59E0B" />} />
        <Route path="/orders" element={<Orderpage name="Orders" icon={ShoppingBag} value="Orders Value" color="#EF4444" />} />
      </Routes>
    </div>
  );
}

export default App;
