package Gamexo;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import GamexoClass.HibernateConnection;
import GamexoClass.History;
import GamexoClass.Statistics;

public class GamexoManager {
	public int addStatistics(Statistics s) throws SQLException {
		int result = 0 ;
		SessionFactory sessionFactory = HibernateConnection.doHibernateConnection();
		Session session = sessionFactory.openSession();
		session.beginTransaction();
		try {
			session.save(s);
			session.getTransaction().commit();
			result = 1;
			System.out.println("Add Successfully...");
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		session.close();
		return result;
	}
	
	@SuppressWarnings("unchecked")
	public List<History> selectListHistory() throws SQLException {

		List<History> his = new ArrayList<History>();
		try {
			SessionFactory sessionFactory = HibernateConnection.doHibernateConnection();
			Session session = sessionFactory.openSession();
			session.beginTransaction();
			his = (List<History>) session.createQuery("from History").list();
			session.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return his;
	}
	
	@SuppressWarnings("unchecked")
	public List<Statistics> selectStatistics(int id) throws SQLException {

		List<Statistics> sta = new ArrayList<Statistics>();
		try {
			SessionFactory sessionFactory = HibernateConnection.doHibernateConnection();
			Session session = sessionFactory.openSession();
			session.beginTransaction();
			sta = (List<Statistics>) session.createQuery("from Statistics").list();
			session.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return sta;
	}
}
