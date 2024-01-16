"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
// Create an object that satisfies the "DataReader" interface
const csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
// Create an instance of MatchReader and pass in something
// satissfying the "DataReader" interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
console.log(`Man United won ${manUnitedWins} games`);
