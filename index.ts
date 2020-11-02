import chalk from "chalk";
import validator from 'ibm-openapi-validator';

async function test(s) {
    try {
        await validator({});
    } catch (e) {
        console.log('validation failed, as expected');
    }
}

function logSuccess(msg: string) {
    console.log(chalk.green( msg));
    test({});
}

logSuccess("Hello World!");
