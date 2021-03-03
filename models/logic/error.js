module.exports = (code, payload) => {

  let serverResp = {};

  if (code) {serverResp.status = code;};
  if (payload) {serverResp.payload = payload;};

  switch (code) {
    case 200:
      serverResp.message = 'OK';
      break;
    case 201:
      serverResp.message = 'Created';
      break;
    case 202:
      serverResp.message = 'Accepted';
      break;
    case 400:
      serverResp.message = 'Bad Request';
      break;
    case 401:
      serverResp.message = 'Not Authorised';
      break;
    case 404:
      serverResp.message = 'Not Found';
      break;
    case 406:
      serverResp.message = 'Not Acceptable';
      break;
    case 409:
      serverResp.message = 'Conflict';
      break;
    case 500:
      serverResp.message = 'Server Error';
      break;
    default: 
      serverResp.status = 500;
      serverResp.message = 'Server Error';
  };
  return serverResp;
};