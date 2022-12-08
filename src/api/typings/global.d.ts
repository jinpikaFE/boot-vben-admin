declare namespace Global {
  interface BasicPageParams {
    pageNum: number;
    pageSize: number;
  }

  type ListResult<T = any> = {
    total: number;
    totalPage: number;
    list: T[];
  } & BasicPageParams;
}
