# 🎁 Kit System

The kit system is the core feature of WkKit, allowing you to create and manage various in-game rewards.

## Kit Types

| Type | Feature | Use Case |
|------|---------|----------|
| **Normal** | No restrictions | Starter kits, event rewards |
| **Cooldown** | Cooldown time | Daily login rewards |
| **Drop** | Drop from entities | Mob drops, boss rewards |
| **Limited** | Limited uses | Limited events, VIP kits |
| **Scheduled** | Cron-based | Holiday events, periodic |

## Creating Kits

### Command (Recommended)
```bash
/wk create <kitID> [displayName] [menuID]
```

### Config File
Create YAML files in `plugins/WkKit/kits/`.

## Basic Configuration

```yaml
StarterKit:
  Name: '&e&lStarter Kit'
  Icon: 'CHEST'
  Permission: 'wkkit.starter'
  Lore:
    - '&b=================='
    - '&aWelcome!'
    - '&7Basic equipment included'
  Item:
    - '{id:"minecraft:iron_helmet",Count:1b}'
    - '{id:"minecraft:iron_chestplate",Count:1b}'
  Commands:
    - 'msg {player} &aWelcome!'
  Vault: 100.0
```

## Advanced Options

### Cooldown
```yaml
DailyKit:
  Name: '&aDaily Login'
  Delay: 86400  # 24 hours in seconds
```

### Limited Uses
```yaml
LimitedKit:
  Name: '&cLimited Kit'
  Times: 3  # Max 3 claims
```

### Cron Schedule
```yaml
MonthlyKit:
  Name: '&eMonthly Kit'
  DoCron: '0 0 0 1 * ? *'  # 1st of each month
```

---

See [Configuration](../config/) for more details.
