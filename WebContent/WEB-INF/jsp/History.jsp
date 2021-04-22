<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<%@page
	import="java.util.*"%>
	<%@page
	import="Gamexo.*,GamexoClass.*,java.util.*"%>
	<%
	int num = (int) session.getAttribute("num");
	GamexoManager gm = new GamexoManager();
	
	List<Statistics> statistics = gm.selectStatistics(num);%>
	
	
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Game XO</title>
<link rel="stylesheet" href="css/style.css">
</head>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
<body>
<center>
<h1>History Play Game XO</h1>
<h3>ขนาด :<%=num %> X <%=num %></h3>
<table >

  <tr>
    <th>ลำดับ</th>
    <th>ผู้ชนะ</th>
  </tr>
  <%int i= 1;for(Statistics s : statistics){ %>
  <tr>
    <td><%=i %></td>
    <td><%=s.getTextXo() %></td>
   
  </tr>
  <%i++;} %>
</table>
<a href="index"><button><h3>ย้อนกลับ</h3></button> </a>
</center>
</body>
</html>