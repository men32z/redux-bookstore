const filter = (filter = '', { type, name }) => {
  switch (type) {
    case 'CHANGE_FILTER':
      return name;
    default:
      return filter;
  }
};

export default filter;
