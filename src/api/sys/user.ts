import { defHttp } from '@/utils/http/axios';
import {
  LoginParams,
  LoginResultModel,
  GetUserInfoModel,
  UserPageResultModel,
} from './model/userModel';
import { ErrorMessageMode } from '#/axios';

enum Api {
  Login = '/uac/user/login/getAccessTokenByPassword',
  Logout = '/logout',
  GetUserInfo = '/uac/user/getUserById',
  GetPermCode = '/uac/user/getPermCode',
  TestRetry = '/testRetry',
  UserPageQuery = '/uac/user/pageQuery',
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
export function getUserInfo(userId: string | number) {
  const params = {
    userId,
  };
  return defHttp.get<GetUserInfoModel>(
    { url: Api.GetUserInfo, params },
    { errorMessageMode: 'none' },
  );
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  return defHttp.get({ url: Api.Logout });
}

export function userPageQuery(params: any, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<UserPageResultModel>(
    {
      url: Api.UserPageQuery,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
export function testRetry() {
  return defHttp.get(
    { url: Api.TestRetry },
    {
      retryRequest: {
        isOpenRetry: true,
        count: 5,
        waitTime: 1000,
      },
    },
  );
}
