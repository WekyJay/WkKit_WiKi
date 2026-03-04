# 🎁 创建第一个礼包

本教程将引导您创建第一个礼包。

## 步骤 1：准备

确保您已经：
- 成功安装 WkKit
- 拥有 `wkkit.admin` 权限

## 步骤 2：创建礼包

### 使用命令创建

```bash
/wk create <礼包ID> [显示名称] [菜单ID]
```

例如：
```bash
/wk create welcome "新手礼包" main
```

### 参数说明

| 参数 | 说明 | 必需 |
|------|------|------|
| `<礼包ID>` | 礼包的唯一标识 | ✓ |
| `[显示名称]` | 礼包的显示名称 | ✗ |
| `[菜单ID]` | 所属菜单ID | ✗ |

## 步骤 3：编辑礼包内容

### 使用 GUI 编辑

```bash
/wk edit welcome
```

这将打开礼包编辑界面，您可以：
- 拖拽物品到界面中
- 设置物品数量
- 添加物品说明
- 设置领取条件

### 直接编辑配置文件

礼包配置文件位于 `plugins/WkKit/kits/welcome.yml`：

```yaml
name: "新手礼包"
menu: main
items:
  - material: DIAMOND
    amount: 5
    name: "&b钻石"
    lore:
      - "&7新手奖励"
  - material: GOLD_INGOT
    amount: 10
commands:
  - "give %player% exp 100"
permissions:
  - "wkkit.kit.welcome"
delay: 86400  # 冷却时间（秒）
message: "&a你领取了新手礼包！"
```

## 步骤 4：测试礼包

给自己发放礼包：
```bash
/wk give <你的ID> welcome
```

或使用领取命令（如果有权限）：
```bash
/wk get welcome
```

## 步骤 5：设置权限

使用权限管理插件（如 LuckPerms）设置：

```bash
/lp group default permission set wkkit.kit.welcome
```

## 恭喜！

您已经成功创建了第一个礼包！接下来可以学习：
- [礼包系统详解](../features/kit-system.md)
- [创建菜单](../features/menu-system.md)
- [配置 CDK](../features/cdk-system.md)
