import fetch from 'isomorphic-fetch';

const dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');

function jsonDateReviver(key, value) {
    if(dateRegex.test(value)){
        return new Date(value);
    }
    return value;
}

export default async function graphQLFetch(query, variables = {}) {
    const headers = {'Content-Type': 'application/json'};
    const apiEndpoint = "/graphql";
    const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers,
        body: JSON.stringify({query, variables})
    });
    const body = await response.text();
    const result = JSON.parse(body, jsonDateReviver);
    return result.data;
}