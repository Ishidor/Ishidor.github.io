const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  return fetch(API_URL, { headers: { Accept: 'application/json' }})
    .then(response => response.json())
    .then(data => data.joke);
};

const fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({
    'id': '7h3oGtrOfxc',
    'joke': 'Whiteboards ... are remarkable.',
    'status': 200
  })
}));

it('should fetch a joke', () => {
  return fetchJoke()
    .then(data => expect(data).toEqual('Whiteboards ... are remarkable.'));
});
    
