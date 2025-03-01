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
    "password": "password123" // Minimum 6 characters
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

## /users/login Endpoint Documentation

### Login Description

This endpoint logs in an existing user. It validates the credentials and returns a JSON Web Token (JWT) for authorized requests.

### Login Request

- **Method:** `POST`
- **URL:** `/users/login`
- **Headers:** `Content-Type: application/json`
- **Body:**

  ```json
  {
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```

### Login Responses

- **200 OK**

  - **Description:** User successfully logged in.
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

## /users/profile Endpoint Documentation

### Profile Description

This endpoint retrieves the profile information of the authenticated user.

### Profile Request

- **Method:** `GET`
- **URL:** `/users/profile`
- **Headers:**
  - `Authorization: Bearer JWT_TOKEN`
  - Or valid session cookie with token

### Profile Responses

- **200 OK**

  - **Description:** Successfully retrieved user profile
  - **Body:**

    ```json
    {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
    ```

- **401 Unauthorized**

  - **Description:** No valid authentication token provided
  - **Body:**

    ```json
    {
      "message": "Authentication required"
    }
    ```

## /users/logout Endpoint Documentation

### Logout Description

This endpoint logs out the user by invalidating their authentication token.

### Logout Request

- **Method:** `GET`
- **URL:** `/users/logout`
- **Headers:**
  - `Authorization: Bearer JWT_TOKEN`
  - Or valid session cookie with token

### Logout Responses

- **200 OK**

  - **Description:** Successfully logged out
  - **Body:**

    ```json
    {
      "message": "User logged out"
    }
    ```

- **401 Unauthorized**

  - **Description:** No valid authentication token provided
  - **Body:**

    ```json
    {
      "message": "Authentication required"
    }
    ```

# Captain Endpoints Documentation

## /captains/register Endpoint

### Description
This endpoint registers a new captain. It validates the input data and creates a captain record in the database with vehicle information.

### Request
- **Method:** `POST`
- **URL:** `/captains/register`
- **Headers:** `Content-Type: application/json`
- **Body:**
  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe" // Optional, if provided must be at least 3 characters
    },
    "email": "john.captain@example.com",
    "password": "password123", // Minimum 6 characters
    "vehicle": {
      "color": "black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car" // Must be one of: "car", "motorcycle", "auto"
    }
  }
  ```

### Responses
- **201 Created**
  ```json
  {
    "token": "JWT_TOKEN",
    "captain": {
      // captain data including vehicle information
    }
  }
  ```

- **400 Bad Request**
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "fieldName",
        "location": "body"
      }
    ]
  }
  ```

## /captains/login Endpoint

### Description
This endpoint authenticates a captain and provides a JWT token for authorized access.

### Request
- **Method:** `POST`
- **URL:** `/captains/login`
- **Headers:** `Content-Type: application/json`
- **Body:**
  ```json
  {
    "email": "john.captain@example.com",
    "password": "password123"
  }
  ```

### Responses
- **200 OK**
  ```json
  {
    "token": "JWT_TOKEN",
    "captain": {
      // captain data
    }
  }
  ```

- **401 Unauthorized**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

## /captains/profile Endpoint

### Description
This endpoint retrieves the profile information of the authenticated captain.

### Request
- **Method:** `GET`
- **URL:** `/captains/profile`
- **Headers:**
  - `Authorization: Bearer JWT_TOKEN`
  - Or valid session cookie with token

### Responses
- **200 OK**
  ```json
  {
    "captain": {
      "_id": "captain_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.captain@example.com",
      "vehicle": {
        "color": "black",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      },
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  ```

## /captains/logout Endpoint

### Description
This endpoint logs out the captain by invalidating their authentication token.

### Request
- **Method:** `GET`
- **URL:** `/captains/logout`
- **Headers:**
  - `Authorization: Bearer JWT_TOKEN`
  - Or valid session cookie with token

### Responses
- **200 OK**
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

- **401 Unauthorized**
  ```json
  {
    "message": "Authentication required"
  }
  ```
