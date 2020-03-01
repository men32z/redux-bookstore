const filter = (filter = '', {type, name}) => {
  switch (type) {
    case 'CHANGE_FILTER':
      return name;
    default:
      return 'ALL';
  }
};

export default filter;