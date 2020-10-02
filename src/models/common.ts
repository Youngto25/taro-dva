/*
 * @Author: YangTao
 * @Date: 2020-10-02 11:02:19
 * @LastEditTime: 2020-10-02 12:03:51
 * @LastEditors: YangTao
 * @Description:
 * @FilePath: \taro-dva-ts\src\models\common.ts
 * @可以输入预定的版权声明、个性签名、空行等
 */
import Taro from '@tarojs/taro';

export default {
  namespace: 'common',
  state: {
    // accessToken: Taro.getStorageSync('accessToken'),
    accessToken: 'joajfoiajfsajf',
    userInfo: Taro.getStorageSync('userInfo')
  },

  effects: {},

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    }
  }
};
