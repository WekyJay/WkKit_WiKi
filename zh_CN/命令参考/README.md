# 📖 WkKit 命令参考手册

本手册详细介绍了 WkKit 的所有可用命令，包括命令语法、参数说明、权限要求和使用示例。

## 📋 命令概览

### 命令格式
- **主命令**: `/wkkit` 或 `/wk` (别名)
- **权限格式**: `wkkit.<命令>` 或 `wkkit.<子命令>`
- **参数说明**: `<必填参数>` `[可选参数]`

### 命令分类
1. [基础命令](#基础命令) - 插件基本信息和管理
2. [礼包管理命令](#礼包管理命令) - 礼包的创建、编辑和管理
3. [CDK命令](#cdk命令) - 兑换码的生成和管理
4. [菜单命令](#菜单命令) - 菜单界面的管理
5. [权限组命令](#权限组命令) - 礼包组的管理

## 🎯 基础命令

### 帮助命令
```bash
/wk help
/wkkit help
```
**说明**: 显示所有可用命令的列表
**权限**: 无 (所有玩家可用)
**别名**: `/?`, `/wkkit ?`

### 插件信息
```bash
/wk info
/wkkit info
```
**说明**: 显示插件版本和基本信息
**权限**: 无 (所有玩家可用)

### 重载配置
```bash
/wk reload
/wkkit reload
```
**说明**: 重载所有配置文件
**权限**: `wkkit.reload` 或 `wkkit.admin`
**注意**: 重载时不会中断正在进行的操作

### 查看礼包列表
```bash
/wk kits
/wkkit kits
```
**说明**: 列出服务器中所有可用的礼包
**权限**: `wkkit.list`
**输出格式**: 分页显示礼包名称和基本信息

## 🎁 礼包管理命令

### 创建礼包
```bash
/wk create <礼包名称> [展示名称] [礼包组]
```
**参数说明**:
- `<礼包名称>`: 礼包的内部标识（英文，无空格）
- `[展示名称]`: 礼包显示名称（支持颜色代码，可选）
- `[礼包组]`: 礼包所属分组（可选，默认default）

**示例**:
```bash
/wk create starter "§e新手礼包" default
/wk create vip礼包 "§6VIP专属"
/wk create daily
```

**权限**: `wkkit.create`

### 编辑礼包
```bash
/wk edit [礼包名称]
```
**参数说明**:
- `[礼包名称]`: 要编辑的礼包名称（可选）

**使用方式**:
1. 不带参数：打开礼包选择界面
2. 带参数：直接打开指定礼包编辑界面

**示例**:
```bash
/wk edit              # 打开礼包选择界面
/wk edit starter      # 直接编辑starter礼包
```

**权限**: `wkkit.edit`

### 删除礼包
```bash
/wk delete <礼包名称>
```
**参数说明**:
- `<礼包名称>`: 要删除的礼包名称

**安全机制**:
- 需要确认操作
- 备份被删除的礼包配置
- 记录操作日志

**示例**:
```bash
/wk delete old_kit
```

**权限**: `wkkit.delete`

### 查看礼包信息
```bash
/wk info <礼包名称>
```
**参数说明**:
- `<礼包名称>`: 要查看的礼包名称

**显示内容**:
- 礼包基本信息
- 包含物品列表
- 冷却时间设置
- 权限要求
- 使用统计

**示例**:
```bash
/wk info starter
```

**权限**: `wkkit.info`

### 领取礼包
```bash
/wk get <礼包名称>
```
**参数说明**:
- `<礼包名称>`: 要领取的礼包名称

**验证检查**:
- 权限验证
- 冷却时间检查
- 使用次数限制
- 背包空间检查

**示例**:
```bash
/wk get daily
```

**权限**: `wkkit.get` 或礼包特定权限

### 发放礼包给玩家
```bash
/wk give <玩家> <礼包名称>
```
**参数说明**:
- `<玩家>`: 目标玩家名称
- `<礼包名称>`: 要发放的礼包名称

**高级用法**:
```bash
# 给在线所有玩家发放
/wk give @all <礼包名称>

# 给指定权限组发放
/wk give @group:vip <礼包名称>

# 给离线玩家发放到邮箱
/wk give offline:玩家名 <礼包名称>
```

**示例**:
```bash
/wk give Player1 starter
/wk give @all event_reward
```

**权限**: `wkkit.give`

### 发送礼包到邮箱
```bash
/wk send <礼包名称> <目标> [数量]
```
**参数说明**:
- `<礼包名称>`: 要发送的礼包名称
- `<目标>`: 发送目标
  - `@All`: 所有玩家（包含离线）
  - `@Online`: 所有在线玩家
  - `@Me`: 自己
  - 玩家名称: 指定玩家
- `[数量]`: 发送数量（可选，默认1）

**示例**:
```bash
/wk send christmas @All
/wk send vip_reward @Online 2
/wk send gift Player1
```

**权限**: `wkkit.send`

## 🔑 CDK命令

### 创建CDK
```bash
/wk cdk create <数量> <礼包名称> <标记>
```
**参数说明**:
- `<数量>`: 要生成的CDK数量
- `<礼包名称>`: 礼包名称（多个用英文逗号分隔）
- `<标记>`: CDK分组标记

**示例**:
```bash
/wk cdk create 10 starter event_2024
/wk cdk create 5 "starter,vip" vip_event
```

**权限**: `wkkit.cdk.create`

### 验证CDK
```bash
/wk cdk verify <CDK代码>
```
**参数说明**:
- `<CDK代码>`: 要验证的CDK兑换码

**显示信息**:
- CDK有效性
- 包含的礼包
- 使用状态
- 过期时间

**示例**:
```bash
/wk cdk verify ABC123-XYZ456
```

**权限**: `wkkit.cdk.verify`

### 兑换CDK
```bash
/wk cdk exchange <CDK代码>
```
**参数说明**:
- `<CDK代码>`: 要兑换的CDK兑换码

**兑换流程**:
1. 验证CDK有效性
2. 检查使用限制
3. 发放礼包内容
4. 标记为已使用

**示例**:
```bash
/wk cdk exchange ABC123-XYZ456
```

**权限**: `wkkit.cdk.exchange`

### 导出CDK
```bash
/wk cdk export <标记>
```
**参数说明**:
- `<标记>`: CDK分组标记

**输出格式**:
- 文本文件下载
- CSV格式导出
- 控制台显示

**示例**:
```bash
/wk cdk export event_2024
```

**权限**: `wkkit.cdk.export`

## 🖥️ 菜单命令

### 打开礼包邮箱
```bash
/wk mail
```
**说明**: 打开玩家的礼包邮箱界面
**权限**: `wkkit.mail`
**功能**: 查看和领取通过邮箱发送的礼包

### 打开礼包菜单
```bash
/wk menu [菜单名称]
```
**参数说明**:
- `[菜单名称]`: 要打开的菜单名称（可选）

**使用方式**:
1. 不带参数：打开默认礼包菜单
2. 带参数：打开指定菜单

**示例**:
```bash
/wk menu
/wk menu vip_menu
```

**权限**: `wkkit.menu`

## 👥 权限组命令

### 查看礼包组列表
```bash
/wk group list
```
**说明**: 列出所有礼包组
**权限**: `wkkit.group.list`
**输出**: 组名称、包含礼包数、描述

### 创建礼包组
```bash
/wk group create <组名称> [显示名称]
```
**参数说明**:
- `<组名称>`: 组的内部标识
- `[显示名称]`: 组显示名称（可选）

**示例**:
```bash
/wk group create vip "VIP礼包组"
```

**权限**: `wkkit.group.create`

### 添加礼包到组
```bash
/wk group add <组名称> <礼包名称>
```
**参数说明**:
- `<组名称>`: 目标组名称
- `<礼包名称>`: 要添加的礼包名称

**示例**:
```bash
/wk group add vip vip_kit1
```

**权限**: `wkkit.group.manage`

## ⚡ 快捷命令

### 快速领取
```bash
/wk <礼包名称>
```
**说明**: 快速领取指定礼包（如果权限允许）
**示例**:
```bash
/wk daily      # 等同于 /wk get daily
/wk starter    # 等同于 /wk get starter
```

### 命令补全
所有命令都支持Tab键自动补全：
- 礼包名称补全
- 玩家名称补全
- 命令参数补全

## 🔧 命令权限总结

### 管理员权限
| 权限节点 | 说明 | 默认OP |
|---------|------|--------|
| `wkkit.*` | 所有权限 | ✅ |
| `wkkit.admin` | 管理员权限 | ✅ |
| `wkkit.reload` | 重载配置 | ✅ |

### 礼包管理权限
| 权限节点 | 说明 | 默认OP |
|---------|------|--------|
| `wkkit.create` | 创建礼包 | ✅ |
| `wkkit.edit` | 编辑礼包 | ✅ |
| `wkkit.delete` | 删除礼包 | ✅ |
| `wkkit.give` | 发放礼包 | ✅ |
| `wkkit.send` | 发送到邮箱 | ✅ |

### 玩家使用权限
| 权限节点 | 说明 | 默认玩家 |
|---------|------|----------|
| `wkkit.get` | 领取礼包 | ❌ |
| `wkkit.menu` | 打开菜单 | ✅ |
| `wkkit.mail` | 打开邮箱 | ✅ |
| `wkkit.list` | 查看列表 | ✅ |

### CDK权限
| 权限节点 | 说明 | 默认OP |
|---------|------|--------|
| `wkkit.cdk.*` | 所有CDK权限 | ✅ |
| `wkkit.cdk.create` | 创建CDK | ✅ |
| `wkkit.cdk.exchange` | 兑换CDK | ✅ |

## 💡 使用技巧

### 1. 批量操作
```bash
# 批量创建礼包
/wk create kit1 "礼包1"
/wk create kit2 "礼包2"
/wk create kit3 "礼包3"

# 批量发放
/wk give @all kit1
```

### 2. 变量使用
命令中支持以下变量：
- `{player}`: 玩家名称
- `{world}`: 世界名称
- `{time}`: 当前时间
- `{date}`: 当前日期

### 3. 命令链
```bash
# 创建并立即编辑
/wk create test "测试礼包" && /wk edit test

# 发放并通知
/wk give Player1 reward && msg Player1 礼包已发放！
```

### 4. 错误处理
如果命令执行失败，会显示：
- 错误原因
- 解决方案建议
- 相关文档链接

## 🚨 常见问题

### Q: 命令执行无响应
**可能原因**:
1. 权限不足
2. 命令拼写错误
3. 插件未正确加载

**解决方案**:
1. 检查权限 `lp user <玩家> permission check wkkit.<命令>`
2. 使用Tab键补全命令
3. 重载插件 `/wk reload`

### Q: 礼包无法领取
**可能原因**:
1. 冷却时间未到
2. 使用次数已达上限
3. 背包空间不足

**解决方案**:
1. 检查冷却时间 `/wk info <礼包名称>`
2. 重置玩家数据（管理员）
3. 清理玩家背包

### Q: CDK兑换失败
**可能原因**:
1. CDK已使用
2. CDK已过期
3. 礼包不存在

**解决方案**:
1. 验证CDK状态 `/wk cdk verify <CDK>`
2. 检查礼包配置
3. 联系管理员

## 📚 相关文档

- [快速开始](../快速开始/README.md) - 新手入门指南
- [礼包系统](../核心功能/礼包系统/README.md) - 礼包配置详解
- [菜单系统](../核心功能/菜单系统/README.md) - 菜单创建指南
- [CDK系统](../核心功能/CDK系统/README.md) - 兑换码管理
- [常见问题](../常见问题/README.md) - 问题解决方案

---

**提示**: 建议管理员先使用测试环境熟悉所有命令，然后再在生产服务器上使用。所有破坏性操作（如删除）都有确认机制，但仍需谨慎操作。