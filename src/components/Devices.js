import {useState, useEffect} from "react";

function Devices() {
    const [devices, setDevices] = useState(null);

    useEffect(() => {
        getData();
    
        async function getData() {
          const response = await fetch("http://localhost:3000/devices");
          const data = await response.json();
          console.log(data)
          setDevices(data) ;
        }
      }, []); 
    
      return (
        <>      
          {devices && (
            <div className="deviceList">
              {devices.map((device, index) => (
                <ul class="device" key={index}>
                  <li>Device Name: {device.system_name}</li>
                  <li>ID: {device.id}</li>
                  <li>Type: {device.type}</li>
                  <li>HDD Capacity: {device.hdd_capacity}</li>
                </ul>
              ))}
            </div>
          )}
        </>
      )
}

export default Devices;