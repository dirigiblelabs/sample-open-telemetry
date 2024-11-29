import { client, HttpClientResponse } from "sdk/http";

export class APIClient {

    public getData(): HttpClientResponse {
        const url = "https://httpbin.org/json";
        return this.getDataFromUrl(url);
    }

    public getDataFromUrl(url: string): HttpClientResponse {
        console.log(`Sending request to ${url}...`);

        const httpResponse = client.get(url);
        console.log(`Received status code [${httpResponse.statusCode}] from [${url}]`);

        return httpResponse;
    }

    public delayedResponse(): HttpClientResponse {
        const url = "https://httpbin.org/delay/3";
        console.log(`Sending request to ${url}...`);

        const httpResponse = client.put(url);
        console.log(`Received status code [${httpResponse.statusCode}] from [${url}]`);

        return httpResponse;
    }
}
