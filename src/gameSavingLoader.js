import read from './__mocks__/reader';
import json from './__mocks__/parser';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const string = await json(data);
      return new Promise((resolve) => {
        resolve(JSON.parse(string));
      });
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
