import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddButton = ({ apiEndpoint, dataToAdd, onSuccess }) => {
  const navigate = useNavigate();
  const handleAdd = async () => {
    try {
      const response = await axios.post(apiEndpoint, dataToAdd);
      onSuccess(response.data);
      navigate.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return <button onClick={handleAdd}>Save</button>;
};

export default AddButton;
