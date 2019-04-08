export interface IRequestHeadersControl {
    handleOnHeaderDelete: Function;
    handleOnHeaderNameChange: Function;
    handleOnHeaderValueChange: Function;
    handleOnHeaderValueBlur: Function;
    headers: Array<{ name: string; value: string; }>;
}

export type RequestType = 'GET' | 'PUT' | 'POST' | 'GET_BINARY' | 'POST' | 'PATCH' | 'DELETE';

export interface IGraphRequestHeader {
  name: string;
  value: string;
  enabled?: boolean;
  readonly?: boolean;
}
