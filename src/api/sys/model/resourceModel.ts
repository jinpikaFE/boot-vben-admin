/**
 * UmsResource对象，后台资源表
 * @export
 * @interface ResourceModal
 */
export interface ResourceModal {
  /**
   * 资源分类ID
   * @type {number}
   * @memberof ResourceModal
   */
  categoryId?: number;
  /**
   * 创建时间
   * @type {string}
   * @memberof ResourceModal
   */
  createTime?: string;
  /**
   * 描述
   * @type {string}
   * @memberof ResourceModal
   */
  description?: string;
  /**
   *
   * @type {number}
   * @memberof ResourceModal
   */
  id?: number;
  /**
   * 资源名称
   * @type {string}
   * @memberof ResourceModal
   */
  name?: string;
  /**
   * 资源URL
   * @type {string}
   * @memberof ResourceModal
   */
  url?: string;
}

/**
 * 支援列表请求 params
 */
export interface GetResourceParmas {
  categoryId?: number;
  nameKeyword?: string;
  urlKeyword?: string;
}

/**
 * UmsResourceCategory对象，资源分类表
 * @export
 * @interface ResourceCategoryModal
 */
export interface ResourceCategoryModal {
  /**
   * 创建时间
   * @type {string}
   * @memberof ResourceCategoryModal
   */
  createTime?: string;
  /**
   *
   * @type {number}
   * @memberof ResourceCategoryModal
   */
  id?: number;
  /**
   * 分类名称
   * @type {string}
   * @memberof ResourceCategoryModal
   */
  name?: string;
  /**
   * 排序
   * @type {number}
   * @memberof ResourceCategoryModal
   */
  sort?: number;
}
