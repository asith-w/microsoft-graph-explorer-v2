import { IGraphRequestHeader, RequestType } from './request';

export interface IGraphApiCall {
  statusCode?: number;
  duration?: number;
  method?: RequestType;
  humanName?: string;
  requestUrl?: string;
  postBody?: string;
  headers?: IGraphRequestHeader[];

  requestSentAt?: Date;
  relativeDate?: string;
  har?: string;
}

export interface ISampleQuery extends IGraphApiCall {
  docLink?: string;
  AAD?: boolean;
  skipTest?: boolean;
  MSA?: boolean;
  category: string;
  tip?: string;
}
