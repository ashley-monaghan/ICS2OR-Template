// Copyright (c) 2022 Ashley Monaghan All rights reserved
//
// Created by: Ashley Monaghan
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates area and perimeter of triangle.
 */
function calculate() {
  // input
  const simple = parseInt(document.getElementById("simple-textfeild").value)
  const numeric = parseInt(document.getElementById("numeric-textfield").value)

  // process
  const math = simple + numeric

  // output
  document.getElementById("math").innerHTML = "The answer is: " + math + " cm"
}


"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  document.getElementById("hello-world").innerHTML = "<p>Hello, World!</p>"
}
