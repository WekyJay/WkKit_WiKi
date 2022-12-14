# 菜单参数

如你所见，这款插件为您提供了一个创建菜单的功能，但是这不意味着它可以替代优秀的菜单插件，我并不打算整合大多数的菜单功能，只提供基础的礼包发放。当然同样可以配合其它菜单插件使用哦！

> 首先我们要知道，所有创建的菜单都位于：**.\plugins\WkKit\Menus**

---

菜单示例文件(ExampleMenus.yml)

```yaml
Menu1:
   Title: "§c礼包菜单1"
   Permission: 'wkkit.Menu1'
   Type: CHEST
   Size: 6
   Slots:
      Default: 
         id: 'SLIME_BALL'
         name: 'Spilt Line'
         lore: 
         - '§8| 请不要点我'
         slot: 0-8,45-53
      DailyKit:
         slot: 21
      MonthlyKit:
         slot: 23
Menu2:
   Title: "§a礼包菜单2"
   Permission: 'wkkit.Menu3'
   Type: CHEST
   Size: 6
   Slots:
      Default: 
         id: 'GRASS'
         name: 'Spilt Line'
         lore: ''
         slot: 0-8,45-53
      DailyKit:
         slot: 21
         # 礼包不可领取状态时的图标（删除为默认）
         offid: 'BARRIER'
         # 礼包可领取状态时的lore（删除为默认）
         lore:
         - '§-------------------------------'
         - '§7礼包名称: %wkkit_name_DailyKit%'
         - '§-------------------------------'
         - '§a右键预览礼包'
         # 礼包不可领取状态时的lore（删除为默认）
         offlore:
         - '§7下次领取时间：§e%wkkit_next_DailyKit%'
         - '§7大致领取时间：§e%wkkit_tonext_DailyKit%'
      MonthlyKit:
         slot: 23
         offid: 'BARRIER'   
         lore:
         - '§-------------------------------'
         - '§7礼包名称: %wkkit_name_MonthlyKit%'
         - '§-------------------------------'
         - '§a右键预览礼包'
         offlore:
         - '§7下次领取时间：§e%wkkit_next_MonthlyKit%'
         - '§7大致领取时间：§e%wkkit_tonext_MonthlyKit%'
Menu3:
   Title: "§a礼包菜单3"
   Permission: 'wkkit.Menu3'
   # 当且仅当只有一个礼包时才有效
   Spread: true
   Type: CHEST
   Size: 6
   Slots:
      Default: 
         id: 'GRASS'
         name: 'Spilt Line'
         lore: ''
         slot: 0-8,45-53
      # 领取按钮，如果没添加则无法领取
      Get:
         id: 'PAPER'
         slot: 49
      DailyKit:
         slot: 21
         # 礼包不可领取状态时的图标（删除为默认）
         offid: 'BARRIER'
         # 礼包可领取状态时的lore（删除为默认）
         lore:
         - '§-------------------------------'
         - '§7礼包名称: %wkkit_name_DailyKit%'
         - '§-------------------------------'
         - '§a右键预览礼包'
         # 礼包不可领取状态时的lore（删除为默认）
         offlore:
         - '§7下次领取时间：§e%wkkit_next_DailyKit%'
         - '§7大致领取时间：§e%wkkit_tonext_DailyKit%'
```

上面这个菜单是一个示例菜单，如果你不需要可以使用指令删除`/wk delete Menu1`,这里我们用作教程讲解。

### Menu1

**菜单ID** ，用于区别不同的菜单，我们可以在创建菜单的时候指定ID。

例如，`/wk menu create <菜单名称>[菜单标题]`，其中<菜单名称>就是菜单的ID。

这里要注意的是，千万不能使用重名ID，这样会造成很多的错误，当然插件也不会允许你这样做！如果你在配置中加入重名ID，那么插件会选择随机删除一个。

### Title

**菜单标题** ，我们同样可以在创建指令中指定一个，但是如果不指定的话，将会使用插件的默认名称，此选项可以与其它菜单重名，互不影响。

Title支持颜色代码，推荐使用 **§** _（Alt + 小键盘0167）_而不是 **&** 来使用颜色代码（*后续将会支持&的）*

### Permission

**菜单权限** ，WK礼包支持菜单检测权限，这是考虑到不同的权限组需要打开不同的菜单而设置的，也可以阻止一些没有权限的玩家随意打开菜单。

这里我要特别声明一下，和礼包一样，这个插件的所有权限声明都是可以自定义的，不一定要按照`wkkit.xxx`的方式声明，可以自行定义，但是玩家也要添加相应的权限。不过我还是建议统一使用一个固定的前缀，这样易于分辨权限。

