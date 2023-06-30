import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <h3>Location</h3>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Cities</li>
          <li className="fListItem">Districts</li>
        </ul>

        <ul className="fList">
          <h3>Hotel Category</h3>

          <li className="fListItem">Hotels </li>
          <li className="fListItem">Apartments </li>
          <li className="fListItem">Resorts </li>
          <li className="fListItem">Villas</li>
          <li className="fListItem">Guest houses</li>
        </ul>
        <ul className="fList">
          <h3>Services</h3>
          <li className="fListItem">Car rental </li>
          <li className="fListItem">TourGuide Companies </li>
          <li className="fListItem">Aireports</li>
          <li className="fListItem">Travel Agents </li>
        </ul>
        <ul className="fList">
          <h3>Contacts</h3>
          <li className="fListItem">Curtomer Service</li>
          <li className="fListItem">Suport & Help</li>
          <li className="fListItem">police Stations</li>
          <li className="fListItem">Hospitals</li>
          <li className="fListItem">About Us</li>
          <li className="fListItem">Terms & conditions</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2023 Ethio-Tourism</div>
    </div>
  );
};

export default Footer;
