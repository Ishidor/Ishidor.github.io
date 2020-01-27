let count = 0;
const counter = {
  increment() {
    count += 1;
  },
  getCount() {
    return count;
  }
};

const app = counter => {
  counter.increment();
  counter.increment();
};

it('app() with mock counter', () => {
  const mockCounter = {
    increment: jest.fn(),
    getCount: jest.fn()
  };

  app(mockCounter);

  expect(mockCounter.increment).toHaveBeenCalledTimes(2);
  expect(mockCounter.getCount).not.toHaveBeenCalled();
});
    
