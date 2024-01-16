const urlForUser = (id) => 
`https://jsonplaceholder.typicode.com/users/1`;

export const fetchUser = (id) => 
fetch(urlForUser(id)).then((res) => res.json());
