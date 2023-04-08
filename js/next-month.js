var d = new Date();
var nextMonth = (d.getMonth() + 1) % 12;
var monthNames = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];
var nextMonthName = monthNames[nextMonth];
const myString = $(".next__month");
myString.text(nextMonthName);
