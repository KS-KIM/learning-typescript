import { Connection, createConnection, getConnection } from 'typeorm';
import User from '../../src/entity/User';
import UserRepository from '../../src/repository/UserRepository';

describe('typeorm custom repository 학습 테스트', () => {
  let userRepository: UserRepository;
  beforeAll(async () => {
    const connection: Connection = await createConnection();
    userRepository = connection.getCustomRepository(UserRepository);
  });
  beforeEach(async () => {
    const connection: Connection = getConnection();
    await connection.manager.createQueryBuilder().delete().from(User).execute();
  });
  afterAll(async () => {
    const connection: Connection = getConnection();
    connection.close();
  });
  test('User를 생성한다.', async () => {
    // given
    const user: User = new User('kwang-soon', 'KIM', 29);

    // when
    const savedUser: User = await userRepository.save(user);

    // then
    expect(savedUser.getId()).not.toBeNull();
    expect(savedUser.getFirstName()).toBe('kwang-soon');
    expect(savedUser.getLastName()).toBe('KIM');
    expect(savedUser.getAge()).toBe(29);
  });
  test('findByName: 사용자 이름으로 조회한다.', async () => {
    // given
    const user: User = new User('kwang-soon', 'KIM', 29);
    await userRepository.save(user);

    // when
    const savedUser: User = await userRepository.findByName('kwang-soon', 'KIM');

    // then
    expect(savedUser.getId()).not.toBeNull();
    expect(savedUser.getFirstName()).toBe('kwang-soon');
    expect(savedUser.getLastName()).toBe('KIM');
    expect(savedUser.getAge()).toBe(29);
  });
  test('update: 사용자 이름을 업데이트한다.', async () => {
    // given
    const user: User = new User('kwang-soon', 'KIM', 29);
    const savedUser = await userRepository.save(user);

    // when
    userRepository.update(savedUser.getId(), { firstName: 'hello', lastName: 'world' });
    const actual: User = await userRepository.findOne(savedUser.getId());

    // then
    expect(actual.getFirstName()).toBe('hello');
    expect(actual.getLastName()).toBe('world');
  });
  test('delete: 사용자를 제거한다.', async () => {
    // given
    const user: User = new User('kwang-soon', 'KIM', 29);
    const savedUser = await userRepository.save(user);

    // when
    await userRepository.delete(savedUser);
    const actual: User = await userRepository.findOne(savedUser.getId());

    // then
    expect(actual).toBeUndefined();
  });
});
