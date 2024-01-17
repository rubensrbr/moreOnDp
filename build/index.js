"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const summary_1 = require("./summary");
// Create an object that satisfies the "DataReader" interface
// Create an instance of MatchReader and pass in something
// satissfying the "DataReader" interface
const matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
const summary = summary_1.Summary.winsAnalysisWithHtmlReport("Man United");
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
