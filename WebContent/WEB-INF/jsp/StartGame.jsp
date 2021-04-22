<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<%@page
	import="java.util.*"%>
<%
	int num = (int) session.getAttribute("num");
	ArrayList myArrlis = (ArrayList) session.getAttribute("myArrlis");
%>
<!DOCTYPE html>
<html>
<head>
<title>Game XO</title>
<link rel="stylesheet" href="css/style.css">

<script src="https://code.jquery.com/jquery-3.6.0.min.js"
	integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
	crossorigin="anonymous"></script>
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
<script
	src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"
	type="text/javascript" charset="utf-8"></script>
<link href="https://fonts.googleapis.com/css?family=Patua+One"
	rel="stylesheet">
</head>
<body>
	<center style="margin-top: 5%">
		<h1>
			ขนาดของตาราง คุณได้กรอกมา :
			<%=num%>
		</h1>
		<div style="margin-top: 2%">
			<table id='board'>
				<input type="hidden" id="num" value="<%=num%>">
				<input type="hidden" id="myArrlis" value="<%=myArrlis%>">
				 <%
				for (int i = 0; i < num; i++) {
					
			%>
			
				<tr id="i<%=i%>">
					<%
						for (int j = 0; j < num; j++) {
						int id = j + 1 + i * num;
					%>
					<td id="J<%=id%>"></td>
					<%
						}
					%>
				</tr>
			
			<%
				}
			%> 
				<%-- <%
					if (num == 3) {
				%>
				<tr>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<%
					}
				%> --%>
				
			</table>
		</div>
		<div>

			<a href="history?id=<%=num %>">
				<button style="margin-top: 2%; background-color: #fff" id="reload">
					ดูประวัติการเล่น</button>
			</a> <a href="index">
				<button style="margin-top: 2%; background-color: #fff" id="reload">
					ย้อนกลับ</button>
			</a>
		</div>
	</center>
	<script type="text/javascript" src="jqury/script.js"></script>

</body>
</html>