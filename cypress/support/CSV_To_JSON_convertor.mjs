import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import Papa from 'papaparse';


//var pathname="./cypress/fixtures/CSV_Files/"+filename+".csv";

var filename="Contacts_Testdata";
csv_to_JSON_Convertor (filename);

filename="Templates_Testdata";
csv_to_JSON_Convertor (filename);

filename="Accounts_Testdata";
csv_to_JSON_Convertor (filename);

filename="Tasks_Testdata";
csv_to_JSON_Convertor (filename);

filename="Snippets_Testdata";
csv_to_JSON_Convertor (filename);

filename="Sequences_Testdata";
csv_to_JSON_Convertor (filename);

filename="Register_Testdata";
csv_to_JSON_Convertor (filename);

function csv_to_JSON_Convertor (filename) {
try {
  //const csvFile = readFileSync(filename, "utf8");
  const csvFile = readFileSync("./cypress/fixtures/CSV_TestData/"+filename+".csv", "utf8");
  const csvResults = Papa.parse(csvFile, {
    header: true,
	skipEmptyLines: true,
    complete: csvData => csvData.data
  }).data;
  
  console.log(csvResults);
  
  if (!existsSync("./cypress/fixtures/JSON_TestData")){
    mkdirSync("./cypress/fixtures/JSON_TestData", { recursive: true });
  }

  writeFileSync(
    "./cypress/fixtures/JSON_TestData/"+filename+".json",
    //"./cypress/fixtures/Contacts_Testdata.json",
	JSON.stringify(csvResults, null, 4),
    "utf-8"
  );

} catch (e) {
  throw Error(e);
}
}