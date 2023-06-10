import { RxDashboard } from "react-icons/rx";
import { TbBrandBooking } from "react-icons/tb";
import { AiOutlineHome ,AiOutlineUsergroupAdd} from "react-icons/ai";
import { TfiPackage } from "react-icons/tfi";
import { BiTaxi } from "react-icons/bi";

export const AdminSidebarData = [
  {
    icon: RxDashboard,
    heading: "Dashboard",
    link: "/dashboard",
  },

  {
    icon: AiOutlineUsergroupAdd,
    heading: "Tourists",
    link: "/tourists",
  },
  {
    icon: AiOutlineUsergroupAdd,
    heading: "GuideCompanies",
    link: "/guideCompany",
  },

  {
    icon: AiOutlineHome,
    heading: "Destinations",
    link: "/destination",
  },
];

export const TourGuideSidebarData = [
  {
    icon: RxDashboard,
    heading: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: TbBrandBooking,
    heading: "Bookings",
    link: "/bookings",
  },
  {
    icon: AiOutlineUsergroupAdd,
    heading: "Customers",
    link: "/tourists",
  },
  {
    icon: AiOutlineUsergroupAdd,
    heading: "Guides",
    link: "/guides",
  },
  {
    icon: TfiPackage,
    heading: "Packages",
    link: "/packages",
  },
  {
    icon: AiOutlineHome,
    heading: "Hotels",
    link: "/hotels",
  },
  {
    icon: BiTaxi,
    heading: "Cars",
    link: "/cars",
  },
];

export const UserSidebarData = [
  {
    icon: RxDashboard,
    heading: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: TbBrandBooking,
    heading: "Bookings",
    link: "/bookings",
  },

  {
    icon: TfiPackage,
    heading: "Packages",
    link: "/packages",
  },
  {
    icon: AiOutlineHome,
    heading: "Hotels",
    link: "/hotels",
  },
  {
    icon: BiTaxi,
    heading: "Cars",
    link: "/cars",
  },
];
