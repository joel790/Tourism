import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Update = ({ apiEndpoint, dataToUpdate, onSuccess }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      const response = await axios.put(apiEndpoint, dataToUpdate);
      onSuccess(response.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  if (isLoading) {
    return <p>Updating...</p>;
  }

  return <button onClick={handleUpdate}>Update</button>;
};

export default Update;
