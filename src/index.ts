import { exec } from 'child_process';
import dotenv from 'dotenv';
dotenv.config({ path: './env/.env'});

// Setting retry value from environment variables or defaulting to '0'
const parallelValue = process.env.PARALLEL || '1';
const retryValue = process.env.RETRY || '0';

//Define a common command string for running cucumber tests
const common = `./src/features/*.feature \
  --require-module ts-node/register \
  --require ./src/step-definations/**/**/*.ts \
  -f json:./reports/report.json \
  --format html:./reports/report.html \
  --parallel ${parallelValue} \
  --retry ${retryValue}`;


//Define an interface for the profiles object
interface ProfileCommands {
    [key: string]: string;
}


//Define a command strings for different test profiles
const profiles: ProfileCommands = {
    smoke: `${common} --tags "@smoke"`,
    regression: `${common} --tags "@regression"`,
    sanity: `${common} --tags "@sanity"`,
}

//Get the command-line agrgument and assign it to the profile
const profile = process.argv[2];

//Construct the command string based on the selected profile
let command = `npx cucumber-js ${profiles[profile as 'smoke' | 'regression' | 'sanity' ]}`;


//Print the constructed command
console.log(command);

//Execute the command
exec(command, { encoding: 'utf-8'}, (error: Error | null, stdout: string) =>{
   console.log(stdout);

   if(error){
    throw new Error('Some automation tests have failed! - Please reviee');
   }
});