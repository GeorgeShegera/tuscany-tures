import React, { useEffect } from "react";
import { openNewPass } from "../../Slices/modal/modalSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Redirect() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(openNewPass());
    navigate("/");
  }, []);
  return <div>Redirect</div>;
}
