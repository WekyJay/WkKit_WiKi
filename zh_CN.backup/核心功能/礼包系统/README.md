# 🎁 WkKit 礼包系统详解

礼包系统是 WkKit 的核心功能，允许您创建和管理各种类型的游戏内奖励。本指南将详细介绍礼包系统的所有功能和配置选项。

## 📋 目录
1. [礼包类型介绍](#礼包类型介绍)
2. [创建礼包](#创建礼包)
3. [基础配置](#基础配置)
4. [高级功能](#高级功能)
5. [配置示例](#配置示例)
6. [最佳实践](#最佳实践)

## 🎯 礼包类型介绍

WkKit 支持多种类型的礼包，满足不同场景需求：

### 1. 普通礼包
- **特点**: 无限制领取，无冷却时间
- **适用场景**: 新手礼包、活动奖励
- **配置简单**: 只需基础配置

### 2. 冷却礼包
- **特点**: 设置领取冷却时间
- **适用场景**: 每日登录奖励、周期性奖励
- **关键配置**: `Delay` 参数

### 3. 掉落礼包
- **特点**: 从特定实体掉落
- **适用场景**: 怪物掉落、BOSS奖励
- **关键配置**: `Drop` 参数

### 4. 限制礼包
- **特点**: 限制领取次数
- **适用场景**: 限时活动、VIP礼包
- **关键配置**: `Times` 参数

### 5. 定时礼包
- **特点**: 按Cron表达式定时发放
- **适用场景**: 节日活动、定期福利
- **关键配置**: `DoCron` 参数

## 🛠️ 创建礼包

### 方法一：命令创建（推荐）
```bash
# 基本语法
/wk create <礼包名称> [展示名称] [礼包组]

# 示例：创建新手礼包
/wk create 新手礼包 "§e欢迎来到服务器！" default

# 示例：创建VIP礼包
/wk create vip礼包 "§6VIP专属礼包" vip
```

### 方法二：手动创建配置文件
1. 进入 `plugins/WkKit/kits/` 目录
2. 创建新的YAML文件，如 `newbie.yml`
3. 按照配置模板编写内容

### 方法三：复制和修改示例
1. 复制 `plugins/WkKit/kits/example.yml`
2. 重命名为您需要的名称
3. 修改配置参数

## ⚙️ 基础配置

每个礼包都包含以下基础配置项：

### 必需配置
```yaml
礼包名称:
  # 礼包显示名称（支持颜色代码）
  Name: '§e新人礼包'
  
  # 礼包图标（物品ID或自定义头颅）
  Icon: 'CHEST'
  
  # 礼包描述（支持多行）
  Lore:
    - '§b| 礼包介绍：欢迎新玩家'
    - '§b| 包含物品：'
    - '§8| 苹果 × 64'
    - '§8| 铁质套装 × 1'
  
  # 礼包内容物品
  Item:
    - '{id:"minecraft:apple",Count:64b}'
    - '{id:"minecraft:iron_helmet",Count:1b}'
```

### 可选配置
```yaml
礼包名称:
  # 权限要求（不设置则无权限限制）
  Permission: 'wkkit.礼包名称'
  
  # 经济奖励（Vault经济）
  Vault: 100.0
  
  # 执行命令（支持变量）
  Commands:
    - 'say {player} 领取了礼包！'
    - 'effect give {player} speed 60 1'
```

## 🚀 高级功能

### 1. 冷却时间配置
```yaml
每日礼包:
  Name: '§a每日登录奖励'
  # 冷却时间（秒）
  Delay: 86400  # 24小时
  Icon: 'CLOCK'
```

### 2. 领取次数限制
```yaml
限时礼包:
  Name: '§c限时活动礼包'
  # 总共可领取次数
  Times: 3
  Icon: 'REDSTONE'
```

### 3. 实体掉落配置
```yaml
怪物掉落:
  Name: '§2僵尸掉落'
  Icon: 'ZOMBIE_HEAD'
  # 掉落配置：实体名称->掉落概率(0-1.0)
  Drop:
    - 'Zombie->0.3'      # 30%概率
    - 'Skeleton->0.2'    # 20%概率
```

### 4. 定时发放配置
```yaml
节日礼包:
  Name: '§d节日特别礼包'
  # Cron表达式：每天0点发放
  DoCron: '0 0 0 * * ?'
  Icon: 'FIREWORK_ROCKET'
```

### 5. 条件限制
```yaml
条件礼包:
  Name: '§6条件礼包'
  # 需要特定权限组
  Group: 'vip'
  # 需要完成特定任务
  Require: 'quest.completed'
  # 需要在线时间（分钟）
  OnlineTime: 60
```

## 📝 配置示例

### 示例1：完整的新手礼包
```yaml
StarterKit:
  Name: '§e§l新手礼包'
  Icon: 'CHEST'
  Permission: 'wkkit.starter'
  Lore:
    - '§b══════════════════'
    - '§a欢迎来到服务器！'
    - '§7包含以下物品：'
    - '§8• 基础装备一套'
    - '§8• 食物补给'
    - '§8• 工具套装'
    - '§b══════════════════'
  Item:
    - '{id:"minecraft:iron_helmet",Count:1b}'
    - '{id:"minecraft:iron_chestplate",Count:1b}'
    - '{id:"minecraft:iron_leggings",Count:1b}'
    - '{id:"minecraft:iron_boots",Count:1b}'
    - '{id:"minecraft:iron_sword",Count:1b}'
    - '{id:"minecraft:bread",Count:16b}'
    - '{id:"minecraft:cooked_beef",Count:8b}'
  Commands:
    - 'msg {player} §a欢迎加入！请查看规则。'
    - 'money give {player} 100'
  Vault: 100.0
```

### 示例2：每日登录奖励
```yaml
DailyReward:
  Name: '§a§l每日登录'
  Icon: 'SUNFLOWER'
  Delay: 86400  # 24小时冷却
  Lore:
    - '§e每日登录奖励'
    - '§7冷却时间：24小时'
    - '§7奖励随连续登录天数增加'
  Item:
    - '{id:"minecraft:emerald",Count:1b}'
    - '{id:"minecraft:experience_bottle",Count:3b}'
  Vault: 50.0
  Commands:
    - 'bc §a玩家 {player} 领取了每日登录奖励！'
```

### 示例3：VIP专属礼包
```yaml
VIPKit:
  Name: '§6§lVIP专属'
  Icon: 'GOLD_INGOT'
  Permission: 'wkkit.vip'
  Times: 1  # 只能领取一次
  Lore:
    - '§6VIP玩家专属礼包'
    - '§7包含稀有物品'
  Item:
    - '{id:"minecraft:diamond",Count:5b}'
    - '{id:"minecraft:enchanted_golden_apple",Count:1b}'
  Vault: 500.0
```

## 💡 最佳实践

### 1. 命名规范
- 使用英文名称作为配置键
- 中文显示名称使用颜色代码美化
- 保持名称简洁明了

### 2. 权限管理
- 为每个礼包设置独立权限
- 使用权限组管理访问控制
- 定期清理未使用的权限

### 3. 性能优化
- 避免在礼包中放入过多物品
- 使用缓存减少数据库查询
- 定期清理过期礼包数据

### 4. 用户体验
- 提供清晰的礼包描述
- 设置合理的冷却时间
- 添加领取确认和反馈

### 5. 测试验证
- 创建测试礼包验证功能
- 测试不同权限组合
- 验证物品发放正确性

## 🔧 故障排除

### 常见问题
1. **礼包无法创建**
   - 检查插件权限
   - 验证YAML语法
   - 查看服务器日志

2. **物品无法发放**
   - 检查物品ID是否正确
   - 验证玩家背包空间
   - 检查经济插件集成

3. **冷却时间不生效**
   - 检查时间单位（秒）
   - 验证数据库连接
   - 查看玩家数据记录

4. **权限无效**
   - 检查权限节点拼写
   - 验证权限插件集成
   - 重新加载权限配置

### 调试命令
```bash
# 查看礼包列表
/wk kits

# 查看礼包详情
/wk info <礼包名称>

# 测试礼包发放
/wk give <玩家> <礼包名称>

# 重载配置
/wk reload
```

## 📚 下一步学习

掌握了礼包系统后，您可以继续学习：
- **[菜单系统](../菜单系统/README.md)** - 创建美观的礼包领取界面
- **[CDK兑换码](../CDK系统/README.md)** - 生成和管理兑换码
- **[PlaceholderAPI](../配置指南/PlaceholderAPI.md)** - 在消息中显示动态信息
- **[命令参考](../命令参考/README.md)** - 所有可用命令详解

---

**提示**: 建议先从简单的礼包开始，逐步添加高级功能。每次修改配置后，使用 `/wk reload` 重载配置并测试功能。