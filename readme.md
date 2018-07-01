# Simple REST-API project with NodeJS

* /api/users
    - **GET** returns a list of all users
    - **POST** creates a new user and assigns id, returns created user

* /api/user/:id
    - **PUT** updates all properties of user where user.id equals id, returns updated user
    - **DELETE** removes the user, returns deleted user

all changes are saved to /users/usersDb.json

- [x] create an api
- [ ] connect it to mongoDB
- [ ] create login and sign up