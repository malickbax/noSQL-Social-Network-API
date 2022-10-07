// The functions below allow us to format the dates in our backend API app
const addDateSuffix = (date) => {
let dateStr = date.toString();
    const lastChar = dateStr.charAt(dateStr.length - 1);

// Setting format so it can be read 1st 2nd, 3rd, etc.
    if (lastChar === "1" && dateStr !== "11") {
      dateStr = `${dateStr}st`;
    } else if (lastChar === "2" && dateStr !== "12") {
      dateStr = `${dateStr}nd`;
  } else if (lastChar === "3" && dateStr !== "13") {
      dateStr = `${dateStr}rd`;
    } else {
        dateStr = `${dateStr}th`;
  }
    return dateStr;
  };
module.exports = (
    timestamp,
    { monthLength = "Short", dateSuffix = true } = {}
  ) => {
let months;
        if (monthLength === "Short") {
            months = {

// Giving a numerical value to every month Length. Starting with 0 as in an array
              0: "Jan",
              1: "Feb",
              2: "Mars",
              3: "Apr",
              4: "May",
              5: "June",
              6: "Jul",
              7: "Aug",
              8: "Sep",
              9: "Oct",
              10: "Nov",
              11: "Dec",
      };
        } else {

// Giving a numerical value to every month Length. Starting with 0 as in an array
        months = {
          0: "January",
          1: "February",
          2: "March",
          3: "April",
          4: "May",
          5: "June",
          6: "July",
          7: "August",
          8: "September",
          9: "October",
           10: "November",
          11: "December",
      };
    }
    const dateObj = new Date(timestamp);
    const formattedMonth = months[dateObj.getMonth()];
  
let dayOfMonth;
    if (dateSuffix) {
      dayOfMonth = addDateSuffix(dateObj.getDate());
  } else {
    dayOfMonth = dateObj.getDate();
    }
    const year = dateObj.getFullYear();
    let hour;
// CREDIT: Section worked on with collaboration from coder colleague Brams Lo
if (dateObj.getHours > 12) {
      hour = Math.floor(dateObj.getHours() / 2);
      } else {
        hour = dateObj.getHours();
    }
    if (hour === 0) {
      hour = 12;
    }
  
const minutes = dateObj.getMinutes();
    let periodOfDay;
    if (dateObj.getHours() >= 12) {
      periodOfDay = "PM";
    } else {
      periodOfDay = "AM";
    }  

const formattedTimeStamp = `${dayOfMonth} ${formattedMonth} ${year} at ${hour}:${minutes} ${periodOfDay}`;
return formattedTimeStamp;
};