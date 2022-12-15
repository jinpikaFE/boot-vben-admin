import { defHttp } from '/@/utils/http/axios';
import { GetResourceParmas, ResourceModal } from './model/resourceModel';

enum Api {
  GetResourceList = '/v1/resource/list',
  DelResource = '/v1/resource/delete',
  CreateResource = '/v1/resource/create',
  UpdateResource = '/v1/resource/update',
}

/**
 * @description: Get 资源列表
 */

export const getResourceList = (params: Global.BasicPageParams & GetResourceParmas) => {
  return defHttp.get<Global.ListResult<ResourceModal>>({ url: Api.GetResourceList, params });
};

/**
 * @description: Post 删除资源
 * @returns
 */
export const delResource = (data: { id: string }) => {
  return defHttp.post({
    url: `${Api.DelResource}/${data?.id}`,
  });
};

/**
 * @description: Post 添加资源
 * @returns
 */
export const createResource = (data: ResourceModal) => {
  return defHttp.post<ResourceModal>({ url: `${Api.CreateResource}`, data });
};

/**
 * @description: Post 修改资源
 * @returns
 */
export const updateResource = (data: ResourceModal) => {
  const { id, ...extraData } = data;
  return defHttp.post({ url: `${Api.UpdateResource}/${id}`, data: extraData });
};
