const fs = require('fs');
const puppeteer = require('puppeteer');

// 自定义延时函数
function delayTime(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  // 使用缓存存储账号信息
  let cachedAccounts;

  // 读取 IP 列表
  const ipList = fs.readFileSync('IPlist.txt', 'utf-8').split('\n');
  console.log(`IP 列表:\n${ipList.join('\n')}`);

  try {
    // 读取 accounts.json 文件中的 JSON 字符串，如果缓存存在则使用缓存数据
    const accountsJson = cachedAccounts || fs.readFileSync('accounts.json', 'utf-8');
    const accounts = JSON.parse(accountsJson);

    for (const account of accounts) {
      const { username, password } = account;

      // 初始化重试次数
      let retries = 3;

      while (retries > 0) {
        if (browser === null) {
          console.error('浏览器未启动');
          break;
        }

        const page = await browser.newPage();

        // 设置登录超时时间
        await page.setDefaultNavigationTimeout(10000); // 设置默认导航超时为10秒

        // 处理重定向
        page.on('response', async (response) => {
          if ([301, 302].includes(response.status())) {
            const redirectUrl = response.headers()['location'];
            await page.goto(redirectUrl);
          }
        });

        // 从 IP 列表中随机选择一个代理
        const randomIP = ipList[Math.floor(Math.random() * ipList.length)];
        const [ip, port] = randomIP.split(' ');

        // 设置代理
        page.setExtraHTTPHeaders({ 'Proxy-Authorization': `Basic ${Buffer.from(`username:password`).toString('base64')}` });

        // 打开网页
        await page.goto('http://www.23hyz.com/index/Index/Userlogins.html');

        // 输入用户名和密码
        await page.type('#content_name', username);
        await page.type('#content_password', password);

        // 点击登录按钮
        await page.click('.content_button button');

        // 等待页面加载完成
        await page.waitForTimeout(5000);

        // 截图保存，用于调试或检查登录是否成功
        await page.screenshot({ path: `login_result_${username}.png` });

        // 登录成功
        retries = 0;
        break;

      } catch (error) {
        console.error(`账号 ${username} 登录时出现错误: ${error}`);
        retries--;
      } finally {
        // 关闭页面
        await page.close();

        // 用户之间添加随机延时
        const delay = Math.floor(Math.random() * 5000) + 1000;
        await delayTime(delay);
      }
    }

    console.log('所有账号登录成功！');
  } catch (error) {
    console.error(`登录时出现错误: ${error}`);
  } finally {
    // 关闭浏览器
    if (browser !== null) {
      await browser.close();
    }
  }
})();
