import angular from "angular"; // Import AngularJS
import MainController from "./controllers/mainController"; // Import the controller

// Define the AngularJS module
const app = angular.module("myApp", []);

// Register the controller
app.controller("mainController", MainController);
