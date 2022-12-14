# Menu Configuration

As you can see, this plugin provides you with a menu creation function, but this does not mean that it can replace the excellent menu plugin*(e.g. TrMenu,DurexMenu)*. I am not going to integrate most menu functions, but only provide basic kit distribution. Of course, kit can also be used with other menu plugins!

> First of all, we should know that all the created menus are located in the：**.\plugins\WkKit\Menus**

---

**Menu example file:**(ExampleMenus.yml)

```yaml
Menu1:
   Title: "§cKitMenu1"
   Permission: 'wkkit.Menu1'
   Type: CHEST
   Size: 6
   Slots:
      Default: 
         id: 'SLIME_BALL'
         name: 'Spilt Line'
         lore: 
         - '§8| Don't touch me!'
         slot: 0-8,45-53
      DailyKit:
         slot: 21
      MonthlyKit:
         slot: 23
Menu2:
   Title: "§aKitMenu2"
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
         # When the kit cannot be collected, icon is displayed as 'BARRIER'(Delete will be default)
         offid: 'BARRIER'
         # When the kit can be collected, lore is displayed as you set down here'(Delete will be default)
         # Surpport PlaceholderAPI
         lore:
         - '§-------------------------------'
         - '§7Kit Display Name: %wkkit_name_DailyKit%'
         - '§-------------------------------'
         - '§aRight click to show content.'
         # When the kit can't be collected, lore is displayed as you set down here'(Delete will be default)
         offlore:
         - '§7Next time：§e%wkkit_next_DailyKit%'
         - '§7Approximate time：§e%wkkit_tonext_DailyKit%'
      MonthlyKit:
         slot: 23
         offid: 'BARRIER'   
         lore:
         - '§-------------------------------'
         - '§7Kit Display Name: %wkkit_name_MonthlyKit%'
         - '§-------------------------------'
         - '§aRight click to show content.'
         offlore:
         - '§7Next time：§e%wkkit_next_MonthlyKit%'
         - '§7Approximate time：§e%wkkit_tonext_MonthlyKit%'
Menu3:
   Title: "§aKitMenu3"
   Permission: 'wkkit.Menu3'
   # Valid only when there is one kit, It's means to spread your kit content on gui.
   Spread: true
   Type: CHEST
   Size: 6
   Slots:
      Default: 
         id: 'GRASS'
         name: 'Spilt Line'
         lore: ''
         slot: 0-8,45-53
      # Collect button, if it is not added, it cannot be collected.
      Get:
         id: 'PAPER'
         slot: 49
      DailyKit:
         slot: 21
         offid: 'BARRIER'
         lore:
         - '§-------------------------------'
         - '§7Kit Display Name: %wkkit_name_DailyKit%'
         - '§-------------------------------'
         - '§aRight click to show content.'
         offlore:
         - '§7Next time：§e%wkkit_next_DailyKit%'
         - '§7Approximate time：§e%wkkit_tonext_DailyKit%'
```

The above menu is an example menu. If you don't need it, you can use the command to delete `/wk delete Menu1 `. Here we will use it as a tutorial.

### Menu1

**This is MenuID** ，To distinguish between different menus, we need specify ID when creating menus。

For example:`/wk menu create <MenuID> [Menu Display Name]`.

It should be noted here that you must not use duplicate name IDs, which will cause many errors, and of course plugins will not allow you to do that! So, If you add a duplicate name ID to the configuration, Wkkit will choose to delete one randomly.

### Title

**Menu's title** ，We can also specify one in the creation directive, but if not, the default name of the plug-in will be used, and this option can be the same as other menus without affecting each other.

Title supports color codes, and it is recommended to use **§** _(Alt + 0167)_ instead of **&** to use color codes *(will support & later)*

### Permission

**Menu permissions** ，WkKit supports menu detection permissions, which are set considering that different permission groups need to open different menus, and can also prevent some players without permissions from opening menus at will.

