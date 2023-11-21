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
      let retries = 0;
      let success = false;

      while (retries < 3 && !success) {
        const page = await browser.newPage();

        try {
          await page.goto('http://www.23hyz.com/index/Index/Userlogins.html');

          // 等待页面加载完成
          await page.waitForSelector('#content_name');
          await page.waitForSelector('#content_password');
          await page.waitForSelector('.content_button button');

          // 输入用户名和密码
          await page.type('#content_name', username);
          await page.type('#content_password', password);

          // 提交登录表单
          await page.click('.content_button button');

          // 等待登录成功
          await page.waitForNavigation();

          // 转到用户中心页面
          await page.goto('http://www.23hyz.com/index/User/index.html');

          // 等待页面加载完成
          await page.waitForSelector('.signinqd');

          // 点击红包领取
          await page.click('.signinqd');

          // 在领取红包后执行其他操作...

          // 点击安全退出
          await page.click('.quit a');

          // 等待安全退出完成
          await page.waitForNavigation();

          console.log(`账号 ${username} 登录成功！`);
          success = true; // Set success flag to true if login is successful
        } catch (error) {
          console.error(`账号 ${username} 登录时出现错误: ${error}`);
          retries++; // Increment retries if an error occurs during login
        } finally {
          // 关闭页面
          await page.close();

          // 用户之间添加随机延时
          const delay = Math.floor(Math.random() * 5000) + 1000; // 随机延时1秒到6秒之间
          await delayTime(delay);
        }
      }

      if (!success) {
        console.error(`账号 ${username} 尝试登录 3 次仍然失败`);
      }
    }

    console.log('所有账号登录成功！');
  } catch (error) {
    console.error(`登录时出现错误: ${error}`);
  } finally {
    // 关闭浏览器
    await browser.close();
  }
})();
