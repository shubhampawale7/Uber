# /users/register Endpoint Documentation

## Description
This endpoint registers a new user. It validates the input data and creates a user record in the database. Upon successful registration, it returns a JSON Web Token (JWT) along with the created user data.

## Request
- **Method:** `POST`
- **URL:** `/users/register`
- **Headers:** `Content-Type: application/json`
- **Body:** 
  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe" // Optional, if provided must be at least 3 characters
    },
    "email": "john.doe@example.com",
    "password": "password123"  // Minimum 6 characters
  }
  ```

## Responses
- **201 Created**
  - **Description:** User successfully registered.
  - **Body:**
    ```json
    {
      "token": "JWT_TOKEN",
      "user": {
        // user data
      }
    }
    ```
- **400 Bad Request**
  - **Description:** The request data did not pass validation.
  - **Body:**
    ```json
    {
      "errors": [
        {
          "msg": "Error message describing the invalid field",
          "param": "fieldName",
          "location": "body"
        }
      ]
    }
    ```
