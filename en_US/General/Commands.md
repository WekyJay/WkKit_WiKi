# Commands

---

## 🚀 WkKit v1.5.0 New Command System

**Major Improvements**:
- ✅ **Unified Validation**: Permission, parameter, type safety checks
- ✅ **Smart Completion**: Command and parameter auto-completion
- ✅ **Detailed Help**: Clear usage instructions and error messages
- ✅ **Async Support**: Kit distribution executed asynchronously
- ✅ **Backward Compatible**: Old and new command systems coexist

**Command Format**: `/wkkit` or `/wk` (alias)

---

## OP Command

### Basic Commands

| Commands                                      | Usage                                                                       | Permission | P.S.                                                                                                                                                                              |
| ----------------------------------------------- | ----------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /wk help                                      | Plugin help.                                                                | -          | Display all available commands                                                                                                                                                    |
| /wk edit                                      | Open the GUIEditor.                                                         | wkkit.edit |                                                                                                                                                                                   |
| /wk edit < KitID >                            | Open the GUIEditor for specified KitID                                      | wkkit.edit |                                                                                                                                                                                   |
| /wk mail                                      | Open the MailBox.                                                           | wkkit.mail | When OP uses the 'send' command, the received Kit will be stored here.                                                                                                            |
| /wk kits                                      | List all of the Kit ID from server.                                         | wkkit.list |                                                                                                                                                                                   |
| /wk group list                                | List all of the Kit Group ID from server.                                   | wkkit.group.list |                                                                                                                                                                                   |

### Kit Management Commands (New Version)

| Commands                                      | Usage                                                                       | Permission | P.S.                                                                                                                                                                              |
| ----------------------------------------------- | ----------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /wk info < KitID >                            | Display the specified kit content items.                                    | wkkit.info | **New**: Show detailed statistics, open preview interface                                                                                                                         |
| /wk create < KitID > [DisplayName] [KitGroup] | Create a Kit.                                                               | wkkit.create | **New**: Smart default configuration, use held item as icon                                                                                                                       |
| /wk delete < KitID >                          | Delete a Kit.                                                               | wkkit.delete | **New**: Confirmation mechanism to prevent accidental deletion                                                                                                                    |
| /wk give < KitID > < Player >                 | Send kit directly to players.                                               | wkkit.give | **New**: Complete validation (cooldown, permission, usage limit), async distribution, detailed feedback<br>**Usage**: `/wk give <Player>` to show available kits list             |
| /wk get < KitID >                             | Receive kit in the form of command.                                         | wkkit.get | This command is the same as the receiving conditions in the menu.                                                                                                                 |
| /wk send < KitID > < Target > [Num]           | Issue the specified quantity of kit to the mailbox of the specified target. | wkkit.send | **@All:** Include offline players.<br/> **@Online:** All the people which was online.<br/> **@Me:** Yourself. <br/> If you want send to a player, just type the player's name.    |

### CDK Commands

| Commands                                      | Usage                                                                       | Permission | P.S.                                                                                                                                                                              |
| ----------------------------------------------- | ----------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /wk cdk create < Num > < KitID,... > < Mark > | Create a specified number of CDK.                                           | wkkit.cdk.create | There can be more than one kit, please separate them with commas.                                                                                                                 |
| /wk cdk verify < CDK >                        | Verify the information of the specified CDK.                                | wkkit.cdk.verify |                                                                                                                                                                                   |
| /wk cdk exchange < CDK >                      | Exchange specified CDK.                                                     | wkkit.cdk.exchange |                                                                                                                                                                                   |
| /wk cdk export < Mark >                       | Export CDK with specified mark.                                             | wkkit.cdk.export | < mark > must be precise, this is one of the items for screening exchange codes.                                                                                                  |

### Kit Group Commands

| Commands                                      | Usage                                                                       | Permission | P.S.                                                                                                                                                                              |
| ----------------------------------------------- | ----------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /wk group create < GroupID >                  | Create a kit group.                                                         | wkkit.group.create |                                                                                                                                                                                   |
| /wk group delete < GroupID >                  | Delete a kit group                                                          | wkkit.group.delete | Kit is automatically transferred to the Default group after deletion.                                                                                                             |
| /wk group move < KitID > < TargetGroupID >    | Move a kit to target group.                                                 | wkkit.group.move |                                                                                                                                                                                   |

### System Commands

| Commands                                      | Usage                                                                       | Permission | P.S.                                                                                                                                                                              |
| ----------------------------------------------- | ----------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /wk transfer MySQL                            | Transfer Yaml data to MySQL.                                                | wkkit.transfer | At present, there is only one parameter MySQL, which means transferring data from YAML to database.                                                                               |
| /wk reload                                    | Plugin reload.                                                              | wkkit.reload | **New**: Hot reload configuration without affecting running services                                                                                                              |

---

## Player Command

<font color="#a19f9d">Since to 1.0.7 player has those permissions for default.</font><br />

| Command                 | Usage                                        | Permission         | P.S.    |
| ------------------------- | ---------------------------------------------- | -------------------- | --------- |
| /wk help                | Plugin help.                                 | –                 |         |
| /wk open < MenuID >     | Open the specified menu                      | wkkit.open         | Default |
| /wk mail                | Open the MailBox                             | wkkit.mail         | Default |
| /wk get < KitID >       | Receive kit in the form of command.          | wkkit.get          |         |
| /wk info < KitID >      | Display the specified kit content items.     | wkkit.info         | **New**: Show kit details and statistics                                                                           |
| /wk cdk verify < CDK >  | Verify the information of the specified CDK. | wkkit.cdk.verify   | Default |
| /wk cdk exchange< CDK > | Exchange specified CDK.                      | wkkit.cdk.exchange | Default |

---

## 🆕 New Command Features Details

### 1. `/wk info <KitID>`
**Function**: View kit details and open preview interface
**New Features**:
- Display complete kit configuration information
- Statistics: item count, command count, cooldown time, etc.
- Automatically open item preview interface
- Check permission, cooldown, usage limit status

### 2. `/wk create <KitID>`
**Function**: Create new kit
**New Features**:
- Smart default configuration generation
- Automatically use held item as icon
- Complete configuration validation
- Guide to subsequent editing commands

### 3. `/wk give <Player> [KitID]`
**Function**: Give kit to player
**New Features**:
- Complete validation: permission, cooldown, usage limit, inventory space
- Async distribution: Does not block server main thread
- Detailed feedback: Success/failure reasons
- List mode: Show player's available kits when no kit specified

### 4. `/wk reload`
**Function**: Reload plugin configuration
**New Features**:
- Hot reload: Does not affect running services
- Configuration validation: Check validity before reloading
- State preservation: Player data unaffected

---

## 🔧 Command Aliases

| Main Command | Aliases                          |
| ------------ | -------------------------------- |
| info         | view, information, details       |
| give         | send, grant, distribute          |
| create       | new, add, make                   |
| delete       | remove, del, erase               |

---

## 📋 Usage Examples

### Example 1: View Kit Information
```bash
/wk info StarterKit
```
Display kit details, statistics, and open item preview interface

### Example 2: Create New Kit
```bash
/wk create EventKit
```
Create a new kit named "EventKit", using held item as icon

### Example 3: Give Kit to Player
```bash
# Show player's available kits list
/wk give Steve

# Give specific kit
/wk give Steve StarterKit
```

### Example 4: View Command Help
```bash
/wk help
```
Display all available commands with detailed usage

---

**Document Update**: 2026-03-03  
**Corresponding Version**: WkKit v1.5.0  
**Update Content**: New command system, architecture refactoring, feature enhancements
