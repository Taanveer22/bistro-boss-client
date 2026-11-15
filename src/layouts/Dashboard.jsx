import {
  FaBook,
  FaCalendar,
  FaFileSignature,
  FaHome,
  FaPaypal,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import { MdRateReview } from "react-icons/md";
import { RiAlignItemBottomFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router";

const Dashboard = () => {
  let isAdmin = true;

  return (
    <>
      <section className="flex">
        {/* sidebar */}
        <div className="w-64 bg-yellow-500 min-h-screen">
          <ul className="menu p-4">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/admin/home">
                    <FaHome></FaHome>
                    <span>Admin Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/admin/addItems">
                    <FaFileSignature></FaFileSignature>
                    <span>Add Items</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/admin/manageItems">
                    <RiAlignItemBottomFill></RiAlignItemBottomFill>
                    <span>Manage Items</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/admin/manageBookings">
                    <FaBookBookmark></FaBookBookmark>
                    <span>Manage Bookings</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/admin/allUsers">
                    <FaUsers></FaUsers>
                    <span>All Users</span>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/user/home">
                    <FaHome></FaHome>
                    <span>User Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/user/reservation">
                    <FaCalendar></FaCalendar>
                    <span>Reservation</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/user/paymentHistory">
                    <FaPaypal></FaPaypal>
                    <span>Payment History</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/user/myCart">
                    <FaShoppingCart></FaShoppingCart>
                    <span>My Cart</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/user/addReview">
                    <MdRateReview></MdRateReview>
                    <span>Add Review</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/user/myBooking">
                    <FaBook></FaBook>
                    <span>My Booking</span>
                  </NavLink>
                </li>
              </>
            )}

            {/* landing page links */}
            <div className="divider divider-neutral"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome>
                <span>Landing Page Home</span>
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
