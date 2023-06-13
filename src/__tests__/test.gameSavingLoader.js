import GameSavingLoader from '../gameSavingLoader';

test('get saving', async () => expect(GameSavingLoader.load()).resolves.toEqual(
  {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  },
));
