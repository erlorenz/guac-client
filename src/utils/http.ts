export enum HttpMethod {
  Get = 'get',
  Post = 'post',
  Patch = 'patch',
  Delete = 'delete',
  Put = 'put',
}

export interface HttpData {
  [key: string]: any;
}

export const http = async (method: string, url: string, body?: HttpData) => {
  console.log(`[REQUEST] ${method} ==> ${url}`);

  // Decide if it needs a request body
  let request = undefined;
  if (body)
    request = {
      method,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    };

  try {
    const response = await fetch(url, request);

    const data = await response.json();
    console.log(`[RESPONSE]`, data);

    if (response.ok) {
      return {
        data,
      };
    } else {
      console.log(`[ERROR]`, response.status, data);
      return {
        error: data,
      };
    }
  } catch (ex) {
    console.log(ex);
    return {
      error: 'The request failed.',
    };
  }
};
