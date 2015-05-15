var mysql = require('mysql');
var async = require('async');
var myUnit = require('../lib/unit');

var pool = mysql.createPool({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'test',
  port : '3306'
});

exports.execute = function(sqlString,params,callback){
  async.waterfall(
    [function(next){
      pool.query(sqlString,params,next);
    },function(rows,fields,next){
      callback &&callback(rows,fields);
    }],function(err){
      if(!err){
        conn.release();
      } else {
        console.log(err);
      }
    }
  );
}

/*
 *sql查询语句
 *@TableName    (表名 : String)
 *@where        (查询条件 : String)
 *@limit        (展示数量 : Number)
 *@fields       (展示字段 : Array)
 *@order        (排序方式 : String)
 */
exports.selectSQL = function(TableName,where,order,limit,fields){
  if(myUnit.returnType(TableName) === "String" && TableName.length > 0){
    var strSQL = new String();
    if(myUnit.returnType(fields) === "Array" && fields.length > 0){
      strSQL = "SELECT "+fields.join(",")+" FROM "+TableName;
    } else {
      strSQL = "SELECT * FROM "+TableName;
    }
    if(myUnit.returnType(where) === "String" && where.length > 0){
      strSQL += " WHERE "+where;
    } else {
      strSQL += " WHERE 1";
    }
    if(myUnit.returnType(order) === "String" &&  order.length > 0){
      strSQL += " ORDER BY "+order;
    }
    if(myUnit.returnType(limit) === "Number" && limit >= 0){
      strSQL += " LIMIT "+limit;
    }
    strSQL +=";";
    return strSQL;
  } else {
    var err = new Error('selectSQL SyntaxError : TableName isn\'t String or  null'.red);
    throw err;
  }
}

/*
 *sql增加语句
 *@TableName      (表名 : String)
 *@intoInfo       (插入数据对象 : 字面量对象)
 */
exports.insertSQL = function(TableName,intoInfo){
  if(myUnit.returnType(TableName) === "String" && TableName.length > 0){
    var strSQL = new String();
    if(myUnit.returnType(intoInfo) === "Object"){
      var fieldsArr = new Array(),contentArr = new Array();
      for(var key in intoInfo){
        if(intoInfo.hasOwnProperty(key)){
          fieldsArr.push(key);
          contentArr.push("\""+intoInfo[key]+"\"");
        }
      }
      strSQL = "INSERT into "+TableName+"("+fieldsArr+")VALUES("+contentArr+")";
      strSQL +=";";
      console.log(strSQL);
      return strSQL;
    }
  } else {
    var err = new Error('insertSQL SyntaxError : TableName isn\'t String or  null'.red);
    throw err;
  }
}

/*
 *sql删除语句
 *@TableName    (表名 : String)
 *@where        (查询条件 : String)
 */
exports.deleteSQL = function(TableName,where,order,limit){
  if(myUnit.returnType(TableName) === "String" && TableName.length > 0){
    var strSQL = new String();
    strSQL = "DELETE FROM "+TableName;
    if(myUnit.returnType(where) === "String" && where.length > 0){
      strSQL += " WHERE "+where;
    } else {
      strSQL += " WHERE 1";
    }
    if(myUnit.returnType(order) === "String" &&  order.length > 0){
      strSQL += " ORDER BY "+order;
    }
    if(myUnit.returnType(limit) === "Number" && limit >= 0){
      strSQL += " LIMIT "+limit;
    }
    strSQL +=";";
    console.log(strSQL);
    return strSQL;
  } else {
    var err = new Error('deleteSQL SyntaxError : TableName isn\'t String or  null'.red);
    throw err;
  }
}

/*
 *sql修改语句
 *@TableName    (表名 : String)
 *@setInfo       (插入数据对象 : 字面量对象)
 *@where        (查询条件 : String)
 */
exports.updateSQL = function(TableName,setInfo,where){
  if(myUnit.returnType(TableName) === "String" && TableName.length > 0){
    var strSQL = new String();
    strSQL = "UPDATE "+TableName;
    if(myUnit.returnType(setInfo) === "Object"){
      var tempSet = [];
      for(var key in setInfo){
        if(setInfo.hasOwnProperty(key)){
          tempSet.push(key+'=\"'+setInfo[key]+'"');
        }
      }
      //strSQL += " SET "+JSON.stringify(setInfo).replace(/^{|}$/g,'').replace(/\":\"/g,'"="');
      strSQL += " SET "+tempSet.join(',');
    }
    if(myUnit.returnType(where) === "String" && where.length > 0){
      strSQL += " WHERE "+where;
    } else {
      strSQL += " WHERE 1";
    }
    strSQL +=";";
    console.log(strSQL);
    return strSQL;
  } else {
    var err = new Error('updateSQL SyntaxError : TableName isn\'t String or  null'.red);
    throw err;
  }
}
