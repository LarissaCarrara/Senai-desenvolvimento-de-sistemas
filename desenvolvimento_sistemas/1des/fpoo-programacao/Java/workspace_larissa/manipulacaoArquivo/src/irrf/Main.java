package irrf;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class Main {
	
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		/* Faça um programa que receba como entrada o nome e o salário de um funcionário, 
		 calcule o desconto de IRRF e salve em um arquivo "inss.csv""*/
		
		String nome ;
		Float salario = 0f, irrf = 0f;
	
		System.out.println(" Digite o nome do funcionario: ");
		nome = scan.next();
		
		System.out.println(" Digite o salário do funcionario: ");
		salario = scan.nextFloat();
		
		if(salario <= 2826.65) {
			irrf = salario * 0.075f;
		}else if( salario > 2826.65 && salario <=3751.05) {
			irrf = salario * 0.15f;
		}else if(salario > 3751.05 && salario <=4664.68) {
			irrf = salario * 0.225f;
		}else {
			irrf = salario * 0.275f;
		}
		
		
		String saida = String.format(" %s\t %.2f\t %.2f", nome, salario, irrf);
		try {
			BufferedWriter bw = new BufferedWriter(new FileWriter("./bd/irrf.csv"));
			bw.write(saida);
			bw.close();
			System.out.println("Arquivo criado com sucesso.");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
