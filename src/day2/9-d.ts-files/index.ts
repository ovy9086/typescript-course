fetch("asdsad").then(async (it) => {
  const data = await it.json();
});

const nums = [1, 2, 3, null, undefined];



const truthyNums = nums.filter(Boolean);
