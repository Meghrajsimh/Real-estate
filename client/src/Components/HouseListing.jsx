import React, { useState } from "react";
import "../StyleSheet/HouseListing.css";
import axios from 'axios';
const HouseListing = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [surname, setSurname] = useState("");
  const [idNumber, setIDnumber] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [email, setEmail] = useState("");
  const [province, setProvince] = useState("");
  const [street, setStreet] = useState("");
  const [sale_or_rent, setSaleOrRent] = useState("");
  const [housePrice, setHousePrice] = useState(0);
  const [bedroomNumber, setBedRoomNumber] = useState(0);
  const [garages, setGarages] = useState(0);
  const [pool, setPool] = useState(false);
  const [bathroomNumber, setBathRoomNumber] = useState(0);
  const [petFriendly, setPetFriendly] = useState(false);
  const [houseImage, setHouseImage] = useState("");

  const listProperty = (e) => {
    // e.preventDefault();
    const dev_url = "http://127.0.0.1:5000/api/houseListing";
    const url='/api/houseListing';
    const data = new FormData();
    data.append("name", name);
    data.append("surname", surname);
    data.append("idNumber", parseInt(idNumber));
    data.append("phoneNumber", parseInt(phoneNumber));
    data.append("email", email);
    data.append("province", province);
    data.append("street", street);
    data.append("sale_or_rent", sale_or_rent);
    data.append("housePrice", parseInt(housePrice));
    data.append("bedroomNumber", parseInt(bedroomNumber));
    data.append("garages", parseInt(garages));
    data.append("pool", pool);
    data.append("bathroomNumber", parseInt(bathroomNumber));
    data.append("petFriendly", petFriendly);
    data.append("houseImage", houseImage);
    data.append("city",city);
    console.log("houseImag:",houseImage);
    axios.post(dev_url, data).then((response) => {
        console.log(response.data);

      })
      .catch((error) => {
        console.log(error);
      });
    
  };
  return (
    <div className="HouseListing__container">
      <form className="HouseListing__form">
        <h1>LIST YOUR PROPERTY</h1>
        <label>name</label>
        <input
          type="text"
          placeholder="Enter you legal name"
          onChange={(e) => setName(e.target.value)} value={name}
        />
        <label>Surname</label>
        <input
          type="text"
          placeholder="Enter your legal surname in use"
          onChange={(e) => setSurname(e.target.value)} value={surname}
        />
        <label>Identity Number</label>
        <input
          type="text"
          placeholder="Enter you ID Number"
          onChange={(e) => setIDnumber(e.target.value)} value={idNumber}
        />
        <label>Phone Number</label>
        <input
          type="text"
          placeholder="Enter in your phone number"
          onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber}
        />
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter in your email address"
          onChange={(e) => setEmail(e.target.value)} value={email}
        />
        <label>Province</label>
        <input
          type="text"
          placeholder="Enter the province where the listed house is at"
          onChange={(e) => setProvince(e.target.value)} value={province}
        />
        <label>Street</label>
        <input
          type="text"
          placeholder="Enter the street number of listed house"
          onChange={(e) => setStreet(e.target.value)} value={street}
        />
        <label>City</label>
        <input type="text" placeholder="Enter Your House City"
        onChange={(e) => setCity(e.target.value)} value={city}
        />
        <label>Sale Or Rent</label>
        <select onChange={(e) => setSaleOrRent(e.target.value)} value={sale_or_rent}>
          <option>...</option>
          <option value={'SALE'}>SALE</option>
          <option value={'RENT'}>RENT</option>
        </select>
        <label>House Price</label>
        <input
          type="number"
          placeholder="Please enter in the land size"
          onChange={(e) => setHousePrice(e.target.value)} value={housePrice}
        />
        <label>Number of Bed Rooms</label>
        <select onChange={(e) => setBedRoomNumber(e.target.value) } value={bedroomNumber}>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
        <label>Number of garages</label>
        <select onChange={(e) => setGarages(e.target.value)} value={garages}>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
        <label>Pool</label>
        <select onChange={(e) => setPool(e.target.value)} value={pool}>
          <option>...</option>
          <option value={true}>YES</option>
          <option value={false}>NO</option>
        </select>
        <label>Number of Bath Rooms</label>
        <select onChange={(e) => setBathRoomNumber(e.target.value)} value={bathroomNumber}>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
        <label>Pet Friendly</label>
        <select onChange={(e) => setPetFriendly(e.target.value)} value={petFriendly}>
          <option>...</option>
          <option value={true}>YES</option>
          <option value={false}>NO</option>
        </select>
        <label>House Image</label>
        <input type="file" onChange={(e) => setHouseImage(e.target.files[0])}  />

        {/* <button type="submit" onClick={listProperty} id="button">
          LIST YOUR PROPERTY
        </button> */}
        <button type="submit" onClick={listProperty} id="button">
          List your Property
        </button>
      </form>
    </div>
  );
};

export default HouseListing;
