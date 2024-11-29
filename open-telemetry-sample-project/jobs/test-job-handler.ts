import { APIClient } from "../api-client"

console.log('Executing job handler...');

const apiClient = new APIClient();
const httpResponse = apiClient.getData();
// const httpResponse = apiClient.delayedResponse();

console.log(`Job handler: received status code [${httpResponse.statusCode}] and body [${httpResponse.text}]`);
// throw new Error("Upss");