export type HttpMethod = 'get' | 'put' | 'patch' | 'post' | 'delete';

export interface HttpData {
  [key: string]: any;
}

export const http = async (
  method: HttpMethod,
  url: string,
  body?: HttpData
) => {
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
    console.log('[ERROR]', ex);
    return {
      error: 'The request failed.',
    };
  }
};
