const FakeError = () => {
  const doCrash = () => {
    if (true) throw new Error('Fake error');
  };
  doCrash();

  return null;
};

export default FakeError;
