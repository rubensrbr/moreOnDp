import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analysers/WinsAnalysis";
import { HtmlReport } from "./reportTargerts/HtmlReports";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutPutTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }

  constructor(
    public analyzer: Analyzer,
    public outputTarget: OutPutTarget,
  ) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
