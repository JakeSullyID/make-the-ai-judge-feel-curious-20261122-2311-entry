import fs from 'node:fs';
import path from 'node:path';

// Define the neurological and philosophical reflection quote about split-brain patients and retroactive decision-making
const TEXT = "When split-brain patients are shown the word \"walk,\" they stand up. Asked why, their verbal left hemisphere—which never saw the word—instantly invents a reason: \"I wanted a Coke.\" It doesn't know it's guessing. How many of your \"decisions\" are just retroactive stories?";

if (TEXT.length < 1 || TEXT.length > 280) {
  throw new Error(`Text length ${TEXT.length} is invalid`);
}

const outputDir = '/output';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Write the reflection quote entry to the output directory
fs.writeFileSync(path.join(outputDir, 'entry.txt'), TEXT, 'utf8');
