const AWS = require("aws-sdk");
const s3 = new AWS.S3();

const upload = async () => {};

const main = async (event) => {
  console.log("Event", event);
  return;
};
exports.handler = main;
