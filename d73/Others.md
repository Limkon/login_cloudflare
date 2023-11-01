## 网页

### 域名

* 理论上DDNS也会提供，不过不是二级的
* https://my.freenom.com/clientarea.php  tk、ml、ga、cf、gq顶级域名
* https://nic.eu.org/ 欧盟下的，个人免费注册；http会被重置
* https://github.com/fransallen/thedev.id https://github.com/js-org/js.org 要开PR
* https://www.freedomain.pro/ co.nr
* https://domainoji.com/ https://www.punycoder.com/ emoji/idn域名转换；https://emojipedia.org/ emoji搜索
* https://nic.ua/en/domains 乌克兰 pp.ua
* https://www.azote.org 法国 asso.st，fr.nf，fr.cr，ze.cx，infos.st
* https://www.nom.za 南非
* https://www.sitelutions.com 纽埃 rr.nu
* https://www.ipq.co 哥伦比亚共和国
* https://fofa.so/ 用来搜索域名的

### 证书

* https://freessl.cn
* https://freessl.org
* https://zerossl.com/

### DNS

* https://www.dns.la/
* https://nip.io/ 自动根据域名中的IP返回DNS查询结果。xip.io挂了
* https://dnsmadeeasy.com/

### [Cloudflare CNAME/IP/NS 接入](https://github.com/ZE3kr/Cloudflare-CNAME-Setup/blob/master/README.zh.md)

* https://cdn.bnxb.com/
* https://cdn.moeelf.com/

### CDN

* https://su.baidu.com/product/cdn.html
* https://www.yunaq.com/jsl/ 仅限80端口
* https://www.cdnfine.com/
* https://wangzhan.qianxin.com/ 前身是360网页卫士
* https://www.merlincdn.com/ 注册送$10，不清楚有没有限时，额度有个自选的
* https://github.com/EtherDream/freecdn 自动选择合适的CDN的程序
* https://www.cachefly.com/pricing/ 国外的，免费5TB

### 短网址

* https://1t.click/ 、https://sina.lt/ 新浪的
* https://u.nu/ RST
* http://suo.im/ https://suowo.cn/
* https://tinyurl.com/ RST
* https://bitly.com/ 无法直接访问
* https://sl.iyong.com/
* https://v.ht 国外的
* https://ulvis.net/
* https://reurl.cc
* https://fars.ee/

## 国内源/镜像

* https://www.7ed.net Google Fonts/Libraries、CDNJS、Gravatar、Github RAW、Imgur、SM.MS；曾用cdn.staticdn.net cdn.con.sh
* https://cdn.geekzu.org/cached.html Google Fonts/Libraries、Gravatar
* https://npm.taobao.org/mirrors 一部分GitHub开源项目的release
* https://cdn.ews1.com/ Google Fonts、Gravatar
* https://github.com/eryajf/Thanks-Mirror 收集
* https://cravatar.cn/avatar/

### GitHub

* jsdelivr、statically：相当于只支持raw
* https://doc.fastgit.org/zh-cn/node.html 主站网页、assets、~~raw、release~~
* https://gitclone.com/ 支持http clone
* https://github.com/XIU2/UserScript/blob/master/GithubEnhanced-High-Speed-Download.user.js
* https://www.toolzl.com/tools/githubjiasu.html 支持release，实测用不了
* https://github.com/zwc456baby/file-proxy https://pd.zwc365.com/ 会跳转到cf worker用不了
* https://github.com/nulastudio/mclone 安装后用git mclone即可自动用mirror
* https://github.com/hunshcn/gh-proxy ：https://gh.api.99988866.xyz/ 速度极慢
* https://ghproxy.com/ raw release 速度极慢
* https://git.aya1.top/ 网页，https://note.aya1.top/#/r 任意网页。基于CF Worker
* https://d.serctl.com/ 活着但是日本Linode，IP干扰大。支持release，实测不错
* https://combinatronics.io/ 国外的，相当于只支持raw，com后缀被污染+RST了
* https://raw.iqiq.io/ 仅raw
* https://hub.nuaa.cf/
* https://github.com/fhefh2015/Fast-GitHub/issues/44
* https://kgithub.com 网页版
* https://githubfast.com/ 网页版

### 前端库

