import applicants from "./applicants.json";

export const getUserInitials = (applicants) => {
  return `${
    firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase()
  }`;
};
