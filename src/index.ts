import * as github from '@actions/github';
import * as actionscore from '@actions/core';
import { Config } from './config';

const config: Config = {
    FILTER: actionscore.getInput("filter", {
        required: false
    })
};
console.log(github.context.action, github.context.eventName);
if (github.context.action.localeCompare('pull_request')) {
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
} else {
    actionscore.setFailed('This action can only be used on pull requests');
}