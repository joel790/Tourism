import React from "react";
import "./AcountController.css";
import { Accountsliceactions } from "../../redux/features/acountstate/Acountstate";
import { useDispatch, useSelector } from "react-redux";

const AcountController = () => {
  const inputs = useSelector((state) => state.accou.inputs);
  const dispatch = useDispatch();
  const onSubmiHandler = (ev) => {
    ev.preventDefault();
  };

  const onChangeTracker = (event) => {
    dispatch(Accountsliceactions.setInputs(event.target.value));
  };

  return (
    <div className="forminputs">
      <form className="form-el" onSubmit={onSubmiHandler}>
        <input
          className="inputss"
          type="text"
          placeholder="administrator firstname"
          name="firstName"
          value={inputs.firstName}
          onChange={onChangeTracker}
        />
        <input
          className="inputss"
          type="text"
          placeholder="administrator lastname"
          name="lastName"
          value={inputs.lastName}
          onChange={onChangeTracker}
        />
        <input
          className="inputss"
          type="number"
          placeholder="administrator password"
          name="password"
          value={inputs.password}
          onChange={onChangeTracker}
        />

        <button className="this-hover" type="submit">
          login
        </button>
      </form>
    </div>
  );
};

export default AcountController;
