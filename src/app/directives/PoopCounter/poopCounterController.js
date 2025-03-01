export default function poopCounterController() {
  this.numberOfPoops = 0;
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
