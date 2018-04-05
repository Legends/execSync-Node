const cp = require("child_process");
const path = require("path");

const folder = path.resolve("./example-dir");

try { 
    cp.execSync("node build.js", {
        cwd: folder,
        encoding: "utf-8"
    });
} catch (e) {
    failed++;
    console.log(e);
}