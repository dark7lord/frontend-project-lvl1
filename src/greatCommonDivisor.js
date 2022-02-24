const gcd = (a, b) => {
  let x = a;
  let y = b;

  if (y > x) {
    [x, y] = [y, x];
  }

  return (y) ? gcd(y, x % y) : x;
};

export default gcd;
