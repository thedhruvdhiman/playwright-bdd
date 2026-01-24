import { Page , FullConfig} from "@playwright/test"
import { linkSync } from "node:fs";
import path from "node:path";

import fs from "fs";
const feature_gen_loc = '.features-gen';
const storage_loc = 'storageState.json';

const globalTeardown = async (config: FullConfig) => {
    if (fs.existsSync(feature_gen_loc)) {
        fs.rmSync(feature_gen_loc, { recursive: true, force: true });
    }
    if (fs.existsSync(storage_loc)) {
        fs.rmSync(storage_loc, { recursive: true, force: true });
    }
}

export default globalTeardown;