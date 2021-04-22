<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>


<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
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
<%
	String warming = (String) request.getAttribute("warming");
if (warming != null) {
	request.removeAttribute(warming);
%>
<script type="text/javascript">
			alert("<%=warming%>
	");
</script>
<%
	}
%>
<body style="background-color: #D3D3D3;">
	<center style="margin-top: 15%">
		<form name="frm" action="startGame" onsubmit="return check_form()" method="post">
			<h2>
				input number : <input type="text" name="num" id="num" value="0" placeholder="Number"> 
				<input type="submit" name="submit" value="เริ่มเกม" style="padding: 0.2em 1.5em; box-shadow: 6px 0px 10px 0px #3fa1a9;">
			</h2>
			<label style="color: red">*กำหนดค่าตั้งแต่ 3 จนถึง 7 เท่านั้น</label>
		</form>

		<h1>Game XO</h1>

	</center>
</body>
</html>