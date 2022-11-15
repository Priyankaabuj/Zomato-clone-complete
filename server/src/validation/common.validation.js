import joi from "joi";



export const validateId = (id) => {
  const Schema = joi.object({
    _id: joi.string().required(),
  });

  return Schema.validateAsync(id);
};

export const validateCategory = (category) => {
  const Schema = joi.object({
    category: joi.string().required(),
  });
  return Schema.validateAsync(id);
};

export const ValidatePassword = (userData) => {
  const Schema = joi.object({
    password: joi.string().required(),
  });

  return Schema.validateAsync(userData);
};
