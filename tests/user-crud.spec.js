const { test, request, expect } = require('@playwright/test');
const { getRequest, postRequest, deleteRequest, putRequest } = require('../utils/customMethods');
const endpoints = require('../utils/endpoints');
const payload = require('../payloads/newUserPayload')
test('create user', async () => {
    const apiRequest = await request.newContext();
    const postresponse = await postRequest(apiRequest, endpoints.create_user, payload.newuser);
    expect(postresponse.status()).toBe(201);
    const responsebody = await postresponse.json();
    expect(responsebody.name).toBe('morpheus');
    console.log(responsebody);
});
test('read user', async () => {
    const apiRequest = await request.newContext();
    const postresponse = await getRequest(apiRequest, `${endpoints.create_user}/2`);
    expect(postresponse.status()).toBe(200);
    const responsebody = await postresponse.json();
    console.log('user-data', responsebody);
});
test('update user', async () => {
    const apiRequest = await request.newContext();
    const postresponse = await putRequest(apiRequest, `${endpoints.create_user}/2`, payload.update_user);
    expect(postresponse.status()).toBe(200);
    const responsebody = await postresponse.json();
    expect(responsebody.job).toBe('zion resident');
    console.log(responsebody);
});