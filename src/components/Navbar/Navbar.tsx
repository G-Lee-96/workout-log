import { useState, useMemo } from "react";
import HomeIcon from "../../assets/home.svg?react";
import WorkoutIcon from "../../assets/workout.svg?react";
import ScheduleIcon from "../../assets/schedule.svg?react";
import ProgressIcon from "../../assets/progress.svg?react";
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
  // const navbarItems = NavbarData as NavbarItemType[];
  return (
    <nav className="navbar">
      {navbarItems.map((item: NavbarItemType) => {
        const IconComponent = useMemo(() => icons[item.name], [item.name]);
        return (
          <button
            key={item.name}
            className={`${item.isSelected ? "active" : ""} navbar-button`.trim()}
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
