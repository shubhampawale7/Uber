# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Component Documentation

### Home Page

The home page serves as the landing page for the Uber application.

- Features a full-screen background image
- Displays Uber logo
- Contains a "Get Started" section with a button to navigate to login

### User Authentication Components

#### User Login

- Email and password login form
- Form validation for required fields
- Link to sign up for new users
- Option to switch to captain login
- Protected by reCAPTCHA

#### User Signup

- Registration form with fields for:
  - First name
  - Last name
  - Email
  - Password
- Form validation for required fields
- Link to login for existing users
- Protected by reCAPTCHA

### Captain Authentication Components

#### Captain Login

- Email and password login form
- Form validation for required fields
- Link to captain registration
- Option to switch to user login
- Custom styling with captain-specific branding

#### Captain Signup

- Registration form with fields for:
  - First name
  - Last name
  - Email
  - Password
- Form validation for required fields
- Link to captain login
- Protected by reCAPTCHA
- Custom branding for captain portal

## State Management

All form components use React's useState hook for local state management:

- Form field values
- User/Captain data objects
- Form submission handling

### UserContext

The application uses React Context API for global state management through UserContext:

- Manages user authentication state
- Stores user profile information:
  - Email
  - Full name (first name and last name)
- Available throughout the application via UserDataContext.Provider
- Implemented using createContext and useState hooks
- Located in `/src/context/UserContext.jsx`

Example usage:

```javascript
import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";

// Access user data in any component
const userData = useContext(UserDataContext);
```
