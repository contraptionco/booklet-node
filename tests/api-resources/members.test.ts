// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Booklet from 'bklt';
import { Response } from 'node-fetch';

const booklet = new Booklet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource members', () => {
  test('create: only required params', async () => {
    const responsePromise = booklet.members.create({ email: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await booklet.members.create({
      email: 'string',
      about: 'string',
      name: 'string',
      permission: 'string',
      photo: 'string',
      quarantined_at: 'string',
      send_welcome: true,
      subscribed_at: true,
    });
  });

  test('retrieve', async () => {
    const responsePromise = booklet.members.retrieve('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(booklet.members.retrieve('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Booklet.NotFoundError,
    );
  });

  test('update', async () => {
    const responsePromise = booklet.members.update('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(booklet.members.update('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Booklet.NotFoundError,
    );
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      booklet.members.update(
        'string',
        { about: 'string', locked_at: 'string', name: 'string', photo: 'string', quarantined_at: 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Booklet.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = booklet.members.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(booklet.members.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Booklet.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      booklet.members.list({ items: 0, page: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Booklet.NotFoundError);
  });
});
