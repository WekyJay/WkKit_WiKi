# Configuration Guide

## Overview

WkKit uses a flexible configuration system that supports both YAML and traditional config formats. All configuration files are located in the `plugins/WkKit/` directory.

## Main Configuration Files

### config.yml

Main plugin configuration file:

```yaml
# Database Settings
database:
  type: sqlite  # Options: sqlite, mysql
  mysql:
    host: localhost
    port: 3306
    database: wkkit
    username: root
    password: ''
    useSSL: false

# Language Settings
language: en_US  # Options: zh_CN, en_US

# Performance Settings
performance:
  async-loading: true
  cache-size: 100
  save-interval: 300

# Feature Toggles
features:
  kit-mail: true
  kit-cdk: true
  kit-reminder: true
```

### kits.yml

Define your kits:

```yaml
kits:
  starter:
    display: "&6Starter Kit"
    items:
      - "STONE_SWORD:1"
      - "BREAD:16"
      - "WOODEN_PICKAXE:1"
    commands:
      - "say %player% received starter kit!"
    cooldown: 86400  # 24 hours in seconds
    max-uses: 1
    permission: "wkkit.kit.starter"

  daily:
    display: "&bDaily Reward"
    items:
      - "DIAMOND:2"
      - "EXPERIENCE_BOTTLE:8"
    cooldown: 86400
    max-uses: -1  # Unlimited
    permission: "wkkit.kit.daily"
```

### Menu Configuration

Create visual menus:

```yaml
menus:
  main:
    title: "&8Kit Menu"
    rows: 3
    items:
      '11':
        type: kit
        kit: starter
        display:
          material: CHEST
          name: "&6Starter Kit"
          lore:
            - "'7Click to claim"
            - "'8Cooldown: 24h"
      '15':
        type: kit
        kit: daily
        display:
          material: DIAMOND
          name: "&bDaily Reward"
```

## PlaceholderAPI Support

WkKit supports PlaceholderAPI placeholders:

| Placeholder | Description |
|-------------|-------------|
| `%wkkit_kit_name%` | Current kit name |
| `%wkkit_kit_display%` | Kit display name |
| `%wkkit_kit_cooldown%` | Remaining cooldown time |
| `%wkkit_kit_uses%` | Remaining uses |

## Advanced Configuration

### Cron Expressions

Schedule automatic kit distribution:

```yaml
scheduled-kits:
  weekly-bonus:
    kit: vip
    cron: "0 0 * * 0"  # Every Sunday at midnight
    broadcast: true
```

### Permission Groups

Group kits by permissions:

```yaml
kit-groups:
  vip:
    - vip_basic
    - vip_premium
    - vip_exclusive
  staff:
    - admin_tools
    - moderator_kit
```

## Configuration Migration

When upgrading from older versions:

1. Backup your existing configs
2. Run `/wkkit migrate` command
3. Verify migrated configurations
4. Report any issues on GitHub

## Troubleshooting

### Common Issues

**Config not loading:**
- Check YAML syntax with online validator
- Ensure proper indentation (spaces, not tabs)
- Verify file encoding is UTF-8

**Database connection failed:**
- Verify MySQL credentials
- Check firewall settings
- Ensure database exists

**Kits not appearing:**
- Verify kit names match exactly
- Check player permissions
- Review server logs for errors

## Best Practices

1. **Always backup** before making changes
2. **Test on dev server** first
3. **Use meaningful names** for kits
4. **Set reasonable cooldowns** to prevent abuse
5. **Document custom commands** for your team

---

For more help, visit our [GitHub Issues](https://github.com/WekyJay/WkKit/issues).
