import React from "react";
import Nav from "./Nav";
import { TabMenu } from "primereact/tabmenu";

// const items = [
//   { label: "Dashboard", icon: "pi pi-home" },
//   { label: "Transactions", icon: "pi pi-chart-line" },
//   { label: "Products", icon: "pi pi-list" },
//   { label: "Messages", icon: "pi pi-inbox" },
// ];

function Home() {
  return (
    <>
      <Nav />
      <div className="card">
        <h1>Home</h1>
        <h2>Holle React</h2>
        {/* <div className="card">
          <TabMenu model={items} />
        </div> */}
      </div>
    </>
  );
}

export default Home;
