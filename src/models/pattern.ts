interface IQueryParameter {
  key: string;
  value: string;
}

class Pattern {
  public name: string;
  public regex: RegExp;
  public queryParameters: IQueryParameter[];

  constructor(name: string, regex: string, queryParameters = []) {
    this.name = name;
    this.regex = new RegExp(regex);
    this.queryParameters = queryParameters;
  }
}

export { Pattern, IQueryParameter };
