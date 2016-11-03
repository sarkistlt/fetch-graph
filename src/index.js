function fetchGraph(path, request, variables) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.responseType = 'json';
        xhr.open('POST', path);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.onload = () => {
            resolve(xhr.response);
        };
        xhr.onerror = (err) => {
            reject(err.error);
        };
        if (!variables) {
            xhr.send(JSON.stringify({query: request}));
        } else {
            xhr.send(JSON.stringify({
                query: request,
                variables: variables
            }));
        }
    });
}

export default fetchGraph;