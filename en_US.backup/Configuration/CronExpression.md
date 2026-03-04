# Cron Expression

We can see the configuration of DoCron in the default configuration. Maybe you will be curious about what this is, or think the expression is obscure and unwilling to use it, then you will lose the core function of a kit, the automatic refresh kit based on Cron.

With this feature, you can refresh the kit accurately and automatically at a specified time during the running of the server, and the result is that the error value of testing it is only between 0 and 1s. Many kits don't support automatic recalculation of kit time after closing server, which leads to re-collection of kit. However, you don't have to worry about using this function. Even if you break or close the server for various reasons, WkKit will automatically refresh or recalculate the remaining collection time of kit for you.

### How to configuration the expression？

In fact, even if I don't write, there are many tutorials about Cron expressions on the Internet. Here I reprint a detailed explanation for you[【Original Post】](https://www.geeksforgeeks.org/writing-cron-expressions-for-scheduling-tasks/)：

**Cron expression format in wkkit:**`Docron : '* * * * *'`

---

[Cron](https://www.geeksforgeeks.org/crontab-in-linux-with-examples/) is a widely used software utility available on Unix-like operating systems that are used for the purpose of job scheduling. Certain programs or scripts that might be required to be run occasionally are added as a Cron job and a schedule is defined to describe when to run this job. Cron expressions provide one way of specifying this schedule. Additionally, Cron expressions are widely used across different applications and libraries to express complex time-based schedules for various purposes. **Cron Schedule Examples :** A Cron expression is designed to specify what date and time the scheduled task must be executed. Using Cron expressions, we can specify schedules such as the following.

* Run every minute every one hour.
* Run every hour, starting from the 15-minute mark of the hour.
* Run every hour, except for the hours between 02:00a.m. and 05:00a.m

The above list provides a very basic list of schedules that can be written using a single cron expression. **Cron Expression Format :** A cron expression is simple a string comprised of anywhere between 6 and 7 fields, each field separated by white space. The most common cron expressions consisting of 7 fields, denoting the various denominations of time, is specified below. From the 7 fields, the first 6 are mandatory, whereas, the last field (<year>) is optional.

```
<seconds> <minutes> <hours> <day-of-month> <month> <day-of-week> <year>
```

Based on the values specified for each of the components above, complex schedules may be created. **Special Characters used in Cron Expressions :**


| Character | Meaning                                                                                           | Example                                                                                                                                   |
| ----------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| *         | All. Represents that the schedule should run for every time unit                                  | A “*” in the minute field indicates that the schedule runs every minute                                                                 |
| ?         | Any. Represents any arbitrary value. This can be used only in day-of-month and day-of-week fields | A “?” in day-of-month field will not use the day-of-month for deciding the schedule as any value is acceptable here                     |
| –        | Range. Represents a continuous range of values.                                                   | Using “5-8” in the<hour> field indicates the hours 5, 6, 7 and 8                                                                        |
| ,         | Multiple Values. Separates a list of different values                                             | Using “5, 6, 10” in the<hour> field indicates the hours 5, 6 and 10                                                                     |
| /         | Increment. Specifies the amount by which to increment the values of a field                       | 3/5 in the minute field indicates the minutes 3, 8, 13, …, 58 in an hour. */10 in the minute field indicates the minutes 0, 10, 20…, 60 |

**Creating a Schedule :** With the above-specified fields, a combination of values may be used to create the desired schedules using Cron expressions. As an example, let us try to understand how to construct some sample cron expressions.

1. **Run once at 09:23:15 a.m. of every day –** Since the schedule runs every day and every month and every year, these fields will be marked by *. For the day-of-week or day-of-month, we have to use a “?” for one and a “*” for the other (both cannot have “?” or “*” simultaneously). Further, the hour field will be 9, the minute field will be 23 and the second’s field will be 0. Thus the expression is 0 9 23 * * ? *.
2. **Run every minute starting at 06:00 p.m. and ending at 10:00.p.m., every day –** The schedule must be run at the start of each minute, i.e. the second 0 for each minute. Thus the second field is 0 and the minute field is *. The hours have a range from 06:00 pm to 10:00: pm. This can be expressed as 18-22 as the hours are parsed on the 0-23 scale. Thus, the expression is: 0 * 18-22 * * ? *.
3. **Run every 5 minutes starting at 04:00 p.m. and ending at 04:55 p.m. every day –** To run the schedule every 5 minutes, the increment to be used is 5 in the hour field as follows *0/5. *For the hour field, since the schedule will run only within the hour at 04:00 p.m., the value to be used is just 16. The expression is, therefore: 0 0/5 16 * * ?.

**Understanding Cron Expressions :** Following are further example of cron expressions and what they mean:


| Expression                     | Meaning                                                                             |
| -------------------------------- | ------------------------------------------------------------------------------------- |
| ***0 */5 * ? * ****            | Once every five minutes                                                             |
| ***0 20, 30, 45 * ? * ****     | Every hour at minutes 20, 30 and 45 of the hour (Thus thrice in each hour)          |
| ***0 30, 45 14 ? 1-5 Monday*** | At 2:30 p.m. and 2:45 p.m. every Monday in the months January to May (1-5)          |
| ***0 0 9 ? * MON-FRI***        | Every 09:00 a.m. from Monday to Friday                                              |
| ***15 30 * ? * ****            | At the 15th second of the 30th minute for every hour. E.g. 10:30:15, 11:30:15, …   |
| ***25 30 10 * * ? 2021***      | At 10:30:25 a.m. every day in the year 2021                                         |
| ***0 20 8 ? * 2L 2020-2022***  | At 08:20 a.m. on every last Tuesday of each month for the years 2020, 2021 and 2022 |

**Using Cron Expressions with Commands in Unix :** In Unix, a list of shell commands, along with the execution schedules, can be specified by a crontab(cron table). The syntax of a crontab entry is the schedule expression + the shell command to be run. Thus the format is as follows.

```
<seconds> <minutes> <hours> <day-of-month> <month> <day-of-week> <year> <shell-command>
```

**Example –** For example, the following crontab entry executes a shell program named *clear_logs.sh *at 22:30 (10:30 PM) every Saturday.

```
0 30 22 ? * SAT /home/scripts/clear_logs.sh
```

### Notes about using Cron Expressions :

* The Day-of-month and Day-of-week fields cannot be specified with the same value simultaneously in the same cron expression. If one of the two values is represented by a **the other must be represented by ?**
* When setting schedule times to occur between the hours 12:00 a.m. and 1:00 a.m. Daylight saving time-related changes could lead to the skipping or repetition of the scheduled firing.
* If required the expression might have split into 2. For example, to represent a schedule that triggers every minute except between 03:00 a.m. and 06:00 a.m., the following two expressions would be required: `0 * 0-2 * * ?` to run the schedule every minute, between 12:00 AM and 03:59 AM and the other expression `0 * 6-23 * * ?` to run every minute, between 06:00 AM and 11:59 PM.
