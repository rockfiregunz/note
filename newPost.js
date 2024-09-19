const fs    =   require('fs');
const path  =   require('path');
const type  =   "pages";

// 取得命令行參數，作為文章的標題

let title = "";
let pagePath = "";
if (process.argv.length >3)
{
    pagePath  =     process.argv[2];
    title     =     process.argv[3];
}
else
{
    title     =     process.argv[2];
}
 
 
if (!title) {
    console.error('請提供文章標題！');
    process.exit(1);
}

// 生成文件名和目錄
const date      =   new Date().toISOString().split('T')[0];
const fileName  =   `${date}-${title.replace(/\s+/g, '-').toLowerCase()}.md`;
const filePath = path.join(__dirname, 'docs', type, pagePath, fileName);

if (fs.existsSync(filePath)) {
    console.log('檔案存在');
    process.exit(1);
}  
 
// 標準文章模板
const content = `---
title: "${title}"
description: "這是關於 ${title} 的文章"
date: "${date}"
---

# ${title}

## 簡介
這篇文章主要介紹 ${title}。

## 內容

請在這裡添加你的內容。

## 結論

總結你的文章內容。
`;
 

const arr = [
    //  文章目錄
    path.join(__dirname, 'docs', type, pagePath),
    //  檔案目錄
    path.join(__dirname, 'docs', 'public', "images", pagePath),
];
arr.forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});
 
//  寫入文件
fs.writeFileSync(filePath, content, 'utf8');
console.log(`文章已創建：${filePath}`);
