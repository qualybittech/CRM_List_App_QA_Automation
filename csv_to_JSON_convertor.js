import { readFileSync, writeFileSync } from "fs";
import { parse } from "papaparse";

//require('papaparse');

try {
  const csvFile = readFileSync("./xpath_collection.csv", "utf8");
  const csvResults = parse(csvFile, {
    header: true,
    complete: csvData => csvData.data
  }).data;
  writeFileSync(
    "./cypress/fixtures/testDataFromCSV.json",
    JSON.stringify(csvResults, null, 4),
    "utf-8"
  );
} catch (e) {
  throw Error(e);
}
