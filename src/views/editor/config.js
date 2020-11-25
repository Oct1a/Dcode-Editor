export default [{
    title: '基础组件',
    type: 'base',
    icon: 'el-icon-s-opportunity',
    components: [{
        name: 'Dc-text',
        title: '文本',
        PreviewImg: 'http://placehold.it/150x150/ff3333/ffffff',
        defaultStyle: {
          height: 40
        }
      },
      {
        name: 'Dc-image',
        title: '图片',
        PreviewImg: 'http://placehold.it/150x150/ff3333/ffffff',
        defaultStyle: {
          height: 200
        }
      },
      {
        name: 'Dc-bg-music',
        title: '音乐',
        PreviewImg: 'http://placehold.it/150x150/ff3333/ffffff',
        defaultStyle: {
          height: 52,
          width: 52,
        }
      },
      {
        name: 'Dc-button',
        title: '按钮',
        defaultStyle: {
          width: 140,
          height: 40,
          paddingTop: 10,
          paddingBottom: 10,
          borderColor: "#999999",
          borderStyle: 'solid',
          borderWidth: 1,
          borderRadius: 4
        }
      },
      {
        name: 'Dc-rectangle-border',
        title: '矩形边框',
        defaultStyle: {
          width: 120,
          height: 100,
          borderColor: "#999999",
          borderStyle: 'solid',
          borderWidth: 2
        }
      },
      {
        name: 'Dc-rectangle-border',
        title: '分割线',
        valueType: '',
        defaultStyle: {
          height: 1,
          width: 300,
          backgroundColor: '#999999'
        }
      },
      {
        name: 'Dc-image-carousel',
        title: '图片轮播',
        defaultStyle: {
          height: 210
        }
      },
      {
        name: 'Dc-iframe',
        title: '内嵌网页',
        defaultStyle: {
          width: 400,
          height: 300,
          paddingTop: 10,
          paddingBottom: 10
        }
      },
      {
        name: 'map',
        title: '地图',
        valueType: '',
        defaultStyle: {
          width: 300,
          height: 200,
          paddingTop: 10,
          paddingBottom: 10
        }
      },
      {
        name: 'video',
        title: '视频',
        valueType: '',
        defaultStyle: {
          width: 200,
          height: 300,
          paddingTop: 10,
          paddingBottom: 10
        }
      },
    ]
  },
  {
    title: '表单组件',
    type: 'from',
    icon: 'el-icon-picture-outline-round',
    components: []
  },
  {
    title: '功能组件',
    type: 'func',
    icon: 'el-icon-s-data',
    components: []
  },
]