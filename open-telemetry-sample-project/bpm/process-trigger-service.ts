import { Controller, Post, response } from "sdk/http"
import { process } from "sdk/bpm"

@Controller
class ProcessService {

    @Post("/")
    public startProcess() {
        const processKey = 'test-process';
        const processInstanceId = process.start(processKey);

        response.setStatus(response.ACCEPTED);
        return {
            processKey: processKey,
            processInstanceId: processInstanceId,
            message: `Started process instance with id [${processInstanceId}] for process with key [${processKey}]`
        };
    }

}