module.exports = (data, type) => {
  switch(type) {
    case 'string':
      if (typeof(data) === 'string') {
        return true;
      };
      return false;
    case 'object':
      if (Array.isArray(data)) {
        return false;
      };
      if (typeof(data) === 'object') {
        return true;
      };
      return false;
    case 'array':
      if (Array.isArray(data)) {
        return true;
      }
      return false;
    case 'number':
      if (typeof(data) === 'number') {
        return true;
      }
      return false;
    case 'boolean':
      if (typeof(data) === 'boolean') {
        return true;
      }
      return false;
    default:
      return false;
  };
};