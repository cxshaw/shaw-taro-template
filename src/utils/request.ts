const request = async () => {
  await console.log('request');
  return Promise.resolve({
    data: '',
    code: 1,
    success: true,
  });
};

export default request;
