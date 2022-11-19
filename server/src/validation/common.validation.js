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

export const validateUserInfo = (userData) => {
  const Schema = joi.object({
    password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    _id: joi.string().required(),
  });

  return Schema.validateAsync(userData);
};

export const validateOrder = (order) => {
  const Schema = joi.object({
    razorpay_payment_id: joi.string().required(),
  });
  return Schema.validateAsync(order);
}