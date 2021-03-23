'use strict';

//////////  (this array is global)
let workingHours=['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm'];
//////////  (this function give a random number between min and max )
function getRandomInt(min, max) {

  return Math.floor(Math.random() * (max - min+1) + min);
}


/// here we create a constractor  !!! :D
function Salmon(location,min,max,avgCookiesPerSale) {
  this.location=location;
  this.min=min;
  this.max=max;
  this.avgCookiesPerSale=avgCookiesPerSale;
  this.totalCookies=0;
  this.randomCustomer=[];
  this.numCookiesPerho=[];
  this.totalEachLocation=0;
  this.totalEachDay=0;
}

/// here is prototype method it gives a random number of customers !!! :D
Salmon.prototype.getRandomCustomer=function () {

  for(let i=0;i<workingHours.length;i++){
    this.randomCustomer.push(getRandomInt(this.min,this.max));
  }
};
// here is prototype method it give us how many cookies we sell each hour !!! :D
Salmon.prototype.numCookiesPerhour=function () {
  for(let i=0;i<workingHours.length;i++){

    let perHour=this.randomCustomer[i]*this.avgCookiesPerSale;
    this.numCookiesPerho.push(Math.floor(perHour));
    // here the TOTAL of cookies per day !!:P
    this.totalCookies+=this.numCookiesPerho[i];
    console.log(this.totalCookies);

  }
};

//  1-Create the element
//  2-append the element to it's parents
//  3-add text content to the element || attributes
///  (THE HEADER OF TABLE ) !!! :D /////////////////////////////////////////////////////////
let displayHeader=function () {
  let container=document.getElementById('location');
  // const tableEl=document.createElement('table');

  const trEl=document.createElement('tr'); // <tr>
  let thEl=document.createElement('th');// <th>
  thEl.textContent= ' '; //
  trEl.appendChild(thEl);// </th>
  for (let col=0; col<=workingHours.length-1; col++){//
    thEl=document.createElement('th');//<th>
    thEl.textContent=workingHours[col];//
    trEl.appendChild(thEl);//</th>
  }//
  thEl=document.createElement('th');//<th> --> last elemnt on header
  thEl.textContent='Daily location total';//
  trEl.appendChild(thEl);
  container.appendChild(trEl);//</tr>
  // container.appendChild(tableEl);// </table>

};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/// here is prototype method FOR (THE TABLE ) !!! :D //////////////////////////////////////////////////////////////////
Salmon.prototype.displayTable=function () {
  let container=document.getElementById('location');
  // const tableEl=document.createElement('table');//<table>
  const trEl=document.createElement('tr');//<tr>
  let tdEl=document.createElement('td');//<td>
  tdEl.textContent=this.location;//
  trEl.appendChild(tdEl);//</td>
  for (let col=0; col<workingHours.length;col++) {//
    tdEl=document.createElement('td');//
    tdEl.textContent = this.numCookiesPerho[col]; //
    trEl.appendChild(tdEl);//
    this.totalEachLocation += this.numCookiesPerho[col];//
  }

  trEl.appendChild(tdEl);//<td>
  const tdEl2=document.createElement('td');
  tdEl2.textContent=this.totalEachLocation;
  trEl.appendChild(tdEl2);

  container.appendChild(trEl);//</tr>
  // container.appendChild(tableEl);//</table>


};

/////////////////////////////////////////////////////////////////////////
let displayFooter=function (){
  let container=document.getElementById('location');
  // const tableEl=document.createElement('table');//table>
  const trEl = document.createElement('tr');//<tr>
  let tdEl = document.createElement('td');//<td>
  tdEl.textContent = 'Totals';
  trEl.appendChild(tdEl);
  for (let i = 0; i < workingHours.length; i++) {
    tdEl = document.createElement('td');
    // tdEl.textContent =Math.ceil();
    trEl.appendChild(tdEl);

  }
  tdEl = document.createElement('td');
  // tdEl.textContent = totalOfTotals();
  trEl.appendChild(tdEl);//</td>
  container.appendChild(trEl);//</tr>
  // container.appendChild(tableEl);//</table>
};


const Seattle=new Salmon('Seattle',23,65,6.3);
const Tokyo=new Salmon('Tokyo',3,24,1.2);
const Dubai=new Salmon('Dubai',11,38,3.7);
const Paris=new Salmon('Paris',20,38,2.3);
const Lima=new Salmon('Lima',2,16,4.6);
displayHeader();

Seattle.getRandomCustomer();
Seattle.numCookiesPerhour();
Seattle.displayTable();

Tokyo.getRandomCustomer();
Tokyo.numCookiesPerhour();
Tokyo.displayTable();

Dubai.getRandomCustomer();
Dubai.numCookiesPerhour();
Dubai.displayTable();

Paris.getRandomCustomer();
Paris.numCookiesPerhour();
Paris.displayTable();

Lima.getRandomCustomer();
Lima.numCookiesPerhour();
Lima.displayTable();

displayFooter();


