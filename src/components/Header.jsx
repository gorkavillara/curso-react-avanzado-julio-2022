import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../store/slices/user";

const Header = () => {
  const dispatch = useDispatch();
  const { activeUser, loading } = useSelector((state) => state.user);
  const login = () => {
    dispatch(fetchUser());
  };
  return (
    <div className="w-full py-2 px-4 bg-slate-800 flex justify-between items-center">
      <span className="text-white">Mi primera todoApp</span>
      {loading ? (
        <div className="w-3 h-3 border-t-2 border-white rounded-full animate-spin"></div>
      ) : (
        <>
          {activeUser?.name ? (
            <span className="text-white">Buenos días, {activeUser.name}</span>
          ) : (
            <button
              onClick={login}
              className="bg-slate-600 rounded-lg text-white px-2 py-1"
            >
              Login
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Header;
