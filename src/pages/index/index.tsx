import React from 'react';
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss';

export default class Index extends React.Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text
          onClick={() => {
            Taro.navigateTo({ url: '/pages/account/index' });
          }}
        >
          Hello world!
        </Text>
      </View>
    );
  }
}
