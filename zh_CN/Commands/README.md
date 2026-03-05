# WkKit v1.5.0 命令文档

> 本文档描述 WkKit v1.5.0 新版命令系统的使用方法
> 更新时间: 2026-03-05

## 📋 命令概览

| 命令 | 权限 | 功能描述 |
|------|------|----------|
| `/wkkit info` | wkkit.info | 查看礼包详情 |
| `/wkkit give` | wkkit.give | 发放礼包 |
| `/wkkit create` | wkkit.create | 创建礼包 |
| `/wkkit delete` | wkkit.delete | 删除礼包 |
| `/wkkit edit` | wkkit.edit | 编辑礼包 |
| `/wkkit reload` | wkkit.reload | 重载配置 |
| `/wkkit list` | wkkit.list | 列出礼包 |

---

## 🔍 查看礼包详情

### 基本信息
- **命令**: `/wkkit info <礼包名>`
- **别名**: `/wkkit 查看`, `/wkkit information`, `/wkkit 详情`
- **权限**: `wkkit.info`

### 功能
显示礼包的详细信息，包括：
- 礼包ID和显示名称
- 图标和自定义模型ID
- 物品列表和数量
- 命令列表
- 权限要求
- 冷却时间
- 使用次数限制
- 计划任务
- 经济奖励
- MythicMobs奖励
- 描述信息
- 统计信息

### 示例
```bash
/wkkit info starter_kit
```

---

## 🎁 发放礼包

### 基本信息
- **命令**: `/wkkit give <礼包名> [玩家]`
- **别名**: `/wkkit 发放`, `/wkkit send`, `/wkkit 授予`
- **权限**: `wkkit.give`

### 功能
给玩家发放指定礼包，包含完整验证：
- 权限检查
- 冷却时间检查
- 使用次数检查
- 背包空间检查
- 自动发放物品
- 执行命令
- 发放经济奖励
- 发放MythicMobs奖励

### 参数
- `<礼包名>` - 礼包ID
- `[玩家]` - 目标玩家（不指定则给自己）

### 示例
```bash
# 给自己发放
/wkkit give starter_kit

# 给其他玩家发放
/wkkit give vip_kit Steve
```

---

## ➕ 创建礼包

### 基本信息
- **命令**: `/wkkit create <礼包名>`
- **别名**: `/wkkit 新建`, `/wkkit 添加`, `/wkkit new`
- **权限**: `wkkit.create`

### 功能
基于手持物品创建新礼包：
- 使用手持物品作为图标
- 自动保存物品NBT数据
- 生成默认配置
- 创建配置文件

### 参数
- `<礼包名>` - 新礼包的ID（唯一标识）

### 示例
```bash
# 手持钻石创建vip_kit
/wkkit create vip_kit
```

---

## 🗑️ 删除礼包

### 基本信息
- **命令**: `/wkkit delete <礼包名> [--force]`
- **别名**: `/wkkit 删除`, `/wkkit remove`
- **权限**: `wkkit.delete`

### 功能
删除指定的礼包：
- 确认提示（防止误删）
- `--force` 跳过确认
- 清除缓存
- 删除配置文件

### 参数
- `<礼包名>` - 要删除的礼包ID
- `--force` - 强制删除，跳过确认

### 示例
```bash
# 带确认删除
/wkkit delete old_kit
# 提示：确认删除礼包 "old_kit"? 使用 --force 强制删除

# 强制删除
/wkkit delete old_kit --force
```

---

## ✏️ 编辑礼包

### 基本信息
- **命令**: `/wkkit edit <礼包名> <操作> [参数...]`
- **别名**: `/wkkit 编辑`, `/wkkit modify`
- **权限**: `wkkit.edit`

### 操作类型

#### 1. 添加 (add)
```bash
/wkkit edit <礼包> add item          # 添加手持物品
/wkkit edit <礼包> add command <cmd> # 添加命令
/wkkit edit <礼包> add lore <文本>   # 添加描述
```

#### 2. 设置 (set)
```bash
/wkkit edit <礼包> set name <新名称>      # 设置显示名称
/wkkit edit <礼包> set delay <秒数>       # 设置冷却时间
/wkkit edit <礼包> set permission <权限>  # 设置权限
/wkkit edit <礼包> set maxuses <次数>     # 设置使用次数 (-1为无限)
```

#### 3. 图标 (icon)
```bash
/wkkit edit <礼包> icon  # 将手持物品设为礼包图标
```

