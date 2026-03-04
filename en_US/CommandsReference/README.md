# 📖 WkKit Commands Reference Manual

This manual provides detailed information about all available commands in WkKit, including command syntax, parameter descriptions, permission requirements, and usage examples.

## 📋 Command Overview

### Command Format
- **Main Command**: `/wkkit` or `/wk` (alias)
- **Permission Format**: `wkkit.<command>` or `wkkit.<subcommand>`
- **Parameter Notation**: `<required>` `[optional]`

### Command Categories
1. [Basic Commands](#basic-commands) - Plugin information and management
2. [Kit Management Commands](#kit-management-commands) - Kit creation, editing, and management
3. [CDK Commands](#cdk-commands) - Redemption code generation and management
4. [Menu Commands](#menu-commands) - Menu interface management
5. [Permission Group Commands](#permission-group-commands) - Kit group management

## 🎯 Basic Commands

### Help Command
```bash
/wk help
/wkkit help
```
**Description**: Display list of all available commands
**Permission**: None (available to all players)
**Aliases**: `/?`, `/wkkit ?`

### Plugin Information
```bash
/wk info
/wkkit info
```
**Description**: Display plugin version and basic information
**Permission**: None (available to all players)

### Reload Configuration
```bash
/wk reload
/wkkit reload
```
**Description**: Reload all configuration files
**Permission**: `wkkit.reload` or `wkkit.admin`
**Note**: Does not interrupt ongoing operations during reload

### View Kit List
```bash
/wk kits
/wkkit kits
```
**Description**: List all available kits on the server
**Permission**: `wkkit.list`
**Output Format**: Paginated display of kit names and basic information

## 🎁 Kit Management Commands

### Create Kit
```bash
/wk create <kit-name> [display-name] [kit-group]
```
**Parameter Description**:
- `<kit-name>`: Internal identifier for the kit (English, no spaces)
- `[display-name]`: Kit display name (supports color codes, optional)
- `[kit-group]`: Kit group (optional, default: default)

**Examples**:
```bash
/wk create starter "§eStarter Kit" default
/wk create vip "§6VIP Exclusive"
/wk create daily
```

**Permission**: `wkkit.create`

### Edit Kit
```bash
/wk edit [kit-name]
```
**Parameter Description**:
- `[kit-name]`: Name of kit to edit (optional)

**Usage**:
1. Without parameter: Open kit selection interface
2. With parameter: Directly open specified kit editing interface

**Examples**:
```bash
/wk edit              # Open kit selection interface
/wk edit starter      # Directly edit starter kit
```

**Permission**: `wkkit.edit`

### Delete Kit
```bash
/wk delete <kit-name>
```
**Parameter Description**:
- `<kit-name>`: Name of kit to delete

**Safety Mechanisms**:
- Requires confirmation
- Backs up deleted kit configuration
- Logs operation

**Example**:
```bash
/wk delete old_kit
```

**Permission**: `wkkit.delete`

### View Kit Information
```bash
/wk info <kit-name>
```
**Parameter Description**:
- `<kit-name>`: Name of kit to view

**Displays**:
- Basic kit information
- Included items list
- Cooldown settings
- Permission requirements
- Usage statistics

**Example**:
```bash
/wk info starter
```

**Permission**: `wkkit.info`

### Claim Kit
```bash
/wk get <kit-name>
```
**Parameter Description**:
- `<kit-name>`: Name of kit to claim

**Validation Checks**:
- Permission verification
- Cooldown time check
- Usage limit check
- Inventory space check

**Example**:
```bash
/wk get daily
```

**Permission**: `wkkit.get` or kit-specific permission

### Give Kit to Player
```bash
/wk give <player> <kit-name>
```
**Parameter Description**:
- `<player>`: Target player name
- `<kit-name>`: Name of kit to give

**Advanced Usage**:
```bash
# Give to all online players
/wk give @all <kit-name>

# Give to specific permission group
/wk give @group:vip <kit-name>

# Give to offline player's mailbox
/wk give offline:playername <kit-name>
```

**Examples**:
```bash
/wk give Player1 starter
/wk give @all event_reward
```

**Permission**: `wkkit.give`

### Send Kit to Mailbox
```bash
/wk send <kit-name> <target> [amount]
```
**Parameter Description**:
- `<kit-name>`: Name of kit to send
- `<target>`: Send target
  - `@All`: All players (including offline)
  - `@Online`: All online players
  - `@Me`: Yourself
  - Player name: Specific player
- `[amount]`: Send amount (optional, default: 1)

**Examples**:
```bash
/wk send christmas @All
/wk send vip_reward @Online 2
/wk send gift Player1
```

**Permission**: `wkkit.send`

## 🔑 CDK Commands

### Create CDK
```bash
/wk cdk create <amount> <kit-name> <tag>
```
**Parameter Description**:
- `<amount>`: Number of CDKs to generate
- `<kit-name>`: Kit name (multiple separated by English commas)
- `<tag>`: CDK group tag

**Examples**:
```bash
/wk cdk create 10 starter event_2024
/wk cdk create 5 "starter,vip" vip_event
```

**Permission**: `wkkit.cdk.create`

### Verify CDK
```bash
/wk cdk verify <cdk-code>
```
**Parameter Description**:
- `<cdk-code>`: CDK redemption code to verify

**Displays**:
- CDK validity
- Included kits
- Usage status
- Expiration time

**Example**:
```bash
/wk cdk verify ABC123-XYZ456
```

**Permission**: `wkkit.cdk.verify`

### Exchange CDK
```bash
/wk cdk exchange <cdk-code>
```
**Parameter Description**:
- `<cdk-code>`: CDK redemption code to exchange

**Exchange Process**:
1. Verify CDK validity
2. Check usage restrictions
3. Distribute kit contents
4. Mark as used

**Example**:
```bash
/wk cdk exchange ABC123-XYZ456
```

**Permission**: `wkkit.cdk.exchange`

### Export CDK
```bash
/wk cdk export <tag>
```
**Parameter Description**:
- `<tag>`: CDK group tag

**Output Format**:
- Text file download
- CSV format export
- Console display

**Example**:
```bash
/wk cdk export event_2024
```

**Permission**: `wkkit.cdk.export`

## 🖥️ Menu Commands

### Open Kit Mailbox
```bash
/wk mail
```
**Description**: Open player's kit mailbox interface
**Permission**: `wkkit.mail`
**Function**: View and claim kits sent via mailbox

### Open Kit Menu
```bash
/wk menu [menu-name]
```
**Parameter Description**:
- `[menu-name]`: Name of menu to open (optional)

**Usage**:
1. Without parameter: Open default kit menu
2. With parameter: Open specified menu

**Examples**:
```bash
/wk menu
/wk menu vip_menu
```

**Permission**: `wkkit.menu`

## 👥 Permission Group Commands

### View Kit Group List
```bash
/wk group list
```
**Description**: List all kit groups
**Permission**: `wkkit.group.list`
**Output**: Group name, included kits count, description

### Create Kit Group
```bash
/wk group create <group-name> [display-name]
```
**Parameter Description**:
- `<group-name>`: Internal identifier for group
- `[display-name]`: Group display name (optional)

**Example**:
```bash
/wk group create vip "VIP Kit Group"
```

**Permission**: `wkkit.group.create`

### Add Kit to Group
```bash
/wk group add <group-name> <kit-name>
```
**Parameter Description**:
- `<group-name>`: Target group name
- `<kit-name>`: Name of kit to add

**Example**:
```bash
/wk group add vip vip_kit1
```

**Permission**: `wkkit.group.manage`

## ⚡ Quick Commands

### Quick Claim
```bash
/wk <kit-name>
```
**Description**: Quickly claim specified kit (if permissions allow)
**Examples**:
```bash
/wk daily      # Equivalent to /wk get daily
/wk starter    # Equivalent to /wk get starter
```

### Command Completion
All commands support Tab key auto-completion:
- Kit name completion
- Player name completion
- Command parameter completion

## 🔧 Command Permissions Summary

### Administrator Permissions
| Permission Node | Description | Default OP |
|----------------|-------------|------------|
| `wkkit.*` | All permissions | ✅ |
| `wkkit.admin` | Administrator permissions | ✅ |
| `wkkit.reload` | Reload configuration | ✅ |

### Kit Management Permissions
| Permission Node | Description | Default OP |
|----------------|-------------|------------|
| `wkkit.create` | Create kits | ✅ |
| `wkkit.edit` | Edit kits | ✅ |
| `wkkit.delete` | Delete kits | ✅ |
| `wkkit.give` | Give kits | ✅ |
| `wkkit.send` | Send to mailbox | ✅ |

### Player Usage Permissions
| Permission Node | Description | Default Player |
|----------------|-------------|----------------|
| `wkkit.get` | Claim kits | ❌ |
| `wkkit.menu` | Open menu | ✅ |
| `wkkit.mail` | Open mailbox | ✅ |
| `wkkit.list` | View list | ✅ |

### CDK Permissions
| Permission Node | Description | Default OP |
|----------------|-------------|------------|
| `wkkit.cdk.*` | All CDK permissions | ✅ |
| `wkkit.cdk.create` | Create CDK | ✅ |
| `wkkit.cdk.exchange` | Exchange CDK | ✅ |

## 💡 Usage Tips

### 1. Batch Operations
```bash
# Batch create kits
/wk create kit1 "Kit 1"
/wk create kit2 "Kit 2"
/wk create kit3 "Kit 3"

# Batch distribution
/wk give @all kit1
```

### 2. Variable Usage
Commands support the following variables:
- `{player}`: Player name
- `{world}`: World name
- `{time}`: Current time
- `{date}`: Current date

### 3. Command Chaining
```bash
# Create and immediately edit
/wk create test "Test Kit" && /wk edit test

# Give and notify
/wk give Player1 reward && msg Player1 Kit distributed!
```

### 4. Error Handling
If command execution fails, it displays:
- Error reason
- Solution suggestions
- Relevant documentation links

## 🚨 Common Issues

### Q: Command execution no response
**Possible Causes**:
1. Insufficient permissions
2. Command spelling error
3. Plugin not loaded correctly

**Solutions**:
1. Check permissions `lp user <player> permission check wkkit.<command>`
2. Use Tab key for command completion
3. Reload plugin `/wk reload`

### Q: Cannot claim kit
**Possible Causes**:
1. Cooldown time not reached
2. Usage limit reached
3. Insufficient inventory space

**Solutions**:
1. Check cooldown time `/wk info <kit-name>`
2. Reset player data (admin only)
3. Clear player inventory

### Q: CDK exchange failed
**Possible Causes**:
1. CDK already used
2. CDK expired
3. Kit does not exist

**Solutions**:
1. Verify CDK status `/wk cdk verify <CDK>`
2. Check kit configuration
3. Contact administrator

## 📚 Related Documentation

- [Quick Start](../QuickStart/README.md) - Beginner's guide
- [Kit System](../CoreFeatures/KitSystem/README.md) - Detailed kit configuration
- [Menu System](../CoreFeatures/MenuSystem/README.md) - Menu creation guide
- [CDK System](../CoreFeatures/CDKSystem/README.md) - Redemption code management
- [FAQ](../FAQ/README.md) - Problem solutions

---

**Tip**: It's recommended for administrators to familiarize themselves with all commands in a test environment before using them on a production server. All destructive operations (like deletion) have confirmation mechanisms, but caution is still advised.