require("dotenv").config();
var SibApiV3Sdk = require("sib-api-v3-sdk");

var defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.API_KEY;

// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix['api-key'] = "Token"

// Configure API key authorization: partner-key
var partnerKey = defaultClient.authentications["partner-key"];
partnerKey.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partnerKey.apiKeyPrefix['partner-key'] = "Token"

module.exports = SibApiV3Sdk;
