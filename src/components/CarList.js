import { useSelector, useDispatch} from "react-redux";
import { removeCar } from "../store/slices/carsSlice";

function CarList() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => {
    return state.cars.data; //big state obj accesses the other obj
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));

  };

  const renderedCars = cars.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button className="button is-danger"
        onClick={()=> handleCarDelete(car)}>Delete Car</button>
      </div>
    );
  });

  return <div className="car-list">{renderedCars}<hr/></div>;
}

export default CarList;
