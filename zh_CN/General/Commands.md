# 指令与权限
***

## OP指令

| Commands                                | Usage                    | P.S.                                                                                                                               |
| --------------------------------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| /wk help                                | 插件指令详情             |                                                                                                                                    |
| /wk edit                                | 进入礼包管理界面         |                                                                                                                                    |
| /wk mail                                | 打开礼包邮箱             |                                                                                                                                    |
| /wk kits                                | 列出服务器所有礼包名     |                                                                                                                                    |
| /wk group list                          | 列出服务器所有礼包组名   |                                                                                                                                    |
| /wk info <礼包名称>                     | 展示指定礼包的包含的内容 |                                                                                                                                    |
| /wk create <礼包名称> [展示名] [礼包组] | 创建礼包                 |                                                                                                                                    |
| /wk delete <礼包名称>                   | 删除指定礼包             |                                                                                                                                    |
| /wk send <礼包名称> <目标> [数量]       | 发放礼包到指定目标的邮箱 |                                                                                                                                    |
| /wk give <礼包名称> <玩家> [模式]       | 直接发送礼包给玩家       | **模式[1-3],默认情况下为1**<br />1：物品直接发送至背包不执行指令<br />2：物品发送至背包且执行指令<br />3：发送实体礼包至背包 |
| /wk open <菜单名称>                     | 打开指定菜单             |                                                                                                                                    |
| /wk cdk create <数量> <礼包名称> <标记> | 创建指定数量个CDK        | 礼包可以多个，请使用英文逗号分隔                                                                                                   |
| /wk cdk verify <礼包CDK>                | 验证查询指定CDK的信息    |                                                                                                                                    |
| /wk cdk exchange <礼包CDK>              | 兑换指定的CDK            |                                                                                                                                    |
| /wk cdk export <标记>                   | 导出指定标记的CDK        | <标记>一定要精准，这个是筛选兑换码的一项。                                                                                         |
| /wk group create <组别名称>             | 创建一个礼包组           |                                                                                                                                    |
| /wk group delete <组别名称>             | 删除一个礼包组           | 删除后礼包自动转移到Default组                                                                                                      |
| /wk group move <礼包名> <目标组名>      | 移动礼包组               | 移动一个礼包到指定礼包组                                                                                                           |
| /wk transfer MySQL                      | 数据转移                 | 目前只有MySQL这一个参数，意为从YAML转移数据到数据库                                                                                |
| /wk reload                              | 插件重载                 |                                                                                                                                    |

## 玩家指令
<font color="#a19f9d">从1.0.7开始玩家默认拥有以下指令的权限。</font><br />

| Command                   | Usage                 | Permission         | P.S.    |
| ------------------------- | --------------------- | ------------------ | ------- |
| /wk help                  | 插件指令详情          | –                 |         |
| /wk open <菜单名称>       | 打开指定菜单          | wkkit.open         | Default |
| /wk mail                  | 打开礼包邮箱          | wkkit.mail         | Default |
| /wk cdk verify <礼包CDK>  | 验证查询指定CDK的信息 | wkkit.cdk.verify   | Default |
| /wk cdk exchange<礼包CDK> | 兑换指定的CDK         | wkkit.cdk.exchange | Default |
