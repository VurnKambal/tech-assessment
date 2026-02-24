const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_REGEX = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;

export const validateUserForm = ({ firstName, lastName, username, password, phone, email }) => {
  const errors = {};

  if (!firstName) errors.firstName = "First name is required";
  if (!lastName) errors.lastName = "Last name is required";
  if (!username) errors.username = "Username is required";

  if (!password) errors.password = "Password is required";
  else if (password.length < 8) errors.password = "Password must be at least 8 characters";
  else if (!PASSWORD_REGEX.test(password)) errors.password = "Password must contain uppercase, lowercase, and a number";

  if (!phone) errors.phone = "Phone number is required";

  if (email && !EMAIL_REGEX.test(email)) errors.email = "Enter a valid email address";

  return errors;
};
