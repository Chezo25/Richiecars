import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { DatePicker } from 'antd';

const bookingCar = () => {
  return (
    <DefaultLayout>
      <h1>BookingCar</h1>
      
      <DatePicker/>
    </DefaultLayout>
  );
};

export default bookingCar;