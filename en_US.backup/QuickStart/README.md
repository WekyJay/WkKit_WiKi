# 🚀 WkKit Quick Start Guide

Welcome to WkKit! This guide will help you quickly install and configure the plugin, allowing you to start using the kit system in just a few minutes.

## 📦 Installation Steps

### Step 1: Download the Plugin
1. Visit the [WkKit Releases Page](https://github.com/WekyJay/WkKit/releases)
2. Download the latest version of `WkKit.jar`
3. Ensure your server runs **Spigot 1.8+** or **Paper 1.8+**

### Step 2: Install the Plugin
1. Place `WkKit.jar` into your server's `plugins/` directory
2. Restart the server or use `/reload confirm` command
3. Wait for the plugin to generate configuration files

### Step 3: Verify Installation
```bash
# Execute in-game
/wk help

# Or execute in console
help wk
```
If you see the command list, installation is successful!

## ⚙️ Basic Configuration

### 1. First Run Configuration
On first run, the plugin automatically generates:
```
plugins/WkKit/
├── config.yml          # Main configuration file
├── messages.yml        # Messages configuration file
├── kits/              # Kit configuration directory
│   └── example.yml    # Example kit
└── menus/             # Menu configuration directory
    └── example.yml    # Example menu
```

### 2. Modify Main Configuration
Edit `plugins/WkKit/config.yml`:
```yaml
# Database configuration (default uses SQLite)
database:
  type: sqlite
  file: plugins/WkKit/data.db
  
# Language settings
language: en_US

# Update check
update-check: true
```

### 3. Create Your First Kit
1. Hold the item you want to use as the kit icon in-game
2. Execute the command:
```bash
/wk create starter "Welcome Kit" default
```
3. Open the kit editing interface to configure contents

## 🎮 Quick Experience

### Experience Flow
1. **Create Kit** → 2. **Configure Contents** → 3. **Set Permissions** → 4. **Test Distribution**

### Example: Create Daily Login Kit
```bash
# 1. Create kit
/wk create daily "Daily Login Reward" daily

# 2. Open editing interface
/wk edit daily

# 3. Add items in the interface
#    - Click item slots to add items
#    - Set economy rewards
#    - Configure command execution

# 4. Set cooldown time (24 hours)
#    Set delay: 86400 in configuration file

# 5. Test the kit
/wk get daily
```

## 🔧 Common Commands Cheat Sheet

| Command | Description | Permission |
|---------|-------------|------------|
| `/wk help` | View help | All players |
| `/wk create <name>` | Create kit | wkkit.create |
| `/wk edit <name>` | Edit kit | wkkit.edit |
| `/wk kits` | View all kits | wkkit.list |
| `/wk get <name>` | Claim kit | wkkit.get |
| `/wk give <player> <kit>` | Give kit | wkkit.give |

## 📋 Next Steps

### After Basic Configuration
1. **Learn Kit Configuration** → View [Kit Configuration Guide](../CoreFeatures/KitSystem/README.md)
2. **Create Custom Menus** → View [Menu Creation Guide](../CoreFeatures/MenuSystem/README.md)
3. **Set Permission Groups** → Use permission plugins like LuckPerms
4. **Integrate Economy System** → Configure Vault economy support

### Recommended Learning Path
```
Quick Start → Kit System → Menu System → Advanced Features
    ↓          ↓          ↓          ↓
Basic Config → Single Kit → Kit Menu → CDK/API
```

## ❓ Having Problems?

### Common Issue Solutions
1. **Commands not working** → Check permissions and command spelling
2. **Cannot claim kit** → Check cooldown time and permissions
3. **Items missing** → Check inventory space and item configuration
4. **Configuration errors** → Check YAML syntax and indentation

### Getting Help
- **View Detailed Documentation**: All chapters of this Wiki
- **View In-Game Help**: `/wk help`
- **Check Configuration Files**: Reference configuration examples
- **Contact Developer**: GitHub Issues

## 🎯 Success Indicators

After completing this guide, you should be able to:
- ✅ Successfully install and run WkKit
- ✅ Create and configure your first kit
- ✅ Use basic commands to manage kits
- ✅ Understand the basic structure of the plugin
- ✅ Know how to get further help

---

**Tip**: It's recommended to complete all steps in this Quick Start Guide before diving deeper into other features. This ensures you have a basic understanding of the plugin and avoids configuration errors.

Ready to continue? Let's move on to learning about the [Kit System](../CoreFeatures/KitSystem/README.md)!