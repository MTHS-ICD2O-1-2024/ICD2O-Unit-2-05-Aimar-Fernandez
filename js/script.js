// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Aimar Fernandez
// Created on: Mar 2025
// This file contains the JS functions for index.html

function myButtonClicked() {
  //input
  const ONTARIO_INCOME_TAX = 0.18
  const hoursWorked = parseFloat(document.getElementById("hours-worked").value)
  const hourlyWage = parseFloat(document.getElementById("hourly-wage").value)
  //process
  let incomeTaxed = hoursWorked*hourlyWage*ONTARIO_INCOME_TAX
  let takeHomeSalary = hoursWorked*hourlyWage-incomeTaxed
  // output
  document.getElementById("answer1"). innerHTML = 
    "Your pay will be: $" + takeHomeSalary.toFixed(2)
  document.getElementById("answer2").innerHTML = 
    "The government will take: $" + incomeTaxed.toFixed(2)
}
