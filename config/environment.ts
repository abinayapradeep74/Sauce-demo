import dotenv from 'dotenv';
dotenv.config();

const baseUrl = process.env.BASE_URL;
const testUserUsername = process.env.TEST_USER_USERNAME;
const testUserPassword = process.env.TEST_USER_PASSWORD;
if (!baseUrl){

    throw new Error('BASE_URL is not defined in the enviornment configuration file');
}

if(!testUserUsername){
    throw new Error('TEST_USERNAME_USERNAME is not defined in the environment configuration file');
}

if(!testUserPassword){
    throw new Error('TEST_PASSWORD_PASSWORD IS not defined in the environment configuration file');
}
export const environment ={
    baseUrl,
    testUserUsername,
    testUserPassword
};