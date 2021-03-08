module.exports = (date) => {
  const d = Date.parse(date);
  if (isNaN(d)) {
    return false;
  };
  return true;
};
