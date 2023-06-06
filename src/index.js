const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");

const app = express();

const UserRepository = require("./repository/user-repository");
const UserService = require("./services/user-service");

const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server started on Port: ${PORT}`);
    // const repo = new UserRepository();
    // const response = await repo.getById(1);
    // console.log(response);

    const service = new UserService();
    // const newToken = service.createToken({
    //   email: "himanshu@gmail.com",
    //   id: 1,
    // });
    // console.log("New Token is", newToken);
    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhpbWFuc2h1QGdtYWlsLmNvbSIsImlkIjoxLCJpYXQiOjE2ODYwMjcwOTYsImV4cCI6MTY4NjAyNzEyNn0.QN-HZdVKynhof1tuQDOPl0PFm9A9FliIT1POBhf40fk";
    // const response = service.validateToken(token);
    // console.log(response);
  });
};

prepareAndStartServer();
