$(document).ready(function () {

	var move = 1;
	var play = true;
	
	
			


	$("#board tr td").click(function () {
		if ($(this).text() == "" && play) {
			if ((move % 2) == 1) {
				$(this).append("X");
				$(this).css('color', "#61892f");
				
			} else {
				$(this).append("O");
				$(this).css('color', "#e85a4f");
			}
			
			move++;
			if (checkForWinner() != -1 && checkForWinner() != "") {
				if (checkForWinner() == "X") {
					$('body').append('<form name="frm" action="statistics" method="post"><div class="winner" ><span>Winner</span>X</div><button onclick="location.reload();" id="reload" name="stati" value="X" type="submit">Play Again</button><input type="hidden" name="num" value=""></form>');
					$('.winner').css('background-color', '#61892f');
					$('#reload').css('color','#61892f');
				} else {
					$('body').append('<form name="frm" action="statistics" method="post"><div class="winner" ><span>Winner</span>O</div><button onclick="location.reload();" id="reload" name="stati" value="O" type="submit">Play Again</button></form>');
					$('.winner').css('background-color', '#e85a4f');
					$('#reload').css('color','#e85a4f');
				}
				play = false;
			}
		}
	});
	
	
	function checkForWinner() {
		

		if(document.getElementById('num').value == 3){
			var space1 = $("#J1").text();
			var space2 = $("#J2").text();
			var space3 = $("#J3").text();
			var space4 = $("#J4").text();
			var space5 = $("#J5").text();
			var space6 = $("#J6").text();
			var space7 = $("#J7").text();
			var space8 = $("#J8").text();
			var space9 = $("#J9").text();
			
			
			// check rows 3
			if ((space1 == space2) && (space2 == space3)) {
				return space3;
			} else if ((space4 == space5) && (space5 == space6)) {
				return space6;
			} else if ((space7 == space8) && (space8 == space9)) {
				return space9;
			}
			// check columns 3
			else if ((space1 == space4) && (space4 == space7)) {
				return space7;
			} else if ((space2 == space5) && (space5 == space8)) {
				return space8;
			} else if ((space3 == space6) && (space6 == space9)) {
				return space9;
			}
			// check diagonals 3
			else if ((space1 == space5) && (space5 == space9)) {
				return space9;
			} else if ((space3 == space5) && (space5 == space7)) {
				return space7;
			}
			// no winner
			return -1;
		}else if(document.getElementById('num').value == 4){
			var space1 = $("#J1").text();
			var space2 = $("#J2").text();
			var space3 = $("#J3").text();
			var space4 = $("#J4").text();
			var space5 = $("#J5").text();
			var space6 = $("#J6").text();
			var space7 = $("#J7").text();
			var space8 = $("#J8").text();
			var space9 = $("#J9").text();
			var space10 = $("#J10").text();
			var space11 = $("#J11").text();
			var space12 = $("#J12").text();
			var space13 = $("#J13").text();
			var space14 = $("#J14").text();
			var space15 = $("#J15").text();
			var space16 = $("#J16").text();
		
			// check rows 4
			if ((space1 == space2) && (space2 == space3) && (space3 == space4) && (space4 == space1) ) {
				return space4;
			} else if ((space5 == space6) && (space6 == space7) && (space7 == space8) && (space8 == space5)) {
				return space8;
			} else if ((space9 == space10) && (space10 == space11) && (space11 == space12) && (space12 == space9)) {
				return space12;
			} else if ((space13 == space14) && (space14 == space15) && (space15 == space16) && (space16 == space13)) {
				return space16;
			} 
			// check columns 4
			else if ((space1 == space5) && (space5 == space9) && (space9 == space13) && (space13 == space1)) {
				return space13;
			} else if ((space2 == space6) && (space6 == space10) && (space10 == space14) && (space14 == space2)) {
				return space14;
			} else if ((space3 == space7) && (space7 == space11) && (space11 == space15) && (space15 == space3)) {
				return space15;
			} else if ((space4 == space8) && (space8 == space12) && (space12 == space16) && (space16 == space4)) {
				return space16;
			} // check diagonals 4
			else if ((space1 == space6) && (space6 == space11) && (space11 == space16) && (space16 == space1)) {
				return space16;
			} else if ((space4 == space7) && (space7 == space10) && (space10 == space13) && (space13 == space4)) {
				return space13;
			}
			
			// no winner
			return -1;
		}else if(document.getElementById('num').value == 5){
			var space1 = $("#J1").text(); var space17 = $("#J17").text();
			var space2 = $("#J2").text(); var space18 = $("#J18").text();
			var space3 = $("#J3").text(); var space19 = $("#J19").text();
			var space4 = $("#J4").text(); var space20 = $("#J20").text();
			var space5 = $("#J5").text(); var space21 = $("#J21").text();
			var space6 = $("#J6").text(); var space22 = $("#J22").text();
			var space7 = $("#J7").text(); var space23 = $("#J23").text();
			var space8 = $("#J8").text(); var space24 = $("#J24").text();
			var space9 = $("#J9").text(); var space25 = $("#J25").text();
			var space10 = $("#J10").text();
			var space11 = $("#J11").text();
			var space12 = $("#J12").text();
			var space13 = $("#J13").text();
			var space14 = $("#J14").text();
			var space15 = $("#J15").text();
			var space16 = $("#J16").text();
			
			
			// check rows 5
			if ((space1 == space2) && (space2 == space3) && (space3 == space4) && (space4 == space5) && (space5 == space1) ) {
				return space5;
			} else if ((space6 == space7) && (space7 == space8) && (space8 == space9) && (space9 == space10) && (space10 == space6)) {
				return space10;
			} else if ((space11 == space12) && (space12 == space13) && (space13 == space14) && (space14 == space15) && (space15 == space11)) {
				return space15;
			} else if ((space16 == space17) && (space17 == space18) && (space18 == space19) && (space19 == space20) && (space20 == space16)) {
				return space20;
			} else if ((space21 == space22) && (space22 == space23) && (space23 == space24) && (space24 == space25) && (space25 == space20)) {
				return space25;
			} 
			// check columns 5
			else if ((space1 == space6) && (space6 == space11) && (space11 == space16) && (space16 == space21) && (space21 == space1)) {
				return space21;
			} else if ((space2 == space7) && (space7 == space12) && (space12 == space17) && (space17== space22) && (space22 == space2)) {
				return space22;
			} else if ((space3 == space8) && (space8 == space13) && (space13 == space18) && (space18 == space23) && (space23 == space3)) {
				return space23;
			} else if ((space4 == space9) && (space9 == space14) && (space14 == space19) && (space19 == space24) && (space24 == space4)) {
				return space24;
			} else if ((space5 == space10) && (space10 == space15) && (space15 == space20) && (space20 == space25) && (space25 == space5)) {
				return space25;
			} // check diagonals 5
			else if ((space1 == space7) && (space7 == space13) && (space13 == space19) && (space19 == space25) && (space25 == space1)) {
				return space25;
			} else if ((space5 == space9) && (space9 == space13) && (space13 == space17) && (space17 == space21) && (space21 == space5)) {
				return space21;
			}
			
			// no winner
			return -1;
		}else if(document.getElementById('num').value == 6){
			var space1 = $("#J1").text(); var space17 = $("#J17").text(); var space33 = $("#J33").text();
			var space2 = $("#J2").text(); var space18 = $("#J18").text(); var space34 = $("#J34").text();
			var space3 = $("#J3").text(); var space19 = $("#J19").text(); var space35 = $("#J35").text();
			var space4 = $("#J4").text(); var space20 = $("#J20").text(); var space36 = $("#J36").text();
			var space5 = $("#J5").text(); var space21 = $("#J21").text();
			var space6 = $("#J6").text(); var space22 = $("#J22").text();
			var space7 = $("#J7").text(); var space23 = $("#J23").text();
			var space8 = $("#J8").text(); var space24 = $("#J24").text();
			var space9 = $("#J9").text(); var space25 = $("#J25").text();
			var space10 = $("#J10").text(); var space26 = $("#J26").text();
			var space11 = $("#J11").text(); var space27 = $("#J27").text();
			var space12 = $("#J12").text(); var space28 = $("#J28").text();
			var space13 = $("#J13").text(); var space29 = $("#J29").text();
			var space14 = $("#J14").text(); var space30 = $("#J30").text();
			var space15 = $("#J15").text(); var space31 = $("#J31").text();
			var space16 = $("#J16").text(); var space32 = $("#J32").text();
			
			
			// check rows 6
			if ((space1 == space2) && (space2 == space3) && (space3 == space4) && (space4 == space5) && (space5 == space6) && (space6 == space1) ) {
				return space6;
			} else if ((space7 == space8) && (space8 == space9) && (space9 == space10) && (space10 == space11) && (space11 == space12) && (space12 == space7)) {
				return space12;
			} else if ((space13 == space14) && (space14 == space15) && (space15 == space16) && (space16 == space17) && (space17 == space18) && (space18 == space13)) {
				return space18;
			} else if ((space19 == space20) && (space20 == space21) && (space21 == space22) && (space22 == space23) && (space23 == space24) && (space24 == space19)) {
				return space24;
			} else if ((space25 == space26) && (space26 == space27) && (space27 == space28) && (space28 == space29) && (space29 == space30) && (space30 == space25)) {
				return space30;
			} else if ((space31 == space32) && (space32 == space33) && (space33 == space34) && (space34 == space35) && (space35 == space36) && (space36 == space31)) {
				return space36;
			} 
			// check columns 6
			else if ((space1 == space7) && (space7 == space13) && (space13 == space19) && (space19 == space25) && (space25 == space31) && (space31 == space1)) {
				return space31;
			} else if ((space2 == space8) && (space8 == space14) && (space14 == space20) && (space20== space26) && (space26 == space32) && (space32 == space2)) {
				return space32;
			} else if ((space3 == space9) && (space9 == space15) && (space15 == space21) && (space21 == space27) && (space27 == space33) && (space33 == space3)) {
				return space33;
			} else if ((space4 == space10) && (space10 == space16) && (space16 == space22) && (space22 == space28) && (space28 == space34) && (space34 == space4)) {
				return space34
			} else if ((space5 == space11) && (space11 == space17) && (space17 == space23) && (space23 == space29) && (space29 == space35) && (space35 == space5)) {
				return space35;
			} else if ((space6 == space12) && (space12 == space18) && (space18 == space24) && (space24 == space30) && (space30 == space36) && (space36 == space6)) {
				return space36;
			} // check diagonals 6
			else if ((space1 == space8) && (space8 == space15) && (space15 == space22) && (space22 == space29) && (space29 == space36) && (space36 == space1)) {
				return space36;
			} else if ((space6 == space11) && (space11 == space16) && (space16 == space21) && (space21 == space26) && (space26 == space31) && (space31 == space6)) {
				return space31;
			}
			
			// no winner
			return -1;
		}else if(document.getElementById('num').value == 7){
			var space1 = $("#J1").text(); var space17 = $("#J17").text(); var space33 = $("#J33").text(); var space49 = $("#J49").text();
			var space2 = $("#J2").text(); var space18 = $("#J18").text(); var space34 = $("#J34").text();
			var space3 = $("#J3").text(); var space19 = $("#J19").text(); var space35 = $("#J35").text();
			var space4 = $("#J4").text(); var space20 = $("#J20").text(); var space36 = $("#J36").text();
			var space5 = $("#J5").text(); var space21 = $("#J21").text(); var space37 = $("#J37").text();
			var space6 = $("#J6").text(); var space22 = $("#J22").text(); var space38 = $("#J38").text();
			var space7 = $("#J7").text(); var space23 = $("#J23").text(); var space39 = $("#J39").text();
			var space8 = $("#J8").text(); var space24 = $("#J24").text(); var space40 = $("#J40").text();
			var space9 = $("#J9").text(); var space25 = $("#J25").text(); var space41 = $("#J41").text();
			var space10 = $("#J10").text(); var space26 = $("#J26").text(); var space42 = $("#J42").text();
			var space11 = $("#J11").text(); var space27 = $("#J27").text(); var space43 = $("#J43").text();
			var space12 = $("#J12").text(); var space28 = $("#J28").text(); var space44 = $("#J44").text();
			var space13 = $("#J13").text(); var space29 = $("#J29").text(); var space45 = $("#J45").text();
			var space14 = $("#J14").text(); var space30 = $("#J30").text(); var space46 = $("#J46").text();
			var space15 = $("#J15").text(); var space31 = $("#J31").text(); var space47 = $("#J47").text();
			var space16 = $("#J16").text(); var space32 = $("#J32").text(); var space48 = $("#J48").text();
			
			
			// check rows 7
			if ((space1 == space2) && (space2 == space3) && (space3 == space4) && (space4 == space5) && (space5 == space6) && (space6 == space7) && (space7 == space1)) {
				return space7;
			} else if ((space8 == space9) && (space9 == space10) && (space10 == space11) && (space11 == space12) && (space12 == space13) && (space13 == space14) && (space14 == space8)) {
				return space14;
			} else if ((space15 == space16) && (space16 == space17) && (space17 == space18) && (space18 == space19) && (space19 == space20) && (space20 == space21) && (space21 == space15)) {
				return space21;
			} else if ((space22 == space23) && (space23 == space24) && (space24 == space25) && (space25 == space26) && (space26 == space27) && (space27 == space18) && (space28 == space22)) {
				return space28;
			} else if ((space29 == space30) && (space30 == space31) && (space31 == space32) && (space32 == space33) && (space33 == space34) && (space34 == space35) && (space35 == space29)) {
				return space35;
			} else if ((space36 == space37) && (space37 == space38) && (space38 == space39) && (space39 == space40) && (space40 == space41) && (space41 == space42) && (space42 == space37)) {
				return space42;
			} else if ((space43 == space44) && (space44 == space45) && (space45 == space46) && (space46== space47) && (space47 == space48) && (space48 == space49) && (space49 == space43)) {
				return space49;
			} 
			// check columns 7
			else if ((space1 == space8) && (space8 == space15) && (space15 == space22) && (space22 == space29) && (space29 == space36) && (space36 == space43) && (space43 == space1)) {
				return space43;
			} else if ((space2 == space9) && (space9 == space16) && (space16 == space23) && (space23== space30) && (space30 == space37) && (space37 == space44) && (space44 == space2)) {
				return space44;
			} else if ((space3 == space10) && (space10 == space17) && (space17 == space24) && (space24 == space31) && (space31 == space38) && (space38 == space45) && (space45 == space3)) {
				return space45;
			} else if ((space4 == space11) && (space11 == space18) && (space18 == space25) && (space25 == space32) && (space32 == space39) && (space39 == space46) && (space46 == space4)) {
				return space46
			} else if ((space5 == space12) && (space12 == space19) && (space19 == space26) && (space26 == space33) && (space33 == space40) && (space40 == space47) && (space47 == space5)) {
				return space47;
			} else if ((space6 == space13) && (space13 == space20) && (space20 == space27) && (space27 == space34) && (space34 == space41) && (space41 == space48) && (space48 == space6)) {
				return space48
			} else if ((space7 == space14) && (space14 == space21) && (space21 == space28) && (space28 == space35) && (space35 == space42) && (space42 == space49) && (space49 == space7)) {
				return space49;
			} // check diagonals 7
			else if ((space1 == space9) && (space9 == space17) && (space17 == space25) && (space25 == space33) && (space33 == space41) && (space41 == space49) && (space49 == space1)) {
				return space49;
			} else if ((space7 == space13) && (space13 == space19) && (space19 == space25) && (space25 == space31) && (space31 == space37) && (space37 == space43)  && (space43 == space7)) {
				return space43;
			}
			
			// no winner
			return -1;
		}
		
	}
});

