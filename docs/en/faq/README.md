# Frequently Asked Questions

## General Questions

### Q: What is WkKit?

**A:** WkKit is a comprehensive Minecraft kit management plugin that allows server administrators to create, distribute, and manage item kits for players. It supports multiple distribution methods including direct give, mail system, CDK (redeem codes), and visual menus.

### Q: Which Minecraft versions are supported?

**A:** WkKit supports Minecraft 1.8+ with full compatibility for Spigot, Paper, and their forks.

### Q: Is WkKit free?

**A:** Yes! WkKit is open-source and free to use under the MIT License.

---

## Installation & Setup

### Q: How do I install WkKit?

**A:** 
1. Download the latest release from GitHub
2. Place the JAR file in your server's `plugins/` folder
3. Restart the server
4. Configure `plugins/WkKit/config.yml`

### Q: Where can I download WkKit?

**A:** 
- GitHub Releases: https://github.com/WekyJay/WkKit/releases
- Build from source: Clone and run `mvn clean package`

### Q: How do I migrate from old versions?

**A:**
1. Backup your existing configuration
2. Update to the new version
3. Run `/wkkit migrate` command
4. Check the migration report

---

## Configuration

### Q: How do I create a kit?

**A:** Use the `/kit create <name>` command or edit `kits.yml` directly:

```yaml
kits:
  mykit:
    display: "&6My Kit"
    items:
      - "DIAMOND_SWORD:1"
      - "GOLDEN_APPLE:5"
    cooldown: 3600
    max-uses: 3
```

### Q: Can I use custom commands in kits?

**A:** Yes! Add commands in the kit configuration:

```yaml
commands:
  - "say %player% got a kit!"
  - "give %player% diamond 1"
  - "eco give %player% 100"
```

### Q: How do cooldowns work?

**A:** Cooldowns prevent players from claiming the same kit repeatedly. Set in seconds:
- `3600` = 1 hour
- `86400` = 24 hours
- `0` = No cooldown

### Q: What is max-uses?

**A:** It limits how many times a player can claim a kit:
- `-1` = Unlimited uses
- `1` = Single use only
- `5` = Maximum 5 claims per player

---

## Commands & Permissions

### Q: What are the main commands?

**A:**
- `/kit` - Open kit menu
- `/kit give <kit> [player]` - Give kit to player
- `/kit create <name>` - Create new kit
- `/kit delete <name>` - Delete kit
- `/kit edit <name>` - Edit kit
- `/kit list` - List all kits
- `/kit reload` - Reload configuration

### Q: What permissions do I need?

**A:**
- `wkkit.use` - Basic kit usage
- `wkkit.admin` - Admin commands
- `wkkit.kit.<name>` - Access specific kit
- `wkkit.bypass.cooldown` - Bypass cooldowns

### Q: How do I give all kits to a player?

**A:** Use the permission `wkkit.kit.*` with your permissions plugin.

---

## Features

### Q: What is Kit Mail?

**A:** Kit Mail allows players to receive kits even when offline. Kits are stored and can be claimed when the player joins.

### Q: What is CDK System?

**A:** CDK (Card-Key) system allows you to create redeemable codes:
- Create batch codes for events
- Set usage limits per code
- Track redemption history

### Q: Can I create visual menus?

**A:** Yes! WkKit includes a powerful menu system:

```yaml
menus:
  main:
    title: "&8Kit Menu"
    rows: 3
    items:
      '11':
        type: kit
        kit: starter
```

### Q: Does WkKit support PlaceholderAPI?

**A:** Yes! You can use placeholders like `%wkkit_kit_name%`, `%wkkit_kit_cooldown%`, etc.

---

## Troubleshooting

### Q: Kits are not showing up

**A:** 
1. Check if kits are properly configured
2. Verify player has correct permissions
3. Check server console for errors
4. Run `/kit reload` to refresh

### Q: Database connection failed

**A:**
1. Verify MySQL credentials in config.yml
2. Check if MySQL server is running
3. Ensure database exists
4. Check firewall settings

### Q: Config changes not applying

**A:**
1. Use `/kit reload` command
2. Check YAML syntax (use online validator)
3. Verify file encoding is UTF-8
4. Check server logs for errors

### Q: Plugin conflicts with other plugins

**A:**
1. Check compatibility list on GitHub
2. Report conflicts with debug logs
3. Try different plugin loading order

---

## Performance

### Q: Does WkKit lag the server?

**A:** No. WkKit is designed for high performance:
- Async operations for database queries
- Memory caching for kit data
- Optimized item handling
- Minimal server impact

### Q: Can I use MySQL instead of SQLite?

**A:** Yes! Change `database.type` to `mysql` and configure connection settings.

### Q: How much memory does WkKit use?

**A:** Very little! Each kit uses approximately 800 bytes of memory. You can have thousands of kits with minimal impact.

---

## Development

### Q: Can I contribute to WkKit?

**A:** Absolutely! Visit our GitHub repository:
- Report bugs via Issues
- Submit pull requests
- Suggest features
- Improve documentation

### Q: Is there an API for developers?

**A:** Yes! WkKit provides a comprehensive API:

```java
// Get kit service
KitService service = KitService.getInstance();

// Get kit
Kit kit = service.getKit("mykit");

// Give kit to player
kit.give(player);
```

### Q: Where can I find API documentation?

**A:** JavaDoc is available in the source code. More documentation coming soon!

---

## Support

### Q: Where can I get help?

**A:**
- GitHub Issues: https://github.com/WekyJay/WkKit/issues
- Wiki Documentation: https://wekyjay.github.io/WkKit_WiKi/
- Check this FAQ first!

### Q: How do I report bugs?

**A:**
1. Check if issue already exists on GitHub
2. Provide detailed description
3. Include server version and plugin version
4. Attach error logs if available
5. Describe steps to reproduce

### Q: Can I suggest new features?

**A:** Yes! Open a feature request on GitHub with:
- Clear description of the feature
- Use cases and benefits
- Possible implementation ideas

---

**Still have questions?** Open an issue on GitHub!
