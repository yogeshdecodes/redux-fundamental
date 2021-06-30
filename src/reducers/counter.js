const counterReducer = (count = 0, { type, payload }) => {
  switch (type) {
    case 'INCREMENT':
      return count + 1;
    case 'DECREMENT':
      return count - 1;
    case 'INCREMENTBY5':
      return count + payload;
    default:
      return count;
  }
};

export default counterReducer;
