package GamexoClass;

import java.util.Properties;

import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;


public class HibernateConnection {
	
	public static SessionFactory sessionFactory;

	public static SessionFactory doHibernateConnection() {
		Properties database = new Properties();
		//database.setProperty("hibernate.show_sql","true");
		//database.setProperty("hibernate.hbm2ddl.auto", "update");
		database.setProperty("hibernate.connection.driver_class", "com.mysql.jdbc.Driver");
		database.setProperty("hibernate.enable_lazy_load_no_trans", "true");
		
		  database.setProperty("hibernate.connection.username", "root");
		  database.setProperty("hibernate.connection.password", "1234");
		  database.setProperty("hibernate.connection.url",
		  "jdbc:mysql://localhost:3306/gamexo_digio?characterEncoding=UTF-8");
		database.setProperty("hibernate.dialect", "org.hibernate.dialect.MySQL5InnoDBDialect");
		Configuration cfg = new Configuration().setProperties(database).addPackage("com.mvcspring.model")
							.addAnnotatedClass(History.class)
							.addAnnotatedClass(Statistics.class)
							;
		
		StandardServiceRegistryBuilder ssrb = new StandardServiceRegistryBuilder().applySettings(cfg.getProperties());
		sessionFactory = cfg.buildSessionFactory(ssrb.build());
		return sessionFactory;
	}

}
