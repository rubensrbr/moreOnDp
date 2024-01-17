import { MatchReader } from "./MatchReader";
import { Summary } from "./summary";

// Create an object that satisfies the "DataReader" interface

// Create an instance of MatchReader and pass in something
// satissfying the "DataReader" interface
const matchReader = MatchReader.fromCsv("football.csv");
const summary = Summary.winsAnalysisWithHtmlReport("Man United");
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
