// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'bklt/core';
import { APIResource } from 'bklt/resource';
import { isRequestOptions } from 'bklt/core';
import * as MembersAPI from 'bklt/resources/members';

export class Members extends APIResource {
  /**
   * Creates a member
   */
  create(body: MemberCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/members', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Retrieves a member
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<MemberRetrieveResponse> {
    return this._client.get(`/members/${id}`, options);
  }

  /**
   * Updates a member
   */
  update(id: string, body?: MemberUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  update(id: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  update(
    id: string,
    body: MemberUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this._client.put(`/members/${id}`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Lists members
   */
  list(query?: MemberListParams, options?: Core.RequestOptions): Core.APIPromise<MemberListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<MemberListResponse>;
  list(
    query: MemberListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MemberListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/members', { query, ...options });
  }
}

export interface MemberRetrieveResponse {
  id: number;

  about?: string | null;

  created_at?: string;

  email?: string;

  name?: string;

  permission?: string;

  photo_url?: string | null;

  quarantined_at?: string | null;

  slug?: string;

  status?: string;

  subscribed_at?: boolean | null;

  updated_at?: string;
}

export interface MemberListResponse {
  members: Array<MemberListResponse.Member>;

  metadata: MemberListResponse.Metadata;
}

export namespace MemberListResponse {
  export interface Member {
    id?: string;

    about?: string;

    created_at?: string;

    email?: string;

    name?: string;

    permission?: string;

    photo_url?: string | null;

    quarantined_at?: string | null;

    slug?: string;

    status?: string;

    subscribed_at?: boolean | null;

    updated_at?: string;
  }

  export interface Metadata {
    count?: number;

    last?: number | null;

    page?: number;
  }
}

export interface MemberCreateParams {
  email: string;

  about?: string;

  name?: string;

  permission?: string;

  photo?: string | null;

  quarantined_at?: string | null;

  send_welcome?: boolean | null;

  subscribed_at?: boolean | null;
}

export interface MemberUpdateParams {
  about?: string;

  locked_at?: string | null;

  name?: string;

  photo?: string;

  quarantined_at?: string | null;
}

export interface MemberListParams {
  /**
   * Number of items per page
   */
  items?: number;

  /**
   * Page number
   */
  page?: number;
}

export namespace Members {
  export import MemberRetrieveResponse = MembersAPI.MemberRetrieveResponse;
  export import MemberListResponse = MembersAPI.MemberListResponse;
  export import MemberCreateParams = MembersAPI.MemberCreateParams;
  export import MemberUpdateParams = MembersAPI.MemberUpdateParams;
  export import MemberListParams = MembersAPI.MemberListParams;
}
