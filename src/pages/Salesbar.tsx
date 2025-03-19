import { motion } from "framer-motion";
import Header from "./Header";
import StateCard from "./StateCard";
import { DollarSignIcon, ShoppingCart, TrendingUpIcon, Zap,  } from "lucide-react";
import Salesdashboard from "./Salesdashboard";
import CustomPieChart from "./Cont";
import Daily from "./Daily";
import { LucideProps } from "lucide-react"; // ✅ اصلاح نوع آیکون‌ها

interface StateCardProps {
  name: string;
  icon: React.ComponentType<LucideProps>; // 🛠 اصلاح نوع آیکون برای هماهنگی با Lucide
  value: string;
  color: string;
}

const Salesbar: React.FC<StateCardProps> = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Sales" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StateCard name="Total Revenue" icon={DollarSignIcon} value="$1,234,567" color="#6366F1" />
          <StateCard name="Total Sales" icon={ShoppingCart} value="$78.90" color="#f59e0b" />
          <StateCard name="Total Sales" icon={TrendingUpIcon} value="3.45%" color="yellow" />
          <StateCard name="Total Sales" icon={Zap} value="12.3%" color="#ef4444" />
        </motion.div>
        <Salesdashboard />
        <div className="flex gap-8">
          <div className="w-1/2">
            <CustomPieChart />
          </div>
          <div className="w-1/2">
            <Daily />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Salesbar;
