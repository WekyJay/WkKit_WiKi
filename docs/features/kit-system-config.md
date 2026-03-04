# ⚙️ 礼包配置详解

## 配置参数参考

### 基础参数

| 参数 | 类型 | 说明 |
|------|------|------|
| `Name` | String | 礼包显示名称，支持颜色代码 § |
| `Icon` | String | 礼包图标，物品ID或特殊格式 |
| `Lore` | List | 礼包描述，多行文本 |
| `Item` | List | 礼包物品，NBT格式 |
| `Permission` | String | 领取权限节点 |
| `Commands` | List | 执行命令列表 |
| `Vault` | Number | 经济奖励金额 |

### 高级参数

| 参数 | 类型 | 说明 |
|------|------|------|
| `Delay` | Integer | 冷却时间（秒） |
| `Times` | Integer | 可领取次数 |
| `DoCron` | String | Cron表达式，定时刷新 |
| `NoRefreshFirst` | Boolean | 首次不开启，等待Cron刷新 |
| `Drop` | List | 实体掉落配置 |

## Icon 格式详解

### 基础物品
```yaml
Icon: 'CHEST'        # 箱子
Icon: 'DIAMOND'      # 钻石
Icon: 'BOOK'         # 书
```

### 头颅数据
```yaml
Icon: '[SKULL]{display:{Name:"Gift"},SkullOwner:{Id:"xxx",Properties:{textures:[{Value:"eyJ0eX..."}]}}}'
```

### CustomModelData（IA）
```yaml
Icon: '[CUSTOMDATA]GRASS:10001'
```

## 物品 NBT 格式

```yaml
Item:
  # 基础物品
  - '{id:"minecraft:diamond",Count:1b}'
  
  # 带耐久
  - '{id:"minecraft:iron_sword",Count:1b,Damage:0s}'
  
  # 带附魔
  - '{id:"minecraft:diamond_sword",Count:1b,tag:{Enchantments:[{id:"sharpness",lvl:5s}]}}'
  
  # 自定义名称
  - '{id:"minecraft:book",Count:1b,tag:{display:{Name:"{\"text\":\"秘籍\"}"}}}'
```

## 命令格式

```yaml
Commands:
  # 普通执行（玩家权限）
  - 'give {player} apple'
  
  # OP权限执行
  - 'OP:give {player} diamond 64'
  
  # 控制台执行
  - 'CMD:say {player} 领取了礼包！'
  
  # 多命令
  - 'money give {player} 100'
  - 'effect give {player} speed 60 1'
  - 'CMD:bc §a{player} 获得了新手礼包！'
```

## Drop 掉落配置

```yaml
Drop:
  # 实体类型 -> 掉落概率
  - 'Zombie->0.3'           # 僵尸 30%
  - 'Skeleton->0.2'         # 骷髅 20%
  
  # 实体名称 -> 掉落概率
  - '§a精英僵尸->0.5'       # 带颜色的名称
```

## Cron 表达式示例

```yaml
# 每天0点
DoCron: '0 0 0 * * ? *'

# 每周一0点
DoCron: '0 0 0 ? * 1 *'

# 每月1日0点
DoCron: '0 0 0 1 * ? *'

# 每小时
DoCron: '0 0 * * * ? *'
```

## 完整配置示例

```yaml
# 综合礼包示例
UltimateKit:
  Name: '§6§l终极礼包'
  Icon: '[SKULL]{display:{Name:"Ultimate"},SkullOwner:{Id:"xxx",Properties:{textures:[{Value:"eyJ0eX..."}]}}}'
  Permission: 'wkkit.ultimate'
  Times: 1
  DoCron: '0 0 0 1 * ? *'  # 每月1日刷新
  NoRefreshFirst: false
  Lore:
    - '§b═══════════════════════'
    - '§6★ 终极玩家专属礼包 ★'
    - ''
    - '§7包含：'
    - '§8• 钻石装备一套'
    - '§8• 稀有物品若干'
    - '§8• 金币奖励'
    - ''
    - '§e§l每月限领1次'
    - '§b═══════════════════════'
  Item:
    - '{id:"minecraft:diamond_helmet",Count:1b,tag:{Enchantments:[{id:"protection",lvl:4s}]}}'
    - '{id:"minecraft:diamond_chestplate",Count:1b,tag:{Enchantments:[{id:"protection",lvl:4s}]}}'
    - '{id:"minecraft:diamond_leggings",Count:1b,tag:{Enchantments:[{id:"protection",lvl:4s}]}}'
    - '{id:"minecraft:diamond_boots",Count:1b,tag:{Enchantments:[{id:"protection",lvl:4s},{id:"feather_falling",lvl:4s}]}}'
    - '{id:"minecraft:diamond_sword",Count:1b,tag:{Enchantments:[{id:"sharpness",lvl:5s},{id:"unbreaking",lvl:3s}]}}'
    - '{id:"minecraft:enchanted_golden_apple",Count:5b}'
    - '{id:"minecraft:totem_of_undying",Count:1b}'
  Commands:
    - 'CMD:say §6{player} 打开了终极礼包！'
    - 'OP:effect give {player} resistance 300 4'
    - 'money give {player} 10000'
  Vault: 10000
```
