import { APIClient } from "../api-client"

export function onMessage(message: any) {
    console.log('Calling API in Camel...');

    const apiClient = new APIClient();
    const httpResponse = apiClient.getData();

    console.log(`Camel TS: received status code [${httpResponse.statusCode}] and body [${httpResponse.text}]`);
    message.setBody(httpResponse.text);

    return message;
}
