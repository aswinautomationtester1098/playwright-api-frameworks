const { test, expect, request } = require('@playwright/test');
const { getRequest, postRequest, deleteRequest, putRequest } = require('../utils/customMethods');
const payloads = require('../payloads/loginPayload');
const endpoints = require('../utils/endpoints')
test('Successfull login ', async () => {
  const apiContext = await request.newContext();
  const postReponse = await postRequest(apiContext,endpoints.login,payloads.validLogin)
  expect(postReponse.status()).toBe(200);
  const body = await postReponse.json();
  console.log('The body of the response:', JSON.stringify(body, null, 2));
});