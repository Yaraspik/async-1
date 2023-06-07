import read from './__mocks__/reader';
import json from './__mocks__/parser';

export default class GameSavingLoader {
  static async load() {
    return read()
      .then((result) => json(result))
      .then((result) => new Promise((resolve) => {
        resolve(JSON.parse(result));
      }))
      .catch((error) => error);
  }
}
