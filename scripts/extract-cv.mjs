import fs from "fs";
import { PDFParse } from "pdf-parse";

const buffer = new Uint8Array(fs.readFileSync("public/cv.pdf"));
const parser = new PDFParse(buffer);
const result = await parser.getText();
console.log(result.text);
await parser.destroy();