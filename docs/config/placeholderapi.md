# 🔌 PlaceholderAPI

WkKit 支持 PlaceholderAPI，可在其他插件或菜单中使用以下变量。

## 可用变量

### 礼包信息
| 变量 | 说明 |
|------|------|
| `%wkkit_name_<礼包ID>%` | 礼包显示名称 |
| `%wkkit_icon_<礼包ID>%` | 礼包图标 |
| `%wkkit_lore_<礼包ID>%` | 礼包描述 |

### 领取状态
| 变量 | 说明 |
|------|------|
| `%wkkit_next_<礼包ID>%` | 下次可领取时间 |
| `%wkkit_tonext_<礼包ID>%` | 距离下次领取的剩余时间 |
| `%wkkit_available_<礼包ID>%` | 是否可领取 (true/false) |
| `%wkkit_times_<礼包ID>%` | 剩余领取次数 |

### 玩家统计
| 变量 | 说明 |
|------|------|
| `%wkkit_total_received%` | 玩家领取礼包总数 |
| `%wkkit_total_kits%` | 服务器礼包总数 |

## 使用示例

### 在菜单中显示
```yaml
lore:
  - '§7礼包: %wkkit_name_DailyKit%'
  - '§7下次领取: %wkkit_next_DailyKit%'
  - '§7剩余时间: %wkkit_tonext_DailyKit%'
```

### 在聊天中显示
```
/ say 我的每日礼包: %wkkit_name_DailyKit%
```

### 在计分板中显示
```yaml
lines:
  - '§e每日礼包'
  - '%wkkit_name_DailyKit%'
  - '§7剩余: %wkkit_tonext_DailyKit%'
```
