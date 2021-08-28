const ngrok = require('ngrok');

module.exports = async () => {
  // mengatur opsi tunnel ngrok
  const options = {
    proto: 'http',
    addr: 3000,
    authtoken: process.env.AUTH_TOKEN,
    region: 'us',
  }

  try {
    /*
      mengaktifkan tunnel &
      mendapatkan url dari ngrok
    */
    const url = await ngrok.connect(options);
    console.log(`Ngrok: ${url}`);
  }
  catch (error0) {
    console.log(JSON.stringify(error0, undefined));
    process.exit(1);
  }
}
