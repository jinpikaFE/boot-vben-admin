import { defHttp } from '/@/utils/http/axios';
import { LoginParams, LoginResultModel, GetUserInfoModel } from './model/userModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  Login = '/v1/admin/login',
  Logout = '/v1/admin/logout',
  GetUserInfo = '/v1/admin/info',
  GetPermCode = '/getPermCode',

  GetUserList = '/v1/admin/list',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
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
  return defHttp.get({ url: Api.Logout });
}

/**
 * @description: 获取用户列表
 * @returns
 */
export function getUserList(params: Global.BasicPageParams) {
  return defHttp.get<Global.ListResult<GetUserInfoModel>>({ url: Api.GetUserList, params });
}
