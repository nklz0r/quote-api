const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
};

const getIndexById = (id, array) => {
  return array.findIndex((element) => {
    return element.id === Number(id);
  });
};

const refreshId = (array) => {
  array.map(element => {
    element.id = array.indexOf(element) + 1;
  })
   
  
}

module.exports = {
  getRandomElement,
  getIndexById,
  refreshId
};
