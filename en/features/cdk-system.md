# 🔑 CDK System

WkKit provides a redeem code (CDK) system for generating and managing gift codes.

## Commands

### Create CDK
```bash
/wk cdk create <amount> <kitName> <mark>
```

### Verify CDK
```bash
/wk cdk verify <cdk>
```

### Exchange CDK
```bash
/wk cdk exchange <cdk>
```

### Export CDK
```bash
/wk cdk export <mark>
```

## Configuration

Set your CDK key in `config.yml`:
```yaml
KitCode:
  Key: 'your-secret-key'
```

::: warning Important
- Keep your key safe
- Changing the key invalidates all existing CDKs
- Use a complex random string
:::

## Use Cases

1. **Events** - Generate event-specific codes
2. **Promotions** - Create promotional codes
3. **VIP Benefits** - VIP exclusive codes
4. **Compensation** - Batch compensation codes
