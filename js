  import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

const flightNumber = document.querySelector(".flight-number");
const aircraft = document.querySelector(".aircraft");
const _seat = document.querySelector(".seat");
const button = document.querySelector(".button");
const table = document.querySelector("table")

// let aircrafts = [];
// let flightNumbers = [];
// let seats = [];
// let flights = []




// const headers = [ aircraft, flightNumber, seat];

function createElement (type) {
  return document.createElement(type)
}

function createTD(string) {
  const td = createElement("td");
  td.innerText = string;

  
  return td;
  
  
}
 

function createFlight() {
  
  return {
  aircraftType: faker.airline.aircraftType(),
  flightNumber: faker.airline.flightNumber(),
  seat: faker.airline.seat(),
  

};
}


function addFlights(max) {
  const flights = [];
  
  for (let i = 0 ; i < max; i++ ) {
    const flight = createFlight(max);
    flights.push(flight);
  }
  
  return flights;
  
    

  
}






// console.log(flight);

function createRows() {
  
  const myFlights = addFlights(1);
  
  for (let i = 0; i < myFlights.length; i++) {
    
    
    const flight = myFlights[i];
    const tr = createElement("tr");
    const tdSeat = createTD(flight.seat);
    const tdFlightNumber = createTD(flight.flightNumber);
        const tdAircraftType = createTD(flight.aircraftType);
    
    tr.appendChild(tdSeat);
        tr.appendChild(tdFlightNumber);
    tr.appendChild(tdAircraftType);
      table.appendChild(tr);




  }
  
  
  
}

button.addEventListener("click" , createRows)
