package inss;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class Main {
	
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		/* Faça um programa que receba como entrada o nome e o salário de um funcionário, 
		 calcule o desconto de INSS e salve em um arquivo "inss.csv"*/
		
		String nome ;
		Float salario = 0f, inss = 0f;
	
		System.out.println(" Digite o nome do funcionario: ");
		nome = scan.next();
		
		System.out.println(" Digite o salário do funcionario: ");
		salario = scan.nextFloat();
		
		if(salario <= 1212) {
			inss = salario * 0.075f;
		}else if( salario > 1212 && salario <=2427.35) {
			inss = salario * 0.09f;
		}else if(salario > 2427.35 && salario <=3641.03) {
			inss = salario * 0.12f;
		}else {
			inss = salario * 0.14f;
		}
		
		
		String saida = String.format(" %s\t %.2f\t %.2f", nome, salario, inss);
		try {
			BufferedWriter bw = new BufferedWriter(new FileWriter("./bd/inss.csv"));
			bw.write(saida);
			bw.close();
			System.out.println("Arquivo criado com sucesso.");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
