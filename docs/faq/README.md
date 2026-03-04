# ❓ 常见问题

## 编码问题

### 为什么我加入插件后会乱码？

**1.8版本**可能出现编码格式问题，请手动将配置文件转为 **ANSI** 格式。

## 加载问题

### 为什么插件无法加载？

1. 确认服务器版本在 **1.8及以上**
2. 检查是否安装了前置插件 **NBTAPI**
3. 查看控制台错误日志

## 物品ID

### 如何找到物品ID？

使用 **F3+H** 展开高级提示框，鼠标悬停物品查看ID。

例如：
- 游戏中显示：`minecraft:glass_pane`
- 配置中使用：`glass_pane`

## NBT数据

### NBT是什么，我能直接改吗？

::: warning 不建议
没有NBT基础请不要直接修改，建议使用游戏内 `/wk edit` 命令编辑。
:::

### 头颅数据在不同版本的区别

不同版本的NBT格式不同，请根据服务器版本选择：

**1.8 – 1.12:**
```
{display:{Name:"Present"},SkullOwner:{Id:"...",Properties:{textures:[{Value:"..."}]}}}
```

**1.13 – 1.15:**
```
{display:{Name:"{\"text\":\"Present\"}"},SkullOwner:{Id:"...",Properties:{textures:[{Value:"..."}]}}}
```

**1.16+:**
```
{display:{Name:"{\"text\":\"Present\"}"},SkullOwner:{Id:[I;...],Properties:{textures:[{Value:"..."}]}}}
```

## 配置问题

### 为什么领取次数或冷却时间无法正常使用？

检查配置格式：
- ❌ 错误：`Delay: '60'`
- ✅ 正确：`Delay: 60`

数值参数**不要加引号**！

## 菜单兼容

### 在 TrMenu 中无法打开菜单？

❌ 错误用法：
```yaml
console: wk menu open Menu1
```

✅ 正确用法：
```yaml
command: wk menu open Menu1
# 或
op: wk menu open Menu1
```
