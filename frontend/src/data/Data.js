import {RxDashboard} from "react-icons/rx";
import {TbBrandBooking }from "react-icons/tb";
import {GrGroup }from "react-icons/gr";
import {AiOutlineHome} from "react-icons/ai";
import {TfiPackage} from "react-icons/tfi";
import {BiTaxi }from "react-icons/bi"



export const SidebarData=[
    {
        icon:RxDashboard,
        heading:"Dashboard",
        link:"/dashboard",
       },
    {
        icon:TbBrandBooking,
        heading:"Bookings",
        link:"/bookings",
      },
    {
        icon:GrGroup,
        heading:"Tourists",
        link:"/tourists",
        },
    {
        icon:TfiPackage,
        heading:"Packages",
        link:"/packages",
      },
    {
        icon:AiOutlineHome,
        heading:"Hotels",
        link:"/hotels"
    },
    {
        icon:BiTaxi,
        heading:"Cars",
        link:"/cars"
        
    },
]