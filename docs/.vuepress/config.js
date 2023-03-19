module.exports = {
  title: '...',
  description: '邓浩学习博客',
  base: '/denghaoBlog/',
  theme: 'reco',
  themeConfig: {
      subSidebar: 'auto',
      nav: [
          { text: '首页', link: '/' },
          { 
              text: '邓浩的前端博客', 
              items: [
                  { text: 'Github', link: 'https://github.com/' },
              ]
          }
      ],
      sidebar: [
        {
          title: '欢迎学习',
          path: '/',
          collapsable: false, // 不折叠
          children: [
              { title: "学前必读", path: "/" }
          ]
      },
        {
          title: "vue2学习",
          path: '/handbook/vue2',
          collapsable: false, // 不折叠
        }
      ]
  }
}