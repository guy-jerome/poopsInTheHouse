// poopStateService.js
export default function poopStateService() {
  // Generate a unique key based on the name
  this.getStorageKey = function (name) {
    return `poopStorageKey_${name}`;
  };

  // Get the state for a specific name
  this.getState = function (name) {
    const key = this.getStorageKey(name);
    const state = localStorage.getItem(key);
    return state ? JSON.parse(state) : { numberOfPoops: 0 };
  };

  // Set the state for a specific name
  this.setState = function (name, state) {
    const key = this.getStorageKey(name);
    localStorage.setItem(key, JSON.stringify(state));
  };
}
