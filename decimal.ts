const pd = (f: (x: number) => number) => (d: number) => (n: number) => +(f(Number(n + `e+${d}`)) + `e-${d}`);

const roundD = pd(Math.round);
const ceilD = pd(Math.ceil);
const floorD = pd(Math.floor);

roundD(0)(2.6);
ceilD(0)(2.6);
floorD(0)(2.6);


