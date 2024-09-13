import { defineConfig } from 'vitepress'
 
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "jimmy'note",
  description: "jimmy note",
  srcExclude: ['**/drafts/**'], // 排除目錄
  //srcDir: 'pages', // 設定根目錄
  rewrites: {
    'pages/(.*)': '(.*)'
  },
  base: '/note/',
  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      {
        text: '前端',
        items: [
          { text: 'Vue', link: '/contact' },
          { text: 'Vite', link: '/contact' },
          { text: 'TypeScript', link: '/contact' }, 
        ]
      },
      {
        text: '後端',
        items: [
          { text: 'Net Core', link: '/contact' },
          { text: 'Laravel', link: '/contact' },
          /*
          {
            text: 'PHP', items: [
              { text: 'Larave', link: '/contact' },
              { text: 'PHP2', link: '/contact' },
              { text: 'PHP3', link: '/contact' },
              { text: 'PHP4', link: '/contact' },
            ]
          },
          */
     
        ]
      },
      { text: 'Docker'  , link: '/contact' },
      { text: '關於'    , link: '/about' },
    
    ],
  
    sidebar: {
      '/':[],
      '/pages/vue/vite/': [
          {
            text: 'vite',
            collapsed: true,
            items: [
              { text: 'vite 1', link: '/markdown-examples' },
              { text: 'vite 2', link: '/api-examples' }
            ]
        }
      ],
      '/pages/vue/vite/vitepress/': [
          {
            text: 'vitepress',
            collapsed: true,
            items: [
              { text: 'vitepress 1', link: '/markdown-examples' },
              { text: 'vitepress 2', link: '/api-examples' }
            ]
          }
      ],
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: { 
            translations: {
                button: {
                    buttonText: '搜尋',
                    buttonAriaLabel: '搜尋'
                },
                modal: {
                    displayDetails: '顯示詳細資訊',
                    resetButtonTitle: '重置搜尋',
                    backButtonTitle: '關閉搜尋',
                    noResultsText: '沒有找到任何結果',
                    footer: {
                        selectText: '選擇',
                        selectKeyAriaLabel: '輸入',
                        navigateText: '導覽',
                        navigateUpKeyAriaLabel: '上箭頭',
                        navigateDownKeyAriaLabel: '下箭頭',
                        closeText: '關閉',
                        closeKeyAriaLabel: 'esc'
                    }
                }
            }
          }
        }
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  },
  
})