* 国内的，基本都是同步的cdnjs，否则要么不全要么老。链接格式只有bootcdn.cn的与cdnjs完全相同，其余的都没有ajax/libs/部分，字节的还多一部分。不支持latest版本号，必须明确指定
  * https://www.bootcdn.cn/ 由bootcss网站支持
  * https://www.staticfile.org/ 七牛云
  * https://cdn.baomitu.com/ 360
  * https://cdn.bytedance.com/ 字节跳动，最后更新大约在22年3月
  * https://jshub.com 网站风格很像bootcdn
  * https://code.bdstatic.com/npm/pkg@ver jsd镜像，暂停同步了，最后更新2021年11月
  * https://tianli-blog.club/jsd/ jsd镜像
  * https://npm.elemecdn.com unpkg镜像
  * https://unpkg.zhimg.com/ 知乎的，不公开
  * https://lib.sinaapp.com/ 新浪，少且旧，jq最新3.1
  * http://jscdn.upai.com/ 又拍云，极少且极旧，无https
  * https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js 非公开，不更新
* 国外的
  * https://www.jsdelivr.com/ cdn.jsdelivr.net 连不上，用的Fastly的CDN，本来速度尚可，但RST了。主要支持npm。支持GitHub release和repo里的文件，加min后缀自动生成压缩版。esm.run 支持ESM
    * https://getjs.at/ 镜像，实测jp2可用
  * https://cdnjs.com/ cdnjs.cloudflare.com 基本连不上
  * https://unpkg.com/ 用的CF的CDN。提供?module参数将ESM库内的import X from '本地路径'自动转换为from 'CDN路径'使得可以直接在浏览器中使用，无需bundler构建。但petite-vue在加不加?module时分别返回的是CJS和ESM的
  * https://statically.io/ cdn.statically.io 连不上，RST，用的Fastly的CDN。支持GitHub GitLab，加min后缀自动生成压缩版，还有图片压缩服务和网页快照截图功能
  * https://jspm.org/ 仅ESM
  * https://www.skypack.dev/ snowpack团队的，ESM，支持HTTP/3、Brotli
  * https://esm.sh/ 仅ESM
  * https://ajax.aspnetcdn.com 微软，只有jq相关的很少几个，但路径格式与jq官网相同方便替换
* Font Awesome
  * 前面那些前端库仍可用，但是某些版本不在cdnjs上，如5.0.x
  * https://use.fontawesome.com/releases/v5.15.0/css/all.css 官方的打开慢，且它其实对应的min.css
  * http://apps.bdimg.com/libs/fontawesome/4.4.0/css/font-awesome.min.css 非公开，不更新

## 储存

* 那些明显是其他人自建的使用时要小心跑路，不建议放重要内容

### OSS

* https://www.zhihu.com/question/51309695 有哪些优秀且免费的云存储服务？
* https://www.zhihu.com/question/34445630/answer/449868590 网易云，免费50G空间，20G流量
* https://developer.qiniu.com/af/kb/1574/free-credit-information https://www.qiniu.com/events/free 七牛云
* https://www.upyun.com/league 又拍云，10G储存15G流量
* https://www.ucloud.cn/site/product/ufile.html 实名认证用户20GB免费云存储空间和20GB/月免费下载流量
* https://www.cuplayer.com/price/ 酷播云，视频储存，5G/年，流量12G/月
* https://get.robin.io/ 5GB

### 网盘

* https://www.quqi.com/ 曲奇云盘，但好像没有电脑端
* https://cowtransfer.com/ 奶牛快传，~~现在也提供网盘功能~~
* https://www.wenshushu.cn/
* https://www.liupan.net/
* https://infini-cloud.net/en/ 20G空间，支持 WebDAV
* https://www.furk.net/ 很慢，1G/D且5G/W
* https://www.lanzou.com/ 蓝奏云，单个文件限100M
* 亿方云
* 天翼云盘、沃家云盘、和彩云
* https://www.zoho.com.cn/workdrive/
* 超星云盘
* 腾讯微云
* https://www.asuswebstorage.com
* https://pan.bitqiu.com/ 比特球云盘
* https://github.com/xausky/DockerRegisterCloud 把docker registry变成网盘
* https://www.mediafire.com/
* https://github.com/apachecn/CDNDrive
* https://ondisk.fuyeor.com/login
* https://internxt.com/
* https://fast.uc.cn/

### Onedrive

