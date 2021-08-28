module.exports = (ApiClient) => {
  const order = async (req, res) => {
    try {
      const data = await ApiClient.createTransaction(req.body);

      res.status(200).json({
        status: 'success', data,
      });
    }
    catch (error0) {
      const {
        httpStatusCode,
        ApiResponse: { error_messages },
        rawHttpClintData: { statusText },
      } = error0;

      res.status(httpStatusCode).json({
        status: statusText,
        msg: error_messages[0],
      });
    }
  }

  return order;
}
