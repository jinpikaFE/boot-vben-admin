import type { RouteMeta } from 'vue-router';
export interface RouteItem {
  path: string;
  component: any;
  meta: RouteMeta;
  name?: string;
  alias?: string | string[];
  redirect?: string;
  caseSensitive?: boolean;
  children?: RouteItem[];
}

/**
 * @description: Get menu return value
 */
export type getMenuListResultModel = RouteItem[];

enum MenuTyoeEnum {
  MENU,
  BTN,
}

/**
 * UmsMenu对象0，后台菜单表
 * @export
 * @interface MenuModal
 */
export interface MenuModal {
  /**
   * 子级菜单
   * @type {Array<MenuModal>}
   * @memberof MenuModal
   */
  children?: Array<MenuModal>;
  /**
   * 创建时间
   * @type {string}
   * @memberof MenuModal
   */
  createTime?: string;
  /**
   * 是否显示
   * @type {number}
   * @memberof MenuModal
   */
  isShow?: number;
  /**
   * 前端图标
   * @type {string}
   * @memberof MenuModal
   */
  icon?: string;
  /**
   *
   * @type {number}
   * @memberof MenuModal
   */
  id?: number;
  /**
   * 菜单级数
   * @type {number}
   * @memberof MenuModal
   */
  level?: number;
  /**
   * 前端名称
   * @type {string}
   * @memberof MenuModal
   */
  name?: string;
  /**
   * 父级ID
   * @type {number}
   * @memberof MenuModal
   */
  parentId?: number;
  /**
   * 菜单排序
   * @type {number}
   * @memberof MenuModal
   */
  sort?: number;
  /**
   * 菜单名称
   * @type {string}
   * @memberof MenuModal
   */
  title?: string;
  /**
   * 菜单类型
   * @type {number}
   * @memberof MenuModal
   */
  type?: MenuTyoeEnum;
}