* https://products.office.com/en-us/student?tab=students
* https://xkx.me/
* https://xyxywan.gitee.io/web/ 有桌面office但需审批
* https://get.porta1.net/
* https://zhuanlan.zhihu.com/p/105438817 免费申请office E5开发者订阅，附无限续期+私人网盘教程
* Index：https://github.com/spencerwooo/onedrive-vercel-index https://github.com/vcheckzen/FODI https://github.com/qkqpttgf/OneManager-php

### 文件分享

* https://catbox.moe/ 上传速度不稳定，快的时候有600K，单次上限200MB
* https://www.zippyshare.com/ 上传速度为0
* ~~https://send.firefox.com/ 上传速度能到2M，但有时传到一半会断掉；VPS的下载速度能到21MB/s~~
* https://www.up-4ever.org/ 上传速度不到1M，需要关闭广告过滤扩展才能用，有的后缀不让传，下载等30秒人机验证后倒是能创建出直链，单次上限200MB
* https://transfer.sh/
* https://uguu.se/ 单次上限100MB
* https://anonfiles.com/
* https://letsupload.co/
* https://secufiles.com/
* https://wetransfer.com/
* https://wormhole.app/
* https://filedoge.com/
* https://demo.jirafeau.net/ 也能自建 https://gitlab.com/mojo42/Jirafeau
* https://plik.root.gg 也能自建 https://github.com/root-gg/plik
* https://wormhole.app/
* https://pan.duiai.cc/
* https://oshi.at/
* https://anonfiles.com/ https://filechan.org/
* https://ttm.sh/
* https://send.internxt.com/
* https://bashupload.com/ 有效期3天，只能下载一次
* https://airportal.cn/
* https://musetransfer.com/
* https://snapdrop.net/ 无需APP，仅局域网
* https://termbin.com/
* https://temp.sh/
* https://workupload.com/

### 离线下载

* https://www.loadbt.com 免费用户2G
* https://zhuanlan.zhihu.com/p/37785481 19款离线下载服务对比

### 图床

* http://www.zmonster.me/2013/12/06/image-host-service.html 国内外图床及其对比
* https://www.zhihu.com/question/21667151
* ~~https://sm.ms/~~
* https://postimages.org/
* https://imgbox.com/
* https://imgbb.com/
* https://www.freeimagehosting.net/
* https://pic.xiaojianjian.net/
* https://imgurl.org/
* https://yunjiemi.com/ 之前是img.kuibu.net
* https://www.superbed.cn/ pic.imgdb.cn
* https://www.moepicx.cc
* https://www.hualigs.cn/
* https://jpg.dog/
* https://www.z4a.net/
* https://moetu.org/
* https://imgbb.com/
* https://www.picgd.com/
* https://tuchuang.richuyun.com/
* https://images.weserv.nl/ image cache & resize service 相当于图片的CDN
* https://imgtu.com/ 之前是imgchr.com
* https://imgix.com/ 使用.net的域名
* https://im.ge/

### BT Trackers

* https://github.com/ngosang/trackerslist
* https://github.com/XIU2/TrackersListCollection
* https://github.com/DeSireFire/animeTrackerList

## (盗版)资源

* https://discx.yuntu.io/ 光盘

### 软件

* https://masuit.com/
* https://www.lanzous.com/u/roustar31cn

### 书

* https://t.me/ebookdl 亲测确实能搜到
* http://finelybook.com/ 国产，亲测可以，非注册用户只能用城通网盘
* https://github.com/hoodiearon/w3-goto-world/tree/master/集成实用夹/书籍与文档
* https://smtebooks.com/
* https://pdfroom.com
* https://foxgreat.com/ 搜不到C#的书
* https://dokumen.pub 网站不是英文的
* https://www.wowebook.org 下载页面为turbobit.net，很慢，而且有的要开会员
* https://www.zhihu.com/question/21202757 有哪些好的电子书下载网站推荐？
* https://zhuanlan.zhihu.com/p/53064677 有了这十几个网站，没有你找不到的电子书！
* https://www.jiumodiary.com/ 鸠摩搜书，也能搜到百度网盘的内容
* https://gist.github.com/baiwfg2/af827b8b75eebf8ab29f5531a0d265ce
* ~~https://www.allitebooks.com/~~ 超好但是挂了，不清楚现在的几个是否有关：https://www.allitebooks.in/ https://allitebook.xyz/ https://allitbooks.net/
* https://www.jb51.net/books/ 下载需要关注公众号获取提取码
* http://sd.blackball.lv/books/
* https://sobooks.cc/ 不是专门计算机的
* http://www.kgbook.com/ 不是专门计算机的
* https://z-lib.org/ 无法直接访问。https://sg1lib.org/ 目前可以直接访问
* https://www.zhihu.com/question/19709630 有哪些网站可以获取免费的国外的原版书籍（电子版）
* https://github.com/EbookFoundation/free-programming-books 免费的
* https://github.com/Jackpopc/CS-Books-Store 该开发者自己收集的一小部分经典的书，百度网盘直接下载
* https://libgen.gs https://1lib.ink/ https://zh.zlib.buzz/ https://www.ooopn.com/tool/zlibrary/
* https://gitee.com/ForthEspada/CS-Books https://github.com/justjavac/free-programming-books-zh_CN

