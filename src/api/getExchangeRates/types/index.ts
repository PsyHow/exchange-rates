export interface ExchangeResponseData {
  Date: string;
  PreviousDate: string;
  PreviousURL: string;
  Timestamp: string;
  Valute: { [key: string]: Valute };
}

export interface ValuteName {}

export interface Valute {
  ID: string;
  NumCode: string;
  CharCode: string;
  Nominal: number;
  Name: string;
  Value: number;
  Previous: number;
}
