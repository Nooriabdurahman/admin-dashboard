import Header from "./Header";
import { motion } from "framer-motion";
import StateCard from "./StateCard";
import { BarChart2, ShoppingBag, Users, Zap, } from "lucide-react";
import SalesOverview from "./SalesOverview";
import Response from "./Response";
import Contr from "./Cont";
import { LucideProps } from "lucide-react"; // ✅ اصلاح نوع آیکون‌ها

interface StateCardProps {
  name: string;
  icon: React.ComponentType<LucideProps>;
  value: string;
  color: string;
}

const Overflow: React.FC<StateCardProps> = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-8">
        {/* Animated grid container */}
        <motion.div
          className="grid grid-cols-4 gap-5 sm:grid-cols-1 md:grid-cols-2 mb-8 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* StateCard components */}
          <StateCard name="Total Sales" icon={Zap} value="$12,345" color="#6366F1" />
          <StateCard name="New users" icon={Users} value="1,234" color="#8b5CF6" />
          <StateCard name="Total products" icon={ShoppingBag} value="567" color="#EC4899" />
          <StateCard name="Conversion Rate" icon={BarChart2} value="12.5%" color="#10B981" />
        </motion.div>

        {/* Grid layout for other components */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverview />
          <Contr />
          <Response />
        </div>
      </main>
    </div>
  );
};

export default Overflow;