### 示例
```bash
# 设置冷却时间
/wkkit edit vip_kit set delay 3600

# 添加命令
/wkkit edit vip_kit add command "give {player} diamond 10"

# 添加描述
/wkkit edit vip_kit add lore "&6VIP专属礼包"

# 设置图标
/wkkit edit vip_kit icon
```

---

## 🔄 重载配置

### 基本信息
- **命令**: `/wkkit reload [--force]`
- **别名**: `/wkkit 重载`, `/wkkit refresh`
- **权限**: `wkkit.reload`

### 功能
重新加载所有礼包配置：
- 清空缓存
- 重新读取配置文件
- 重新加载玩家数据
- 显示统计信息

### 参数
- `--force` - 强制清空缓存后重载

### 示例
```bash
# 普通重载
/wkkit reload

# 强制重载
/wkkit reload --force
```

### 输出示例
```
开始重载礼包配置...
成功重载 15 个礼包配置
耗时: 45ms
```

---

## 📋 列出礼包

### 基本信息
- **命令**: `/wkkit list [页码] [-a|--all] [-s|--stats]`
- **别名**: `/wkkit 列表`, `/wkkit ls`
- **权限**: `wkkit.list`

### 功能
显示所有可用的礼包列表：
- 分页显示（每页10个）
- 权限过滤
- 详细统计
- 快速导航

### 参数
- `[页码]` - 显示第几页（默认第1页）
- `-a, --all` - 显示所有礼包（无视权限）
- `-s, --stats` - 显示详细统计信息

### 示例
```bash
# 列出第1页
/wkkit list

# 列出第2页
/wkkit list 2

# 显示所有礼包（包括无权限的）
/wkkit list -a

# 显示详细统计
/wkkit list -s

# 组合使用
/wkkit list 2 -a -s
```

### 输出示例
```
=== 礼包列表 (15个, 第1/2页) ===
• 新手礼包 (starter_kit) [CHEST]
• VIP礼包 (vip_kit) [DIAMOND]
• 每日奖励 (daily_reward) [GOLD_INGOT]
  物品: 5 | 命令: 2 | 冷却: 86400秒

翻页: /wkkit list 2
提示: 使用 /wkkit info <礼包名> 查看详情
```

---

## 🔐 权限系统

### 命令权限
| 权限节点 | 描述 | 默认 |
|----------|------|------|
| `wkkit.info` | 查看礼包详情 | 所有玩家 |
| `wkkit.give` | 发放礼包 | OP |
| `wkkit.give.others` | 给他人发放 | OP |
| `wkkit.create` | 创建礼包 | OP |
| `wkkit.delete` | 删除礼包 | OP |
| `wkkit.edit` | 编辑礼包 | OP |
| `wkkit.reload` | 重载配置 | OP |
| `wkkit.list` | 列出礼包 | 所有玩家 |
| `wkkit.admin` | 管理员权限 | OP |

### 礼包权限
每个礼包可以设置独立的权限：
```yaml
KitName:
  Permission: "wkkit.kit.vip"
```

---

## 💡 最佳实践

### 1. 创建礼包流程
```bash
# 1. 手持要作为图标的物品
# 2. 创建礼包
/wkkit create my_kit

# 3. 编辑礼包属性
/wkkit edit my_kit set delay 3600
/wkkit edit my_kit set permission wkkit.kit.vip

# 4. 查看效果
/wkkit info my_kit

# 5. 测试发放
/wkkit give my_kit
```

### 2. 批量管理
```bash
# 重载配置（添加新礼包后）
/wkkit reload

# 查看所有礼包
/wkkit list -a

# 删除废弃礼包
/wkkit delete old_kit --force
```

### 3. 快速操作
```bash
# 使用中文别名
/wkkit 查看 starter_kit
/wkkit 发放 vip_kit Steve
/wkkit 重载
```

---

## 🐛 故障排除

### 命令不生效
1. 检查权限 `wkkit.admin` 或对应命令权限
2. 使用 `/wkkit reload` 重载配置
3. 检查控制台错误日志

### 礼包找不到
1. 使用 `/wkkit list -a` 查看所有礼包
2. 检查礼包ID拼写
3. 确认配置文件存在

### 缓存问题
1. 使用 `/wkkit reload --force` 强制刷新
2. 重启服务器
3. 检查 `KitCache` 统计信息

---

## 📚 相关文档

- [快速开始](../QuickStart.md)
- [配置详解](../Configuration.md)
- [API文档](../API.md)
- [常见问题](../FAQ.md)

---

**文档版本**: v1.5.0  
**更新日期**: 2026-03-05  
**作者**: WkKit Team
