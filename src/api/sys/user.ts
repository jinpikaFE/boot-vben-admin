import { defHttp } from '/@/utils/http/axios';
import { LoginParams, LoginResultModel, GetUserInfoModel } from './model/userModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  Login = '/v1/admin/login',
  Logout = '/v1/admin/logout',
  GetUserInfo = '/v1/admin/info',
  GetPermCode = '/getPermCode',

  GetUserList = '/v1/admin/list',
  CreateUser = '/v1/admin/register',
  DelUser = '/v1/admin/delete',
  UpdateUser = '/v1/admin/update',
}

/**
 * @description: user login api
 */
export function loginApi(data: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      data,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  return defHttp.post({ url: Api.Logout });
}

/**
 * @description: 获取用户列表
 * @returns
 */
export function getUserList(params: Global.BasicPageParams) {
  return defHttp.get<Global.ListResult<GetUserInfoModel>>({ url: Api.GetUserList, params });
}

/**
 * @description: 添加用户
 * @returns
 */
export function createUser(data: GetUserInfoModel) {
  return defHttp.post<GetUserInfoModel>({ url: Api.CreateUser, data });
}

/**
 * @description: 删除用户
 * @returns
 */
export function delUser(data: { id: string | number }) {
  return defHttp.post({
    url: `${Api.DelUser}/${data?.id}`,
  });
}

/**
 * @description: 更新用户
 * @returns
 */
export function updateUser(data: { id: string | number } & GetUserInfoModel) {
  return defHttp.post<GetUserInfoModel>({ url: `${Api.UpdateUser}/${data?.id}`, data });
}
