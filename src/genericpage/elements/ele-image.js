import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import ServerImage from '@/components/image/server-image'
import classNames from 'classnames'

import './ele.scss'

export default class EleImage extends Taro.PureComponent {
  static options = {
    addGlobalClass: true,
  }

  static defaultProps = {
    imageUrl: null,
    src: null,
    customStyle: {},
    className: null,
  }

  render() {
    const { imageUrl, src, className, customStyle, mode } = this.props
    const rootClass = classNames('ele-image', className)
    const path = imageUrl || src
    return (
      <View className={rootClass} style={customStyle}>
        {path ? (
          <ServerImage src={path} customStyle={customStyle} mode={mode} />
        ) : (
          <View className='image-placeholder' style={customStyle}>
            <AtIcon value='image' />
          </View>
        )}
      </View>
    )
  }
}
