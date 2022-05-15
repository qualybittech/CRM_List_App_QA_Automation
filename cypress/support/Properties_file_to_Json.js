const fs = require("fs");
const path = require("path");
//const filePath = path.join(__dirname, "./cypress/fixtures/Xpath_Properties_File/xpath_Collection.properties");
const filePath = "./cypress/fixtures/Xpath_Locators_Properties_File/xpath_Locators.properties"
const propertiesToJSON = require("properties-to-json");

fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
    if (!err) {
        console.log(propertiesToJSON(data));
		 fs.writeFileSync(
		"./cypress/fixtures/xpath_Locators.json",
		JSON.stringify(propertiesToJSON(data), null, 4),
		"utf-8"
  );
    }
	
	console.log(err);
	
});