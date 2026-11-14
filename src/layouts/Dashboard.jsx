import {
  FaBook,
  FaCalendar,
  FaHome,
  FaPaypal,
  FaShoppingCart,
} from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { NavLink, Outlet } from "react-router";

const Dashboard = () => {
  return (
    <>
      <section className="flex">
        {/* sidebar */}
        <div className="w-64 bg-yellow-500 min-h-screen">
          <ul className="menu p-4">
            <li>
              <NavLink to="/dashboard/userHome">
                <FaHome></FaHome> <span>User Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/reservation">
                <FaCalendar></FaCalendar> <span>Reservation</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/paymentHistroy">
                <FaPaypal></FaPaypal> <span>Payment History</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/myCart">
                <FaShoppingCart></FaShoppingCart> <span>My Cart</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addReview">
                <MdRateReview></MdRateReview> <span>Add Review</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/myBooking">
                <FaBook></FaBook> <span>My Booking</span>
              </NavLink>
            </li>
            <div className="divider divider-neutral"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome> <span>Home</span>
              </NavLink>
            </li>
          </ul>
        </div>
        {/* content */}
        <div className="flex-1 p-8">
          <Outlet></Outlet>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
