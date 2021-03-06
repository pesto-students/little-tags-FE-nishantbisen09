const getRandomArbitraryNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export default getRandomArbitraryNumber;
