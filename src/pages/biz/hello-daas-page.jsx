import Listof from '@/listof/listof'
import SectionBar from '@/components/common/section-bar'
import { View } from '@tarojs/components'
import './styles.scss'

const newsList = [
  {
    id: '11',
    title: '美国众议长称第四轮经济救助计划至少1万亿美元',
    imageUrl: 'https://doublechain.oss-cn-hangzhou.aliyuncs.com/nice-router/news-7.jpeg',
  },
  {
    id: '22',
    title: '华为 P40 Pro+ 的十倍光变是怎样实现的？',
    brief: '从过去的数字变焦、混合变焦，再到今天的光学变焦，手机的远摄能力正如它们的性能一样在不停变化',
    imageList: [
      {
        id: '1',
        imageUrl: 'https://doublechain.oss-cn-hangzhou.aliyuncs.com/nice-router/news-1.jpeg',
      },
      {
        id: '2',
        imageUrl: 'https://doublechain.oss-cn-hangzhou.aliyuncs.com/nice-router/news-2.jpeg',
      },
    ],
  },
  {
    id: '22',
    title: '我退役了，要专注练习龙吸水',
    brief: '退役专注龙吸水！“田径泥石流”张国伟的沙雕日常',
    imageList: [
      {
        id: '1',
        imageUrl: 'https://doublechain.oss-cn-hangzhou.aliyuncs.com/nice-router/news-3.jpeg',
      },
      {
        id: '2',
        imageUrl: 'https://doublechain.oss-cn-hangzhou.aliyuncs.com/nice-router/news-4.jpeg',
      },
      {
        id: '3',
        imageUrl: 'https://doublechain.oss-cn-hangzhou.aliyuncs.com/nice-router/news-5.jpeg',
      },
    ],
  },
  {
    id: '333',
    title: '中国发布新冠肺炎疫情信息、推进疫情防控国际合作纪事',
  },
]
const imageOnBottomList = [
  {
    id: '11',
    title: '震撼！武汉230组高铁动车整装待发',
    displayMode: 'image-on-bottom',
    imageUrl: 'https://doublechain.oss-cn-hangzhou.aliyuncs.com/nice-router/news-6.jpeg',
  },
]

const productList = [
  {
    id: 1,
    preTag: '促',
    tags: ['专业', '防水'],
    brand: '3M',
    name: '成人雨衣半透明',
    price: 13.8,
    imageUrl: 'https://doublechain.oss-cn-hangzhou.aliyuncs.com/nice-router/product-1.jpg',
  },
  {
    id: 2,
    preTag: '柴',
    tags: ['香', '五常'],
    brand: '柴火大院',
    name: '五常稻花香米',
    price: 72.99,
    imageUrl: 'https://doublechain.oss-cn-hangzhou.aliyuncs.com/nice-router/product-2.jpg',
  },
  {
    id: 3,
    preTag: '买',
    tags: ['iPhone', 'HDR'],
    brand: '苹果',
    name: '乔布斯的新作iPhone11 Pro',
    price: 9088.0,
    imageUrl: 'https://doublechain.oss-cn-hangzhou.aliyuncs.com/nice-router/product-3.png',
  },
  {
    id: 4,
    preTag: '坑',
    tags: ['半成品'],
    brand: '必胜客',
    name: '想吃披萨又觉得外面的披萨不卫生又贵',
    price: 39.2,
    imageUrl: 'https://doublechain.oss-cn-hangzhou.aliyuncs.com/nice-router/product-4.jpg',
  },
]

