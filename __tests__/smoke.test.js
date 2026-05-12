describe('Jest setup smoke test', () => {
  it('should run a basic test', () => {
    expect(1 + 1).toBe(2);
  });

  it('should handle async code', async () => {
    const result = await Promise.resolve('hello');
    expect(result).toBe('hello');
  });
});
