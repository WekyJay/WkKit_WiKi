# Kit Configuration

Kit Example（ExampleKits.yml）

```yaml
# Cron expression online generator：https://freeformatter.com/cron-expression-generator-quartz.html
NCKit:
  # Display Name of kit.
  Name: '§eNewComer Gift'
  # Display icon of kit.
  # If you want to use a skull as a display icon, please look at the example of DropKit.
  Icon: 'CHEST'
  # CMD and OP can be selected for the command, and if it is not filled out, it will be sent by the player himself.
  # The variable {player} represents the player who triggered the command.
  Commands: 
     - 'CMD:give {player} apple'
     - 'OP:give {player} apple'
     - 'give {player} apple'
  Lore:
     - '§b| Lore： §8A gift for newcomer.'
     - '§b| Content:'
     - '§8| Apple * 64'
     - '§8| Iron suit * 1'
     - '§8| Bread * 10'
     - '§8| milk * 8'
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
   Name: '§aDrop Gift'
   # Drop kit currently only supports SkullIcon.
   Icon: '[SKULL]{display:{Name:"Present (red)"},SkullOwner:{Id:"dca29a3a-76d3-4979-88a2-2da034b99212",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNmNlZjlhYTE0ZTg4NDc3M2VhYzEzNGE0ZWU4OTcyMDYzZjQ2NmRlNjc4MzYzY2Y3YjFhMjFhODViNyJ9fX0="}]}}}'
   Commands: 
     - 'CMD:give {player} apple'
     - 'OP:give {player} apple'
     - 'give {player} apple'
   # Drop kit unique attribute.
   Drop:
      # In (->), preceded by the name of the entity, followed by the drop probability (0-1.0).
      - '§aZombie->0.5'
      - 'Sheep->0.5'
   Lore:
      - '§b| Lore： §7The kit dropped by zombies or sheep.'
      - '§b| Content：'
      - '§8| Apple * 64'
      - '§8| Iron suit * 1'
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
  Name: '§CoolDown Gift'
  Permission: 'wkkit.DelayKit'
  Icon: 'BOOK'
  Delay: '60'
  Lore:
     - '§b| Lore： §8You can get it once a minute.'
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
  Name: '§eHelp Gift'
  Permission: 'wkkit.HelpKit'
  Icon: 'BOOK'
  Times: 3
  Vault: 10
  DoCron: '0 0 0 * * ? *' # Cron expression
  Lore:
     - '§b| Lore： §8You can get it once a day - total 3 times.'
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
  Name: '§eDaily Gift'
  Permission: 'wkkit.DailyKit'
  Icon: 'BOOK'
  DoCron: '0 0 0 * * ? *'
  Lore:
     - '§b| Lore： §8You can get it once a day.'
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
  Name: '§eMonthly Gift'
  Permission: 'wkkit.MonthlyKit'
  Icon: 'BOOK'
  DoCron: '0 0 0 1 * ? *' # Automatic refresh next month
  Commands: 
     - 'CMD:give {player} apple'
     - 'OP:give {player} apple'
     - 'give {player} apple'
  Lore:
     - '§b| Lore： §8You can get it once a month.'
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
SpecifiedDateKit:
  Name: '§eSpecified Date Kit'
  Permission: 'wkkit.ServerKit'
  Icon: 'BOOK'
  DoCron: '0 0 0 1 * ? *'
  # Do not open the kit for the first time, and open it automatically after the specified date.
  NoRefreshFirst: true 
  Commands:
    - 'CMD:give {player} apple'
    - 'OP:give {player} apple'
    - 'give {player} apple'
  Lore:
    - '§b| 礼包介绍： §8指定日期和时间可领取'
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

## NCKit(Do not delete)

**KitID** is not a display name，Similarly, there are HelpKit, DelayKit, MonthlyKit, and so on, which we specified using `/wk create < KitID > ` and this 'KitID' is the name here.

### Name(Do not delete)

**Display Name** ,That is, the name we show when we get the item of the kit. It can be any name, and color codes can be added. You can specify a name when creating a gift package, for example:`/wk create testkit &aTest Gift`

### Permission

**Kit Permission** ,You can specify any permissions you need to have when using kit or collecting kit. For example:`vip.kit1` or `wkkit.kit1`

### Icon(Do not delete)

**Kit Display Icon** ，Here we can set what form the kit will be displayed, such as `Icon:'BOOK'` Is to use books as icons to show our kit.

Of course, you may want to ask me how to use skull data to make kit icon, so please look at DropKit data:

```yaml
DropKit:
   Name: '§aDrop Gift'
   Icon: '[SKULL]{display:{Name:"Present (red)"},SkullOwner:{Id:"dca29a3a-76d3-4979-88a2-2da034b99212",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNmNlZjlhYTE0ZTg4NDc3M2VhYzEzNGE0ZWU4OTcyMDYzZjQ2NmRlNjc4MzYzY2Y3YjFhMjFhODViNyJ9fX0="}]}}}'
