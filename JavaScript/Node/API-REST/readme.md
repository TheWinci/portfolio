# Simple REST-API project

* /api/users
    **GET** returns a list of all users
    **POST** creates a new user and assigns id

* /api/user/:id
    **PUT** updates all properties of user where user.id equals id
    **DELETE** removes the user

all changes are saved to /users/usersDb.json