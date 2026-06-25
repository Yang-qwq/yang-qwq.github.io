/**
 * ===== 站点数据配置 =====
 * 修改此文件中的内容即可更新页面展示，无需触碰 HTML/CSS/JS。
 * 图片请放入 static/img/ 目录下相应子文件夹。
 *
 * ⚠️ SEO / 开放图谱等元信息请直接在 index.html 的 <head> 中编辑。
 *    搜索引擎爬虫不执行 JavaScript，因此这些内容必须静态写入 HTML。
 *    data.js 的内容只对已启用 JS 的浏览器访问者生效。
 */

var SITE_DATA = {

  /* ----- 个人信息 ----- */
  user: {
    name: '阳',
    subname: 'Yang-qwq',       // 副标题，跟在名字后面，颜色减淡
    avatar: 'static/img/head.webp',    // 头像图片路径
    bio: '哪怕命运已定格成书，空白的那一页，也等你落笔。',              // 个性签名
    socials: [                         // 社交链接，icon 使用 Bootstrap Icons 类名
      { icon: 'bi-github', url: 'https://github.com/Yang-qwq/' },
      { icon: 'bi-steam', url: 'https://steamcommunity.com/id/yang_qwq/' },
      { icon: 'bi-link-45deg', url: 'https://space.bilibili.com/484660963' },
      { icon: 'bi-envelope-at', url: 'mailto:yang_qwq@qq.com' },
    ],
  },

  /* ----- 一言引用（hitokoto 动态加载时会覆盖此处） ----- */
  quote: {
    text: '世界上只有一种真正的英雄主义，那就是在认清生活的真相后依然热爱生活。',
    from: '罗曼·罗兰',
  },

  /* ----- 诗词（jinrishici 每日诗词加载时会覆盖此处） ----- */
  poem: {
    title: '定风波',
    content: ['莫听穿林打叶声，何妨吟啸且徐行。', '竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。'],
    author: '苏轼',
  },

  /* ----- 站点信息 ----- */
  siteInfo: {
    startDate: '2021-12-22',   // 建站日期，用于计算已运行天数
    coverTitle: '阳的小站',    // 封面主标题（独立设置，不与 user.name 共用）
    coverStamp: 'PERSONAL',    // 封面印章文字
    footerStamp: 'YANG',       // footer 印章文字
    copyrightYear: '2024',     // 版权年份
  },

  /* ----- 关于我 ----- */
  about: {
    intro: '这个人很懒，什么都没留下。',
    tags: ['这是一个Tag'],
  },

  /* ----- 音乐播放器 (MetingJS) ----- */
  music: {
    server: 'netease',     // 音乐平台: netease / tencent / xiami / kugou
    type: 'playlist',      // 类型: song / playlist / album / search / artist
    id: '7123866465',           // 歌单/歌曲 ID
  },

  /* ----- 番剧列表 (支持对象 { src, name } 或纯文件名) ----- */
  anime: [
    { src: '00000001.jpg', name: '莉可丽丝/铳动彼岸花' },
    { src: '093302de.jpg', name: '别当欧尼酱了！' },
    { src: '24335806.jpg', name: '我推的孩子' },
    { src: '2cf8a6e9.jpg', name: '鹿乃子乃子乃子虎视眈眈' },
    { src: '3928023e.jpg', name: '赛马娘 Pretty Derby 第二季' },
    { src: '429c1b7a.jpg', name: '孤独摇滚！' },
    { src: '54f19dde.jpg', name: '龙王的工作' },
    { src: '5ce9fed1.jpg', name: '葬送的芙莉莲' },
    { src: '5eeebf97.jpg', name: '赛马娘 Pretty Derby Road to the Top' },
    { src: '75400af2.jpg', name: '赛马娘四格' },
    { src: 'a1f882c4.jpg', name: '你的名字。' },
    { src: 'a2f98c24.jpg', name: '赛马娘 芦毛灰姑娘' },
    { src: 'a9641663.jpg', name: '赛马娘 Pretty Derby' },
    { src: 'b552075a.jpg', name: '我推的孩子 第二季' },
    { src: 'c03fdeb4.jpg', name: '赛马娘 Pretty Derby 第三季' },
  ],

  /* ----- 工具分类 & 快乐源泉 ----- */
  categories: [
    {
      title: '实用工具',
      groups: [
        {
          label: '常用工具',
          links: [
            { name: '清空喽', url: '#' },
          ],
        },
        {
          label: '读书 & 刷题',
          links: [],
        },
      ],
    },
    {
      title: '快乐源泉',
      groups: [
        {
          label: '有意思的东西',
          links: [
            { name: '准备重新收集', url: '#' },
          ],
        },
        {
          label: '摸鱼',
          links: [],
        },
      ],
    },
  ],

  /* ----- 我喜欢的游戏 ----- */
  games: [
    {
      name: 'Minecraft',
      cover: 'static/img/game/minecraft.jpg',   // 游戏封面图
      desc: '创造。探索。生存。',                  // 简短描述
      url: 'https://www.minecraft.net/zh-hans',     // 点击跳转链接 
    },
    {
      name: '原神',
      cover: 'static/img/game/genshin.jpg',
      desc: '提瓦特大陆的冒险之旅',
      url: 'http://ys.mihoyo.com/',
    },
    {
      name: 'osu!',
      cover: 'static/img/game/osu.jpg',
      desc: '棒到不行的免费音乐游戏',
      url: 'https://osu.ppy.sh/',
      uid: '26321853',  // 可选，有则显示「复制 UID」按钮
    },
    {
      name: 'CS2',
      cover: 'static/img/game/cs2.jpg',
      desc: '经典的第一人称射击游戏',
      url: 'https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/',
    },
    {
      name: 'THE FINALS',
      cover: 'static/img/game/the_finals.jpg',
      desc: '多人在线第一人称射击游戏',
      url: 'https://store.steampowered.com/app/2073850/THE_FINALS/',
    },
    {
      name: '崩坏：星穹铁道',
      cover: 'static/img/game/starrail.png',
      desc: '星穹铁道的冒险之旅',
      url: 'https://sr.mihoyo.com/',
    },
    {
      name: '赛博朋克 2077',
      cover: 'static/img/game/2077.jpg',
      desc: '赛博朋克风格的开放世界 RPG 游戏',
      url: 'https://store.steampowered.com/app/1091500/_2077/',
    },
    {
      name: 'Blue Archive',
      cover: 'static/img/game/blue_archive.jpg',
      desc: '校园生活与战斗的结合',
      url: '#',
      uid: '16 433 367',
    },
    {
      name: '异环',
      cover: 'static/img/game/yh.jpg',
      desc: '超自然都市开放世界RPG',
      url: 'https://yh.wanmei.com/',
    },
    // 封面图片放在 static/img/game/ 下，加载失败会自动显示占位符
  ],

  /* ----- 子站点导航 ----- */
  subsites: [
    { name: '留言板', url: 'https://yangboard.march7th.cn/', icon: 'bi-clipboard-heart' },
    { name: '服务器在线状态', url: 'https://stats.uptimerobot.com/kKoX9ukrwm', icon: 'bi-box-arrow-up-right' },
    // { name: 'API', url: '#', icon: 'bi-cloud' },
  ],

  /* ----- 友链 ----- */
  friends: [
    { name: '晚江右海的个人网站', avatar: '', url: 'https://yuxiangwang0525.com/', desc: '' },
    { name: 'Luomoの云日常', avatar: 'https://pic.imgdb.cn/item/66af707bd9c307b7e9b98d57.jpg', url: 'https://www.march7th.cn/', desc: '' },
    { name: '1107的小站', avatar: '', url: 'https://1107.siwg.top/', desc: '' },
    { name: 'dsy4567的小站', avatar: 'https://dsy4567.icu/img/avatar.jpg', url: 'https://dsy4567.icu/', desc: '' },
    { name: 'HanaTaka2137的个人主页', avatar: 'https://www.xiyang6666.top/api/getAvatar', url: 'https://www.xiyang6666.top/', desc: '' },
    { name: '想添加你的友链？', avatar: 'static/img/head.webp', url: 'https://github.com/Yang-qwq/yang-qwq.github.io/issues', desc: '看这里！' },
  ],
};
