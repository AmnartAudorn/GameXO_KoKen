package GamexoClass;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

public class Run {
	public static void main(String[] args) {
		SessionFactory sessionFactory = HibernateConnection.doHibernateConnection();
		Session session = sessionFactory.openSession();
		session.beginTransaction();
		
	}
}
