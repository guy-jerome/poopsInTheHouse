export default function poopStateService() {
  const poopStorageKey = "poopStorageKey";

  this.getState = function () {
    const state = localStorage.getItem(poopStorageKey);
    return state ? JSON.parse(state) : { numberOfPoops: 0 };
  };
  this.setState = function (state) {
    localStorage.setItem(poopStateService, JSON.stringify(state));
  };
}
