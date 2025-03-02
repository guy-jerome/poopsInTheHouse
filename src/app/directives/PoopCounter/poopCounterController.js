export default function poopCounterController(poopStateService) {
  this.numberOfPoops = poopStateService.getState().numberOfPoops;
  this.incrementPoops = function () {
    this.numberOfPoops += 1;
  };
  this.decrementPoops = function () {
    if (this.numberOfPoops <= 0) {
      this.numberOfPoops = 0;
    } else {
      this.numberOfPoops -= 1;
    }
  };
}

poopCounterController.$inject = ["poopStateService"];
