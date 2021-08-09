import fetch from 'isomorphic-fetch';

export default async function ajax(endpoint, payload) {
    const headers = {'Content-Type': "application/json"};
    const response = await fetch(endpoint, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload)
    });
    let body = await response.text();
    if(response.status === 200) {
        body = body.substring(1, body.length - 1);
    }
    const {status} = response;
    return {
        status,
        body
    };
}