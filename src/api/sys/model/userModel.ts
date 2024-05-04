import { BasicPageParams, BasicFetchResult } from '@/api/model/baseModel';
/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  loginAccount: string;
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
  roles: RoleInfo[];
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  roles: RoleInfo[];
  // 用户id
  userId: string | number;
  // 用户名
  userName: string;
  // 真实名字
  realName: string;
  // 头像
  avatar: string;
  // 介绍
  desc?: string;
}

/**
 * @description: Get user information return value
 */
export interface UserInfoModel {
  userId: string | number;
  userName: string;
  realName: string;
  userPhone: string;
  remark?: string;
  createTime?: string;
  createUser?: string;
  createUserName?: string;
  updateTime?: string;
  updateUser?: string;
  updateUserName?: string;
}

/**
 * @description: Request list return value
 */
export type UserPageResultModel = BasicFetchResult<UserInfoModel>;

/**
 * @description: User page parameter
 */
export type UserPageParams = Partial<BasicPageParams>;
