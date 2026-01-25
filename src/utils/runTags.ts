/**
 * This provide necessary tag data to provide the result dir with tag information
 */


const processArguments = process.argv.slice(2);

const tagArgs = processArguments.find((i) => {
  if (i.startsWith("@")) {
    return i;
  }
});
const runTag = tagArgs ? tagArgs.replaceAll("@", "").replaceAll("|","_") : "batch";

export default runTag;