import React, { useState } from "react";
import Nav from "./Nav";
import { AutoComplete } from "primereact/autocomplete";
import { Calendar } from "primereact/calendar";
import { CascadeSelect } from "primereact/cascadeselect";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { Button } from "bootstrap";

function Register() {
  const [selectedCity, setSelectedCity] = useState(null);

    const [items, setItems] = useState([]);

    const search = (event) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }

  const countries = [
    {
      name: "Australia",
      cname: "Australia",
      states: [
        {
          name: "New South Wales",
          cname: "New South Wales",
          cities: [{ name: "Sydney", cname: "Sydney" }],
        },
      ],
    },
    {
      name: "Canada",
      cname: "Canada",
      states: [
        {
          name: "Quebec",
          cname: "Quebec",
          cities: [{ name: "Montreal", cname: "Montreal" }],
        },
      ],
    },
    {
      name: "USA",
      cname: "United States",
      states: [
        {
          name: "California",
          cname: "California",
          cities: [{ name: "Los Angeles", cname: "Los Angeles" }],
        },
      ],
    },
  ];


//   const handleSubmit = () => {

// };


  return (
    <>
      <Nav />
      <div className="container">
        <div className="regis">
          <h1>สมัครสมาชิก</h1>
        </div>
        <div className="card flex flex-column md:flex-row gap-3">
          <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <AutoComplete placeholder="Email"  />
          </div>
        </div>
        <div className="card flex flex-column md:flex-row gap-3">
          <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText placeholder="Username" />
          </div>
        </div>
        <div className="card flex flex-column md:flex-row gap-3">
          <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon">
              <i className="pi pi-eye"></i>
            </span>
            <Password placeholder="Password" />
          </div>
        </div>
        <div className="card flex flex-column md:flex-row gap-3">
          <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon">
              <i className="pi pi-calendar"></i>
            </span>
            <Calendar placeholder="วว/ดด/ปปปป" />
          </div>
        </div>
        <div className="card flex flex-column md:flex-row gap-3">
          <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon">
              <i className="pi pi-calendar"></i>
            </span>
            <CascadeSelect placeholder="Select a City" variant="filled"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.value)}
              options={countries}
              optionLabel="cname"
              optionGroupLabel="name"
              optionGroupChildren={["states", "cities"]}
              className="w-full md:w-14rem"
              breakpoint="767px"
              style={{ minWidth: "14rem" }} />
          </div>
        </div>
        {/* <div>
            <Button variant="contained" onClick={handleSubmit}>
                ยืนยัน
            </Button>
        </div> */}
        
      </div>
    </>
  );
}

export default Register;
