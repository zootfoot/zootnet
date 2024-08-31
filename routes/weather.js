var express = require('express');
var router = express.Router();
const fs = require('fs');
const { DOMParser } = require('xmldom');
const path = require('path');
const xpath = require('xpath');
const { Level2Radar } = require('nexrad-level-2-data')

fetch('https://unidata-nexrad-level3.s3.amazonaws.com/?prefix=LNX_N0B_2024_08_07')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch the file');
    }
    return response.arrayBuffer();
  })
  .then(data => {
    const filePath = path.join(__dirname, '..', 'data', "LNX_N0B_2024_08_07");
    fs.writeFileSync(filePath, Buffer.from(data));
    console.log('File saved successfully');

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const doc = new DOMParser().parseFromString(fileContent, 'text/xml');

    console.log(doc)

    const rawData = fs.readFileSync(filePath);

    try {
      const radar = new Level2Radar(rawData);
      console.log(radar.getHighresReflectivity());
    } catch (error) {
      console.error(error);
    }
  })
  .catch(error => {
    console.error(error);
  });

/* GET weather page. */
router.get('/', function(req, res, next) {
  res.render('weather');
});

module.exports = router;
