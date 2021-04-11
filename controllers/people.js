const Person = require('../models/person');

exports.index = async (request, response, next) => {
  try {
    const people = await Person.find();

    response.status(200)
    .json(people);
  } catch (error) {
    next(error);
  }
};

exports.create = async (request, response, next) => {
  try {
    const { name } = request.body;
    const people = await Person.create({
      name
    });

    response.status(200)
    .json({
      message: "Person was created successfully",
      status: "success",
      people
    });
  } catch (error) {
    next(error);
  }
};