### 音乐

* https://tool.liumingye.cn/music/
* https://www.yijingying.com/html/musictools/
* http://music.moresound.ml/
* 国外的：https://myfreemp3.to/ https://myfreemp3juices.cc/ https://www.myfreemp3.bond/
* https://www.52pojie.cn/thread-929831-1-1.html 集合
* https://listen1.github.io/listen1/ 只是整合可以直接听的
* https://github.com/lyswhut/lx-music-desktop
* https://music.y444.cn/ 需要关注公众号
* 挂了的：https://github.com/maicong/music https://github.com/OJZen/QMD_Android

### GeoIP2数据库

* https://geolite.clash.dev/
* https://github.com/Dreamacro/maxmind-geoip/releases
* https://static.clash.to/GeoIP2/GeoIP2-Country.tar.gz （RixCloud 公共库）
* https://quantumult.crossutility.com/download/geoip/database/GeoLite2-Country.mmdb
* https://github.com/Hackl0us/GeoIP2-CN

### 字体

* https://zenozeng.github.io/Free-Chinese-Fonts/
* https://www.webfont.com/onlinefont/index
* https://www.marksimonson.com/fonts

## 安全

* https://github.com/euphrat1ca/security_w1k1
* https://github.com/No-Github/1earn

### 恶意软件分析沙箱

* https://habo.qq.com/ 腾讯哈勃。现在只能分析很少的一部分，详细报告需要高级会员，而申请通道已经关闭了
* https://www.maldun.com/ 魔盾安全
* https://s.threatbook.com/ 微步
* https://www.hybrid-analysis.com
* https://scan.anxinsec.com/
* https://ata.360.net/ 360安全大脑沙箱云，免费版只有Win7 32位环境

### 服务器安全软件

* https://www.yunsuo.com.cn/download.html 
* https://scanner.baidu.com webshell检测引擎

## Git平台

* https://code.aliyun.com
* https://xiaolvyun.baidu.com
* https://gitcode.net csdn出的，GitLab
* https://gitee.com/
* https://www.gitlink.org.cn/
* https://opendev.org Ubuntu, Gitea
* https://salsa.debian.org/ GitLab
* https://repo.or.cz/
* https://sr.ht/ https://sourcehut.org/
* https://www.aliyun.com/product/yunxiao/codeup

## Paste Bin

* https://pastebin.com/
* https://ghostbin.com/
* https://rentry.co/
* https://hastebin.com/
* https://pastebin.ubuntu.com/
* https://www.cacher.io/ 功能很多
* https://write.as/ 其实是博客
* https://del.dog/
* https://psty.io
* https://telegra.ph RST了
* https://psty.io/ 有效期一天

## 搜索引擎

* https://goobe.io/ 程序员搜索
* https://www.sousuoyinqingtijiao.com/ 搜索引擎收录提交入口
* https://www.cn-ki.net/ 文献搜索
* https://www.wuzhuiso.com/ 360的
* https://fsoufsou.com/

## Docker平台（非免费）

* https://www.tenxcloud.com/ 时速云
* https://www.daocloud.io/ 有一点点免费测试环境 http://docs.daocloud.io/app-deploy-mgmt/cloud-limited-resources
* https://www.mopaas.com/ 魔泊云
* https://www.alauda.cn/ 灵雀云
* https://canister.io/solo
* https://hostpresto.com/docker-hosting 免费六个月

## CI

* https://www.shippable.com/pricing.html
* https://codefresh.io/

