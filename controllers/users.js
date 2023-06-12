const { response, request } = require("express");

const usersGet = (req = request, res = response) => {
  const query = req.query;

  res.json({
    msg: "get API - usersGet",
    query
  });
};

const usersPost = (req, res = response) => {
  const { nombre, edad } = req.body;

  res.json({
    msg: "post API - usersPost",
    nombre,
    edad,
  });
};

const usersPut = (req, res = response) => {
  const id = req.params.id;
  res.json({
    msg: "put API - usersPut",
    id,
  });
};

const usersPatch = (req, res = response) => {
  res.json({
    msg: "patch API - usersPatch",
  });
};

const usersDelete = (req, res = response) => {
  res.json({
    msg: "delete API - usersDelete",
  });
};

module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersPatch,
  usersDelete,
};
