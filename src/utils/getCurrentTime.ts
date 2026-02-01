/**
 * This provide necessary date and time data to provide the result dir with tag information.
 * This will remain same for all the tests.
 * Once called in any file, the date and time will be same no matter how many times it is called.
 */
const dateAndTime = new Date()
  .toLocaleString("en-GB", { timeZone: "UTC" })
  .replaceAll("/", "-")
  .replace(", ", "_")
  .replaceAll(":", "-");

export default dateAndTime;
