import { makeAutoObservable, runInAction } from "mobx";

interface Errors {
  firstName: string;
  lastName: string;
}

class UserStore {
  firstName = "";
  lastName = "";
  errors: Errors = { firstName: "", lastName: "" };
  showModal = false;

  constructor() {
    makeAutoObservable(this);
  }

  setFirstName = (name: string) => {
    runInAction(() => {
      this.firstName = name;
      this.validateFirstName();
    });
  };

  setLastName = (name: string) => {
    runInAction(() => {
      this.lastName = name;
      this.validateLastName();
    });
  };

  private validateFirstName = () => {
    this.errors.firstName = this.firstName ? "" : "First name is required";
  };

  private validateLastName = () => {
    this.errors.lastName = this.lastName ? "" : "Last name is required";
  };

  submitForm = () => {
    runInAction(() => {
      this.validateFirstName();
      this.validateLastName();
      if (!this.errors.firstName && !this.errors.lastName) {
        this.showModal = true;
      }
    });
  };

  closeModal = () => {
    runInAction(() => {
      this.showModal = false;
    });
  };
}

export const userStore = new UserStore();
