



'use strict';

let workingHours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];
let totalOfTotal=0;
let allLocations= [];
function Cookies(name,minium,maximum, avgCookiesPerCustomer)
{
  this.name = name;
  this.minium = minium;
  this.maximum = maximum;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  // this.numOfCustPerHour =[];
  this.cookiesPerHour =[];
  this.totalCookiesPerDay = 0;
  this.average=0;
  //array of objects :
  allLocations.push(this);
  console.log(this);
}

Cookies.prototype.getavg=function(min,max){
  this.average=Math.floor(getRandomNum(min,max)*this.avgCookiesPerCustomer);
};

// Cookies.prototype.getCustNumber = function()
// {
//   for (let i = 0; i < workingHours.length; i++)
//   {
//     this.numOfCustPerHour.push(getRandomNum(this.minium, this.maximum));
//   }
// };

// Cookies.prototype.calcAmountOfCockiesPerH = function()
// {
//   for (let i =0; i < workingHours.length; i++)
//   {
//     this.cookiesPerHour.push(Math.floor(this.numOfCustPerHour[i]*this.avgCookiesPerCustomer));

//     this.totalCookiesPerDay = this.totalCookiesPerDay + this.cookiesPerHour[i];
//   }
//   console.log(this.cookiesPerHour);
// };

function getRandomNum(min, max)
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//|||||[   this is the <table> tag so we put it global to creat one table only   ]||||||||||||||

let container = document.getElementById('location');
let tableEl = document.createElement('table');
container.appendChild(tableEl);
tableEl.setAttribute('id','location1');


//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||[    TABLE HEADER     ]||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
function buildTableHeader(){

  const trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  const thEl = document.createElement('th');
  trEl.appendChild(thEl);
  thEl.textContent='';

  for (let i = 0;i < workingHours.length; i++)
  {
    const thEl2 =document.createElement('th');
    trEl.appendChild(thEl2);
    thEl2.textContent = workingHours[i];
  }
  const thEl3 =document.createElement('th');
  trEl.appendChild(thEl3);
  thEl3.textContent='Daily Location Total';


}

//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||[    TABLE CONTENT     ]||||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
Cookies.prototype.displayTable = function(){

  const trEl2 = document.createElement('tr');
  tableEl.appendChild(trEl2);
  const tdEl1 = document.createElement('td');
  trEl2.appendChild(tdEl1);
  tdEl1.textContent = this.name;

  for (let i = 0; i < workingHours.length; i++)
  {
    this.getavg(this.minium,this.maximum);
    this.cookiesPerHour.push(this.average);
    const tdEl2 = document.createElement('td');
    trEl2.appendChild(tdEl2);
    tdEl2.textContent = this.cookiesPerHour[i];
    this.totalCookiesPerDay=this.totalCookiesPerDay+this.cookiesPerHour[i];
  }
  const tdEl3 = document.createElement('td');
  trEl2.appendChild(tdEl3);
  tdEl3.textContent = this.totalCookiesPerDay;

};
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||[    TABLE FOOTER     ]|||||||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
function buildTableFooter(){
  // const container = document.getElementById('location1');
  // container.appendChild(trEl3);
  const trEl3 = document.createElement('tr');
  trEl3.setAttribute('id','trFooter');
  tableEl.appendChild(trEl3);
  const thFl = document.createElement('th');
  trEl3.appendChild(thFl);
  thFl.textContent = 'Totals';

  for (let i = 0; i < workingHours.length; i++)
  {
    let totalCookies=0;
    for(let j=0;j<allLocations.length;j++)
    {
      totalCookies = totalCookies+ allLocations[j].cookiesPerHour[i];
    }
    let thF2 = document.createElement('th');
    trEl3.appendChild(thF2);
    thF2.textContent=totalCookies;
    totalOfTotal=totalOfTotal+totalCookies;

  }
  const thF3=document.createElement('th');
  trEl3.appendChild(thF3);
  thF3.textContent=totalOfTotal;
}

//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||



const seattle = new Cookies('Seattle', 23, 65, 6.3);
const tokyo = new Cookies('Tokyo', 3, 24, 1.2);
const dubai = new Cookies('Dubai', 11, 38, 3.7);
const paris = new Cookies('Paris', 20, 38, 2.3);
const lima = new Cookies('Lima', 2, 16, 4.6);

///// here i call the TABLE HEADER :
buildTableHeader();

seattle.getavg();
seattle.displayTable();

tokyo.getavg();
tokyo.displayTable();

dubai.getavg();
dubai.displayTable();

paris.getavg();
paris.displayTable();

lima.getavg();
lima.displayTable();

///// here i call the TABLE FOOTER :
buildTableFooter();
//|||||||||||||||||||||||[    LAB09-FORMS     ]||||||||||||||||||||||||||||||||||||||||||||||||


let myForm = document.getElementById('branchForm');

myForm.addEventListener('submit', addNewBranch);



function addNewBranch(event) {
  event.preventDefault();


  let branchName  = event.target.name.value;
  let min = event.target.min.value;
  let max = event.target.max.value;
  let avg = event.target.avg.value;

  let newBranch = new Cookies(branchName, min, max, avg);
  newBranch.getavg();
  newBranch.displayTable();

  let tb = document.getElementById('location1');
  let tbFooter=document.getElementById('trFooter');
  tb.removeChild(tbFooter);

  buildTableFooter();

}