### Type

**GUI类型** ，即Minecraft容器类型，下面我将列出所有的容器类型， **但要注意有些容器在低版本是没有的，使用之前要确认你的版本有这样的容器** ：


| GUI类型                                                                                                        | GUI名称               | 游戏版本      |
| ---------------------------------------------------------------------------------------------------------------- | ----------------------- | --------------- |
| [ANVIL](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#ANVIL)                 | 铁砧                  | 1.4.2 – 1.18 |
| [BARREL](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#BARREL)               | 木桶                  | 1.14 – 1.18  |
| [BEACON](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#BEACON)               | 信标                  | 1.4.2 – 1.18 |
| [BLAST_FURNACE](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#BLAST_FURNACE) | 高炉                  | 1.14 – 1.18  |
| [BREWING](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#BREWING)             | 酿造台                | 1.0.0 – 1.18 |
| [CARTOGRAPHY](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#CARTOGRAPHY)     | 制图台                | 1.14 – 1.18  |
| [CHEST](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#CHEST)                 | 箱子                  | 1.0.0 – 1.18 |
| [COMPOSTER](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#COMPOSTER)         | 堆肥桶                | 1.14 – 1.18  |
| [CRAFTING](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#CRAFTING)           | 玩家工作台            | 1.0.0+        |
| [CREATIVE](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#CREATIVE)           | 创造栏（只有9个槽位） | 1.0.0+        |
| [DISPENSER](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#DISPENSER)         | 发射器                | 1.2+          |
| [DROPPER](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#DROPPER)             | 投掷器                | 1.5+          |
| [ENCHANTING](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#ENCHANTING)       | 附魔台                | 1.0.0+        |
| [ENDER_CHEST](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#ENDER_CHEST)     | 末影箱                | 1.3.1         |
| [FURNACE](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#FURNACE)             | 熔炉                  | 1.0.0+        |
| [GRINDSTONE](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#GRINDSTONE)       | 砂轮                  | 1.14+         |
| [HOPPER](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#HOPPER)               | 漏斗                  | 1.5+          |
| [LECTERN](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#LECTERN)             | 讲台                  | [教育版]1.14+ |
| [LOOM](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#LOOM)                   | 织布机                | 1.14+         |
| [MERCHANT](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#MERCHANT)           | 商人                  | 1.14+         |
| [PLAYER](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#PLAYER)               | 玩家背包              | 1.0.0+        |
| [SHULKER_BOX](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#SHULKER_BOX)     | 潜影盒                | 1.11+         |
| [SMITHING](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#SMITHING)           | 锻造台                | 1.14+         |
| [SMOKER](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#SMOKER)               | 烟熏炉                | 1.14+         |
| [STONECUTTER](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#STONECUTTER)     | 切石机                | 1.14+         |
| [WORKBENCH](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#WORKBENCH)         | 工作台                | 1.0.0+        |

### Size

**菜单大小** ，此选项只有当Type类型为**CHEST**的时候才有用，Size的值可选**（0~6）**，如果你只需要一行大小的GUI就填写1。

### Slots

**菜单槽位** ，这是菜单里最为重要的一个配置，如果没有配置这个那么你的菜单将不会有任何东西。**Slots分为两个部分，一个自定义slot，一个是礼包slot。**

#### 自定义Slot

顾名思义，是可以自定义的slot，我们从上面可以看到Default这个参数，它就是一个典型的自定义Slot。这个参数里包含着四个子键 **name、id、lore、slot** ，分别对应着这个slot的 **名字、物品ID、物品Lore以及Slot位置。** *（除了Lore其余都是必填项）*

其中有两个需要单独讲一下:

1. id
2. slot

id：如果你想该位置留空，请将id设置为`AIR`，如果你想使用NBT来作为图标，请在NBT前加入标记`[NBT]`

Slot： 我们可以看到`0-8,45-53`中有两个符号，一个是逗号`，` 一个是减号`-`。

> 一个逗号代表一个位置的结束，即我们这个Slot放置的位置是0-8和45-53，而减号代表一组连续的位置内放置相同的Slot。例如0-8的意思是Default放置在从0到8的位置上，45-53则是从45到53的位置上。

#### **礼包Slot**

在菜单里我们礼包的配置是非常简单的，因为是同一个插件内的配置，所以只需要提供名字而不需要重新配置。例如`DailyKit`和`MonthlyKit`，我们只需要**提供名字**和**slot的位置**即可。（slot配置与自定义slot相同）

> **注意：所有的配置请规范使用，切勿随意整活，否则插件将无法使用！**
