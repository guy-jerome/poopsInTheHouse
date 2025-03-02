// poopCounterController.js
export default function poopCounterController(poopStateService) {
  // Define the controller properties
  this.name = this.name || "Default Name"; // Fallback for undefined name
  this.numberOfPoops = 0; // Initialize to a default value

  // Use $onInit to ensure bindings are available
  this.$onInit = () => {
    // Initialize the state for the current name
    this.numberOfPoops = poopStateService.getState(this.name).numberOfPoops;
  };
  // Initialize the state for the current name
  this.numberOfPoops = poopStateService.getState(this.name).numberOfPoops;

  // Increment poops and save the state
  this.incrementPoops = () => {
    this.numberOfPoops += 1;
    poopStateService.setState(this.name, { numberOfPoops: this.numberOfPoops });
  };

  // Decrement poops and save the state
  this.decrementPoops = () => {
    if (this.numberOfPoops <= 0) {
      this.numberOfPoops = 0;
    } else {
      this.numberOfPoops -= 1;
    }
    poopStateService.setState(this.name, { numberOfPoops: this.numberOfPoops });
  };
}

poopCounterController.$inject = ["poopStateService"];
