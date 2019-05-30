export const arrayToObject = (array = [], key) =>
  array.reduce((accumulator, user) => {
    accumulator[user[key]] = { ...user };
    return accumulator;
  }, {});

export const isEmpty = () => false;
