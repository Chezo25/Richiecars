import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { fetchCars } from "../redux/actions/carsAction";
import { Row, Col } from "antd";

const Home = () => {
  const cars = useSelector(state => state.carReducer.cars);
  const dispatch = useDispatch()

  useEffect(() => {
dispatch(fetchCars())
}, [dispatch])

  return (
    <DefaultLayout>
      <h1>Home Page</h1>
      <Row justify='center'>
      <ul>
        {cars.map(car => (
          <Col lg={5} sm={24} xs={24} key={car.id}>
          
          <div className="car">
          <img src={car.image} className="carimg" alt={`${car.name} car`} />
          </div>
          <div className="car-content flex">
            <div>
              <p>{car.name}</p>
              <p>{car.rentPerday} Rent Per Day</p>
            </div>
          </div>
          </Col>
        ))}
      </ul>
      </Row>
    </DefaultLayout>
  );
};

export default Home;
