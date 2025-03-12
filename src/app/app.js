import angular from "angular"; // Import AngularJS
import MainController from "./controllers/mainController"; // Import the controller
import poopCounter from "./directives/PoopCounter/poopCounter";
import poopStateService from "./services/poopStateService";
import port from "./directives/SeaPortCard/port";

import "../styles.css"; // Import the CSS file
// Define the AngularJS module
const app = angular.module("myApp", []);

// Register the controller
app.controller("mainController", MainController);
app.directive("poopCounter", poopCounter);
app.service("poopStateService", poopStateService);
app.directive("port", port);
