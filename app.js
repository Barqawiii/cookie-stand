'use strict';

function getRandomInt(min, max) {

  return Math.floor(Math.random() * (max - min) + min);
}


//eclare an empty array AvgCookiesSales >> [] --- to push the values to this array then render them
// declare a function getAvg : function () >> loop through the time array >>
// Math.ceil(getRandomNumber(this.min,this.max)*Avgcookies)

let workingHours=['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];

const Seattle ={
  location:'Seattle',
  randomFinal:0,
  min:23,
  max:65,
  avgCookiesPerSale:6.3,
  totalCookies:0,
  numOfCustomerPerHour:[],
  amountPurchEachHour:[],


  getCustomerNumber: function() {

    for(let i=0;i<workingHours.length;i++){
      this.randomFinal=getRandomInt(this.min,this.max);
      this.numOfCustomerPerHour.push(this.randomFinal);

    }
  },
  calcAmountCookiesPerhour: function() {
    for(let i=0;i<workingHours.length;i++){
      const perHour=Math.ceil(this.numOfCustomerPerHour[i]*this.avgCookiesPerSale);
      this.amountPurchEachHour.push(perHour);
      this.totalCookies=perHour+this.totalCookies;

    }
  },

  displayData:function () {
    const container=document.getElementById('location');
    //<h2></h2>
    // <ul>
    //         <li>6 am</li>
    //         <li>7 am</li>
    //         <li>8 am</li>
    //         <li>9 am</li>
    //         <li>10 am</li>
    //         <li>11 am</li>
    //         <li>12 pm</li>
    //         <li>1 pm</li>
    //         <li>2 pm</li>
    //         <li>3 pm</li>
    //         <li>4 pm</li>
    //         <li>5 pm</li>
    //         <li>6 pm</li>
    //         <li>7 pm</li>
    //         <li>total</li>
    //     </ul> -->


    const h2El=document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent=this.location;

    const ulEl=document.createElement('ul');
    container.appendChild(ulEl);
    for(let i=0;i<workingHours.length;i++){
      const liEl=document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent=`${workingHours[i]} ${this.amountPurchEachHour[i]} cookies`;
    }
    const liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent=`the total is ${this.totalCookies}`;

  }
};


Seattle.getCustomerNumber();
Seattle.calcAmountCookiesPerhour();
Seattle.displayData();


//////////////////   (location number 2)   //////////////////////////////////////////////////////////////////////////////////

const tokyo ={
  location:'tokyo',
  randomFinal:0,
  min:3,
  max:24,
  avgCookiesPerSale:1.2,
  totalCookies:0,
  numOfCustomerPerHour:[],
  amountPurchEachHour:[],


  getCustomerNumber: function() {

    for(let i=0;i<workingHours.length;i++){
      this.randomFinal=getRandomInt(this.min,this.max);
      this.numOfCustomerPerHour.push(this.randomFinal);

    }
  },
  calcAmountCookiesPerhour: function() {
    for(let i=0;i<workingHours.length;i++){
      const perHour=Math.ceil(this.numOfCustomerPerHour[i]*this.avgCookiesPerSale);
      this.amountPurchEachHour.push(perHour);
      this.totalCookies=perHour+this.totalCookies;

    }
  },

  displayData:function () {
    const container=document.getElementById('location');
    //<h2></h2>
    // <ul>
    //         <li>6 am</li>
    //         <li>7 am</li>
    //         <li>8 am</li>
    //         <li>9 am</li>
    //         <li>10 am</li>
    //         <li>11 am</li>
    //         <li>12 pm</li>
    //         <li>1 pm</li>
    //         <li>2 pm</li>
    //         <li>3 pm</li>
    //         <li>4 pm</li>
    //         <li>5 pm</li>
    //         <li>6 pm</li>
    //         <li>7 pm</li>
    //         <li>total</li>
    //     </ul> -->


    const h2El=document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent=this.location;

    const ulEl=document.createElement('ul');
    container.appendChild(ulEl);
    for(let i=0;i<workingHours.length;i++){
      const liEl=document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent=`${workingHours[i]} ${this.amountPurchEachHour[i]} cookies`;
    }
    const liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent=`the total is ${this.totalCookies}`;

  }
};


tokyo.getCustomerNumber();
tokyo.calcAmountCookiesPerhour();
tokyo.displayData();

///////////////////////////     (location number 3)    //////////////////////////////////////////////////////////////////////////////////////
const dubai ={
  location:'dubai',
  randomFinal:0,
  min:11,
  max:38,
  avgCookiesPerSale:3.7,
  totalCookies:0,
  numOfCustomerPerHour:[],
  amountPurchEachHour:[],


  getCustomerNumber: function() {

    for(let i=0;i<workingHours.length;i++){
      this.randomFinal=getRandomInt(this.min,this.max);
      this.numOfCustomerPerHour.push(this.randomFinal);

    }
  },
  calcAmountCookiesPerhour: function() {
    for(let i=0;i<workingHours.length;i++){
      const perHour=Math.ceil(this.numOfCustomerPerHour[i]*this.avgCookiesPerSale);
      this.amountPurchEachHour.push(perHour);
      this.totalCookies=perHour+this.totalCookies;

    }
  },

  displayData:function () {
    const container=document.getElementById('location');
    //<h2></h2>
    // <ul>
    //         <li>6 am</li>
    //         <li>7 am</li>
    //         <li>8 am</li>
    //         <li>9 am</li>
    //         <li>10 am</li>
    //         <li>11 am</li>
    //         <li>12 pm</li>
    //         <li>1 pm</li>
    //         <li>2 pm</li>
    //         <li>3 pm</li>
    //         <li>4 pm</li>
    //         <li>5 pm</li>
    //         <li>6 pm</li>
    //         <li>7 pm</li>
    //         <li>total</li>
    //     </ul> -->


    const h2El=document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent=this.location;

    const ulEl=document.createElement('ul');
    container.appendChild(ulEl);
    for(let i=0;i<workingHours.length;i++){
      const liEl=document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent=`${workingHours[i]} ${this.amountPurchEachHour[i]} cookies`;
    }
    const liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent=`the total is ${this.totalCookies}`;

  }
};


dubai.getCustomerNumber();
dubai.calcAmountCookiesPerhour();
dubai.displayData();


////////////////////////////////   (location number 4)   /////////////////////////////////////////////////////////////////
const paris ={
  location:'paris',
  randomFinal:0,
  min:20,
  max:38,
  avgCookiesPerSale:2.3,
  totalCookies:0,
  numOfCustomerPerHour:[],
  amountPurchEachHour:[],


  getCustomerNumber: function() {

    for(let i=0;i<workingHours.length;i++){
      this.randomFinal=getRandomInt(this.min,this.max);
      this.numOfCustomerPerHour.push(this.randomFinal);

    }
  },
  calcAmountCookiesPerhour: function() {
    for(let i=0;i<workingHours.length;i++){
      const perHour=Math.ceil(this.numOfCustomerPerHour[i]*this.avgCookiesPerSale);
      this.amountPurchEachHour.push(perHour);
      this.totalCookies=perHour+this.totalCookies;

    }
  },

  displayData:function () {
    const container=document.getElementById('location');
    //<h2></h2>
    // <ul>
    //         <li>6 am</li>
    //         <li>7 am</li>
    //         <li>8 am</li>
    //         <li>9 am</li>
    //         <li>10 am</li>
    //         <li>11 am</li>
    //         <li>12 pm</li>
    //         <li>1 pm</li>
    //         <li>2 pm</li>
    //         <li>3 pm</li>
    //         <li>4 pm</li>
    //         <li>5 pm</li>
    //         <li>6 pm</li>
    //         <li>7 pm</li>
    //         <li>total</li>
    //     </ul> -->


    const h2El=document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent=this.location;

    const ulEl=document.createElement('ul');
    container.appendChild(ulEl);
    for(let i=0;i<workingHours.length;i++){
      const liEl=document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent=`${workingHours[i]} ${this.amountPurchEachHour[i]} cookies`;
    }
    const liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent=`the total is ${this.totalCookies}`;

  }
};


paris.getCustomerNumber();
paris.calcAmountCookiesPerhour();
paris.displayData();


////////////////////////////////////     (location number 5)    ////////////////////////////////////////////////////////



const lima ={
  location:'lima',
  randomFinal:0,
  min:2,
  max:16,
  avgCookiesPerSale:4.6,
  totalCookies:0,
  numOfCustomerPerHour:[],
  amountPurchEachHour:[],


  getCustomerNumber: function() {

    for(let i=0;i<workingHours.length;i++){
      this.randomFinal=getRandomInt(this.min,this.max);
      this.numOfCustomerPerHour.push(this.randomFinal);

    }
  },
  calcAmountCookiesPerhour: function() {
    for(let i=0;i<workingHours.length;i++){
      const perHour=Math.ceil(this.numOfCustomerPerHour[i]*this.avgCookiesPerSale);
      this.amountPurchEachHour.push(perHour);
      this.totalCookies=perHour+this.totalCookies;

    }
  },

  displayData:function () {
    const container=document.getElementById('location');
    //<h2></h2>
    // <ul>
    //         <li>6 am</li>
    //         <li>7 am</li>
    //         <li>8 am</li>
    //         <li>9 am</li>
    //         <li>10 am</li>
    //         <li>11 am</li>
    //         <li>12 pm</li>
    //         <li>1 pm</li>
    //         <li>2 pm</li>
    //         <li>3 pm</li>
    //         <li>4 pm</li>
    //         <li>5 pm</li>
    //         <li>6 pm</li>
    //         <li>7 pm</li>
    //         <li>total</li>
    //     </ul> -->


    const h2El=document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent=this.location;

    const ulEl=document.createElement('ul');
    container.appendChild(ulEl);
    for(let i=0;i<workingHours.length;i++){
      const liEl=document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent=`${workingHours[i]} ${this.amountPurchEachHour[i]} cookies`;
    }
    const liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent=`the total is ${this.totalCookies}`;

  }
};


lima.getCustomerNumber();
lima.calcAmountCookiesPerhour();
lima.displayData();