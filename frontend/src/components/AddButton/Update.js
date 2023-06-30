import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Update = ({ apiEndpoint, dataToUpdate, onSuccess }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdate = () => {
    setIsLoading(true);

    axios
      .patch(`${apiEndpoint}/${dataToUpdate.id}`, dataToUpdate)
      .then((response) => {
        onSuccess(response.data);
        navigate(-1);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error updating data:", error);
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <p>Updating...</p>;
  }

  return <button onClick={handleUpdate}>Update</button>;
};

export default Update;
