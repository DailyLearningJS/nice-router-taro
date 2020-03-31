import Taro from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View } from '@tarojs/components'
import NavigationService from '@/nice-router/navigation.service'
import { AtButton } from 'taro-ui'
import { ajaxPullDownRefresh } from '@/utils/index'
import { isNotEmpty } from '@/nice-router/nice-router-util'
import CustomerTabs from '../components/common/customer-tabs'
import Listof from './listof'
import './listof.scss'

@connect(({ listofpage3 }) => ({ ...listofpage3 }))
class ListofPage3 extends Taro.PureComponent {
  componentDidMount() {
    const { pageTitle } = this.props
    if (isNotEmpty(pageTitle)) {
      Taro.setNavigationBarTitle({ title: pageTitle })
    }
  }

  componentWillReceiveProps(nextProps) {
    const { pageTitle: currentTitle = '' } = this.props
    const { pageTitle: nextPageTitle = '' } = nextProps
    if (currentTitle !== nextPageTitle) {
      Taro.setNavigationBarTitle({ title: nextPageTitle })
    }
  }

  onPullDownRefresh = () => {
    ajaxPullDownRefresh(this.props)
  }

  handleFooterButtonClick = (action) => {
    NavigationService.view(action)
  }

  render() {
    const {
      tabs,
      list,
      listMeta,
      displayMode,
      emptyMessage,
      style,
      dataContainer,
      articleList,
      articleListMeta,
      actionList,
    } = this.props

    return (
      <View className='listof-page'>
        <View>
          <CustomerTabs tabs={tabs} />
        </View>
        <Listof
          dataContainer={dataContainer}
          list={list || articleList}
          listMeta={listMeta || articleListMeta}
          displayMode={displayMode}
          emptyMessage={emptyMessage}
          isBigList
          height='100vh'
          style={style}
        />

        {actionList && (
          <View className='footer-button'>
            {actionList.map((it) => {
              const { id, code, title } = it
              return (
                <View key={id + code} className='footer-button-btn'>
                  <AtButton type='primary' onClick={this.handleFooterButtonClick.bind(this, it)}>
                    {title}
                  </AtButton>
                </View>
              )
            })}
          </View>
        )}
      </View>
    )
  }
}

export default ListofPage3
