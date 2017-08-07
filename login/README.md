

```	
//CREATE DATABASE创建语句后面是数据库名称
```

#### 1.创建一个数据库

```
CREATE DATABASE SQLname
```

```
CREATE DATABASE IF NOT EXISTS `数据库名称` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;//并设定utf8
```

***

#### 2.删除一个数据库

```
DROP DATABASE '数据库名称'
```

***

#### 3.创建一个数据库表

```
CREATE TABLE `表名称`(
  名称 类型,
  名称 类型,
  名称 类型
)
//id 自增长  INT(20) not null AUTO_INCREMENT,
//主键设置   primary key (id)
```

***

#### 4.删除一个数据库表

```
DROP TABLE '表名称'
```

***

#### 5.查询表

```
select * from '表名称'//查询表中所有数据
SELECT * FROM `name` WHERE 1
SELECT `id` FROM `name` WHERE 1
```

```
select <列名> from <表名> [where <查询条件表达试>] [order by <排序的列名>[asc或desc]]
```

***

#### 6.表中插入数据

```
1.1【插入单行】
INSERT INTO `name`(`id`) VALUES ([value-1])
insert [into] <表名> (列名) values (列值)
```

***

#### 7.表中删除数据

```
DELETE FROM `name` WHERE 1
delete from <表名> [where <删除条件>]
```

#### 8.表中修改数据

```
UPDATE `name` SET `id`=[value-1] WHERE 1
update <表名> set <列名=更新值> [where <更新条件>]
```

