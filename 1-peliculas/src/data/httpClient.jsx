const API="https://api.themoviedb.org/"
export function get(path){ //srve para sacar informacion
    return fetch(API+path,(
        headers,{
        Authorization:
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDRlMDNlOWQ1YTVmNjJlZjgyYTA0ZDE0ZGI5YzNkZSIsInN1YiI6IjY1ZjdjN2VjMThiNzUxMDE3ZWY2YmEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GuZ4-eEpvnjO705AUsVXrPXd0T89hA2S9OYNX4dxDXM",
        "Context-Type":"application/json;charset=utf-8",
        }
    )).then((result) => result.json());
}  