package padrao;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		String nome;
		int idade; 
		float peso;
		Scanner scan = new Scanner(System.in);
		
		System.out.printf(" Digite o seu nome :");
		nome = scan.next();
		
		System.out.printf(" Digite a sua idade :");
		idade = scan.nextInt();
		
		System.out.printf("Digite o seu peso :");
		peso = scan.nextFloat();
	
		System.out.printf(" Nome: %s\n Idade: %d \n Peso: %.1f", nome, idade, peso);
	}

}
