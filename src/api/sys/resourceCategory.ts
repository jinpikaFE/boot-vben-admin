import { defHttp } from '/@/utils/http/axios';
import { ResourceCategoryModal } from './model/resourceModel';

enum Api {
  GetResourceCategoryList = '/v1/resourceCategory/listAll',
  DelResourceCategory = '/v1/resourceCategory/delete',
  CreateResourceCategory = '/v1/resourceCategory/create',
  UpdateResourceCategory = '/v1/resourceCategory/update',
}

/**
 * @description: Get 资源分类列表
 */

export const getResourceCategoryList = () => {
  return defHttp.get<ResourceCategoryModal[]>({
    url: Api.GetResourceCategoryList,
  });
};

/**
 * @description: Post 删除资源分类
 * @returns
 */
export const delResourceCategory = (data: { id: string }) => {
  return defHttp.post({
    url: `${Api.DelResourceCategory}/${data?.id}`,
  });
};

/**
 * @description: Post 添加资源分类
 * @returns
 */
export const createResourceCategory = (data: ResourceCategoryModal) => {
  return defHttp.post<ResourceCategoryModal>({ url: `${Api.CreateResourceCategory}`, data });
};

/**
 * @description: Post 修改资源分类
 * @returns
 */
export const updateResourceCategory = (data: ResourceCategoryModal) => {
  const { id, ...extraData } = data;
  return defHttp.post({ url: `${Api.UpdateResourceCategory}/${id}`, data: extraData });
};
