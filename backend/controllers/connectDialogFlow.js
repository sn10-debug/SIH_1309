const dialogflow = require("@google-cloud/dialogflow");

async function getResponse(urlRequest, urlResponse) {
  let inputText = urlRequest.body.inputText;
  const keyFilename = "woolwise-fqmr-adf7f4efd1b0.json";
  const projectID = "woolwise-fqmr";

  const sessionClient = new dialogflow.SessionsClient({
    keyFilename: keyFilename,
  });

  const sessionPath = sessionClient.projectAgentSessionPath(
    projectID,
    "1234567"
  );

  const textQuery = inputText ? inputText : "Quality Parameters";

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: textQuery,
        languageCode: "en-US",
      },
    },
  };

  let botResponse = await sessionClient
    .detectIntent(request)
    .then((responses) => {
      const response = responses[0].queryResult;
      //   console.log(`Response: ${response.fulfillmentText}`);
      return `Response: ${response.fulfillmentText}`;
    })
    .catch((error) => {
      console.error(error);
    });

  urlResponse.status(200).json({
    status: "success",
    message: botResponse,
  });
}

module.exports = getResponse;
