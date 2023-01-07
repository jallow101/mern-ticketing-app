const admin = require("../firebase");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async (req, res) => {
  const { name, surname, age, password } = req.body;
  let fields = [
    { title: "name", value: name },
    { title: "surname", value: surname },
    { title: "age", value: age },
    { title: "password", value: password },
  ];
  let missingFileds = [];

  let info = {
    name: name,
    surname,
    age,
    password,
  };

  fields.map((field) => {
    if (field.value == undefined) {
      missingFileds.push(field.title);
    }
  });

  if (missingFileds.length > 0) {
    res.status(400);
    throw new Error(" Please fill missing field(s) - " + missingFileds);
  }

  res.status(200).json({
    message: "Dkk Sjc",
  });

  // try {
  //   admin
  //     .firestore()
  //     .collection("test-user")
  //     .doc()
  //     .set(info)
  //     .then(function () {
  //       console.log("User created");
  //       res.status(200).json({
  //         message: "New user created successfully",
  //       });
  //     });
  // } catch (error) {
  //   res.status(400).json({
  //     message: error.message,
  //   });
  // }
});

const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, surname, age, password } = req.body;

  console.log("details ", req.body);
  // let user = {
  //   name,
  //   surname,
  //   age,
  //   password,
  // };

  let user = new User(name, surname, age, password);

  user.changeSurname("Updatd Surname ");

  console.log("Updated user with id - ", id);

  console.log("details ", user);
  res.status(200).json({
    message: "successfully updated User",
  });

  // res.status(200).json({
  //   id,
  //   message: `Userid - ${id} updated`
  // })

  // console.log(",... Loading");
  // try {
  //   admin
  //     .firestore()
  //     .collection("test-user")
  //     .doc(id)
  //     .update(user)
  //     .then(function () {
  //       console.log("User created");
  //       res.status(200).json({
  //         message: "successfully updated User",
  //       });
  //     });
  // } catch (error) {}
});

const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  console.log("Delete user with id - ", id);
  try {
    admin
      .firestore()
      .collection("test-user")
      .doc(id)
      .delete()
      .then(function () {
        console.log("User deleted");
        res.status(200).json({
          message: "User deleted",
        });
      });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

const getUser = asyncHandler(async (req, res) => {
  //const id = 4555;

  const { id } = req.body;

  console.log("get user with id - ", id);

  try {
    admin
      .firestore()
      .collection("test-user")
      .doc(id)
      .get()
      .then(function (user) {
        console.log("User created");
        res.status(200).json({
          user: {},
          message: "returned User info",
        });
      });
  } catch (error) {}
});

const getAllUser = asyncHandler(async (req, res) => {
  console.log("fetching all users");
  try {
    let usersData = [];

    const allUsers = await admin.firestore().collection("test-user");
    const snapshot = await allUsers.get();
    await snapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());

      usersData.push(doc.data());
    });

    console.log("all users ", usersData);
    res.status(200).json({
      users: usersData,

      message: "returned User info",
    });
  } catch (error) {
    error.message;
  }
});

module.exports = { createUser, deleteUser, updateUser, getUser, getAllUser };
