export interface BasicPageParams {
  pageNo: number;
  pageSize: number;
}

export interface BasicFetchResult<T> {
  pageNo: number;
  pageSize: number;
  data: T[];
  total: number;
}
