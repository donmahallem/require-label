import * as github from '@actions/github';
console.log("test");
const payload = JSON.stringify(github.context.payload, undefined, 2);
console.log(payload);