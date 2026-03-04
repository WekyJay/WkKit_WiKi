# ⚙️ 配置文件详解

## config.yml

### Setting 设置
```yaml
Setting:
  UseCommandGet: true       # 是否开启指令领取
  OnlineReminder: true      # 礼包上线提示
  ChackUpdate: true         # 更新检查
  Language: 'zh_CN'         # 语言文件
  DeBug: false              # 调试模式
```

### Default 默认设置
```yaml
Default:
  Name: '§6Server Kit'      # 默认礼包名
  Time: 1                   # 默认领取次数(-1无限)
  Delay: 60                 # 默认冷却时间(秒)
  Icon: 'CHEST'             # 默认图标
  AutoEquipment: true       # 自动穿戴装备
  ShutDate: 'None'          # 上次关闭时间
  AntiShutDown: 5           # 防崩服检查间隔(分钟)
```

### GUI 界面设置
```yaml
GUI:
  GetAllMaterial: 'Default'        # 全部领取材质
  TurnPageMaterial: 'SLIME_BALL'   # 翻页材质
  MenuMaterial: 'Default'          # 菜单栏材质
  GetAll-CustomModelId: 10004      # CustomModelId
  TurnPrePage-CustomModelId: 10000
  TurnNextPage-CustomModelId: 10001
  Menu-CustomModelId: 20003
  ClickClose: true                 # 领取后关闭
```

### NewComer 新人礼包
```yaml
NewComer:
  Enable: true              # 是否开启
  Kit: 'NCKit'              # 新人礼包ID
  Auto: true                # 自动发放
  Mode: 1                   # 1:发送礼包 2:发送内容
  Strict: false             # 严格检测模式
```

### KitCode CDK设置
```yaml
KitCode:
  Key: 'none'               # CDK密钥(需设置)
```

### MySQL 数据库
```yaml
MySQL:
  Enable: false             # 是否开启
  databasename: 'name'
  username: 'user'
  password: 'pw'
  port: '3306'
  ip: 'localhost'
```

### Cache 日志
```yaml
Cache:
  Enable: true              # 插件日志
  PlayerReciveKit: true     # 领取记录
```

## 数据文件

### player.yml
玩家礼包领取数据（自动刷新礼包）
```yaml
PlayerName:
  KitName:
    data: false             # 是否可领取
    time: -1                # 剩余次数
```

### maildata.yml
玩家邮箱数据
```yaml
PlayerName:
  DailyKit: 2               # 礼包数量
```

### cdk.yml
CDK数据
```yaml
QJC6-D52Q-7SNA:
  Kit: DailyKit
  Date: '2022-05-09 21:24:40'
  Status: Weky_Jay          # 领取者/Available
  Mark: '标记'
```
