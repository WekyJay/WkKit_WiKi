# Docsify 配置指南

## 📋 当前配置状态

### 版本信息
- **Docsify 版本**: 4.x (通过CDN加载最新4.x版本)
- **配置状态**: ✅ 正常
- **最后更新**: 2026-03-04

### 核心配置
```html
<!-- index.html 中的关键配置 -->
<script src="https://cdn.jsdelivr.net/npm/docsify@4"></script>
```

### 功能特性
1. **多语言支持**: 中文(zh_CN)和英文(en_US)双语文档
2. **侧边栏导航**: 自动加载各语言目录的侧边栏
3. **搜索功能**: 全文搜索，支持中英文
4. **封面页**: 美观的封面，支持版本显示
5. **代码高亮**: 支持Java、YAML、JSON、Bash等语言
6. **插件扩展**: 包含多个实用插件

## 🔧 已配置的插件

### 核心插件
1. **docsify-copy-code** - 代码复制功能
2. **docsify-progress** - 阅读进度条
3. **docsify-count** - 字数统计
4. **docsify-plugin-image-caption** - 图片缩放和标题
5. **docsify-line-numbers** - 代码行号显示

### 代码高亮支持
- Java (`prism-java`)
- YAML (`prism-yaml`) 
- JSON (`prism-json`)
- Bash (`prism-bash`)

## 📁 目录结构

```
WkKit_WiKi/
├── index.html              # 主配置文件
├── _coverpage.md          # 封面页
├── README.md              # 首页内容
├── zh_CN/                 # 中文文档
│   ├── _sidebar.md        # 中文侧边栏
│   ├── 快速开始/          # 快速入门指南
│   ├── 核心功能/          # 核心功能文档
│   └── ...                # 其他文档
├── en_US/                 # 英文文档
│   ├── _sidebar.md        # 英文侧边栏
│   ├── QuickStart/        # 快速入门指南
│   ├── CoreFeatures/      # 核心功能文档
│   └── ...                # 其他文档
└── images/                # 图片资源
```

## ⚙️ 配置详解

### 多语言配置
```javascript
window.$docsify = {
  // 多语言侧边栏配置
  alias: {
    '/zh_CN/(.*)/_sidebar.md': '/zh_CN/_sidebar.md',
    '/en_US/(.*)/_sidebar.md': '/en_US/_sidebar.md',
    '/zh_CN/_sidebar.md': '/zh_CN/_sidebar.md',
    '/en_US/_sidebar.md': '/en_US/_sidebar.md',
    '/_sidebar.md': '/zh_CN/_sidebar.md'  // 默认侧边栏
  }
}
```

### 搜索配置
```javascript
search: {
  maxAge: 86400000, // 缓存24小时
  paths: 'auto',    // 自动检测路径
  placeholder: {
    '/zh_CN/': '搜索',
    '/en_US/': 'Type to search',
    '/': 'Type to search',
  }
}
```

## 🚀 本地开发和测试

### 快速测试
1. 安装Python3（如果尚未安装）
2. 在项目根目录运行：
   ```bash
   python3 -m http.server 8080
   ```
3. 浏览器访问：http://localhost:8080

### 配置检查
运行配置检查脚本：
```bash
python3 check_config.py
```

## 🔄 更新和维护

### 更新Docsify版本
要更新Docsify到最新版本，修改index.html中的CDN链接：
```html
<!-- 当前版本 -->
<script src="https://cdn.jsdelivr.net/npm/docsify@4"></script>

<!-- 如果要指定具体版本 -->
<script src="https://cdn.jsdelivr.net/npm/docsify@4.13.0"></script>
```

### 添加新插件
1. 在index.html的`window.$docsify`配置中添加插件配置
2. 在页面底部添加插件脚本引用
3. 测试插件功能

### 添加新语言
1. 创建新的语言目录（如`ja_JP/`）
2. 创建对应的`_sidebar.md`文件
3. 在index.html中更新alias配置
4. 更新搜索placeholder配置

## 🐛 常见问题解决

### 1. 页面无法加载
- 检查CDN链接是否可访问
- 检查控制台错误信息
- 尝试使用本地docsify安装

### 2. 侧边栏不显示
- 检查`_sidebar.md`文件路径是否正确
- 验证alias配置中的路径映射
- 检查文件权限

### 3. 搜索功能失效
- 确认search插件已正确加载
- 检查搜索配置中的路径设置
- 清除浏览器缓存

### 4. 代码高亮不正常
- 确认prismjs已加载对应语言组件
- 检查代码块的语言标记是否正确
- 更新prismjs到最新版本

## 📈 性能优化建议

1. **使用本地构建**（可选）:
   ```bash
   npm install docsify-cli -g
   docsify serve .
   ```

2. **压缩资源**:
   - 使用minified版本的CSS和JS
   - 压缩图片资源

3. **缓存策略**:
   - 设置合适的HTTP缓存头
   - 使用CDN缓存静态资源

4. **按需加载**:
   - 对于大型文档，考虑分页加载
   - 延迟加载非关键资源

## 🔒 安全注意事项

1. **避免第三方脚本**: 已移除不必要的第三方脚本
2. **HTTPS强制**: 确保生产环境使用HTTPS
3. **内容安全策略**: 考虑添加CSP头
4. **输入验证**: 避免XSS攻击，确保用户输入安全

## 📚 相关资源

- [Docsify官方文档](https://docsify.js.org)
- [Docsify GitHub仓库](https://github.com/docsifyjs/docsify)
- [Docsify插件市场](https://docsify.js.org/#/plugins)
- [PrismJS代码高亮](https://prismjs.com)

---

**最后更新**: 2026-03-04  
**维护者**: AI助手  
**状态**: ✅ 配置正常，功能完整