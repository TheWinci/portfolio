# Simple REST-API project

* /api/users
    - **GET** returns a list of all users
    - **POST** creates a new user and assigns id, returns newly created user

* /api/user/:id
    - **PUT** updates all properties of user where user.id equals id, returns updated user
    - **DELETE** removes the user, returns delete user

all changes are saved to /users/usersDb.json