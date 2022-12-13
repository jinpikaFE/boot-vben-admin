import { defHttp } from '/@/utils/http/axios';
import { MenuModal } from './model/menuModel';

enum Api {
  GetMenuList = '/v1/menu/treeList',
  DelMenu = '/v1/menu/delete',
  CreateMenu = '/v1/menu/create',
  UpdateMenu = '/v1/menu/update',
}

/**
 * @description: Get user menu based on id
 */

export const getMenuList = () => {
  return defHttp.get<MenuModal[]>({ url: Api.GetMenuList });
};

/**
 * @description: Post 删除菜单
 * @returns
 */
export const delMenu = (data: { id: string }) => {
  return defHttp.post({ url: `${Api.DelMenu}/${data?.id}` });
};

/**
 * @description: Post 添加菜单
 * @returns
 */
export const createMenu = (data: MenuModal) => {
  return defHttp.post<MenuModal>({ url: `${Api.CreateMenu}`, data });
};

/**
 * @description: Post 修改菜单
 * @returns
 */
export const updateMenu = (data: MenuModal) => {
  const { id, ...extraData } = data;
  return defHttp.post({ url: `${Api.UpdateMenu}/${id}`, data: extraData });
};
