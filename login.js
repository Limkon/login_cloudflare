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
   // 设置登录超时时间
   await page.setNavigationTimeout(3000);

   // ...

  } catch (error) {
   console.error(`账号 ${username} 登录时出现错误: ${error}`);
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
 await browser.close();
 }
})();
