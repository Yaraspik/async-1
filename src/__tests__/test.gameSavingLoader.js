import GameSavingLoader from '../gameSavingLoader';

test('get saving', async () => {
  expect.assertions(1);
  expect(GameSavingLoader.load().then((saving) => saving)).toEqual(
    new Promise((resolve) => {
      resolve({
        id: 9,
        created: 1546300800,
        userInfo: {
          id: 1, name: 'Hitman', level: 10, points: 2000,
        },
      });
    }),
  );
});
