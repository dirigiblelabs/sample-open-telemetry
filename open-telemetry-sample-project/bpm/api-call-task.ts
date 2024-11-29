import { APIClient } from "../api-client"

console.log('Executing api call task...');

const apiClient = new APIClient();
const httpResponse = apiClient.getData();

console.log(`API call task: received status code [${httpResponse.statusCode}] and body [${httpResponse.text}]`);
