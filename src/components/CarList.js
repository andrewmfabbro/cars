import { useSelector } from "react-redux";

function CarList() {
  const cars = useSelector((state) => {
    return state.cars.data; //big state obj accesses the other obj
  });

  const handleCarDelete = (car) => {
    //...
  };

  const renderedCars = cars.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button className="button is-danger"
        onClick={()=> handleCarDelete(car)}></button>
      </div>
    );
  });

  return <div className="car-list">{renderedCars}<hr/></div>;
}

export default CarList;
