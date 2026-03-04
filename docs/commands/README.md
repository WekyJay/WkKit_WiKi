# 📖 命令参考

## 命令概览

| 命令 | 说明 | 权限 |
|------|------|------|
| `/wk help` | 查看帮助 | 所有玩家 |
| `/wk info` | 插件信息 | 所有玩家 |
| `/wk reload` | 重载配置 | wkkit.reload |

## 礼包管理

### 创建礼包
```bash
/wk create <礼包ID> [显示名称] [菜单ID]
```
**权限**: `wkkit.create`

### 编辑礼包
```bash
/wk edit [礼包ID]
```
**权限**: `wkkit.edit`

### 删除礼包
```bash
/wk delete <礼包ID>
```
**权限**: `wkkit.delete`

### 查看礼包信息
```bash
/wk info <礼包ID>
```
**权限**: `wkkit.info`

### 领取礼包
```bash
/wk get <礼包ID>
```
**权限**: `wkkit.get` 或礼包特定权限

### 发放礼包
```bash
/wk give <玩家> <礼包ID>
```
**权限**: `wkkit.give`

### 发送到邮箱
```bash
/wk send <礼包ID> <目标> [数量]
```
目标可以是：`@All`、`@Online`、玩家名
**权限**: `wkkit.send`

## CDK命令

| 命令 | 说明 | 权限 |
|------|------|------|
| `/wk cdk create <数量> <礼包> <标记>` | 生成CDK | wkkit.cdk.create |
| `/wk cdk verify <CDK>` | 验证CDK | wkkit.cdk.verify |
| `/wk cdk exchange <CDK>` | 兑换CDK | wkkit.cdk.exchange |
| `/wk cdk export <标记>` | 导出CDK | wkkit.cdk.export |

## 菜单命令

| 命令 | 说明 | 权限 |
|------|------|------|
| `/wk menu` | 打开默认菜单 | wkkit.menu |
| `/wk menu <ID>` | 打开指定菜单 | wkkit.menu |
| `/wk menu create <ID> [标题]` | 创建菜单 | wkkit.menu.create |
| `/wk menu delete <ID>` | 删除菜单 | wkkit.menu.delete |
| `/wk mail` | 打开邮箱 | wkkit.mail |

## 快捷命令

```bash
/wk <礼包ID>    # 快速领取礼包（等同于 /wk get）
```

## 权限节点

### 管理员权限
- `wkkit.*` - 所有权限
- `wkkit.admin` - 管理员权限
- `wkkit.reload` - 重载配置

### 礼包管理
- `wkkit.create` - 创建礼包
- `wkkit.edit` - 编辑礼包
- `wkkit.delete` - 删除礼包
- `wkkit.give` - 发放礼包
- `wkkit.send` - 发送邮箱

### 玩家权限
- `wkkit.get` - 领取礼包
- `wkkit.menu` - 打开菜单
- `wkkit.mail` - 打开邮箱
- `wkkit.list` - 查看列表

### CDK权限
- `wkkit.cdk.*` - 所有CDK权限
- `wkkit.cdk.create` - 创建CDK
- `wkkit.cdk.exchange` - 兑换CDK
