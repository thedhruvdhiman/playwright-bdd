const dateAndTime = new Date().toLocaleString("en-GB", { timeZone: "UTC" }).replaceAll("/", "-").replace(", ", "_").replaceAll(":", "-");
export default dateAndTime;