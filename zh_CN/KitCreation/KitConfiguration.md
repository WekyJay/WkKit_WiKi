# 礼包参数

礼包示例（ExampleKits.yml）

```yaml
# Cron表达式生成器：http://cron.ciding.cc/
NCKit:
  # 礼包的展示名
  Name: '§e新人礼包'
  # 礼包的展示图标
  Icon: 'CHEST'
  # 指令可选择CMD、OP,不填则为该玩家自己发送
  # 变量{player}代表触发指令的玩家
  Commands: 
     - 'CMD:give {player} apple'
     - 'OP:give {player} apple'
     - 'give {player} apple'
  Lore:
     - '§b| 礼包介绍： §8送给小萌新的礼物'
     - '§b| 礼包内含：'
     - '§8| 苹果 * 64'
     - '§8| 铁质套装 * 1'
     - '§8| 面包 * 10'
     - '§8| 牛奶 * 8'
  Item:
     - '{id:"minecraft:apple",Count:64b,Damage:0s}'
     - '{id:"minecraft:iron_helmet",Count:1b,Damage:0s}'
     - '{id:"minecraft:iron_chestplate",Count:1b,Damage:0s}'
     - '{id:"minecraft:iron_leggings",Count:1b,Damage:0s}'
     - '{id:"minecraft:iron_boots",Count:1b,Damage:0s}'
     - '{id:"minecraft:bread",Count:64b,Damage:0s}'
     - '{id:"minecraft:milk_bucket",Count:1b,Damage:0s}'
     - '{id:"minecraft:iron_axe",Count:1b,Damage:0s}'
     - '{id:"minecraft:iron_pickaxe",Count:1b,Damage:0s}'
     - '{id:"minecraft:iron_shovel",Count:1b,Damage:0s}'
DropKit:
   Name: '§a掉落礼包'
   # [SKULL]标签开头的为头颅数据展示。
   Icon: '[SKULL]{display:{Name:"Present (red)"},SkullOwner:{Id:"dca29a3a-76d3-4979-88a2-2da034b99212",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNmNlZjlhYTE0ZTg4NDc3M2VhYzEzNGE0ZWU4OTcyMDYzZjQ2NmRlNjc4MzYzY2Y3YjFhMjFhODViNyJ9fX0="}]}}}'
   Commands: 
     - 'CMD:give {player} apple'
     - 'OP:give {player} apple'
     - 'give {player} apple'
   # 掉落礼包特有属性（注意不要给冷却礼包添加该标签否则无法在GUI显示）
   Drop:
      #以（->）分，前面是实体的名字，后面是掉落几率（0 - 1.0）
      - '§a普通僵尸->0.5'
      - 'Sheep->0.5'
   Lore:
      - '§b| 礼包介绍： §7僵尸掉落礼包'
      - '§b| 礼包内含：'
      - '§8| 苹果 * 64'
      - '§8| 铁质套装 * 1'
   Item:
      - '{id:"minecraft:apple",Count:64b,Damage:0s}'
      - '{id:"minecraft:iron_helmet",Count:1b,Damage:0s}'
      - '{id:"minecraft:iron_chestplate",Count:1b,Damage:0s}'
      - '{id:"minecraft:iron_leggings",Count:1b,Damage:0s}'
      - '{id:"minecraft:iron_boots",Count:1b,Damage:0s}'
      - '{id:"minecraft:iron_axe",Count:1b,Damage:0s}'
      - '{id:"minecraft:iron_pickaxe",Count:1b,Damage:0s}'
      - '{id:"minecraft:iron_shovel",Count:1b,Damage:0s}'
DelayKit:
  Name: '§e冷却礼包'
  Permission: 'wkkit.DelayKit'
  Icon: 'BOOK'
  Delay: '60'
  Lore:
     - '§b| 礼包介绍： §8一分钟可以领取一次'
  Item:
     - '{id:"minecraft:apple",Count:64b,Damage:0s}'
     - '{id:"minecraft:iron_helmet",Count:1b,Damage:0s}'
     - '{id:"minecraft:iron_chestplate",Count:1b,Damage:0s}'
     - '{id:"minecraft:iron_leggings",Count:1b,Damage:0s}'
     - '{id:"minecraft:iron_boots",Count:1b,Damage:0s}'
     - '{id:"minecraft:bread",Count:64b,Damage:0s}'
     - '{id:"minecraft:milk_bucket",Count:1b,Damage:0s}'
     - '{id:"minecraft:iron_axe",Count:1b,Damage:0s}'
     - '{id:"minecraft:iron_pickaxe",Count:1b,Damage:0s}'
     - '{id:"minecraft:iron_shovel",Count:1b,Damage:0s}'
HelpKit:
  Name: '§e补助礼包'
  Permission: 'wkkit.HelpKit'
  Icon: 'BOOK'
  Times: 3
  Vault: 10
  DoCron: '0 0 0 * * ? *' # Cron表达式
  Lore:
     - '§b| 礼包介绍： §8每天可领取一次 - 总共3次'
  Item:
     - '{id:"minecraft:apple",Count:64b,Damage:0s}'
     - '{id:"minecraft:iron_helmet",Count:1b,Damage:0s}'
     - '{id:"minecraft:iron_chestplate",Count:1b,Damage:0s}'
     - '{id:"minecraft:iron_leggings",Count:1b,Damage:0s}'
     - '{id:"minecraft:iron_boots",Count:1b,Damage:0s}'
     - '{id:"minecraft:bread",Count:64b,Damage:0s}'
     - '{id:"minecraft:milk_bucket",Count:1b,Damage:0s}'
     - '{id:"minecraft:iron_axe",Count:1b,Damage:0s}'
     - '{id:"minecraft:iron_pickaxe",Count:1b,Damage:0s}'
     - '{id:"minecraft:iron_shovel",Count:1b,Damage:0s}'

DailyKit:
  Name: '§e每日礼包'
  Permission: 'wkkit.DailyKit'
  Icon: 'BOOK'
  DoCron: '0 0 0 * * ? *' # Cron表达式
  Lore:
     - '§b| 礼包介绍： §8每天可领取一次'
  Item:
     - '{id:"minecraft:apple",Count:64b,Damage:0s}'
     - '{id:"minecraft:iron_helmet",Count:1b,Damage:0s}'
     - '{id:"minecraft:iron_chestplate",Count:1b,Damage:0s}'
     - '{id:"minecraft:iron_leggings",Count:1b,Damage:0s}'
     - '{id:"minecraft:iron_boots",Count:1b,Damage:0s}'
     - '{id:"minecraft:bread",Count:64b,Damage:0s}'
     - '{id:"minecraft:milk_bucket",Count:1b,Damage:0s}'
     - '{id:"minecraft:iron_axe",Count:1b,Damage:0s}'
     - '{id:"minecraft:iron_pickaxe",Count:1b,Damage:0s}'
     - '{id:"minecraft:iron_shovel",Count:1b,Damage:0s}'
MonthlyKit:
  Name: '§e每月礼包' # 次月自动刷新
  Permission: 'wkkit.MonthlyKit'
  Icon: 'BOOK'
  DoCron: '0 0 0 1 * ? *' # Cron表达式
  Commands: 
     - 'CMD:give {player} apple'
     - 'OP:give {player} apple'
     - 'give {player} apple'
  Lore:
     - '§b| 礼包介绍： §8每月可领取一次'
  Item:
     - '{id:"minecraft:apple",Count:64b,Damage:0s}'
     - '{id:"minecraft:iron_helmet",Count:1b,Damage:0s}'
     - '{id:"minecraft:iron_chestplate",Count:1b,Damage:0s}'
     - '{id:"minecraft:iron_leggings",Count:1b,Damage:0s}'
     - '{id:"minecraft:iron_boots",Count:1b,Damage:0s}'
     - '{id:"minecraft:bread",Count:64b,Damage:0s}'
     - '{id:"minecraft:milk_bucket",Count:1b,Damage:0s}'
     - '{id:"minecraft:iron_axe",Count:1b,Damage:0s}'
     - '{id:"minecraft:iron_pickaxe",Count:1b,Damage:0s}'
     - '{id:"minecraft:iron_shovel",Count:1b,Damage:0s}'
```

