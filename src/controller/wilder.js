const dataSource = require("../utils").dataSource;
const Wilder = require("../entity/Wilder");

module.exports = {
  read: async (req, res) => {
    const { nameContains } = req.query;
    try {
      const wilders = await dataSource.getRepository(Wilder).find({
        where: { name: nameContains ? Like(`%${nameContains}%`) : undefined },
      });
      res.send(wilders);
    } catch (err) {
      console.error(err);
      res.status(500).send("error while reading wilders");
    }
  },

  create: async (req, res) => {
    const { name } = req.body;
    if (name.length > 100 || name.length === 0) {
      return res
        .status(422)
        .send("the name should have a length between 1 and 100 characters");
    }
    try {
      const created = await dataSource.getRepository(Wilder).save({ name });
      res.status(201).send(created);
    } catch (err) {
      console.error(err);
      res.status(500).send("error while creating wilder");
    }
  },

  update: async (req, res) => {
    const { name } = req.body;
    if (name.length > 100 || name.length === 0) {
      return res
        .status(422)
        .send("the name should have a length between 1 and 100 characters");
    }
    try {
      const { affected } = await dataSource
        .getRepository(Wilder)
        .update(req.params.id, req.body);
      if (affected) return res.send("wilder updated");
      res.sendStatus(404);
    } catch (err) {
      console.error(err);
      res.status(500).send("error while updating wilder");
    }
  },

  delete: async (req, res) => {
    try {
      const { affected } = await dataSource
        .getRepository(Wilder)
        .delete(req.params.id);
      if (affected) return res.send("wilder deleted");
      res.sendStatus(404);
    } catch (err) {
      console.error(err);
      res.status(500).send("error while deleting wilder");
    }
  },

  addSkill: async (req, res) => {
    // TODO
  },
  removeSkill: async (req, res) => {
    // TODO
  },
};
