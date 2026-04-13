

# Routes
## Testing Routes

- Data for testing routes

## Data for Register User

{
    "fullName": "FirstName Lastname",
    "email": "exampleEmail@gmail.com",
    "password" : "Password@1234",
    "adminSuperKey" : "Admin@Res#2026",
    "phoneNumber" : 8923456174,
    "address" : [
        {
            "add" : "Stree1 colony 2 nums",
            "place" : "Home",
            "currentAddSelected" : false,
            "pinCode" : 250645
        },
        {
            "add" : "Stree1 colony 1 Dumbule",
            "place" : "Work",
            "pinCode" : 6458785,
            "currentAddSelected" : true
        }
    ]
}

## Route for Register User

```
http://localhost:5000/restaurant/api/v1/auth/user/register

```


## Data for Login User

{
    "email": "exampleEmail@gmail.com",
    "password" : "Password@1234",
}

## Route for Login User

```
http://localhost:5000/restaurant/api/v1/auth/user/login

```


## Route for Logout User
- Note : For logout wan't only routes no data
```
http://localhost:5000/restaurant/api/v1/auth/user/logout

```
