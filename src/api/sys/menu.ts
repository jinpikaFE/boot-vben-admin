import { defHttp } from '/@/utils/http/axios';
import { getMenuListResultModel } from './model/menuModel';

enum Api {
  GetMenuList = '/v1/menu/treeList',
}

/**
 * @description: Get user menu based on id
 */

export const getMenuList = () => {
  return defHttp.get<Global.ListResult<getMenuListResultModel>>({ url: Api.GetMenuList });
};
