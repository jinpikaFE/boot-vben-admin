import { defHttp } from '/@/utils/http/axios';
import { RoleModal } from './model/roleModel';

enum Api {
  GetRoleList = '/v1/role/list',
  GetRoleListAll = '/v1/role/listAll',
  DelRole = '/v1/role/delete',
  CreateRole = '/v1/role/create',
  UpdateRole = '/v1/role/update',
}

/**
 * @description: Get 角色列表
 */

export const getRoleList = (params: Global.BasicPageParams & { keyword?: string }) => {
  return defHttp.get<Global.ListResult<RoleModal>>({ url: Api.GetRoleList, params });
};

/**
 * @description: Get 获取全部角色
 */

export const getRoleListAll = () => {
  return defHttp.get<RoleModal[]>({ url: Api.GetRoleListAll });
};

/**
 * @description: Post 删除角色
 * @returns
 */
export const delRole = (params: { id: string }) => {
  return defHttp.post({ url: `${Api.DelRole}`, params: { ids: params?.id } });
};

/**
 * @description: Post 添加角色
 * @returns
 */
export const createRole = (data: RoleModal) => {
  return defHttp.post<RoleModal>({ url: `${Api.CreateRole}`, data });
};

/**
 * @description: Post 修改角色
 * @returns
 */
export const updateRole = (data: RoleModal) => {
  const { id, ...extraData } = data;
  return defHttp.post({ url: `${Api.UpdateRole}/${id}`, data: extraData });
};
