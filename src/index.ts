import * as github from '@actions/github';
import * as actionscore from '@actions/core';
import { Config } from './config';

const config: Config = {
    GITHUB_SECRET: actionscore.getInput("github_secret", {
        required: true
    })
};
console.log(github.context.eventName, github.context.action)
actionscore.info("Triggered on: " + github.context.action + " - " + github.context.eventName);
actionscore.info("Payload " + github.context.payload.action);
if (github.context.payload.pull_request) {
    const prData: any = github.context.payload.pull_request;
    if (prData.labels && prData.labels.length > 0 && config) {
        actionscore.info("Label present");
    } else {
        actionscore.setFailed("No Label");
    }
} else {

    console.log("test");
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(payload);
    actionscore.setOutput("T1", "T2");
    actionscore.setFailed("Bommel");
}