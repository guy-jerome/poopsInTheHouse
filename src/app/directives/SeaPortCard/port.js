import portTemplate from "./port.template.html";
import portController from "./portController";

export default function port() {
  return {
    restrict: "E",
    template: portTemplate,
    scope: {},
    controller: portController,
    controllerAs: "ctrl",
  };
}
