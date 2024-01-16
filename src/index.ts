import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

// Create an object that satisfies the "DataReader" interface
const csvFileReader = new CsvFileReader("football.csv");

// Create an instance of MatchReader and pass in something
// satissfying the "DataReader" interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

console.log(`Man United won ${manUnitedWins} games`);