## NCKit(不可删除)

**礼包名**而非礼包的展示名称，类似地还有HelpKit、DelayKit、MonthlyKit等等，这些名称是我们在使用`/wk create <礼包名>`中指定的，这个礼包名就是这里的名称。

### Name(不可删除)

**礼包的展示名** ，即我们在拿到礼包实体时展示的名称。可以是任意名，并且可以添加颜色代码，可以在创建礼包时指定名称，例如：`/wk create testkit &a测试礼包`

### Permission

**礼包权限** ，使用礼包或领取礼包时需要拥有的权限，可以任意指定权限。例如：`vip.kit1` 或 `wkkit.kit1`

### Icon (不可删除)

**礼包展示图标** ，在这里我们可以设置礼包以什么样的形式展示出来，如 `Icon:'BOOK'` 就是用书来作为图标来展示我们的礼包。这个BOOK就是游戏中的ID，1.12.2及以下可以使用数字ID，高版本尽量使用英文ID。

当然你可能想问我们如何做到用头颅数据做礼包展示图，那么请看DropKit礼包的数据：

```yaml
DropKit:
   Name: '§a掉落礼包'
   Icon: '[SKULL]{display:{Name:"Present (red)"},SkullOwner:{Id:"dca29a3a-76d3-4979-88a2-2da034b99212",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNmNlZjlhYTE0ZTg4NDc3M2VhYzEzNGE0ZWU4OTcyMDYzZjQ2NmRlNjc4MzYzY2Y3YjFhMjFhODViNyJ9fX0="}]}}}'
```

