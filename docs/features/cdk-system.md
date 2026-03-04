# 🔑 CDK系统

WkKit 提供了兑换码（CDK）功能，灵感来自 [CashCode](https://www.mcbbs.net/thread-725863-1-1.html) 插件。支持生成、验证、兑换和导出兑换码。

## CDK 命令

### 生成兑换码
```bash
/wk cdk create <数量> <礼包名称> <标记>
```

**参数说明**:
- `<数量>`: 生成的CDK数量
- `<礼包名称>`: 对应的礼包ID（多个用英文逗号分隔）
- `<标记>`: 分组标记，用于导出

**示例**:
```bash
# 生成10个新手礼包CDK
/wk cdk create 10 StarterKit event_2024

# 生成包含多个礼包的CDK
/wk cdk create 5 "StarterKit,VIPKit" vip_event
```

### 验证CDK
```bash
/wk cdk verify <CDK>
```

查看CDK的详细信息和领取状态。

### 兑换CDK
```bash
/wk cdk exchange <CDK>
```

玩家使用此命令兑换CDK，礼包会发送到背包（背包满则发送到邮箱）。

### 导出CDK
```bash
/wk cdk export <标记>
```

将指定标记的CDK导出到 `plugins/WkKit/Export/` 文件夹。

## CDK 密钥配置

每个服务器的CDK都是唯一的，密钥在 `config.yml` 中配置：

```yaml
kitcode:
  Key: 'your-secret-key-here'  # 建议设置复杂密钥
```

::: warning 重要
- 密钥更换后，之前的CDK将全部失效
- 请妥善保管密钥，防止配置丢失
- 建议使用复杂随机字符串
:::

## 使用场景

1. **活动发放** - 生成活动专属兑换码
2. **推广奖励** - 制作推广码吸引玩家
3. **VIP福利** - 制作VIP专属兑换码
4. **补偿发放** - 批量生成补偿兑换码

## 权限

| 权限 | 说明 |
|------|------|
| `wkkit.cdk.create` | 创建CDK |
| `wkkit.cdk.verify` | 验证CDK |
| `wkkit.cdk.exchange` | 兑换CDK |
| `wkkit.cdk.export` | 导出CDK |
