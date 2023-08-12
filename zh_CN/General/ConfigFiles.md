# 配置文件

## config.yml

```yaml
Setting:
   # 是否开启礼包上线提示领取
   OnlineReminder: true
   # 是否开启更新检查
   ChackUpdate: true
   # 语言文件（对应Language内的文件名称）
   Language: 'zh_CN'
   # 开启DeBug模式（仅用于开发测试，勿开）
   DeBug: false
Default:
   # 默认礼包展示名
   Name: '§6Server Kit'
   # 默认领取次数(-1为不限次数)
   Time: 1
   # 默认冷却时间
   Delay: 60
   # 默认礼包的展示
   Icon: 'CHEST'
   # 自动穿戴装备
   AutoEquipment: true
   # 上次重置插件或关闭插件的时间
   ShutDate: 'None'
   # 防崩服刷新礼包检查时间,单位：分钟/次(0为不开启)
   AntiShutDown: 5
GUI:
  # 全部领取材质
  GetAllMaterial: 'Default'
  # 翻页材质
  TurnPageMaterial: 'SLIME_BALL'
  # 菜单栏材质
  MenuMaterial: 'Default'
  # CustomModelId
  GetAll-CustomModelId: 10004 # 领取全部CustomModelId
  TurnPrePage-CustomModelId: 10000 # 上一页CustomModelId
  TurnNextPage-CustomModelId: 10001 # 下一页CustomModelId
  Menu-CustomModelId: 20003 # 菜单栏CustomModelId
  # 领取礼包后关闭GUI
  ClickClose: true
NewComer:
   # 是否开启新人礼包
   Enable: true
   # 将指定礼包设定为新人礼包
   Kit: 'NCKit'
   # 是否自动发放
   Auto: true
   # 发放方式(1:发送单个礼包 2：发送礼包内容)
   Mode: 1
   # 严格检测模式(如果开启则严格检测游戏数据,即使数据丢失玩过的玩家也不会发放。)
   Strict: false
KitCode:
   # CDK密钥(不要随意改动)
   Key: 'none'
MySQL:
   #是否开启数据库模式
   Enable: false
   # 数据库名字
   databasename: 'name'
   # 用户名
   username: 'user'
   # 密码
   password: 'pw'
   # 端口
   port: '3306'
   # 主机IP
   ip: 'localhost'
Cache:
   # 开启插件日志
   Enable: true
   # 开启玩家领取礼包日志记录
   PlayerReciveKit: true
```

## player.yml

玩家自刷新礼包数据（一般情况下请勿手动修改该文件）

```yaml
#玩家名
HIM: 
   #礼包名
   NCKit:
      #Boolean参数代表自动刷新礼包是否能领取。
      data: false
      #可领取的次数（-1为不限次数）
      time: -1
```

## maildata.yml

玩家礼包邮箱数据

```yaml
Weky_Jay:
   DailyKit: 2
   MonthlyKit: 1
```

## cdk.yml

服务器CDK数据储存文件

```yaml
# CDK码
QJC6-D52Q-7SNA:
  # 对应的礼包
  Kit: DailyKit
  # CDK生成日期
  Date: '2022-05-09 21:24:40'
  # 被领取的玩家
  Status: Weky_Jay
  # 标记（备注）
  Mark: 每日礼包
9C88-WDTA-NDSA:
  # 多个礼包
  Kit: DailyKit,NCKIT
  Date: '2022-05-09 21:24:40'
  # 未被领取标识
  Status: Available
  Mark: 每日礼包和新人礼包
```
