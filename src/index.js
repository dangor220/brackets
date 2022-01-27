module.exports = function check(str, bracketsConfig) {
  let arrBrackets = bracketsConfig.map((item) => item.join(""));

  for (let i of str) {
    arrBrackets.forEach((item) => {
      while (str.includes(item)) {
        str = str.replace(item, "");
      }
    });
  }

  return str.length == 0;
};
