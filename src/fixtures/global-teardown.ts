import fs from "fs";
const feature_gen_loc = '.features-gen';
const storage_loc = 'storageState.json';

const globalTeardown = async () => {
    if (fs.existsSync(feature_gen_loc)) {
        fs.rmSync(feature_gen_loc, { recursive: true, force: true });
    }
    if (fs.existsSync(storage_loc)) {
        fs.rmSync(storage_loc, { recursive: true, force: true });
    }
}

export default globalTeardown;