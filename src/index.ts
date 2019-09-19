import * as github from '@actions/github';
import * as actionscore from '@actions/core';

console.log("test");
const payload = JSON.stringify(github.context.payload, undefined, 2);
console.log(payload);
actionscore.setOutput("T1", "T2");
actionscore.setFailed("Bommel");