```

Beginning with **[SKULL]** followed by **SKULL data** can be recognized as a kit with SKULL data as an icon,You can kill a zombie and try it out If you didn't delete my default profile.(The specific usage can be found in **[Questions](en_US/General/Questions.md)**)

BTW, if you want to use `CustomModelData` with IA, you can configure it like the following code:
```yaml
AKit:
   Name: '§aCustom IA icon'
   Icon: '[CUSTOMDATA]{MaterialID}:{Data Value}'
```
### Delay

**This item does not affect the menu collection, and is only used when the player gets the Kit Item right click.**

Cool-Down Kit，Fill in this tag, and every time the player collects it, he needs to wait for the cooldown to end before using it again.This is actually the initial kit cooling system, but it has been replaced by Cron automatic refresh, which is rarely used, unless you want to limit the interval between players opening gift packages for a short time.

> **Attention:** This Cool-Down kit will automatically discard all data after the server is shut down, that is, it is not recommended to cool the kit for a long time, and its use mechanism is different from DoCron refresh. If you want to make weekly and monthly kits, it is recommended to use Docron to automatically refresh.

### Times

**The number of times a Kit can be collected** ，This tag sets the number of times the kit can be collected, that is, the kit is put into the menu. If the value is set to 3, the player cannot continue to collect it after receiving it three times. If it is not set, it defaults to unlimited collection.


### Vault

**Kit collection fee** ，This option sets the cost required to receive the kit. If the player has the ability to pay, the fee will be deducted, otherwise it cannot be claimed.

### DoCron

**Use cron expression automatic refresh kit** ，If fill in this tag，then the kit will automatically refresh the collection status of the kit at a set specific time or every specific time point，For example, the automatic refresh at zero every night can be used as a weekly kit, which is too powerful，you will learn it in the next page [**CronExpression**](en_US/KitCreation/CronExpression.md).

### NoRefreshFirst
**Kit will not be enabled for the first time**. After the first configuration, kit collection will not be enabled until the date set by Docron is refreshed, and the first collection will be enabled.

### Drop

**Kit Drop from some where.** After setting, you can drop the kit on the specified entity, and the picked player can get the kit by right clicking. However, dropping kit only checks **Permission** and **Delay**, that is to say, even if I add this attribute to 'DailyKit', the dropped kit is only a kit whose content is equivalent to 'DailyKit', and its collected data is not stored in `playerdata.yml`, so you must know this when using it.

**Basic usage：**

```yaml
Drop:
   # In (->), preceded by the name of the entity, followed by the drop probability (0-1.0).
   - '§aZombie->0.5'
   - 'Sheep->0.5'
```

This specification can be **Entity Type** or **Entity Name** ，However, if it is an entity name, you must add a color code, because it will also be detected.~~(You can try your own name XD)~~

### Commands

CMD and OP can be selected for the command, and if it is not filled out, it will be sent by the player himself.

```yaml
  # CMD and OP can be selected for the command, and if it is not filled out, it will be sent by the player himself.
  # The variable {player} represents the player who triggered the command.
Commands: 
  - 'CMD:give {player} apple'
  - 'OP:give {player} apple'
  - 'give {player} apple'
```

### Lore

**Kit Lore** ，No much to say, you can add many, but the format must be correct!

### Item(Do not delete)

**Kit Content**, that is, what gifts are included in the kit, if you don't understand NBT must not modify it, if you need to modify it, please use `/wk edit ` to open the kit editor, it is more convenient to modify!
