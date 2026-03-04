# 🎁 WkKit Kit System Detailed Guide

The kit system is the core functionality of WkKit, allowing you to create and manage various types of in-game rewards. This guide provides detailed information about all features and configuration options of the kit system.

## 📋 Table of Contents
1. [Kit Types Introduction](#kit-types-introduction)
2. [Creating Kits](#creating-kits)
3. [Basic Configuration](#basic-configuration)
4. [Advanced Features](#advanced-features)
5. [Configuration Examples](#configuration-examples)
6. [Best Practices](#best-practices)

## 🎯 Kit Types Introduction

WkKit supports multiple types of kits to meet different scenario requirements:

### 1. Normal Kits
- **Features**: Unlimited claims, no cooldown
- **Use Cases**: New player kits, event rewards
- **Simple Configuration**: Only basic configuration needed

### 2. Cooldown Kits
- **Features**: Set claim cooldown time
- **Use Cases**: Daily login rewards, periodic rewards
- **Key Configuration**: `Delay` parameter

### 3. Drop Kits
- **Features**: Drop from specific entities
- **Use Cases**: Monster drops, BOSS rewards
- **Key Configuration**: `Drop` parameter

### 4. Limited Kits
- **Features**: Limit claim times
- **Use Cases**: Time-limited events, VIP kits
- **Key Configuration**: `Times` parameter

### 5. Scheduled Kits
- **Features**: Scheduled distribution via Cron expressions
- **Use Cases**: Holiday events, regular benefits
- **Key Configuration**: `DoCron` parameter

## 🛠️ Creating Kits

### Method 1: Command Creation (Recommended)
```bash
# Basic syntax
/wk create <kit-name> [display-name] [kit-group]

# Example: Create new player kit
/wk create starter "§eWelcome to the Server!" default

# Example: Create VIP kit
/wk create vip "§6VIP Exclusive Kit" vip
```

### Method 2: Manual Configuration File Creation
1. Navigate to `plugins/WkKit/kits/` directory
2. Create a new YAML file, e.g., `newbie.yml`
3. Write content according to configuration template

### Method 3: Copy and Modify Examples
1. Copy `plugins/WkKit/kits/example.yml`
2. Rename to your desired name
3. Modify configuration parameters

## ⚙️ Basic Configuration

Each kit includes the following basic configuration items:

### Required Configuration
```yaml
KitName:
  # Kit display name (supports color codes)
  Name: '§eNew Player Kit'
  
  # Kit icon (item ID or custom skull)
  Icon: 'CHEST'
  
  # Kit description (supports multiple lines)
  Lore:
    - '§b| Kit Introduction: Welcome new players'
    - '§b| Contains:'
    - '§8| Apple × 64'
    - '§8| Iron Armor Set × 1'
  
  # Kit content items
  Item:
    - '{id:"minecraft:apple",Count:64b}'
    - '{id:"minecraft:iron_helmet",Count:1b}'
```

### Optional Configuration
```yaml
KitName:
  # Permission requirement (no restriction if not set)
  Permission: 'wkkit.kitname'
  
  # Economy reward (Vault economy)
  Vault: 100.0
  
  # Execute commands (supports variables)
  Commands:
    - 'say {player} claimed a kit!'
    - 'effect give {player} speed 60 1'
```

## 🚀 Advanced Features

### 1. Cooldown Time Configuration
```yaml
DailyKit:
  Name: '§aDaily Login Reward'
  # Cooldown time (seconds)
  Delay: 86400  # 24 hours
  Icon: 'CLOCK'
```

### 2. Claim Limit Configuration
```yaml
LimitedKit:
  Name: '§cLimited Event Kit'
  # Total claim times allowed
  Times: 3
  Icon: 'REDSTONE'
```

### 3. Entity Drop Configuration
```yaml
MonsterDrop:
  Name: '§2Zombie Drop'
  Icon: 'ZOMBIE_HEAD'
  # Drop configuration: entity name->drop probability(0-1.0)
  Drop:
    - 'Zombie->0.3'      # 30% probability
    - 'Skeleton->0.2'    # 20% probability
```

### 4. Scheduled Distribution Configuration
```yaml
HolidayKit:
  Name: '§dHoliday Special Kit'
  # Cron expression: distribute daily at 0:00
  DoCron: '0 0 0 * * ?'
  Icon: 'FIREWORK_ROCKET'
```

### 5. Condition Restrictions
```yaml
ConditionalKit:
  Name: '§6Conditional Kit'
  # Requires specific permission group
  Group: 'vip'
  # Requires completed specific quest
  Require: 'quest.completed'
  # Requires online time (minutes)
  OnlineTime: 60
```

## 📝 Configuration Examples

### Example 1: Complete New Player Kit
```yaml
StarterKit:
  Name: '§e§lStarter Kit'
  Icon: 'CHEST'
  Permission: 'wkkit.starter'
  Lore:
    - '§b══════════════════'
    - '§aWelcome to the Server!'
    - '§7Contains the following items:'
    - '§8• Basic armor set'
    - '§8• Food supplies'
    - '§8• Tool set'
    - '§b══════════════════'
  Item:
    - '{id:"minecraft:iron_helmet",Count:1b}'
    - '{id:"minecraft:iron_chestplate",Count:1b}'
    - '{id:"minecraft:iron_leggings",Count:1b}'
    - '{id:"minecraft:iron_boots",Count:1b}'
    - '{id:"minecraft:iron_sword",Count:1b}'
    - '{id:"minecraft:bread",Count:16b}'
    - '{id:"minecraft:cooked_beef",Count:8b}'
  Commands:
    - 'msg {player} §aWelcome! Please check the rules.'
    - 'money give {player} 100'
  Vault: 100.0
```

### Example 2: Daily Login Reward
```yaml
DailyReward:
  Name: '§a§lDaily Login'
  Icon: 'SUNFLOWER'
  Delay: 86400  # 24-hour cooldown
  Lore:
    - '§eDaily Login Reward'
    - '§7Cooldown: 24 hours'
    - '§7Rewards increase with consecutive login days'
  Item:
    - '{id:"minecraft:emerald",Count:1b}'
    - '{id:"minecraft:experience_bottle",Count:3b}'
  Vault: 50.0
  Commands:
    - 'bc §aPlayer {player} claimed daily login reward!'
```

### Example 3: VIP Exclusive Kit
```yaml
VIPKit:
  Name: '§6§lVIP Exclusive'
  Icon: 'GOLD_INGOT'
  Permission: 'wkkit.vip'
  Times: 1  # Can only claim once
  Lore:
    - '§6VIP Player Exclusive Kit'
    - '§7Contains rare items'
  Item:
    - '{id:"minecraft:diamond",Count:5b}'
    - '{id:"minecraft:enchanted_golden_apple",Count:1b}'
  Vault: 500.0
```

## 💡 Best Practices

### 1. Naming Conventions
- Use English names as configuration keys
- Beautify Chinese display names with color codes
- Keep names concise and clear

### 2. Permission Management
- Set independent permissions for each kit
- Use permission groups for access control
- Regularly clean up unused permissions

### 3. Performance Optimization
- Avoid placing too many items in kits
- Use caching to reduce database queries
- Regularly clean up expired kit data

### 4. User Experience
- Provide clear kit descriptions
- Set reasonable cooldown times
- Add claim confirmation and feedback

### 5. Testing and Verification
- Create test kits to verify functionality
- Test different permission combinations
- Verify item distribution correctness

## 🔧 Troubleshooting

### Common Issues
1. **Cannot Create Kit**
   - Check plugin permissions
   - Verify YAML syntax
   - Check server logs

2. **Items Not Distributed**
   - Check if item IDs are correct
   - Verify player inventory space
   - Check economy plugin integration

3. **Cooldown Not Working**
   - Check time unit (seconds)
   - Verify database connection
   - Check player data records

4. **Permissions Invalid**
   - Check permission node spelling
   - Verify permission plugin integration
   - Reload permission configuration

### Debug Commands
```bash
# View kit list
/wk kits

# View kit details
/wk info <kit-name>

# Test kit distribution
/wk give <player> <kit-name>

# Reload configuration
/wk reload
```

## 📚 Next Steps

After mastering the kit system, you can continue learning:
- **[Menu System](../MenuSystem/README.md)** - Create beautiful kit claim interfaces
- **[CDK System](../CDKSystem/README.md)** - Generate and manage redemption codes
- **[PlaceholderAPI](../Configuration/PlaceholderAPI.md)** - Display dynamic information in messages
- **[Commands Reference](../CommandsReference/README.md)** - Detailed explanation of all available commands

---

**Tip**: It's recommended to start with simple kits and gradually add advanced features. After each configuration modification, use `/wk reload` to reload configuration and test functionality.