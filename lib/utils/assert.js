export const assert = {
  strictEqual(a, b, m = "assert fail") {
    if (!(JSON.stringify(a) === JSON.stringify(b)))
      throw new Error(
        m + ": " + JSON.stringify(a) + " !== " + JSON.stringify(b)
      );
  },
};
