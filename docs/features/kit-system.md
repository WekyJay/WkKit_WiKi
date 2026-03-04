# 🎁 礼包系统

礼包系统是 WkKit 的核心功能，允许您创建和管理各种类型的游戏内奖励。

## 礼包类型

| 类型 | 特点 | 适用场景 |
|------|------|----------|
| **普通礼包** | 无限制领取 | 新手礼包、活动奖励 |
| **冷却礼包** | 设置领取冷却时间 | 每日登录奖励 |
| **掉落礼包** | 从特定实体掉落 | 怪物掉落、BOSS奖励 |
| **限制礼包** | 限制领取次数 | 限时活动、VIP礼包 |
| **定时礼包** | 按Cron表达式定时发放 | 节日活动、定期福利 |

## 创建礼包

### 命令创建（推荐）
```bash
/wk create <礼包ID> [显示名称] [菜单ID]
```

### 配置文件创建
在 `plugins/WkKit/kits/` 目录创建 YAML 文件。

## 基础配置

```yaml
StarterKit:
  Name: '§e§l新手礼包'
  Icon: 'CHEST'
  Permission: 'wkkit.starter'
  Lore:
    - '§b══════════════════'
    - '§a欢迎来到服务器！'
    - '§7包含基础装备一套'
  Item:
    - '{id:"minecraft:iron_helmet",Count:1b}'
    - '{id:"minecraft:iron_chestplate",Count:1b}'
  Commands:
    - 'msg {player} §a欢迎加入！'
  Vault: 100.0
```

### 配置项说明

| 配置项 | 说明 | 必需 |
|--------|------|------|
| `Name` | 显示名称，支持颜色代码 | ✓ |
| `Icon` | 礼包图标物品ID | ✓ |
| `Permission` | 领取权限 | ✗ |
| `Lore` | 礼包描述 | ✗ |
| `Item` | 礼包物品列表 | ✓ |
| `Commands` | 执行命令 | ✗ |
| `Vault` | 经济奖励 | ✗ |

## 高级配置

### 冷却时间
```yaml
DailyKit:
  Name: '§a每日登录'
  Delay: 86400  # 24小时（秒）
```

### 领取次数限制
```yaml
LimitedKit:
  Name: '§c限时礼包'
  Times: 3  # 总共可领取3次
```

### 定时刷新（Cron表达式）
```yaml
MonthlyKit:
  Name: '§e每月礼包'
  DoCron: '0 0 0 1 * ? *'  # 每月1日0点刷新
```

### 实体掉落
```yaml
DropKit:
  Name: '§a掉落礼包'
  Drop:
    - 'Zombie->0.3'      # 僵尸30%概率掉落
    - 'Skeleton->0.2'    # 骷髅20%概率掉落
```

## 图标高级用法

### 使用头颅
```yaml
Icon: '[SKULL]{头颅NBT数据}'
```

### 使用 CustomModelData（配合 ItemsAdder）
```yaml
Icon: '[CUSTOMDATA]GRASS:10001'
```

## 命令变量

在 `Commands` 中可使用以下变量：
- `{player}` - 玩家名称
- `{uuid}` - 玩家UUID

### 命令类型
```yaml
Commands:
  - 'give {player} apple'      # 玩家自己执行
  - 'OP:give {player} apple'   # 以OP权限执行
  - 'CMD:say 恭喜{player}!'    # 控制台执行
```

## 完整示例

### 每日登录奖励
```yaml
DailyReward:
  Name: '§a§l每日登录'
  Icon: 'SUNFLOWER'
  Delay: 86400
  Lore:
    - '§e每日登录奖励'
    - '§7冷却时间：24小时'
  Item:
    - '{id:"minecraft:emerald",Count:1b}'
    - '{id:"minecraft:experience_bottle",Count:3b}'
  Vault: 50.0
```

### VIP专属礼包
```yaml
VIPKit:
  Name: '§6§lVIP专属'
  Icon: 'GOLD_INGOT'
  Permission: 'wkkit.vip'
  Times: 1
  Item:
    - '{id:"minecraft:diamond",Count:5b}'
    - '{id:"minecraft:enchanted_golden_apple",Count:1b}'
  Vault: 500.0
```

## 最佳实践

1. **命名规范** - 使用英文ID，中文用Name展示
2. **权限管理** - 为每个礼包设置独立权限
3. **性能优化** - 避免礼包中放入过多物品
4. **用户体验** - 提供清晰的礼包描述
5. **测试验证** - 创建测试礼包验证功能

---

更多详情查看 [配置详解](./kit-system-config.md)
