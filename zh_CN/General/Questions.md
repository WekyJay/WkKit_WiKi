### 为什么我加入插件后会乱码？

1.8可能会出现编码格式问题，请手动将配置文件转为**ANSI；**

### 为什么插件无法加载？

首先要确定自己的服务器版本在1.8及以上，本插件不支持低于1.8版本的服务器。如果仍然无法加载，则需考虑是否加入了前置插件NBTAPI，如果没有加请到**原帖**下载对应版本所需的NBTAPI。

### 我不知道物品的ID是多少，要怎么找到？

由于各版本的物品ID的不同使用时请选择相对应版本的ID，最简单的方法就是使用F3+H的方式展开tag。例如**玻璃板**的游戏中展示ID是`mincraft:glass_pane`，去掉`minecraft:`,剩下的`glass_pane`就是该物品的ID；

### NBT是什么，我能直接改吗？

不建议直接修改NBT,使用NBT标签创建物品请确保你有该方面的基础；

### 为什么我的头颅数据没用？未正常加载怎么办？

使用头颅做Icon时也要注意nbt数据的使用版本，例如我们创建一个**Red Present**的头颅：

**1.8 – 1.12 版本的数据**

```plaintext
{display:{Name:"Present (red)"},SkullOwner:{Id:"dca29a3a-76d3-4979-88a2-2da034b99212",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNmNlZjlhYTE0ZTg4NDc3M2VhYzEzNGE0ZWU4OTcyMDYzZjQ2NmRlNjc4MzYzY2Y3YjFhMjFhODViNyJ9fX0="}]}}}
```

**1.13 – 1.15 版本的数据**

```plaintext
{display:{Name:"{\\"text\\":\\"Present (red)\\"}"},SkullOwner:{Id:"dca29a3a-76d3-4979-88a2-2da034b99212",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNmNlZjlhYTE0ZTg4NDc3M2VhYzEzNGE0ZWU4OTcyMDYzZjQ2NmRlNjc4MzYzY2Y3YjFhMjFhODViNyJ9fX0="}]}}}
```

**1.16+ 版本数据**

```plaintext
{display:{Name:"{\\"text\\":\\"Present (red)\\"}"},SkullOwner:{Id:[I;-593323462,1993558393,-2002637408,884576786],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNmNlZjlhYTE0ZTg4NDc3M2VhYzEzNGE0ZWU4OTcyMDYzZjQ2NmRlNjc4MzYzY2Y3YjFhMjFhODViNyJ9fX0="}]}}}
```

它们的不同之处就在于**物品ID**和**SkullOwnerID**以及**物品Data**的不同，当然物品ID和Data这块我已经做好了兼容我们无效担心这一点，只要选择正确的版本NBT就行。

### 为什么我设定了领取次数或冷却时间却无法正常使用？

遇到这种情况首先要排查我们的配置是否出现问题，对于Mc的YAML判定我们出问题的地方绝大多数是在数值显示的参数中加上双引号或单引号，这是不对的，我们应该确保它的格式正确。
