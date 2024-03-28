// 主标题，副标题
const title = ["玩米", "wanmi.org"]
const pageTip = "<div style='text-align: center'>Email：ai@wanmi.org。$date$</div>"
const hotModels = ['dde.net', 'qyk.net', 'mail.wiki', 'mx.ooo'];
// 绿色：#92D050， 黄色：#E6A23C， 蓝色：#0071e3
const Data = [
    {
        id: "west",
        name: "西部数码",
        tips: "西部数码所有域名均可在官网查询购买，也可联系QQ：635161045 砍价",
        models: [
            {name: "ido.pw", tips: "【在售】ido我愿意 议价", color: "#92D050"},
            {name: "metai.site", tips: "【在售】meta ai 20￥", color: "#92D050"},
            {name: "blockchain.xz.cn", tips: "【预定】区块链 188￥", color: "#E6A23C"}, 
			{name: "zc.cyou", tips: "【在售】两字符 66￥", color: "#92D050"}, 
			{name: "aigc.cn.com", tips: "【已售】AIGC人工智能创作", color: "#D80000"}, 
			{name: "3w.fan", tips: "【已售】3w", color: "#D80000"}, 
			{name: "alibaba.bond", tips: "【已售】alibaba阿里巴巴", color: "#D80000"}, 
			{name: "west.ren", tips: "【已售】west西方、西部", color: "#D80000"}, 
			{name: "ernie.wang", tips: "【已售】Ernie 文心一言", color: "#D80000"}, 
			{name: "web3.organic", tips: "【已售】web3", color: "#D80000"}, 
        ]
    },
    {
        id: "aliyun",
        name: "阿里云",
        tips: "阿里云aliyun.com域名均是一口价严选，建议联系QQ：635161045带价PUSH价格更低",
        models: [
            {name: "blockchain.ac.cn", tips: "【在售】区块链 766￥", color: "#92D050"},
            {name: "blockchain.网络", tips: "【在售】区块链网络 150￥", color: "#92D050"},
            {name: "maimila.com", tips: "【在售】卖米啦、买米啦 150￥", color: "#92D050"},
            {name: "weibo.show", tips: "【在售】微博秀 550￥", color: "#92D050"},
            {name: "shouzha.net", tips: "【在售】手札 220￥", color: "#92D050"},
            {name: "h-5.cn", tips: "【在售】html5 345￥", color: "#92D050"},
            {name: "city.kim", tips: "【在售】city城市 288￥", color: "#92D050"},
            {name: "website.ren", tips: "【在售】website网站 230￥", color: "#92D050"},
			{name: "about.net.cn", tips: "【在售】about关于 230￥", color: "#92D050"},
			{name: "icp.email", tips: "【预定】ICP 230￥", color: "#E6A23C"},
			{name: "moss.kim", tips: "【在售】moss流浪地球 230￥", color: "#92D050"},
			{name: "web5.wang", tips: "【在售】web5 288￥", color: "#92D050"},
        ]
    },
    {
        id: "tcloud",
        name: "腾讯云",
        tips: "腾讯云cloud.tencent.com域名需要联系QQ：635161045 提交push",
        models: [
			{name: "copyright.wang", tips: "【已售】copyright版权网", color: "#D80000"},
        ]
    },
    {
        id: "quyu",
        name: "趣域",
        tips: "谷歌域名domains.google.com。QQ：635161045",
		models: [
            {name: "blockchain.cn.com", tips: "【在售】区块链 议价", color: "#92D050"},
            {name: "web3.tf", tips: "【在售】Web3.tf 议价", color: "#92D050"},
            {name: "dao.pm", tips: "【在售】DAO 350￥", color: "#92D050"},
            {name: "web3.md", tips: "【在售】Web3 购买dao.pm赠送", color: "#92D050"},
            {name: "web3.cn.com", tips: "【在售】Web3 web3.com.cn建站 议价", color: "#92D050"},
        ]
    },
    {
        id: "google",
        name: "谷歌",
        tips: "谷歌quyu.net。QQ：635161045",
		models: [
            {name: "url.moda", tips: "【在售】URL链接 议价", color: "#92D050"},
            {name: "wechat.boo", tips: "【在售】议价", color: "#92D050"},
        ]
    },
    {
        id: "ddd",
        name: "DDD",
        tips: "ddd.com联系QQ：635161045 支持站内push",
        models: [
            {name: "2.cymru", tips: "【在售】单字符 100￥", color: "#92D050"},
        ]
    },
	{
        id: "godaddy",
        name: "狗爹",
        tips: "狗爹godaddy.com联系QQ：635161045 支持站内push",
		models: [
            {name: "t.phd", tips: "【已售】单字符", color: "#D80000"},
        ]
    },
	{
        id: "huoshan",
        name: "火山引擎",
        tips: "火山引擎volcengine.com是抖音旗下的云服务商，新网xinnet提供域名注册服务",
		models: [
            {name: "暂时还没域名", color: "#92D050"},
        ]
    },
    {
        id: "jm",
        name: "聚名",
        tips: "聚名juming.com域名可以直接在官网一口价查询购买",
		models: [
            {name: "暂时还没域名", color: "#92D050"},
        ]
    },
    {
        id: "xinnet",
        name: "新网",
        tips: "新网xinnet.com",
		models: [
            {name: "暂时还没域名", color: "#92D050"},
        ]
    },
    {
        id: "22",
        name: "爱名",
        tips: "爱名网22.cn可以直接在线查询购买",
		models: [
			{name: "暂时还没域名", color: "#92D050"},
        ]
    },
	{
        id: "netim",
        name: "netim",
        tips: "netim.com",
		models: [
            {name: "暂时还没域名", color: "#92D050"},
        ]
    },
    {
        id: "porkbun",
        name: "Porkbun",
        tips: "Porkbun猪肉包porkbun.com",
		models: [
            {name: "暂时还没域名", color: "#92D050"},
        ]
    },
]
