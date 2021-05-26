import $config from '@client/config'

export default [{
    title: '常用组件',
    components: [{
        elName: 'Ds-text',
        title: '文字',
        img: require('@/common/images/elementIcon/text.png'),
        // 每个组件设置props来展示哪些显示哪些编辑项
        valueType: '', // 标识数据类型，用于表单组件
        defaultStyle: {
          height: 40
        }
      },
      {
        elName: 'Ds-image',
        title: '图片',
        img: require('@/common/images/elementIcon/image.png'),
        valueType: '',
        defaultStyle: {
          width: 200,
          height: 200
        }
      },
      {
        elName: 'Ds-banner',
        title: 'Banner',
        img: require('@/common/images/elementIcon/banner.png'),
        valueType: '',
        defaultStyle: {
          height: 160
        }
      },
      {
        elName: 'Ds-avatar',
        title: '随机头像',
        img: require('@/common/images/elementIcon/avatar.png'),
        valueType: '',
        defaultStyle: {
          width: 150,
          height: 50
        }
      },
      {
        elName: 'Ds-button',
        title: '按钮',
        img: require('@/common/images/elementIcon/button.png'),
        // 每个组件设置props来展示哪些显示哪些编辑项
        valueType: '', // 标识数据类型，用于表单组件
        defaultStyle: {
          width: 150,
          height: 50,

        }
      },
      {
        elName: 'Ds-image-carousel',
        title: '图片轮播',
        img: require('@/common/images/elementIcon/carousel.png'),
        valueType: '', // 标识数据类型，用于表单组件,
        defaultStyle: {
          height: 140
        }
      },
      {
        elName: 'Ds-notice',
        title: '通知栏',
        img: require('@/common/images/elementIcon/notice.png'),
        valueType: '',
        defaultStyle: {
          height: 40,
          width: $config.canvasH5Width,
        }
      },
      {
        elName: 'Ds-tabars',
        title: '页面导航',
        img: require('@/common/images/elementIcon/tabars.png'),
        valueType: '',
        defaultStyle: {
          height: 50,
          width: $config.canvasH5Width,
        }
      },
    ]
  },
  {
    title: '基础组件',
    components: [{
        elName: 'Ds-rectangle-border',
        title: '矩形边框',
        img: require('@/common/images/elementIcon/border.png'),
        valueType: '',
        defaultStyle: {
          width: 120,
          height: 100,
          borderColor: "#999999",
          borderStyle: 'solid',
          borderWidth: 2
        }
      }, {
        elName: 'Ds-circle-border',
        title: '圆形边框',
        img: require('@/common/images/elementIcon/circle-border.png'),
        valueType: '',
        defaultStyle: {
          width: 100,
          height: 100,
          borderColor: "#999999",
          borderStyle: 'solid',
          borderWidth: 2,
          borderRadius: $config.canvasH5Width
        }
      },
      {
        elName: 'Ds-rectangle-border',
        title: '分割线',
        img: require('@/common/images/elementIcon/splitLine.png'),
        valueType: '',
        defaultStyle: {
          height: 1,
          width: 300,
          backgroundColor: '#999999'
        }
      },
      {
        elName: 'Ds-iframe',
        title: '内嵌iframe',
        img: require('@/common/images/elementIcon/iframe.png'),
        valueType: '',
        defaultStyle: {
          width: $config.canvasH5Width,
          height: 300,
          paddingTop: 10,
          paddingBottom: 10,
          scrolling: 'no'
        }
      }
    ]
  },
  {
    title: '表单组件',
    components: [{
        elName: 'Ds-input',
        title: '文本框',
        img: require('@/common/images/elementIcon/form.png'),
        valueType: 'input',
        defaultStyle: {
          height: 52,
          width: $config.canvasH5Width,
        }
      },
      {
        elName: 'Ds-radio',
        title: '单选框',
        img: require('@/common/images/elementIcon/radio.jpg'),
        valueType: 'radio',

        defaultStyle: {
          height: 52,
          width: $config.canvasH5Width,
        }
      },
      {
        elName: 'Ds-checkbox',
        title: '复选框',
        img: require('@/common/images/elementIcon/checkbox.jpg'),
        valueType: 'checkbox',
        defaultStyle: {
          height: 30,
          width: $config.canvasH5Width,
        }
      },
      {
        elName: 'Ds-rate',
        title: '评分',
        img: require('@/common/images/elementIcon/rate.jpg'),
        defaultStyle: {
          height: 30,
          width: $config.canvasH5Width / 2,
        }
      },
      {
        elName: 'Ds-stepper',
        title: '步进器',
        img: require('@/common/images/elementIcon/stepper.jpg'),
        defaultStyle: {
          height: 30,
          width: $config.canvasH5Width / 2,
        }
      },
      {
        elName: 'Ds-switch',
        title: '开关',
        img: require('@/common/images/elementIcon/Switch.jpg'),
        defaultStyle: {
          height: 52,
          width: $config.canvasH5Width,
        }
      }
    ]
  },
  {
    title: '功能组件',
    components: [{
        elName: 'Ds-qrcode',
        title: '二维码',
        img: require('@/common/images/elementIcon/qcode.png'),
        valueType: '',
        defaultStyle: {
          width: 120,
          height: 120,
        }
      }, {
        elName: 'Ds-bg-music',
        title: '音乐',
        img: require('@/common/images/elementIcon/music.png'),
        valueType: '',
        defaultStyle: {
          height: 52,
          width: 52,
        }
      },
      {
        elName: 'Ds-video',
        title: '视频',
        img: require('@/common/images/elementIcon/video.png'),
        valueType: '',
        defaultStyle: {
          width: $config.canvasH5Width,
          height: 200,
        }
      }, {
        elName: 'Ds-map',
        title: '地图',
        img: require('@/common/images/elementIcon/map.png'),
        valueType: '',
        defaultStyle: {
          width: $config.canvasH5Width,
          height: 200,
        }
      },
    ]
  },
  {
    title: '图表组件',
    components: [{
        elName: 'Ds-linechart',
        title: '折线图',
        img: require('@/common/images/elementIcon/lineCharts.jpg'),
        valueType: '',
        defaultStyle: {
          width: $config.canvasH5Width,
          height: 350,
        }
      },
      {
        elName: 'Ds-piechart',
        title: '饼图',
        img: require('@/common/images/elementIcon/pieCharts.jpg'),
        valueType: '',
        defaultStyle: {
          width: $config.canvasH5Width,
          height: 350,
        }
      }, {
        elName: 'Ds-wordcloud',
        title: '词云',
        img: require('@/common/images/elementIcon/wordcloud.jpg'),
        valueType: '',
        defaultStyle: {
          width: $config.canvasH5Width,
          height: 370,
        }
      }, {
        elName: 'Ds-funnel',
        title: '漏斗图',
        img: require('@/common/images/elementIcon/funnel.jpg'),
        valueType: '',
        defaultStyle: {
          width: $config.canvasH5Width,
          height: 370,
        }
      }
    ]
  }
]