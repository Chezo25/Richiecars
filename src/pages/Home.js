import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import Spinner from "../components/Spinner";
import { fetchCars } from "../redux/actions/carsAction";

import { Row, Col } from "antd";

const Home = () => {
  const cars = useSelector(state => state.carReducer.cars);
  const {loading} = useSelector(state => state.alertReducer);
  const dispatch = useDispatch()

  useEffect(() => {
dispatch(fetchCars())
}, [dispatch])

  return (
    <DefaultLayout>

      {loading === true && (<Spinner/>)}
      <h1>Home Page</h1>
      <Row justify='center' gutter={16} className="mt-5">
      
        {cars.map(car => (
          <Col lg={5} sm={24} xs={24} key={car.id}>
          
          <div className="car p-2 bs1 mt-5">
          <img src={car.image} className="carimg" alt={`${car.name} car`} />
         <div className="car-content flex align-item-center justify-content-between">
          <div>
            <p>{car.name}</p>
            <p>{car.rentPerday} Rent Per Day</p>      
          </div>                     
          <button className="btn1">Pay here</button>
        </div>  
      </div>
          
          </Col>
        ))}
      
      </Row>
    </DefaultLayout>
  );
};

export default Home;
