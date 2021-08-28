module.exports = () => {
  const mainPage = (req, res) => {
    res.status(200).json({
      status: 'success',
    });
  }

  return mainPage;
}