const defaultDocument = 'https://doublechain.oss-cn-hangzhou.aliyuncs.com/nice-router/README.docx'
const movieList = [
  {
    id: 1,
    title: '始动/启动/青春催落去(台)',
    brief:
      '离家出走的叛逆儿泽日（朴正民饰）与盲目踏入社会并满腔热血的尚弼（丁海寅饰），在遇见长风饭馆的厨师长猛男哥（马东锡饰）后，让自己明白了什么是世间愉快与开心的故事。',
    createTime: new Date('2019-10-11'),
    status: '韩剧',
    documentUrl: defaultDocument,
    imageUrl: 'https://doublechain.oss-cn-hangzhou.aliyuncs.com/nice-router/movie-1.jpg',
  },
  {
    id: 2,
    title: '《多力特的奇幻冒险》BD中英双字幕',
    brief:
      '失去妻子后的7年中，约翰·杜立德医生把自己关在庄园里与动物相伴。当时年轻的女王身患重病，杜立德医生不情愿出门冒险，前往神秘的岛屿寻找治疗方法，这让他重获勇气和智慧，因为他击败了老对手，还发现了奇妙的新生物。',
    createTime: new Date('2020-02-05'),
    status: '喜剧',
    documentUrl: defaultDocument,
    imageUrl: 'https://doublechain.oss-cn-hangzhou.aliyuncs.com/nice-router/movie-2.jpg',
  },
]
const businessCardList = [
  {
    id: 1,
    title: '和珅',
    brief: '职位：总经理\n电话:13888888888\n 成都双链科技有限责任公司',
    status: 'VIP',
    imageUrl: 'https://doublechain.oss-cn-hangzhou.aliyuncs.com/nice-router/avatar-1.png',
  },
  {
    id: 2,
    title: '张无忌',
    brief: '职位：CEO\n电话:13900000001\n 中国三条腿（集团）公司',
    status: 'VP',
    imageUrl: 'https://doublechain.oss-cn-hangzhou.aliyuncs.com/nice-router/avatar-2.jpg',
  },
]

const userList = [
  {
    id: 1,
    title: '小陈不哭',
    brief: '欢迎打赏人气主播',
    imageUrl: 'https://doublechain.oss-cn-hangzhou.aliyuncs.com/nice-router/avatar-3.jpg',
  },
  {
    id: 2,
    title: '柠檬',
    brief: '少女风，直播中。。。。',
    imageUrl: 'https://doublechain.oss-cn-hangzhou.aliyuncs.com/nice-router/avatar-4.jpg',
  },
  {
    id: 3,
    title: '嗯嗯嗯',
    brief: '关注我，嗯嗯嗯',
    imageUrl: 'https://doublechain.oss-cn-hangzhou.aliyuncs.com/nice-router/avatar-5.jpg',
  },
]

function HelloDaaSPage() {
  return (
    <View className='hello-daas'>

      <SectionBar title='用户卡片' brief='displayMode：user' />
      <Listof list={userList} displayMode='user' />

      <SectionBar title='卡片' brief='displayMode：card' />
      <Listof list={businessCardList} displayMode='card' />

      <SectionBar title='文件卡片' brief='displayMode：card，documentUrl不为空' />
      <Listof list={movieList} displayMode='card' />

      <SectionBar title='上图+下文字，水平滑动' brief='displayMode：image-on-top-horizontal' />
      <Listof list={newsList.slice(0, 3)} horizontal displayMode='image-on-top-horizontal' />

      <SectionBar title='上图+下文字 两排' brief='displayMode：image-on-top-waterfall' />
      <Listof list={newsList.slice(0, 3)} displayMode='image-on-top-waterfall' />

      <SectionBar title='上图+下文字' brief='displayMode：image-on-top' />
      <Listof list={newsList.slice(0, 2)} displayMode='image-on-top' />

      <SectionBar title='上文字+下图' brief='displayMode：image-on-bottom' />
      <Listof list={imageOnBottomList} displayMode='image-on-bottom' />

      <SectionBar title='商品' brief='displayMode：product' />
      <Listof list={productList} displayMode='product' />

      <SectionBar title='Auto系列' brief='displayMode：auto|single-image|double-image|three-image' />
      <Listof list={newsList} displayMode='auto' />
    </View>
  )
}

HelloDaaSPage.options = {
  addGlobalClass: true,
}
export default HelloDaaSPage
