package notas01;

public class Boletim {

	String aluno;
	float portugues;
	float matematica;
	float ciencias;
	

	
	Boletim(){}
	
	Boletim (String alu, float port, float mat, float cie){
	aluno = alu;
	portugues = port;
	matematica = mat;
	ciencias= cie;
	
		
	}
	
	//métodos
	String conceito() {
		if ( portugues < 5 || matematica < 5 || ciencias < 5) {
			
			return "Reprovado";
		}else {
			return "Aprovado";
		}
		
		
	}

	
	
	public String toString() {
		return String.format( "\n %s \t %.2f \t %.2f \t %.2f \t %s", aluno, portugues, matematica, ciencias, conceito());
	}
	
}
