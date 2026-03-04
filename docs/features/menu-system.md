# 📋 菜单系统

WkKit 提供了基础的菜单功能，用于展示和领取礼包。虽然功能简洁，但足以满足大部分需求，也可配合其他菜单插件使用。

::: tip 提示
所有菜单配置文件位于：`plugins/WkKit/Menus/`
:::

## 菜单示例

```yaml
Menu1:
   Title: "§c礼包菜单"
   Permission: 'wkkit.Menu1'
   Type: CHEST
   Size: 6
   Slots:
      Default: 
         id: 'SLIME_BALL'
         name: 'Spilt Line'
         lore: 
         - '§8| 装饰线'
         slot: 0-8,45-53
      DailyKit:
         slot: 21
      MonthlyKit:
         slot: 23
```

## 配置参数

### Menu ID
菜单唯一标识，创建时指定：
```bash
/wk menu create <菜单ID> [菜单标题]
```

### Title
菜单标题，支持颜色代码 `§`。

### Permission
菜单打开权限。可自定义，不一定是 `wkkit.xxx` 格式。

### Type
GUI容器类型：

| 类型 | 名称 | 版本 |
|------|------|------|
| CHEST | 箱子 | 1.0.0+ |
| HOPPER | 漏斗 | 1.5+ |
| DISPENSER | 发射器 | 1.2+ |
| DROPPER | 投掷器 | 1.5+ |
| WORKBENCH | 工作台 | 1.0.0+ |
| ... | ... | ... |

### Size
菜单大小（仅 CHEST 类型有效），取值 1-6。

### Slots
菜单槽位配置，分为**自定义Slot**和**礼包Slot**。

#### 自定义Slot
```yaml
Default: 
   id: 'SLIME_BALL'        # 物品ID
   name: '装饰线'           # 显示名称
   lore:                   # 描述
   - '§8| 装饰用'
   slot: 0-8,45-53         # 槽位位置
   custommodeldata: 10001  # IA材质（可选）
```

#### Slot 位置语法
- `0-8` - 连续位置（0到8）
- `0-8,45-53` - 多组位置（逗号分隔）
- `21` - 单个位置

#### 礼包Slot
```yaml
DailyKit:       # 礼包ID
   slot: 21
   offid: 'BARRIER'        # 不可领取时的图标
   lore:                   # 可领取时的Lore
   - '§a右键领取'
   offlore:                # 不可领取时的Lore
   - '§7冷却中...'
```

## 高级菜单示例

```yaml
Menu2:
   Title: "§a高级礼包菜单"
   Permission: 'wkkit.vip'
   Type: CHEST
   Size: 6
   Slots:
      # 装饰线
      Default: 
         id: 'GRASS'
         name: ' '
         lore: ''
         slot: 0-8,45-53
      
      # 领取按钮
      Get:
         id: 'PAPER'
         name: '§a点击领取'
         slot: 49
      
      # 每日礼包
      DailyKit:
         slot: 21
         offid: 'BARRIER'
         lore:
         - '§-------------------------------'
         - '§7礼包: %wkkit_name_DailyKit%'
         - '§-------------------------------'
         - '§a右键预览礼包'
         offlore:
         - '§7下次领取: §e%wkkit_next_DailyKit%'
         - '§7剩余时间: §e%wkkit_tonext_DailyKit%'
      
      # 每月礼包
      MonthlyKit:
         slot: 23
         offid: 'BARRIER'   
         lore:
         - '§-------------------------------'
         - '§7礼包: %wkkit_name_MonthlyKit%'
         - '§-------------------------------'
         - '§a右键预览礼包'
         offlore:
         - '§7下次领取: §e%wkkit_next_MonthlyKit%'
         - '§7剩余时间: §e%wkkit_tonext_MonthlyKit%'
```

## PlaceholderAPI 变量

在菜单中可以使用以下变量：
- `%wkkit_name_<礼包ID>%` - 礼包名称
- `%wkkit_next_<礼包ID>%` - 下次领取时间
- `%wkkit_tonext_<礼包ID>%` - 剩余时间

## 注意事项

1. **ID不能重复** - 菜单ID必须唯一
2. **版本兼容性** - 某些GUI类型只在高版本可用
3. **留空处理** - 使用 `AIR` 作为id留空
4. **NBT支持** - 在NBT前加 `[NBT]` 标记使用NBT图标

## 命令

```bash
# 创建菜单
/wk menu create <ID> [标题]

# 删除菜单
/wk menu delete <ID>

# 打开菜单
/wk menu open <ID> [玩家]

# 编辑菜单
/wk menu edit <ID>
```