以 **[SKULL]** 开头后接**头颅数据**就可以识别为一个以头颅数据做图标的礼包，你可以杀一个僵尸试试看效果，前提是你没有删除我的默认配置文件。（具体使用方法可以在[常见问题](zh_CN/General/Questions.md)中找到）

### Delay

**该项不影响菜单领取，仅在玩家获得实体礼包右键使用**

礼包冷却，填写了此项，每次玩家领取的时候就需要等待冷却时间结束后才能再次使用。这个其实是最开始的礼包冷却系统，但后来有了Cron自动刷新代替，已经用得很少了，除非你想短时间限制玩家打开礼包的间隔可以使用。

> **注意：**这个礼包冷却关服后会自动丢弃所有数据，也就是说，不建议用来长时间冷却礼包，其使用机制也不同于DoCron礼包刷新。如果想要制作每周每月等礼包，推荐使用Docron自动刷新。

### Times

**礼包领取次数** ，该选项设置礼包的领取次数，即礼包放入菜单，如果数值设置为3，玩家领取三次后无法再继续领取。如果不设置默认为无限次领取。


### Vault

**礼包领取费用** ，该选项设置领取礼包需要花费的金币，如果玩家有能力支付则扣除费用，否则无法领取。

### DoCron

**礼包自动刷新** ，如果开启了这项，那么礼包将在设定好的特定时间或每一个特定时间点自动刷新礼包的领取状态，例如每周一晚零点自动刷新，可以作为每周礼包使用，该功能过于强大，你将会在下一节的[**Cron表达式**](zh_CN/KitCreation/CronExpression.md)中学习到如何配置参数。

### Drop

**礼包掉落** ，设置后就可以在指定的实体身上掉落该礼包，拾取到的玩家右键可以领取礼包，但是掉落礼包只检查**玩家权限**和 **冷却值** ，也就是说，即使我给每日礼包添加添加该属性，掉落出来的礼包只是礼包内容等同于每日礼包的礼包，其领取方式不计入玩家领取数据，所以使用的时候一定要知道这一点。

具体使用方法：

```yaml
Drop:
  #以（->）分，前面是实体的名字，后面是掉落几率（0 - 1.0）
  - '§a普通僵尸->0.5'
  - 'Sheep->0.5'
```

这个指定可以是**实体类型**或 **实体的名字** ，但是一定要加上颜色代码，因为也会检测到。~~(可以试试指定给自己的名字XD)~~

### Commands

礼包执行的指令，你可以以玩家、OP或Cmd的方式执行指令，当玩家打开礼包的时候就会执行指令。

如果你想让基于一个物品给玩家，我们可以用 `{player}` 代表执行命令的玩家自己，格式如下：

```yaml
# 指令可选择CMD、OP,不填则为该玩家自己发送
# 变量{player}代表触发指令的玩家
Commands: 
  - 'CMD:give {player} apple'
  - 'OP:give {player} apple'
  - 'give {player} apple'
```

### Lore

**礼包词条** ，我姑且叫词条吧，RPG应该都是这样说的，你可以添加任意条，但格式一定要正确！

### Item(不可删除)

礼包内容，也就是礼包里包含哪些礼物，这个选项，不明白NBT的一定不要去动它，如果你需要修改的话请使用`/wk edit`打开礼包编辑，修改更方便!
