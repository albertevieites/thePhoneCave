import { useState, useEffect } from "react";
import axios from "axios";

const ListPhones = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    getAllPhones();
  },[]);

  const getAllPhones = () => {
    axios.get("http://localhost:3000/api")
    .then((response) => {
      const allPhones = response.data.phones.allPhones;
      setPhones(allPhones);
    })
    .catch((error) => {
      console.log(error);
    })

  return (
    <div>
      <h2>List of phones</h2>
    </div>
  )
  }
}

export default ListPhones;