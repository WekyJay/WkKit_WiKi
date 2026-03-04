# ⚙️ 配置指南

WkKit 的配置文件说明和参考。

## 配置文件

- [配置文件详解](./config-files.md) - config.yml 完整说明

## PlaceholderAPI

- [PlaceholderAPI变量](./placeholderapi.md) - 支持的变量列表

## 快速导航

| 配置项 | 说明 | 链接 |
|--------|------|------|
| config.yml | 主配置文件 | [查看](./config-files.md) |
| PlaceholderAPI | 变量支持 | [查看](./placeholderapi.md) |

## 配置示例

### 基础配置

```yaml
Setting:
  UseCommandGet: true
  OnlineReminder: true
  Language: 'zh_CN'
```

### 数据库配置

```yaml
MySQL:
  Enable: false
  databasename: 'wkkit'
  username: 'root'
  password: 'password'
  port: '3306'
  ip: 'localhost'
```

更多配置详情查看 [配置文件详解](./config-files.md)。
