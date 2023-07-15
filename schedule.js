const ddateInput = document.getElementById("ddate");
const adateInput = document.getElementById("adate");
const dairInput = document.getElementById("dairport");
const aairInput = document.getElementById("aairport");
const submitButton = document.getElementById("submit");
const containerElement = document.getElementById("container");
const namee=document.getElementById("name");
const par=document.getElementById("par");
function search1(){
  par.style.display="block";
 
}
function getnamee(){
    let j=localStorage.getItem("fname")
    if(j===null)
    {
      window.location.replace("index.html");
    }
  namee.innerHTML="&nbsp;"+`${"  "+localStorage.getItem("fname")}`;
}
  signout.addEventListener("click", () => {
    localStorage.removeItem("fname");
    localStorage.removeItem("lname");
    window.location.href = "index.html";
  });
  
submitButton.addEventListener("click", async () => {
  // Retrieved the input values
  const departureDateTime = ddateInput.value;
  const arrivalDateTime = adateInput.value;
  const arrivalAirport = aairInput.value;
  const deptAirport = dairInput.value;
  // Fetching flight information based on the input values
  try {
    const url = `https://flight-info-api.p.rapidapi.com/status?version=v2&DepartureDateTime=${departureDateTime}&ArrivalDateTime=${arrivalDateTime}&DepartureAirport=${deptAirport}&ArrivalAirport=${arrivalAirport}&CodeType=IATA&ServiceType=Passenger`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8a1c4acc0fmsh714da2ec4bcc7cfp15d1c6jsn6f06be0020e7",
        "X-RapidAPI-Host": "flight-info-api.p.rapidapi.com",
      },
    };

    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    const data = result.data;
    //const grandparent = document.createElement("div");
    //grandparent.className = "grandparent";
    for (let i = 0; i < Math.min(50, data.length); i++)
    {
      const flightNumber = data[i].flightNumber;
      const departureAirportIATA = data[i].departure.airport.iata;
      const departureTimeLocal = data[i].departure.time.utc;
      const arrivalAirportIATA = data[i].arrival.airport.iata;
      const arrivalTimeLocal = data[i].arrival.time.utc;
      //const arrivalDate =data[i].arrival.date.utc;

      const airline = data[i].codeshare?.aircraftOwner?.code;
      let airlineName = "";
      let flight_image;
      
      if (["6E", "AI", "UK", "SG", "G8", "I5"].includes(airline)) 
      {
        if (airline === "6E") {
          airlineName = "Indigo";
          flight_image = document.createElement("img");
          flight_image.src =
            "https://seeklogo.com/images/I/indigo-logo-EDBB4B3C09-seeklogo.com.png";
          flight_image.className = "airImg";
        } else if (airline === "AI") {
          airlineName = "Air India";
          flight_image = document.createElement("img");
          flight_image.src =
            "https://seeklogo.com/images/A/air-india-logo-6BE974B97A-seeklogo.com.png";
          flight_image.className = "airImg";
        } else if (airline === "UK") {
          airlineName = "Vistara";
          flight_image = document.createElement("img");
          flight_image.src =
            "https://seeklogo.com/images/V/vistara-logo-C07710BC2B-seeklogo.com.png";
          flight_image.className = "airImg";
        } else if (airline === "G8") {
          airlineName = "Go air";
          flight_image = document.createElement("img");
          flight_image.src =
            "https://seeklogo.com/images/G/go-air-logo-2DA58AF868-seeklogo.com.png";
          flight_image.className = "airImg";
        } else if (airline === "SG") {
          airlineName = "Spice jet";
          flight_image = document.createElement("img");
          flight_image.src =
            "https://seeklogo.com/images/S/spicejet-logo-393873A1AE-seeklogo.com.png";
          flight_image.className = "airImg";
        } else if (airline === "I5") {
          airlineName = "Air Asia";
          flight_image = document.createElement("img");
          flight_image.src =
            "https://seeklogo.com/images/A/Air_Asia-logo-5ACDC17858-seeklogo.com.png";
          flight_image.className = "airImg";
        }

        console.log(`Flight ${i + 1}:`);
        console.log(`Flight Number: ${airline}`);
        console.log(`Flight Number: ${flightNumber}`);
        console.log(`Departure Airport: ${departureAirportIATA}`);
        console.log(`Departure Time: ${departureTimeLocal}`);
        console.log(`Arrival Airport: ${arrivalAirportIATA}`);
        console.log(`Arrival Time: ${arrivalTimeLocal}`);

        const flightCard = document.createElement("div");
        flightCard.className = "flight-card";

        const flightNumberElement = document.createElement("p");
        flightNumberElement.innerText = `Flight Number: ${flightNumber}`;

        const departureAirportElement = document.createElement("p");
        departureAirportElement.innerText = `Departure Airport: ${departureAirportIATA}`;

        const departureTimeElement = document.createElement("p");
        departureTimeElement.innerText = `Departure Time: ${departureTimeLocal}`;

        const arrivalAirportElement = document.createElement("p");
        arrivalAirportElement.innerText = `Arrival Airport: ${arrivalAirportIATA}`;

        const arrivalTimeElement = document.createElement("p");
        arrivalTimeElement.innerText = `Arrival Time: ${arrivalTimeLocal}`;

        // const arrivalDateElement = document.createElement("p");
        // arrivalDateElement.innerText=`Arrival date: ${arrivalDate}`;

        flightCard.append(flight_image);
        flightCard.append(airlineName);
        flightCard.append(flightNumberElement);
        flightCard.append(departureAirportElement);
        flightCard.append(departureTimeElement);
        flightCard.append(arrivalAirportElement);
        flightCard.append(arrivalTimeElement);

        containerElement.append(flightCard);
      }
    }
  } catch (error) {
    console.error(error);
  }
});
