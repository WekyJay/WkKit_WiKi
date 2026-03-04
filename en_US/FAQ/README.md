### Why do I get garbled code when I use the plugin?

1.8 Encoding format problems may occur. Please manually convert the configuration file to **ANSI**

### Why can't the plugin load?

First, make sure your server version is 1.8 and above. This plug-in does not support most servers below 1.8. If still unable to load, you need to consider whether the dependency plugin NBTAPI is added, if not, please go to [**Spigot**](https://www.spigotmc.org/resources/nbt-api.7939/) to download the NBTAPI required for the corresponding version.

### I don't know what the id of item, How can I get it?

Because of the different versions of the item ID, please choose the corresponding version of the ID. The simplest way is to use F3 + H to expand the tag. For example, in the game of **Glass Pane**, the display ID is ` mincraft: glass_pane `, and the remaining ` glass_pane ` is the ID of the item.

### What is NBT, can I change it directly?

It is not recommended modifying NBT directly. Please make sure you have the foundation of this aspect before using NBT label to create items;

### Why my HeadData is unuseful? What can I do when it is not normal loaded?

Also pay attention to the usage version of nbt data when using a head for Icon, for example, we create a **Red Present** head:

**Data value of 1.8 – 1.12 versions:**

```plaintext
{display:{Name:"Present (red)"},SkullOwner:{Id:"dca29a3a-76d3-4979-88a2-2da034b99212",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNmNlZjlhYTE0ZTg4NDc3M2VhYzEzNGE0ZWU4OTcyMDYzZjQ2NmRlNjc4MzYzY2Y3YjFhMjFhODViNyJ9fX0="}]}}}
```

**Data value of 1.13 – 1.15 versions:**

```plaintext
{display:{Name:"{\\"text\\":\\"Present (red)\\"}"},SkullOwner:{Id:"dca29a3a-76d3-4979-88a2-2da034b99212",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNmNlZjlhYTE0ZTg4NDc3M2VhYzEzNGE0ZWU4OTcyMDYzZjQ2NmRlNjc4MzYzY2Y3YjFhMjFhODViNyJ9fX0="}]}}}
```

**Data value of 1.16+ versions:**

```plaintext
{display:{Name:"{\\"text\\":\\"Present (red)\\"}"},SkullOwner:{Id:[I;-593323462,1993558393,-2002637408,884576786],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNmNlZjlhYTE0ZTg4NDc3M2VhYzEzNGE0ZWU4OTcyMDYzZjQ2NmRlNjc4MzYzY2Y3YjFhMjFhODViNyJ9fX0="}]}}}
```

The difference between them is the difference between **item ID** and **SkullOwnerID** and **item Data**. Of course, I have done a good job of compatibility between item ID and Data. We are not worried about this, just choose the correct version of NBT.

### Why can't I use these functions when I set the collection times or cooldown time?

In this case, we must first check whether there is a problem with our configuration. For Mc's YAML, most of the problems we judge are to put double quotation marks or single quotation marks in the parameters of numerical display, which is wrong. We should make sure that it is formatted correctly.