## 图标

* https://octicons.github.com/

## 云办公相关

* http://www.gleasy.com/ 格子云，到哪都能办公
* http://www.everydo.com/ 文档管理系统

## PDF

* https://www.hipdf.com/
* https://smallpdf.com/cn

## 爬虫

* https://www.bazhuayu.com/ 八爪鱼；国外版 https://www.octoparse.com/
* http://www.houyicaiji.com/
* http://www.gooseeker.com/
* 以下是国外的
* https://www.zyte.com
* https://apify.com/
* https://www.diffbot.com/
* https://www.import.io/

## 微信消息推送

* https://sct.ftqq.com/ Server酱
* http://www.xtuis.cn/ 虾推啥
* https://pushplus.hxtrip.com/ push+
* https://qmsg.zendee.cn/ Qmsg酱
* https://wxpusher.zjiecode.com 开源
* https://letserver.run/ Server饭，开源
* https://github.com/songquanpeng/message-pusher 开源

## CI

* Circle CI 老牌
* AppVeyor 以Win出名
* https://cloud.drone.io 有人说文档烂
* https://semaphoreci.com/
* https://buildkite.com/

## 在线Shell

* https://shell.cloud.google.com/
* https://www.xshellz.com/
* https://freeshell.de/
* https://sdf.org/

## Chat GPT

* https://github.com/dair-ai/Prompt-Engineering-Guide#guides https://github.com/f/awesome-chatgpt-prompts https://github.com/PlexPt/awesome-chatgpt-prompts-zh https://learnprompting.org/zh-Hans/docs/intro
* https://beta.character.ai 可以创建某种性格特性的人物来对话。国内无法直接访问
* 共享账号免费分享 https://www.kdocs.cn/l/ckXvMXku4vai
* chrome扩展 https://chatgpt-sidebar.com/ https://merlin.foyer.work/ https://www.usechatgpt.ai/
* 日语，佛祖 https://hotoke.ai/
* 还在研发 https://open-assistant.io/zh
* HuggingChat: https://hf.co/chat 不支持中文，需注册
* https://poe.com 需魔法，需注册，有不止一个模型
* https://chat.forefront.ai/ 污染
* https://mst.ai
* https://ai-bot.cn/ https://xcbl.cc/ 工具集
* https://www.copyask.com/

### 搜索引擎

* https://www.perplexity.ai 只回复英文，只单次问，无交互。会给出消息来源
* https://you.com 点Chat。国内无法直接访问
* https://phind.com/ 面向程序员，现在不提供给中国了

### 写作

* https://writesonic.com https://writesonic.com/chat
* https://rytr.me
* https://www.peppertype.ai 官网目前没说免费，根据宣传有5000词

### 国内版

* 基于 https://github.com/ddiu8081/chatgpt-demo ： https://chatforai.site 10次 https://chat.bitch.me/
* 基于 https://github.com/ourongxing/chatgpt-vercel 是ddiu8081的修改版：https://www.dzbz777.top/
* 基于 https://github.com/Yidadaa/ChatGPT-Next-Web ：https://www.chatdoc.link/ 需关注微信公众号
* 基于 https://github.com/gcloudlab/QA
* https://github.com/mckaywrigley/chatbot-ui 项目
* https://github.com/Chanzhaoyu/chatgpt-web 项目，但没开Vercel
* https://ask.aiservices.tech/ask 限制每日请求次数，很少
* https://ai.tool00.com/ https://www.gptggg.com/
* https://api.wantchatgpt.com/ 每天3次
* https://chat.extkj.cn 超限
* https://www.bz1y.cn 需注册
* https://freegpt.one/ 污染
* https://askbot.club/chatgpt/
* https://chatbot.theb.ai 污染
* https://ai.usesless.com
* https://chat.51buygpt.com/ RST
* https://chat.dsdog.tk/ 污染
* https://chat.wobcw.com/
* https://chat.aidutu.cn
* https://ai.bo-e.com/ 部分污染
* https://wellmaxwang.com/ 要注册
* http://ai.renyqf.com 要注册
* https://2dog.51mskd.com
* http://omg.j5r4.us/
* https://aust001.pythonanywhere.com/menu2
* https://cosplay.millionlearn.cn 要微信登录
* https://github.com/ramonvc/freegpt-webui
* 效果较差 https://www.eiefun.com/chatgpt
* 挂了的： https://chat3.xeasy.me/ https://chat.forchange.cn/ https://vip.8eth.cc/ https://chat.xbdsky.cn/ https://www.dzbz777.top/ https://chatgpt.suwanya.cn/ https://ichat-x.com/ https://qa.kouseki.eu.org/ https://www.aiconnectworld.org/chat https://www.aiai.zone https://ai.exacg.cc/ https://aigcfun.com/ https://chatgpt.jellybeans.love/ https://chat.feelapi.com/ https://bo.tychat.me https://chat.ailife792.top https://chat.gow66.tech/
* 其他人的收集：https://github.com/xx025/carrot https://study.zwjjiaozhu.top/posts/chatgpt-mirror-sites.html https://www.extnav.com/haozhanfenxiang/1446.html https://github.com/lzwme/chatgpt-sites https://github.com/LiLittleCat/awesome-free-chatgpt

