import poopCounterTemplate from "./poopCounter.template.html";
import poopCounterController from "./poopCounterController";
export default function poopCounter() {
  return {
    restrict: "E",
    template: poopCounterTemplate,
    scope: { name: "@" },
    controller: poopCounterController,
    controllerAs: "ctrl",
  };
}
