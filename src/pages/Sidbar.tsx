import {
  BarChart2,
  DollarSign,
  Menu,
  ShoppingBag,
  ShoppingCart,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router";
import { AnimatePresence } from "framer-motion";

const SIDEBAR_ITEMS = [
  { name: "Overview", icon: BarChart2, color: "#6366F1", path: "/" },
  { name: "Products", icon: ShoppingBag, color: "#8B5CF6", path: "/products" },
  { name: "Users", icon: Users, color: "#EC4899", path: "/users" },
  { name: "sales", icon: DollarSign, color: "#10B981", path: "/sales" },
  { name: "Orders", icon: ShoppingCart, color: "#F59E0B", path: "/orders" },
];

const Sidebar = () => {
  const [Sidebar, setSidebar] = useState(false);


  return (
  <motion.div className={`relative z-10 transition-all duration-300 ease-out flex-shrink-0 ${Sidebar ? 'w-64' : 'w-20'}`}
  animate={{width: Sidebar ? 256 : 80}}>
    <div className="h-full bg-gray-800 bg-opacity-50 backdrop:blur-md p-4 flex flex-col border-r border-gray-700">
      <motion.button whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}
      onClick={()=> setSidebar(!Sidebar)}
      className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit">
        <Menu size={24}/>
      </motion.button>
      <nav className="mt-8 flex-grow">
        {SIDEBAR_ITEMS.map((item) =>(
          <Link key={item.path} to={item.path} className={`flex items-center p-2 rounded-lg text-gray-300 transition-all ${Sidebar ? 'hover:bg-gray-700':'hover:bg-[#1d2735]'}`}>
            <motion.div className="flex items-center justify-start p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
              <item.icon size={20} style={{color: item.color, minWidth: "20px"}}/>
              <AnimatePresence>
                {
                  Sidebar && (
                    <motion.span className="ml-4 whitespace-nowrap"
                    initial={{opacity: 0, width: 0}}
                    animate={{opacity: 1, width: "auto"}}
                    exit={{opacity: 0, width: 0}}
                    transition={{duration: 0.2, delay:0.3}}>
                      {item.name}
                    </motion.span>
                  )
                }
              </AnimatePresence>
            </motion.div>
        </Link>
        ))}
      </nav>
    </div>
  </motion.div>
)
};

export default Sidebar;
