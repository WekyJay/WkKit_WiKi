# Commands

---

## OP Command


| Commands                                      | Usage                                                                       | P.S.                                                                                                                                                                              |
| ----------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /wk help                                      | Plugin help.                                                                |                                                                                                                                                                                   |
| /wk edit                                      | Open the GUIEditor.                                                         |                                                                                                                                                                                   |
| /wk mail                                      | Open the MailBox.                                                           | When OP uses the 'send' command, the received Kit will be stored here.                                                                                                            |
| /wk kits                                      | List all of the Kit ID from server.                                         |                                                                                                                                                                                   |
| /wk group list                                | List all of the Kit Group ID from server.                                   |                                                                                                                                                                                   |
| /wk info < KitID >                            | Display the specified kit content items.                                    |                                                                                                                                                                                   |
| /wk create < KitID > [DisplayName] [KitGroup] | Create a Kit.                                                               |                                                                                                                                                                                   |
| /wk delete < KitID >                          | Delete a Kit.                                                               |                                                                                                                                                                                   |
| /wk send < KitID > < Target > [Num]           | Issue the specified quantity of kit to the mailbox of the specified target. | **@All:** Include offline players.<br/> **@Online:** All the people which was online.<br/> **@Me:** Yourself. <br/> If you want send to a player, just type the player's name.    |
| /wk give < KitID > < Player > [Mode]          | Send kit directly to players.                                               | **Mode[1-3],Default '1'**<br/>1：Send items directly to backpacks without executing command.<br/>2：Send items to backpack and execute command.<br/>3：Send item kit to backpack. |
| /wk open < MenuID >                           | Open the specified menu.                                                    |                                                                                                                                                                                   |
| /wk cdk create < Num > < KitID,... > < Mark > | Create a specified number of CDK.                                           | There can be more than one kit, please separate them with commas.                                                                                                                 |
| /wk cdk verify < CDK >                        | Verify the information of the specified CDK.                                |                                                                                                                                                                                   |
| /wk cdk exchange < CDK >                      | Exchange specified CDK.                                                     |                                                                                                                                                                                   |
| /wk cdk export < Mark >                       | Export CDK with specified mark.                                             | < mark > must be precise, this is one of the items for screening exchange codes.                                                                                                  |
| /wk group create < GroupID >                  | Create a kit group.                                                         |                                                                                                                                                                                   |
| /wk group delete < GroupID >                  | Delete a kit group                                                          | Kit is automatically transferred to the Default group after deletion.                                                                                                             |
| /wk group move < KitID > < TargetGroupID >    | Move a kit to target group.                                                 |                                                                                                                                                                                   |
| /wk transfer MySQL                            | Transfer Yaml data to MySQL.                                                | At present, there is only one parameter MySQL, which means transferring data from YAML to database.                                                                               |
| /wk reload                                    | Plugin reload.                                                              |                                                                                                                                                                                   |

## Player Command

<font color="#a19f9d">Since to 1.0.7 player has those permissions for default.</font><br />


| Command                 | Usage                                        | Permission         | P.S.    |
| ------------------------- | ---------------------------------------------- | -------------------- | --------- |
| /wk help                | Plugin help.                                 | –                 |         |
| /wk open < MenuID >     | Open the specified menu                      | wkkit.open         | Default |
| /wk mail                | Open the MailBox                             | wkkit.mail         | Default |
| /wk cdk verify < CDK >  | Verify the information of the specified CDK. | wkkit.cdk.verify   | Default |
| /wk cdk exchange< CDK > | Exchange specified CDK.                      | wkkit.cdk.exchange | Default |
