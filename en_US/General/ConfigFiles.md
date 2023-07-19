# Config Files

## config.yml

```yaml
Setting:
   # When you enter 'true ', it means that the player login prompt is turned on.
   # e.g. If player's MailBox has kits which is not collected, 
   # The WkKit will be prompt this player when player into server.
   OnlineReminder: true
   ChackUpdate: true
   Language: 'en_US'
   DeBug: false
Default:
   # Default display name of kit.
   Name: '§6Server Kit'
   # Default number of times a kit can be collected.(-1 is an unlimited number of times)
   Time: 1
   # Default cool-down time of kit. 
   Delay: 60
   # Default display icon of kit. 
   Icon: 'CHEST'
   # This option controls the automatic wearing of equipment when receiving Kit.
   AutoEquipment: true
   # When plugin was by reload or server was by closed it will be record right here.
   ShutDate: 'None'
   # Kit auto refresh time recorder, Don't care about that. (Time unit: minutes)
   # Please modify as '0' If you don't want use it.
   AntiShutDown: 5
GUI:
   GetAllMaterial: 'Default'
   TurnPageMaterial: 'SLIME_BALL'
   MenuMaterial: 'Default'
   # Close the GUI after receiving the kit.
   ClickClose: true
NewComer:
   # Whether enable the newcomer kit.
   Enable: true
   # Set the specified kit as the newcomer kit.
   Kit: 'NCKit'
   # Whether send newcomer kit auto.
   Auto: true
   # Send mode (1: Send a single kit 2: Send kit contents)
   Mode: 1 
   # Strict detection mode 
   # if it is turned on, the game data will be strictly detected.
   # And even if the data is lost, players who have played will not distribute it.
   Strict: false
KitCode:
   # CDK Key (don't change it at will)
   Key: 'none'
MySQL:
   # Whether enable database mode.
   Enable: false
   databasename: 'name'
   username: 'user'
   password: 'pw'
   port: '3306'
   ip: 'localhost'
Cache:
   # Whether enable cache function.
   Enable: true
   # Open the log record of players receiving kit.
   PlayerReciveKit: true
```

## player.yml

The player Cron kit receives the information data _(Generally, Please do not modify the file manually.)_

```yaml
# Player
HIM: 
   # KitID
   NCKit:
      # The Boolean parameter indicates whether the Cron-Kit can be fetched.
      data: false
      # Number of times that can be collected (-1 is unlimited number of times)
      time: -1
```

## maildata.yml

Number of remaining kit for players in the mailbox.

```yaml
Weky_Jay:
   DailyKit: 2
   MonthlyKit: 1
```

## cdk.yml

Server CDK data storage file.

```yaml
# CDK Key
QJC6-D52Q-7SNA:
  # kit corresponding to CDK.
  Kit: DailyKit
  # CDK generation date.
  Date: '2022-05-09 21:24:40'
  # Received player
  Status: Weky_Jay
  # Mark (Remarks)
  Mark: Only DailyKit.
9C88-WDTA-NDSA:
  # You can store multiple kit.
  Kit: DailyKit,NCKit
  Date: '2022-05-09 21:24:40'
  # The sign that the kit was received.
  Status: Available
  Mark: DailyKit and NCKit.
```
