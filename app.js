'use strict';

let hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];

function getRandomNum(min, max)
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const container = document.getElementById('location');
const tableEl = document.createElement('table');
container.appendChild(tableEl);
const tableR = document.createElement('tr');
tableEl.appendChild(tableR);
const tableH = document.createElement('th');
tableR.appendChild(tableH);
tableH.textContent='';

for (let i = 0;i < hours.length; i++)
{
  const tableH2 =document.createElement('th');
  tableR.appendChild(tableH2);
  tableH2.textContent = hours[i];
}
const tableH3 =document.createElement('th');
tableR.appendChild(tableH3);
tableH3.textContent='Daily Location Total';

function Area(location, minCustomerPerH, maxCustomerPerH, avrCockies)
{
  this.location = location;
  this.minCustomerPerH = minCustomerPerH;
  this.maxCustomerPerH = maxCustomerPerH;
  this.avrCockies = avrCockies;
  this.numOfCustPerH = [];
  this.cookiesPerHour = [];
  this.totalCookiesPerDay = 0;
}


Area.prototype.getCustNumber = function()
{
  for (let i = 0; i < hours.length; i++)
  {
    let tempNum = getRandomNum(this.minCustomerPerH, this.maxCustomerPerH);
    this.numOfCustPerH.push(tempNum);
  }
};

Area.prototype.calcAmountOfCockiesPerH = function()
{
  for (let i =0; i < hours.length; i++)
  {
    const perHour = Math.floor(this.numOfCustPerH[i]*this.avrCockies);
    this.cookiesPerHour.push(perHour);
    this.totalCookiesPerDay = this.totalCookiesPerDay + perHour;
  }
};

Area.prototype.render = function(){

  const tableR2 = document.createElement('tr');
  tableEl.appendChild(tableR2);
  const tableD = document.createElement('td');
  tableR2.appendChild(tableD);
  tableD.textContent = this.location;

  for (let i = 0; i < hours.length; i++)
  {
    const tableD2 = document.createElement('td');
    tableR2.appendChild(tableD2);
    tableD2.textContent = this.cookiesPerHour[i];
  }
  const tableD2 = document.createElement('td');
  tableR2.appendChild(tableD2);
  tableD2.textContent = this.totalCookiesPerDay;

};

const seattle = new Area('Seattle', 23, 65, 6.3);

const tokyo = new Area('Tokyo', 3, 24, 1.2);

const dubai = new Area('Dubai', 11, 38, 3.7);

const paris = new Area('Paris', 20, 38, 2.3);

const lima = new Area('Lima', 2, 16, 4.6);







seattle.getCustNumber();
seattle.calcAmountOfCockiesPerH();
seattle.render();

tokyo.getCustNumber();
tokyo.calcAmountOfCockiesPerH();
tokyo.render();

dubai.getCustNumber();
dubai.calcAmountOfCockiesPerH();
dubai.render();

paris.getCustNumber();
paris.calcAmountOfCockiesPerH();
paris.render();


lima.getCustNumber();
lima.calcAmountOfCockiesPerH();
lima.render();


const tableRt = document.createElement('tr');
tableEl.appendChild(tableRt);
const tableHt = document.createElement('th');
tableRt.appendChild(tableHt);
tableHt.textContent = 'Totals';


for (let i = 0; i < hours.length; i++)
{
  const tableHt = document.createElement('th');
  tableRt.appendChild(tableHt);
  let tempN = (seattle.cookiesPerHour[i]) + (tokyo.cookiesPerHour[i]) +
  (dubai.cookiesPerHour[i]) + (paris.cookiesPerHour[i]) + (lima.cookiesPerHour[i]);
  tableHt.textContent = tempN;
}


const tableHt2 = document.createElement('th');
tableRt.appendChild(tableHt2);
tableHt2.textContent = seattle.totalCookiesPerDay + tokyo.totalCookiesPerDay + dubai.totalCookiesPerDay + paris.totalCookiesPerDay + lima.totalCookiesPerDay;

