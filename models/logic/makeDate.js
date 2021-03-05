module.exports = (days) => {
  const thenUtc = Date.parse(new Date()) - (86400000 * days);
  const date = new Date(thenUtc).toISOString().slice(0,10);
  return date;
};