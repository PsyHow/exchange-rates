import { ExchangeResponseData } from 'api/getExchangeRates/types';

export interface ValuteListProps {
  onClick: () => void;
  valuteList: ExchangeResponseData;
}
