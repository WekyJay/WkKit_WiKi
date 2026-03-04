# 🚀 Quick Start

Welcome to WkKit! This guide will help you install and configure the plugin.

## 📦 Installation

### Step 1: Download
1. Visit [WkKit Releases](https://github.com/WekyJay/WkKit/releases)
2. Download the latest `WkKit.jar`
3. Requires **Spigot 1.8+** or **Paper 1.8+**

### Step 2: Install
1. Put `WkKit.jar` in your server's `plugins/` folder
2. Restart the server
3. Wait for config files to generate

### Step 3: Verify
```bash
/wk help
```
If you see the command list, installation is successful!

## ⚙️ Basic Configuration

### 1. First Run
Plugin auto-generates:
```
plugins/WkKit/
├── config.yml          # Main config
├── messages.yml        # Messages
├── kits/              # Kit configs
│   └── example.yml
└── menus/             # Menu configs
    └── example.yml
```

### 2. Edit Config
```yaml
database:
  type: sqlite
  file: plugins/WkKit/data.db
language: zh_CN
update-check: true
```

### 3. Create First Kit
```bash
/wk create starter "Starter Kit" default
```

## 🔧 Quick Commands

| Command | Description | Permission |
|---------|-------------|------------|
| `/wk help` | Show help | All players |
| `/wk create <name>` | Create kit | wkkit.create |
| `/wk edit <name>` | Edit kit | wkkit.edit |
| `/wk get <name>` | Get kit | wkkit.get |
| `/wk give <player> <kit>` | Give kit | wkkit.give |

---

Ready to learn more? Check out the [Kit System](../features/kit-system.md)!
