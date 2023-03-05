const checkLength = (str, maxLength) => str.length <= maxLength;

function getRandomNumber(min, max) {
  if (min || max < 0) {
    throw new RangeError("Числа должны быть неотрицательными!");
  }
  if (max <= min) {
    throw new RangeError(
      "Максимальное значение должно быть больше минимального!"
    );
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
