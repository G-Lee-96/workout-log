import { useState, useMemo, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import HomeIcon from "@/assets/home.svg?react";
import WorkoutIcon from "@/assets/workout.svg?react";
import ScheduleIcon from "@/assets/schedule.svg?react";
import ProgressIcon from "@/assets/progress.svg?react";
import "./Navbar.css";
import NavbarData from "./NavbarData.json";
type NavbarMenuType = "Home" | "Workouts" | "Schedule" | "Progress";
type NavbarItemType = {
  name: NavbarMenuType;
  isSelected: boolean;
};
const icons: Record<NavbarMenuType, React.ElementType> = {
  Home: HomeIcon,
  Workouts: WorkoutIcon,
  Schedule: ScheduleIcon,
  Progress: ProgressIcon,
};

const Navbar: React.FC = () => {
  const [navbarItems, setNavbarItems] = useState(
    NavbarData as NavbarItemType[],
  );
  const location = useLocation();
  const navigate = useNavigate();
  const changeMenu = (menuName: string): void => {
    if (menuName === "Home") {
      navigate("/");
    } else {
      navigate(`/${menuName}`);
    }
  };

  useEffect(() => {
    const currentPath = location.pathname.substring(1);
    setNavbarItems((prevItems: NavbarItemType[]) => {
      return prevItems.map((item) => {
        if (
          item.name === currentPath ||
          (currentPath === "" && item.name === "Home")
        ) {
          return { ...item, isSelected: true };
        } else {
          return { ...item, isSelected: false };
        }
      });
    });
  }, [location.pathname]);
  // const navbarItems = NavbarData as NavbarItemType[];
  return (
    <nav className="navbar">
      {navbarItems.map((item: NavbarItemType) => {
        const IconComponent = useMemo(() => icons[item.name], [item.name]);
        return (
          <button
            key={item.name}
            className={`${item.isSelected ? "active" : ""} navbar-button`.trim()}
            onClick={() => changeMenu(item.name)}
          >
            {icons[item.name] && <IconComponent className="navbar-icon" />}
            <span className="caption">{item.name}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default Navbar;
