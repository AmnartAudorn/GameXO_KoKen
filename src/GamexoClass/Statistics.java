package GamexoClass;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;


@Entity
@Table(name = "Statistics")
public class Statistics {

	@Id
	@GeneratedValue
	@Column(name = "SId")
	private int SId;
	
	@Column(name = "textXo", columnDefinition = "varchar(10)", nullable = false)
	private String textXo;
	
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "Id",nullable = false)
	private History his;

	
	public Statistics() {
		super();
	}

	public Statistics(String textXo) {
		super();
		this.textXo = textXo;
	}

	public int getSId() {
		return SId;
	}

	public void setSId(int sId) {
		SId = sId;
	}

	public String getTextXo() {
		return textXo;
	}

	public void setTextXo(String textXo) {
		this.textXo = textXo;
	}

	public History getHis() {
		return his;
	}

	public void setHis(History his) {
		this.his = his;
	}

	
}
