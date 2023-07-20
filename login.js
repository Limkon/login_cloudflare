const fs = require('fs');
const puppeteer = require('puppeteer');

(async () => {
  // 读取 accounts.json 文件中的 JSON 字符串
  const accountsJson = fs.readFileSync('accounts.json', 'utf-8');
  const accounts = JSON.parse(accountsJson);

  for (const account of accounts) {
    const { username, password } = account;

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    try {
      await page.goto('https://dash.cloudflare.com/login');

      // Wait for the login form to be visible
      await page.waitForSelector('[data-testid="login-form"]');

      // 输入实际的用户名和密码
      await page.type('#email', username);
      await page.type('#password', password);

      // Add a delay before submitting the login form (adjust the delay time as needed)
      await page.waitForTimeout(2000);

      // 提交登录表单
      await page.click('[name="login-submit-button"]');

      // Wait for successful login (or CAPTCHA/2FA prompt)
      await page.waitForFunction(() => {
        const logoutButton = document.querySelector('button[data-testid="logout-button"]');
        const captchaForm = document.querySelector('form[data-testid="captcha-form"]');
        const twofaForm = document.querySelector('form[data-testid="login-two-factor-form"]');
        return logoutButton !== null || captchaForm !== null || twofaForm !== null;
      });

      // Check if login was successful
      const isLoggedIn = await page.evaluate(() => {
        const logoutButton = document.querySelector('button[data-testid="logout-button"]');
        return logoutButton !== null;
      });

      if (isLoggedIn) {
        console.log(`账号 ${username} 登录成功！`);
      } else {
        console.error(`账号 ${username} 登录失败，请检查账号和密码是否正确。`);
      }
    } catch (error) {
      console.error(`账号 ${username} 登录时出现错误: ${error}`);
    } finally {
      // 关闭页面和浏览器
      await page.close();
      await browser.close();

      // 用户之间添加随机延时
      const delay = Math.floor(Math.random() * 5000) + 1000; // 随机延时1秒到6秒之间
      await delayTime(delay);
    }
  }

  console.log('所有账号登录完成！');
})();

// 自定义延时函数
function delayTime(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
