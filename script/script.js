const getDate = (whichDay) => {
  const today = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(today.getDate() + whichDay);

  const date = tomorrow.getUTCDate();

  let day = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  day = day[tomorrow.getUTCDay()];

  let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  month = month[tomorrow.getUTCMonth()];

  const year = tomorrow.getUTCFullYear();

  return { date, day, month, year };
};

const tomorrow = getDate(1);
const overmorrow = getDate(2);

document.getElementById("arrival-day").textContent = `${tomorrow.date}`;
document.getElementById(
  "arrival-month-year"
).textContent = `${tomorrow.month}, ${tomorrow.year}`;
document.getElementById("arrival-day-name").textContent = `${tomorrow.day}`;

document.getElementById("departure-day").textContent = `${overmorrow.date}`;
document.getElementById(
  "departure-month-year"
).textContent = `${overmorrow.month}, ${overmorrow.year}`;
document.getElementById("departure-day-name").textContent = `${overmorrow.day}`;

let valueAdults = 2;
let valueChildren = 0;

const numbOfPeople = (sign, who) => {
  const errCheck = (valueAdults, who) => {
    if ((who === "adults" && valueAdults < 1) || valueAdults > 3) {
      alert(
        "We don't have rooms for more than 3 adults or more than 2 children!"
      );
      return false;
    }

    if ((who === "children" && valueChildren < 0) || valueChildren > 2) {
      alert(
        "We don't have rooms for more than 3 adults or more than 2 children!"
      );
      return false;
    }

    return true;
  };

  if (who === "adults") {
    valueAdults = valueAdults + sign;
    if (errCheck(valueAdults, who)) {
      document.getElementById("number-adults").textContent = `${valueAdults}`;
    } else {
      valueAdults = parseInt(
        document.getElementById("number-adults").textContent
      );
    }
  } else if (who === "children") {
    valueChildren = valueChildren + sign;
    if (errCheck(valueChildren, who)) {
      document.getElementById(
        "number-children"
      ).textContent = `${valueChildren}`;
    } else {
      valueChildren = parseInt(
        document.getElementById("number-children").textContent
      );
    }
  }
};

document
  .getElementById("adults-minus")
  .addEventListener("click", () => numbOfPeople(-1, "adults"));
document
  .getElementById("adults-plus")
  .addEventListener("click", () => numbOfPeople(1, "adults"));

document
  .getElementById("children-minus")
  .addEventListener("click", () => numbOfPeople(-1, "children"));
document
  .getElementById("children-plus")
  .addEventListener("click", () => numbOfPeople(1, "children"));

const getDateInput = (dateInput) => {
  let date = dateInput.getUTCDate();

  let day = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  day = day[dateInput.getUTCDay()];

  let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  month = month[dateInput.getUTCMonth()];

  const year = dateInput.getUTCFullYear();

  return { date, day, month, year };
};

let arrival = new Date();
arrival.setDate(arrival.getDate() + 1);
let nextSixMonths = new Date();
nextSixMonths.setMonth(nextSixMonths.getMonth() + 6);

document.getElementById("arrival-date-input").addEventListener("click", () => {
  let dateArrival = prompt("Please enter arrival date (mm/dd/yyyy)");
  dateArrival = new Date(Date.parse(dateArrival));
  dateArrival.setDate(dateArrival.getDate() + 1);

  if (
    isNaN(dateArrival) == true ||
    dateArrival > nextSixMonths ||
    dateArrival < tomorrow
  ) {
    dateArrival = prompt(
      "Please enter date between tomorrow and next six month"
    );
    dateArrival = new Date(Date.parse(dateArrival));
    dateArrival.setDate(dateArrival.getDate() + 1);
  }

  if (
    isNaN(dateArrival) == true ||
    dateArrival > nextSixMonths ||
    dateArrival < tomorrow
  ) {
    alert("Try again with date between tomorrow and next six month");
    return;
  }

  arrival = dateArrival;
  let dateValueArrival = getDateInput(dateArrival);
  let nextDay = new Date(dateArrival.getTime());
  nextDay.setDate(nextDay.getDate() + 1);
  let dateValueDeparture = getDateInput(nextDay);

  document.getElementById(
    "arrival-day"
  ).textContent = `${dateValueArrival.date}`;
  document.getElementById(
    "arrival-month-year"
  ).textContent = `${dateValueArrival.month}, ${dateValueArrival.year}`;
  document.getElementById(
    "arrival-day-name"
  ).textContent = `${dateValueArrival.day}`;

  document.getElementById(
    "departure-day"
  ).textContent = `${dateValueDeparture.date}`;
  document.getElementById(
    "departure-month-year"
  ).textContent = `${dateValueDeparture.month}, ${dateValueDeparture.year}`;
  document.getElementById(
    "departure-day-name"
  ).textContent = `${dateValueDeparture.day}`;
});

document
  .getElementById("departure-date-input")
  .addEventListener("click", () => {
    let dateDeparture = prompt("Please enter departure date (mm/dd/yyyy)");
    dateDeparture = new Date(Date.parse(dateDeparture));
    dateDeparture.setDate(dateDeparture.getDate() + 1);

    if (
      isNaN(dateDeparture) == true ||
      dateDeparture > nextSixMonths ||
      dateDeparture < arrival
    ) {
      dateDeparture = prompt(
        "Please enter date between tomorrow and next six month"
      );
      dateDeparture = new Date(Date.parse(dateDeparture));
      dateDeparture.setDate(dateDeparture.getDate() + 1);
    }

    if (
      isNaN(dateDeparture) == true ||
      dateDeparture > nextSixMonths ||
      dateDeparture < arrival
    ) {
      alert("Try again with date between tomorrow and next six month");
      return;
    }

    let dateValueDeparture = getDateInput(dateDeparture);

    document.getElementById(
      "departure-day"
    ).textContent = `${dateValueDeparture.date}`;
    document.getElementById(
      "departure-month-year"
    ).textContent = `${dateValueDeparture.month}, ${dateValueDeparture.year}`;
    document.getElementById(
      "departure-day-name"
    ).textContent = `${dateValueDeparture.day}`;
  });

document.getElementById("open-side-nav").addEventListener("click", () => {
  document.getElementById("side-nav").style.transform = "translateX(0)";
  document.getElementById("bg-close-side-nav").style.display = "block";
});

document.getElementById("bg-close-side-nav").addEventListener("click", () => {
  document.getElementById("side-nav").style.transform = "translateX(100%)";
  document.getElementById("bg-close-side-nav").style.display = "none";
});

document.getElementById("close-side-nav").addEventListener("click", () => {
  document.getElementById("side-nav").style.transform = "translateX(100%)";
  document.getElementById("bg-close-side-nav").style.display = "none";
});

const navBar = document.getElementById("navbar");
const heroSection = document.getElementById("hero-section");
let heroSectionHeight = heroSection.offsetHeight;

const checkNavbarPosition = () => {
  if (window.pageYOffset >= heroSectionHeight) {
    navBar.style.position = "fixed";
    navBar.style.background = "rgba(44, 70, 100, 0.9)";
  } else {
    navBar.style.position = "absolute";
    navBar.style.background = "transparent";
  }
};

window.onscroll = () => {
  checkNavbarPosition();
};

window.onresize = () => {
  heroSectionHeight = document.getElementById("hero-section").offsetHeight;
};
