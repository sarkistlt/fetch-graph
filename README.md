Simple implementation of "fetch" for GraphQL API. 
Module use vanilla javaScript 'XMLHttpRequest', so it will work everywhere.
No polyfills, No dependencies, just 1kb simple function.

Usage pretty similar to standard "fetch". 

### Install
~~~sh
npm i -S fetch-graph
~~~

##Description
~~~js
import fetchGraph from 'fetch-graph';

fetchGraph(path, request[, variables])
// returns Promise
// path - your GraphQL API address
// request - string of same structure query as in GraphiQL tool
// variables - same logic as in GraphiQL tool
~~~

##Example
~~~js
import fetchGraph from 'fetch-graph';

let request = `query getCategory($id: String!) {
                    getCategory(id: $id) {
                        id
                        name
                    }    
               }`;
              
variables = {id: '12345'};

fetchGraph('/graphql', request, variables)
            .then(res => console.log(res))
            .catch(err => console.log(`${request} error: ${err});
            
/* result
{
    data: {
        getCategory: [{itemObj}]
    }
}
~~~

# License
MIT

