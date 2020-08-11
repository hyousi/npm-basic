import romanizer from '../src/romanizer'

describe('romanizer', () => {
  it('should return X when input 3', () => {
    const output = romanizer.transform(10);

    expect(output).toEqual("X");
  });
});
