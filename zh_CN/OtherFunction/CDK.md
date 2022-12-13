# 兑换码功能

这个功能灵感也是源自于[**CashCode**](https://www.mcbbs.net/thread-725863-1-1.html)，这款插件也蛮好用，不过可惜后来的版本没有人维护更新了。所以我也很纳闷那么好的一个插件居然不维护了，这次干脆也自己动手写一个简化版的，并且只针对礼包的一个兑换码功能，但是如果你是低版本也可以推荐搭配CashCode使用。

**该功能一共有四个指令：** 生成、验证、兑换、导出

### 生成兑换码

> **/wk cdk create <数量> <礼包名称> <标记>**

使用该指令我们将会生成指定 **<数量>** 个带有指定 **<礼包名称>** 的兑换码，其中 **<标记>** 的意思是兑换码的备注，这个方便用于导出，这个是必填项。*（不填！？难道你想做一个兑换码盲盒？）*

#### 一个兑换码多个礼包

兑换码包含的礼包是可以有一个以上的，当我们创建一个礼包时，只需要在礼包名称中每个礼包添加一个英文逗号分隔，就可以实现一个兑换码包含两个或多个礼包，例如：

![](https://wkhouse.oss-cn-hangzhou.aliyuncs.com/upload/2022/06/image.png?x-oss-process=image%2Fformat,webp)

#### 兑换码密钥

每个服务器的兑换码都是独一无二的，我们可以看到**config.yml**文件,其中kitcode这个节点中，有一个Key密钥，这是随机生成的：

![](https://wkhouse.oss-cn-hangzhou.aliyuncs.com/upload/2022/06/image-1.png?x-oss-process=image%2Fformat,webp)

当然你也可以自己手动设置，例如`Key：wkkit`，这都是允许的，但一定要复杂一点，这样我们的兑换码就不容易破解。这也就是说，如果我们的密钥换了，之前的兑换码也将全部无法使用，所以使用该功能时一定要将密钥记好，以防止以后配置丢失兑换码失效。

### 验证兑换码

> **/wk cdk verify <CDK>**

其实这个功能就是为了方便服主验证或查询兑换码信息，其中详细记录了兑换码的领取状态，以及可兑换的礼包:

![](https://wkhouse.oss-cn-hangzhou.aliyuncs.com/upload/2022/06/image-4.png?x-oss-process=image%2Fformat,webp)

### 使用兑换码

> **/wk cdk exchange <CDK>**

使用兑换码其实很简单，只需要填入正确的兑换码即可兑换，兑换出来的礼包将会发送到玩家背包，但是这里有个判定条件，如果玩家的背包满了，或者放不下要领取的礼包，将会发送至邮箱，当然游戏内也会提示。

### 导出兑换码

> **/wk cdk export <标记>**

当使用这个功能时，我们就可以用到原来的添加的标记了，该文件导出至Export文件夹内：

![](https://wkhouse.oss-cn-hangzhou.aliyuncs.com/upload/2022/06/image-2.png?x-oss-process=image%2Fformat,webp)

![](https://wkhouse.oss-cn-hangzhou.aliyuncs.com/upload/2022/06/image-3.png?x-oss-process=image%2Fformat,webp)
