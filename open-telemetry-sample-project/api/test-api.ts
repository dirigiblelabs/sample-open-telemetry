import { Controller, Get } from "sdk/http"
import { APIClient } from "../api-client"

@Controller
class TestAPI {

    @Get("/data")
    public getData() {
        const apiClient = new APIClient();
        const httpResponse = apiClient.getData();
        console.log(`REST API: received status code [${httpResponse.statusCode}] and body [${httpResponse.text}]`);

        return JSON.parse(httpResponse.text);
    }

    @Get("/failure")
    public getWitFailure() {
        const apiClient = new APIClient();
        const url = "https://invalid.host.com/json";

        const httpResponse = apiClient.getDataFromUrl(url);
        console.log(`REST API: received status code [${httpResponse.statusCode}] and body [${httpResponse.text}]`);

        return JSON.parse(httpResponse.text);
    }

}
