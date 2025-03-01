import angular from "angular"; // Import AngularJS
import MainController from "./controllers/mainController"; // Import the controller
import poopCounter from "./directives/PoopCounter/poopCounter";
// Define the AngularJS module
const app = angular.module("myApp", []);

// Register the controller
app.controller("mainController", MainController);
app.directive("poopCounter", poopCounter);
