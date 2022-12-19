import { MenuModal } from './menuModel';
import { ResourceModal } from './resourceModel';

/**
 * UmsRole对象，后台用户角色表
 * @export
 * @interface RoleModal
 */
export interface RoleModal {
  /**
   * 后台用户数量
   * @type {number}
   * @memberof RoleModal
   */
  adminCount?: number;
  /**
   * 创建时间
   * @type {string}
   * @memberof RoleModal
   */
  createTime?: string;
  /**
   * 描述
   * @type {string}
   * @memberof RoleModal
   */
  description?: string;
  /**
   *
   * @type {number}
   * @memberof RoleModal
   */
  id?: number;
  /**
   * 名称
   * @type {string}
   * @memberof RoleModal
   */
  name?: string;
  /**
   *
   * @type {number}
   * @memberof RoleModal
   */
  sort?: number;
  /**
   * 启用状态：0->禁用；1->启用
   * @type {number}
   * @memberof RoleModal
   */
  status?: number;

  menus?: MenuModal[];
  resources?: ResourceModal[];
}
