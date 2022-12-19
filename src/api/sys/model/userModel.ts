import { RoleModal } from './roleModel';

/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string;
  password: string;
}

export interface RoleInfo {
  roleName: string;
  value: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  userId: string | number;
  token: string;
  role: RoleInfo;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  // roles: RoleInfo[];
  // 用户id
  id: string | number;
  // 用户名
  username: string;
  // 头像
  icon: string;
  /** 创建时间 */
  createTime: string;
  /** 昵称 */
  nickName: string;
  /** 登录时间 */
  loginTime?: string;
  /** 是否启用 */
  status: 0 | 1;
  /** 备注 */
  note?: string;
  roles?: RoleModal[];
}
