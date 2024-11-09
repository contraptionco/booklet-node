// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Booklet from 'bklt';
import { Response } from 'node-fetch';

const client = new Booklet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource members', () => {
  test('create: only required params', async () => {
    const responsePromise = client.members.create({ email: 'email' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.members.create({
      email: 'email',
      about: 'about',
      name: 'name',
      permission: 'permission',
      photo: 'photo',
      quarantined_at: 'quarantined_at',
      send_welcome: true,
      subscribed_at: true,
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.members.retrieve('id');
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
    await expect(client.members.retrieve('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Booklet.NotFoundError,
    );
  });

  test('update', async () => {
    const responsePromise = client.members.update('id');
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
    await expect(client.members.update('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Booklet.NotFoundError,
    );
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.members.update(
        'id',
        {
          about: 'about',
          locked_at: 'locked_at',
          name: 'name',
          photo: 'photo',
          quarantined_at: 'quarantined_at',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Booklet.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.members.list();
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
    await expect(client.members.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Booklet.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.members.list({ items: 0, page: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Booklet.NotFoundError);
  });
});
