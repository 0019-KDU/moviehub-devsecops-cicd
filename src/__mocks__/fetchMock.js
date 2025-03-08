// eslint-disable-next-line no-undef
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ results: [{ id: 1, title: "Movie 1" }] }),
  })
);
