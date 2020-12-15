import { Connection, createConnection, getConnection } from 'typeorm';
import User from '../../src/entity/User';

describe('typeorm 학습 테스트', () => {
  beforeEach(async () => {
    await createConnection();
    const connection: Connection = getConnection();
    connection.manager.createQueryBuilder().delete().from(User).execute();
  });
  afterEach(async () => {
    const connection: Connection = getConnection();
    connection.close();
  });
  test('connection을 생성하여 사용자를 생성한다.', async () => {
    // given
    const user = new User('Kwang Soon', 'KIM', 29);

    // when
    const connection: Connection = getConnection();
    await connection.manager.save(user);
    const users: Array<User> = await connection.manager.find(User);
    const actual: User = users[0];

    // then
    expect(users.length).toBe(1);
    expect(actual.getFirstName()).toBe('Kwang Soon');
    expect(actual.getLastName()).toBe('KIM');
    expect(actual.getAge()).toBe(29);
  });
});
