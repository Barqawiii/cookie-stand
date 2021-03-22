'use strict';

function random(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);

}

let div = document.getElementById('location');


const time = ['6am','7am','8am','9am','10am','11am','12pm', '1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','Total'];

const Seattle = {
  location: 'Seattle',
  The_Min_Hourly_Customers: 11,
  The_Max_Hourly_Customers: 38,
  getHourArray: [],

  Costomer_per_hour: function perHourFunc() {

    let randomGenerate;
    for (let i = 0; i < time.length; i++) {
      randomGenerate = random(this.The_Max_Hourly_Customers, this.The_Min_Hourly_Customers);
      this.getHourArray.push(randomGenerate);

    }
    return this.getHourArray;

  },

  salesFunc: function sales() {
    let pEl = document.createElement('p');
    div.appendChild(pEl);

    let ulEl = document.createElement('ul');
    div.appendChild(ulEl);


    let total = 0;
    pEl.textContent = this.location;

    for (let i = 0; i < time.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      if ((time.length-1) === i) {
        liEl.textContent = `${time[i]} : ${total} cookies `;

      }
      else {

        liEl.textContent = `${time[i]} : ${this.getHourArray[i]} cookies `;
        total = total + this.getHourArray[i];
      }
    }


  }



};
Seattle.Costomer_per_hour();
Seattle.salesFunc();

const Tokyo = {
  location: 'Tokyo',
  The_Min_Hourly_Customers: 11,
  The_Max_Hourly_Customers: 38,
  getHourArray: [],
  Costomer_per_hour: function perHourFunc() {

    let randomGenerate;
    for (let i = 0; i < time.length; i++) {
      randomGenerate = random(this.The_Max_Hourly_Customers, this.The_Min_Hourly_Customers);
      this.getHourArray.push(randomGenerate);

    }
    return this.getHourArray;

  },

  salesFunc: function sales() {
    let pEl = document.createElement('p');
    div.appendChild(pEl);

    let ulEl = document.createElement('ul');
    div.appendChild(ulEl);


    let total = 0;
    pEl.textContent = this.location;

    for (let i = 0; i < time.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      if ((time.length-1) === i) {
        liEl.textContent = `${time[i]} : ${total} cookies `;

      }
      else {

        liEl.textContent = `${time[i]} : ${this.getHourArray[i]} cookies `;
        total = total + this.getHourArray[i];
      }
    }


  }



};
Tokyo.Costomer_per_hour();
Tokyo.salesFunc();




const Dubai = {
  location: 'Dubai',
  The_Min_Hourly_Customers: 11,
  The_Max_Hourly_Customers: 38,
  getHourArray: [],
  Costomer_per_hour: function perHourFunc() {

    let randomGenerate;
    for (let i = 0; i < time.length; i++) {
      randomGenerate = random(this.The_Max_Hourly_Customers, this.The_Min_Hourly_Customers);
      this.getHourArray.push(randomGenerate);

    }
    return this.getHourArray;

  },

  salesFunc: function sales() {
    let pEl = document.createElement('p');
    div.appendChild(pEl);

    let ulEl = document.createElement('ul');
    div.appendChild(ulEl);


    let total = 0;
    pEl.textContent = this.location;

    for (let i = 0; i < time.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      if ((time.length-1) === i) {
        liEl.textContent = `${time[i]} : ${total} cookies `;

      }
      else {

        liEl.textContent = `${time[i]} : ${this.getHourArray[i]} cookies `;
        total = total + this.getHourArray[i];
      }
    }


  }



};
Dubai.Costomer_per_hour();
Dubai.salesFunc();





const Paris = {
  location: 'Paris',
  The_Min_Hourly_Customers: 11,
  The_Max_Hourly_Customers: 38,
  getHourArray: [],
  Costomer_per_hour: function perHourFunc() {

    let randomGenerate;
    for (let i = 0; i < time.length; i++) {
      randomGenerate = random(this.The_Max_Hourly_Customers, this.The_Min_Hourly_Customers);
      this.getHourArray.push(randomGenerate);

    }
    return this.getHourArray;

  },

  salesFunc: function sales() {
    let pEl = document.createElement('p');
    div.appendChild(pEl);

    let ulEl = document.createElement('ul');
    div.appendChild(ulEl);


    let total = 0;
    pEl.textContent = this.location;

    for (let i = 0; i < time.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      if ((time.length-1) === i) {
        liEl.textContent = `${time[i]} : ${total} cookies `;

      }
      else {

        liEl.textContent = `${time[i]} : ${this.getHourArray[i]} cookies `;
        total = total + this.getHourArray[i];
      }
    }


  }



};
Paris.Costomer_per_hour();
Paris.salesFunc();

const Lima = {
  location: 'Lima',
  The_Min_Hourly_Customers: 11,
  The_Max_Hourly_Customers: 38,
  getHourArray: [],
  Costomer_per_hour: function perHourFunc() {

    let randomGenerate;
    for (let i = 0; i < time.length; i++) {
      randomGenerate = random(this.The_Max_Hourly_Customers, this.The_Min_Hourly_Customers);
      this.getHourArray.push(randomGenerate);

    }
    return this.getHourArray;

  },

  salesFunc: function sales() {
    let pEl = document.createElement('p');
    div.appendChild(pEl);

    let ulEl = document.createElement('ul');
    div.appendChild(ulEl);


    let total = 0;
    pEl.textContent = this.location;

    for (let i = 0; i < time.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      if ((time.length-1) === i) {
        liEl.textContent = `${time[i]} : ${total} cookies `;

      }
      else {

        liEl.textContent = `${time[i]} : ${this.getHourArray[i]} cookies `;
        total = total + this.getHourArray[i];
      }
    }


  }



};
Lima.Costomer_per_hour();
Lima.salesFunc();