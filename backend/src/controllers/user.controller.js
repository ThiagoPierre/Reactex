const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const saltRounds = 10;

class UserController {
  // Autenticação
  async auth(req, res) {
    const body = req.body;

    try {
      const user = await UserModel.findOne({ email: body.email }).lean();

      if (!user) {
        throw new Error("Usuário não existe");
      }

      const compareResult = await bcrypt.compare(body.password, user.password);

      if (!compareResult) {
        throw new Error("Senha inválida");
      }

      delete user.password;

      const token = jwt.sign(user, 'alobomdia');

      res.send({ token });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
  // Apresentar os dados
  async index(req, res) {
    const data = await UserModel.find();

    res.send({ data });
  }
  // Salvar os dados
  async store(req, res) {
    const data = req.body;

    if (data.password) {
      const password = data.password;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(password, salt);

      data.password = hash;
    }

    const user = await UserModel.findOne({ email: data.email });

    if (user) {
      return res.status(400).send({ message: "Email already exists" });
    }

    const newUser = await UserModel.create(data);

    res.send({ user: newUser });
  }
  // pegar apenas um dado
  async getOne(req, res) {
    const { id } = req.params;

    try {
      const user = await UserModel.findById(id);
      res.send({ user });
    } catch (e) {
      res.status(400).send({ message: "User not exists" });
    }
  }
  // atualizar um dado
  async update(req, res) {
    const {
      params: { id },
      body,
    } = req;

    if (body.password) {
      const password = body.password;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(password, salt);

      body.password = hash;
    }

    const user = await UserModel.findOneAndUpdate(id, body).lean();

    res.send({
      user: {
        ...user,
        ...body,
      },
    });
  }
  // remover dado
  async remove(req, res) {
    const { id } = req.params;

    try {
      const user = await UserModel.findByIdAndDelete(id);
      if (user) {
        res.send({ message: "User removed" });
      }
      throw new Error("User not exist");
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  async me(req, res) {
    res.send({ loggedUser: req.headers.loggedUser });
  }
}

module.exports = new UserController();