I want to make a special statement here. Like kit, all permission declarations of this plug-in can be customized. It doesn't have to be declared in the way of `wkkit.xxx`, but it can be defined by itself. the players also need to add corresponding permissions. However, I still suggest using a fixed prefix uniformly, so that permissions can be easily distinguished.

### Type

**GUI type** ，The Minecraft container type, I'll list all the container types below, **but be aware that some containers are not available in lower versions, make sure your version has such containers before using**：


| GUI Type                                                                                                       | Game Version               |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| [ANVIL](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#ANVIL)                 | 1.4.2 – 1.18              |
| [BARREL](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#BARREL)               | 1.14 – 1.18               |
| [BEACON](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#BEACON)               | 1.4.2 – 1.18              |
| [BLAST_FURNACE](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#BLAST_FURNACE) | 1.14 – 1.18               |
| [BREWING](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#BREWING)             | 1.0.0 – 1.18              |
| [CARTOGRAPHY](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#CARTOGRAPHY)     | 1.14 – 1.18               |
| [CHEST](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#CHEST)                 | 1.0.0 – 1.18              |
| [COMPOSTER](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#COMPOSTER)         | 1.14 – 1.18               |
| [CRAFTING](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#CRAFTING)           | 1.0.0+                     |
| [CREATIVE](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#CREATIVE)           | 1.0.0+                     |
| [DISPENSER](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#DISPENSER)         | 1.2+                       |
| [DROPPER](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#DROPPER)             | 1.5+                       |
| [ENCHANTING](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#ENCHANTING)       | 1.0.0+                     |
| [ENDER_CHEST](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#ENDER_CHEST)     | 1.3.1                      |
| [FURNACE](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#FURNACE)             | 1.0.0+                     |
| [GRINDSTONE](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#GRINDSTONE)       | 1.14+                      |
| [HOPPER](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#HOPPER)               | 1.5+                       |
| [LECTERN](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#LECTERN)             | [Educational edition]1.14+ |
| [LOOM](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#LOOM)                   | 1.14+                      |
| [MERCHANT](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#MERCHANT)           | 1.14+                      |
| [PLAYER](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#PLAYER)               | 1.0.0+                     |
| [SHULKER_BOX](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#SHULKER_BOX)     | 1.11+                      |
| [SMITHING](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#SMITHING)           | 1.14+                      |
| [SMOKER](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#SMOKER)               | 1.14+                      |
| [STONECUTTER](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#STONECUTTER)     | 1.14+                      |
| [WORKBENCH](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryType.html#WORKBENCH)         | 1.0.0+                     |

### Size

**Menu size** ，This option is only useful if the type is **CHEST**，size range **(0~6)** ，if you only need one line, just 1.

### Slots

**Meun slot** ，This is the most important configuration in the menu. If you don't configure this, your menu won't have anything。**Slots has two types，one of 'Custom Slot'，one of 'Kit Slot'.**

#### Custom Slot

As the name implies, it is a customizable Slot. We can see the parameter Default from above, which is a typical custom Slot. This parameter contains four sub-keys **name, ID, Lore, Slot**, which correspond to the Slot's **name, item ID, item Lore, and Slot location** ,respectively. *（All but Lore are required）*

Two of them need to be discussed separately:

1. id
2. slot

**id：**If you want this position to be blank, set the id to `AIR` or `NULL`, and if you want to use NBT as an icon, add the tag `[NBT]` before NBT

**Slot：** We can see that there are two symbols in `0-8, 45-53` ,one is a comma `,` and the other is a minus sign `-`.

> A comma represents the end of a position, that is, the positions where our Slot is placed are 0-8 and 45-53, while a minus sign represents the same Slot placed in a series of consecutive positions. For example, 0-8 means that Default is placed from 0 to 8, and 45-53 means from 45 to 53.

#### **Kit Slot**

In the menu, the configuration of our kit is very simple, because it is the configuration within the same plug-in, so we only need to provide the name without reconfiguration. For example, `DailyKit` and `MonthlyKit`, we just need to provide the name and the location of slot. (slot configuration is the same as custom slot)
