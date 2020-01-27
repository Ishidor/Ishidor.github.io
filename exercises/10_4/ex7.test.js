let count = 0;
const counter = {
  add(val) {
    count += val;
  },
  getCount() {
    return count;
  }
};

const multipleAdd = counter => {
  counter.add(15);
  counter.add(20);
};

it('multipleAdd > jest.fn() toHaveBeenCalledWith() multiple calls', () => {
  const mockCounter = {
    add: jest.fn()
  };

  multipleAdd(mockCounter);

  expect(mockCounter.add).toHaveBeenCalledWith(15);
  expect(mockCounter.add).toHaveBeenCalledWith(20);
});
    
