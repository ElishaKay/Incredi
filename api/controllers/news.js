const news = require('gnews');
const geoip = require('geoip-lite');
const {countryCodes} = require('../helpers/countryCodes');

exports.getNews = async (req, res) => {
  console.log('api/articles called!')
  const headlines = await news.headlines({n : 9});

  res.json(headlines);
}

exports.getCategoryNews = async (req, res) => {
  console.log('api/articles category called!');

  const headlines = await news.topic(req.params.category.toUpperCase(), {n : 9});
  res.json(headlines);
}


exports.getCountryNews = async (req, res) => {
  console.log('api/articles country called!');

  const headlines = await news.geo(req.params.country.toUpperCase(), {n : 9});
  res.json(headlines);
}

exports.getCountryNewsByIP = async (req, res) => {
  console.log('ran getCountryNewsByIP controller func');
  let ip = req.params.ip;
  console.log('ip: ',ip)

  let geo = geoip.lookup(ip);
  console.log('geo',geo);
  let selectedCountry = countryCodes[geo.country];

  const headlines = await news.geo(selectedCountry.toUpperCase(), {n : 9});
  res.json({selectedCountry, headlines});
}