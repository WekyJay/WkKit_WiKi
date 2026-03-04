# 📦 安装指南

## 系统要求

- **Java**: 8 或更高版本
- **服务器**: Spigot 1.8+ / Paper 1.8+ / 其他 Bukkit 分支
- **依赖**: Vault (可选，用于经济系统)

## 安装步骤

### 1. 下载插件

从 [GitHub Releases](https://github.com/WekyJay/WkKit/releases) 下载最新版本的 `WkKit.jar`。

### 2. 安装到服务器

将下载的 `WkKit.jar` 文件放入服务器的 `plugins/` 目录。

### 3. 启动服务器

启动或重启服务器，插件会自动生成配置文件。

### 4. 验证安装

在控制台或游戏中输入：
```
/wk help
```

如果看到帮助信息，说明安装成功！

## 目录结构

安装完成后，插件目录结构如下：

```
plugins/WkKit/
├── config.yml          # 主配置文件
├── messages.yml        # 消息配置
├── data.db             # SQLite数据库
├── kits/               # 礼包配置目录
│   ├── example.yml
│   └── ...
├── menus/              # 菜单配置目录
│   ├── example.yml
│   └── ...
└── lang/               # 语言文件
    ├── zh_CN.yml
    └── en_US.yml
```

## 下一步

安装完成后，请参考 [快速开始](./README.md) 创建您的第一个礼包！
