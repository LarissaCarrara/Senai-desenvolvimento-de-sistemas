package padrao;

public class Interessados {
	String nome, sobrenome;
	int idade;
	
	
	public String fase(){
		
		if(2>=idade && idade <12 ) {
			return "criança";
		}
		else if(12>=idade && idade<18) {
			return "adolescente";
		}
		else if(18>=idade && idade<24) {
			return "jovem";
		}
		else if(24>=idade && idade <60) {
			return "adulto";
		}
		else{
			return "idoso";
		}
		
	}


	@Override
	public String toString() {
		return " \n\tnome=" + nome + "\n \tsobrenome = " + sobrenome + "\n \tidade = " + idade + "\n \tfase = " + fase();
			
	}
	
	
}

