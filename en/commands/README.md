# 📖 Commands

## Overview

| Command | Description | Permission |
|---------|-------------|------------|
| `/wk help` | Show help | All players |
| `/wk reload` | Reload config | wkkit.reload |

## Kit Management

### Create Kit
```bash
/wk create <kitID> [displayName] [menuID]
```
Permission: `wkkit.create`

### Edit Kit
```bash
/wk edit [kitID]
```
Permission: `wkkit.edit`

### Delete Kit
```bash
/wk delete <kitID>
```
Permission: `wkkit.delete`

### Get Kit
```bash
/wk get <kitID>
```
Permission: `wkkit.get`

### Give Kit
```bash
/wk give <player> <kitID>
```
Permission: `wkkit.give`

### Send to Mail
```bash
/wk send <kitID> <target> [amount]
```
Target: `@All`, `@Online`, or player name
Permission: `wkkit.send`

## CDK Commands

| Command | Description | Permission |
|---------|-------------|------------|
| `/wk cdk create <amount> <kit> <mark>` | Create CDK | wkkit.cdk.create |
| `/wk cdk verify <cdk>` | Verify CDK | wkkit.cdk.verify |
| `/wk cdk exchange <cdk>` | Exchange CDK | wkkit.cdk.exchange |
| `/wk cdk export <mark>` | Export CDK | wkkit.cdk.export |

## Quick Command
```bash
/wk <kitID>    # Quick get (same as /wk get)
```
