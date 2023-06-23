import { RxDashboard } from "react-icons/rx";
import { TbBrandBooking } from "react-icons/tb";

import { AiOutlineHome, AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaUserFriends, FaCarAlt, FaHouseUser } from "react-icons/fa";

import { TfiPackage } from "react-icons/tfi";
import { BiTaxi } from "react-icons/bi";
import {
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  TableBody,
} from "@mui/material";
import "./Table.css";
function createData(name, destination, date, status) {
  return { name, destination, date, status };
}

const rows = [
  createData("Gebeyehu Assega", "Tana kirkos", "2 March 2023", "Approved"),
  createData("Eyuel Kassahun ", "jegol", "2 may 2022", "Pending"),
  createData("Habtamu Fentahun", "semen teraroch", "2 june 2022", "Approved"),
  createData("Bewket Getahun", "lalibela", "2 septembe 2022", "Delivered"),
];

const makeStyle = (status) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Recent Bookings</h3>
      <TableContainer style={{ boxShadow: "0px 13px 20px 0px #80808029" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tourist Name</TableCell>
              <TableCell align="left">Booking Date</TableCell>
              <TableCell align="left">Destination</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.destination}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell align="left" className="Details">
                  Details
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

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
export const UserNavData = [
  {
    heading: "Dashboard",
    link: "/dashboard",
  },
  {
    heading: "Bookings",
    link: "/bookings",
  },
  {
    heading: "Destinations",
    link: "/destinations",
  },
  {
    heading: "Packages",
    link: "/packages",
  },
  {
    heading: "Hotels",
    link: "/hotels",
  },
  {
    heading: "Cars",
    link: "/cars",
  },
];

export const HotelSidebarData = [
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

export const CardsData = [
  {
    title: "tourists",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barvalue: 70,
    icon: <FaUserFriends />,
    series: [
      {
        name: "tourits",
        data: [10, 100, 50, 70, 80, 90],
      },
    ],
  },
  {
    title: "cars",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barvalue: 40,
    icon: <FaCarAlt />,
    series: [
      {
        name: "cars",
        data: [102, 10, 20, 90, 870, 90],
      },
    ],
  },
  {
    title: "hotels",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barvalue: 50,
    icon: <FaHouseUser />,
    series: [
      {
        name: "hotels",
        data: [10, 10, 50, 70, 80, 40],
      },
    ],
  },
];
