import { execSync } from "child_process";
import fs from "fs";
import dateAndTime from "../utils/getCurrentTime.js";
import runTags from "../utils/runTags.js";
const feature_gen_loc = ".features-gen";
const storage_loc = "storageState.json";

const globalTeardown = async () => {
  try {
    if (fs.existsSync(feature_gen_loc)) {
      fs.rmSync(feature_gen_loc, { recursive: true, force: true });
    }
    if (fs.existsSync(storage_loc)) {
      fs.rmSync(storage_loc, { recursive: true, force: true });
    }
    execSync(
      `allure generate ./results/${runTags}_${dateAndTime}/ --output ./report/${runTags}_${dateAndTime}/`,
    );
    if (fs.existsSync("./results")) {
      fs.rmSync("./results", { recursive: true, force: true });
    }
  } catch (error) {
    throw new Error((error as Error).stack);
  }
};

export default globalTeardown;
