import React from "react";
import toast from "react-hot-toast";

import { useAuth } from "../contex/AuthProvider";

export default function Logout() {
  const [authUser, setauthUser] = useAuth();

  const handleLogout = () => {
    try {
      setauthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout Successfully");
      // document.getElementById("my_modal_3").close();
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (err) {
      toast.error("Error ❌ " + err.message);
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
