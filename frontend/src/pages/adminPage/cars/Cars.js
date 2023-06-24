import "./Cars.css";
import MyTable from "../../../components/dataTable/DataTable";

const Cars = () => {
  const carsColumns = [
    { name: "ID", selector: "id", sortable: true },
    { name: "Name", selector: "tourguideName", sortable: true },
    { name: "Location", selector: "tourPlace", sortable: true },
    { name: "Description", selector: "date", sortable: true },
    { name: "Category", selector: "numberofpeople", sortable: true },
    { name: "Category", selector: "contactNumber", sortable: true },
  ];

  return (
    <div className="MainTour">
      <MyTable
        apiEndpoint="http:localhost:5000/api/cars"
        title="Cars"
        columns={carsColumns}
        dataKey="cars"
      />
    </div>
  );
};

export default Cars;
