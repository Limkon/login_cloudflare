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

        try {
          // 设置登录超时时间
          await page.setDefaultNavigationTimeout(3000); // 设置默认导航超时

          // 打开网页
          await page.goto('http://www.23hyz.com/index/Index/Userlogins.html'); // 请将'网页地址'替换为实际的网页地址

          // 输入用户名和密码
          await page.type('#content_name', username); // 请将'#content_name'替换为实际的用户名输入框选择器
          await page.type('#content_password', password); // 请将'#content_password'替换为实际的密码输入框选择器

          // 点击登录按钮
          await page.click('.content_button button'); // 请将'.content_button button'替换为实际的登录按钮选择器

          // 等待页面加载完成，你可以根据实际情况修改等待时间
          await page.waitForTimeout(5000);

          // 截图保存，用于调试或检查登录是否成功
          await page.screenshot({ path: `login_result_${username}.png` }); // 文件名包含用户名

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
          const delay = Math.floor(Math.random() * 5000) + 1000; // 随机延时1秒到6秒之间
          await delayTime(delay);
        }
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
