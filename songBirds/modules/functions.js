const functions = {
  mapArray: function (array, key) {
    let res = [];
    for (let i = 0; i < array.length; i++) {
      res.push(array[i][key]);
    }
    return res;
  },

  mapObject: function (array, key) {
    let res = {};
    for (let i = 0; i < array.length; i++) {
      res[array[i][key]] = array[i];
    }
    return res;
  },
};

export const mapArray = functions.mapArray;
export const mapObject = functions.mapObject;