### 绘画

* https://www.shuxuehua.com/ 注册需手机号
* https://wenxin.baidu.com/ernie-vilg
* https://6pen.art/
* https://draft.art/ 好像无需登录
* https://www.aizuohua.com 注册需手机号
* https://www.craft.do/s/JnXgTaB5ZL2JsX 收集
* https://nightcafe.studio/ https://art.elbo.ai/ https://starryai.com https://novelai.net/ https://www.midjourney.com/

## 其它中的其它

* https://img.xjh.me/ 随机图片 https://api.lolicon.app/#/setu 随机色图
* http://shaofan.org/jetbrains-active/ Jetbrains在线激活工具
* https://apiary.io/ API Design Stack，与Oracle合作
* https://www.sap.cn/products/cloud-platform/pricing.html ERP系统；注册Beta版是免费的，但要填姓名公司电话
* https://developer.okta.com/ adds authentication, authorization, and user management to your web or mobile app within minutes.
* https://www.chanzhi.org/dynamic.html https://www.chanzhi.org/book/chanzhieps/5.html https://www.zentao.net/ 蝉知和禅道，前者是CMS，后者是项目管理系统。不过是PHP
* https://www.kancloud.cn/ https://www.yuque.com/ https://www.baklib.com/ MD平台
* http://www.ypppt.com/ ppt
* https://squoosh.app/ 图片压缩，谷歌出的工具
* http://www.freeyun.net/ 软件授权管理一站式解决方案
* https://prerender.io/ 预渲染动态网页
* https://termible.io 还在内测的在线终端，基于Docker
* https://heyterm.com/zh-cn/ WebSSH
* https://www.freepik.com/ 免费psd图像资源
* https://pyup.io/ 监测Python依赖
* https://waifulabs.com/ AI生成二次元头像
* https://appcenter.ms/ 存放release
* https://dev.to/doobled/listing-the-best-services-for-free-domain-email-addresses-in-2020-3hkb 几个邮箱测评
* https://newrelic.com 遥测？
* https://mailchimp.com/ 群发邮件
* 性能测试：`wget -qO- 86.re/bench.sh | bash`
* https://github.com/fangzesheng/free-api 免费的接口
* https://github.com/zhaojh329/rtty web tty
* https://www.plasticscm.com/ 不同于git的版本控制系统，可以玩玩
* https://trinket.io/ Py的Turtles运行环境，谷歌的Blocks，适合小孩子学
* 手机原生应用推送：https://www.getui.com/push https://www.jiguang.cn/push
* 服务器监控：https://www.oneapm.com https://www.tingyun.com/ https://www.jiankongbao.com/
* https://www.authing.cn/pricing 统一身份验证
* https://hashnode.com/ 博客平台
* https://www.goodwaf.cn/ WAF
* https://pusher.com/ 为网页提供实时信息推送
* https://hex-rays.com/educational/ IDA教育版
* https://www.apponfly.com/ 点trial能获得免费30分钟的Windows
* https://patchbay.pub/ 类似于PIPE
* https://requestbin.com/ 类似于httpbin但可以保留请求的内容
* https://snyk.io/ 代码安全检查

## 别人的收集

* https://www.freehao123.com/
* https://51.ruyo.net/
* https://github.com/Sicmatr1x/Free-Resource
* https://www.producthunt.com/

## 挂了的

* Ohosti “骗人的，去年申请的现在还在Pending中”
* https://vitu.ai
