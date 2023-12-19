import Joi from "joi";

const createSchema = Joi.object({
  pokemon: Joi.string().required(),
  department: Joi.string().required(),
});

export const createValidator = (req, res, next) => {
  const { pokemon, department } = req.body;

  try {
    const response = createSchema.validate({ pokemon, department });

    if (response.error) {
      res.status(404).send(response.error);
    } else {
      next();
    }
  } catch (error) {
    res.status(404).send(error);
  }
};

// HOMERWORK

// update validator

// delete validator
