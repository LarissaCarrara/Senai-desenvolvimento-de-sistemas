package padrao;

public class Main {

	public static void main(String[] args) {
		
		Gato gato1 = new Gato();
		Gato gato2 = new Gato();
		Gato gato3 = new Gato();
		Gato gato4 = new Gato();
		
		
		//Configurar atributos
		gato1.nome ="Tutu";
		gato1.raca = "Vira latas";
		gato1.peso = 3.5f;
			
		
		//Utilizar métodos
		gato1.miar();
		gato1.ronronar();
		
		
	}




}
