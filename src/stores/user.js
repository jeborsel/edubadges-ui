import { writable } from "svelte/store";
import { role } from "../util/role";

export const user = writable({
  id: "",
  email: "",
  givenName: "",
  familyName: "",
  schacHomeOrganization: "",
  uid: "",
  usePassword: false,
  rememberMe: true,
});

export const userRole = writable(localStorage.getItem("userRole") || "");
export const userLoggedIn = writable(localStorage.getItem("userLoggedIn") || "");

export const config = writable({
  loginUrl: "",
  serverUrl: "http://127.0.0.1:8000",
  baseDomain: "",
  migrationLandingPageUrl: "",
  myConextUrlGuestIdp: "",
  studentDomain: "edu_id",
  teacherDomain: "surf_conext"
});

export const redirectPath = writable("");

const createFlash = () => {
  const { subscribe, set } = writable("");

  return {
    subscribe,
    setValue: value =>
      setTimeout(() => {
        set(value);
        setTimeout(() => set(""), 3000);
      }, 125)
  };
};
export const flash = createFlash();

userRole.subscribe(val => localStorage.setItem("userRole", val));
userLoggedIn.subscribe(val => localStorage.setItem("userLoggedIn", val));
