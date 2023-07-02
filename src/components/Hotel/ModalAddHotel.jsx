import React, { useState } from 'react';
import './ModalAddHotel.css';
import { Divider, Switch } from 'antd';

const ModalAddHotel = () => {
  const [hotel, setHotel] = useState({
    Name: '',
    Star: '',
    Description: '',
    Address: '',
    Slug: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setHotel({ ...hotel, [name]: value });
  };

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <div className="container1">
      <form>
        <Divider orientation="left" plain>
          Basic information
        </Divider>
        <div className="flex">
          <div className="inputContainer w-8/12">
            <input name="Name" value={hotel.Name} placeholder="Hotel name" onChange={handleInputChange} />
          </div>
          <div className="inputContainer w-4/12">
            <input name="Star" value={hotel.Star} placeholder="Hotel Star" onChange={handleInputChange} />
          </div>
        </div>
        <div className="flex">
          <div className="inputContainer w-8/12">
            <input name="Address" value={hotel.Address} placeholder="Address" onChange={handleInputChange} />
          </div>
          <div className="inputContainer w-4/12">
            <input name="Slug" value={hotel.Slug} placeholder="Slug" onChange={handleInputChange} />
          </div>
        </div>
        <div className="inputContainer">
          <input name="Description" value={hotel.Description} placeholder="Description" onChange={handleInputChange} />
        </div>
        <Divider orientation="left" plain>
          The accompanying services
        </Divider>
        <div className="mt-6 flex flex-wrap ml-4">
          <div className="flex w-6/12 mb-2">
            <Switch defaultChecked onChange={onChange} />
            <p className="addtional ml-4">The hotel has a restaurant</p>
          </div>
          <div className="flex w-6/12 mb-2">
            <Switch defaultChecked onChange={onChange} />
            <p className="addtional ml-4">The hotel has an elevator</p>
          </div>
          <div className="flex w-6/12 mb-2">
            <Switch defaultChecked onChange={onChange} />
            <p className="addtional ml-4">The hotel has a swimming pool</p>
          </div>
          <div className="flex w-6/12 mb-2">
            <Switch defaultChecked onChange={onChange} />
            <p className="addtional ml-4">Complimentary breakfast</p>
          </div>
          <div className="flex w-6/12 mb-2">
            <Switch defaultChecked onChange={onChange} />
            <p className="addtional ml-4">The hotel offers free WiFi</p>
          </div>
          <div className="flex w-6/12 mb-2">
            <Switch defaultChecked onChange={onChange} />
            <p className="addtional ml-4">There is a parking lot</p>
          </div>
          <div className="flex w-6/12 mb-2">
            <Switch defaultChecked onChange={onChange} />
            <p className="addtional ml-4">Pets are allowed</p>
          </div>
          <div className="flex w-6/12 mb-2">
            <Switch defaultChecked onChange={onChange} />
            <p className="addtional ml-4">The room has air conditioning</p>
          </div>
          <div className="flex w-6/12 mb-2">
            <Switch defaultChecked onChange={onChange} />
            <p className="addtional ml-4">The receptionist is available 24/7</p>
          </div>
          <div className="flex w-6/12 mb-2">
            <Switch defaultChecked onChange={onChange} />
            <p className="addtional ml-4">Car Borow</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModalAddHotel;
