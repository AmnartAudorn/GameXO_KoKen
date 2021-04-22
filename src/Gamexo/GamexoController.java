package Gamexo;

import java.io.UnsupportedEncodingException;
import java.sql.SQLException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import GamexoClass.History;
import GamexoClass.Statistics;
@Controller
public class GamexoController {
	@RequestMapping(value = "/startGame", method = RequestMethod.POST)
	public String getNumber(HttpSession session, HttpServletRequest request,Model md)
			throws SQLException, UnsupportedEncodingException, ParseException {
		request.setCharacterEncoding("UTF-8");
		
		int num = Integer.parseInt(request.getParameter("num")); 
		if(num == 0 ||num < 3 || num >7){
			request.setAttribute("warming", "กรุณากรอกตัวเลข 3 - 7 ด้วยครับ");
			return "index";
		}
		System.out.println(num);
		ArrayList myArrlis = new ArrayList();
		int no = 0;
		int no1 = num * num;
		
		 while (true) {
		      if (no >= no1) break;
		      System.out.print("จำนวนที่ " + (no+1) + " = ");
		      no++;
		      myArrlis.add(no);
		    }
		    session.setAttribute("myArrlis", myArrlis);
		    session.setAttribute("num", num);
		return "StartGame";
		
	}
	
	@RequestMapping(value = "/index", method = RequestMethod.GET)
	public String index(HttpSession session, HttpServletRequest request,Model md)
			throws SQLException, UnsupportedEncodingException, ParseException {
		return "index";
		
	}
	
	@RequestMapping(value = "/history", method = RequestMethod.GET)
	public String history(HttpSession session, HttpServletRequest request,Model md)
			throws SQLException, UnsupportedEncodingException, ParseException {
		int id = Integer.parseInt(request.getParameter("id")); 
		int idS = 0;
		System.out.println(id+"55");
		GamexoManager gm = new GamexoManager();
		List<History> history = gm.selectListHistory(); 
	
		session.setAttribute("history", history);
		return "History";
		
	}
	
	
	@RequestMapping(value = "/statistics", method = RequestMethod.POST)
	public String statistics(HttpSession session, HttpServletRequest request,Model md)
			throws SQLException, UnsupportedEncodingException, ParseException {
		String stati = request.getParameter("stati"); 
		int num = (int) session.getAttribute("num");
		System.out.println(stati);
		GamexoManager gm = new GamexoManager();
		List<History> listHis = gm.selectListHistory();
		for(History h : listHis) {
			System.out.println(h.getNumber());
			if(h.getNumber() == num) {
				Statistics s = new Statistics(stati);
				s.setHis(h);
				gm.addStatistics(s);
				
			}
		}
		
		return "StartGame";
	}
	
	
	
}
