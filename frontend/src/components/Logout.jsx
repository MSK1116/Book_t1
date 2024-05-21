import React from "react";
import Swal from "sweetalert2";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });

      localStorage.removeItem("user");
      window.location.reload();
    } catch (error) {
      toast.error("Error" + error.message);
    }
  };

  const confirmLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be looged out and won't be able to use most of feature",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log me out!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logged Out",
          text: "See you soon! Keep exploring",
          icon: "success",
        }).then(() => {
          handleLogout();
        });
      }
    });
  };

  return (
    <>
      <div>
        <button onClick={confirmLogOut} className="btn bg-red-400 text-white px-3  py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer">
          Logout
        </button>
      </div>
    </>
  );
};

export default Logout;
