import { motion } from "framer-motion";
import Header from "./Header";
import StateCard from "./StateCard";
import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import { LucideProps as LucideIconProps } from "lucide-react";
import Usertable from "./Usertable";
import Useerstable from "./Useerstable";
import Compiar from "./Compiar";
import Caya from "../Caya";

// Define a type for user statistics
interface UserStats {
  totalUsers: number;
  newUsersToday: number;
  activeUsers: number;
  churnRate: string;
}

const userStats: UserStats = {
  totalUsers: 152845,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: "2.4%",
};


interface StateCardProps {
	name: string;
	icon: React.ComponentType<LucideIconProps>; // ✅ Use ComponentType for compatibility
	value: string;
	color: string;
  }


  
const Product: React.FC<StateCardProps> = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Users" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StateCard name="Total Users" value={userStats.totalUsers.toLocaleString()} icon={UsersIcon} color="#6366F1" />
          <StateCard name="New Users Today" value={userStats.newUsersToday.toLocaleString()} icon={UserPlus} color="#10B981" />
          <StateCard name="Active Users" value={userStats.activeUsers.toLocaleString()} icon={UserCheck} color="#F59E0B" />
          <StateCard name="Churn Rate" value={userStats.churnRate} icon={UserX} color="#EF4444" />
        </motion.div>
        <Usertable />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <Useerstable />
          <Compiar />
          <Caya />
        </div>
      </main>
    </div>
  );
};

export default Product;
