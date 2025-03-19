import { CheckCircle, Clock, DollarSign, ShoppingBag,  } from "lucide-react";
import { motion } from "framer-motion";
import Header from "./Header";
import StateCard from "./StateCard";
import DailyOrders from "./newdashboard1";
import OrderDistribution from "./Newdashboard";
import OrdersTable from "./newdashboard3";
import { LucideProps } from "lucide-react"; // ✅ اصلاح نوع آیکون‌ها

interface OrderStats {
  totalOrders: string;
  pendingOrders: string;
  completedOrders: string;
  totalRevenue: string;
}

const orderStats: OrderStats = {
  totalOrders: "1,234",
  pendingOrders: "56",
  completedOrders: "1,178",
  totalRevenue: "$98,765",
};

interface StateCardProps {
  name: string;
  icon: React.ComponentType<LucideProps>;
  value: string;
  color: string;
}

const OrdersPage: React.FC<StateCardProps> = () => {
  return (
    <div className="flex-1 relative z-10 overflow-auto">
      <Header title="Orders" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StateCard name="Total Orders" icon={ShoppingBag} value={orderStats.totalOrders} color="#6366F1" />
          <StateCard name="Pending Orders" icon={Clock} value={orderStats.pendingOrders} color="#F59E0B" />
          <StateCard name="Completed Orders" icon={CheckCircle} value={orderStats.completedOrders} color="#10B981" />
          <StateCard name="Total Revenue" icon={DollarSign} value={orderStats.totalRevenue} color="#EF4444" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <DailyOrders />
          <OrderDistribution />
        </div>

        <OrdersTable />
      </main>
    </div>
  );
};

export default OrdersPage;
