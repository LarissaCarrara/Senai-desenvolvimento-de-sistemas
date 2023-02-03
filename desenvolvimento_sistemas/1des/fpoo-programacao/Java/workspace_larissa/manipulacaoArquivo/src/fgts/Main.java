package fgts;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class Main {
	
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		/* Faça um programa que receba como entrada o nome e o salário de um funcionário, 
		calcule valor de depósito FGTS e salve em um arquivo "fgts.csv"*/
		String nome ;
		Float salario = 0f, fgts = 0f;
	
		System.out.println(" Digite o nome do funcionario: ");
		nome = scan.next();
		
		System.out.println(" Digite o salário do funcionario: ");
		salario = scan.nextFloat();
	
		fgts = salario - (salario * 0.08f);
		
		String saida = String.format(" %s\t %.2f\t %.2f", nome, salario, fgts);
		try {
			BufferedWriter bw = new BufferedWriter(new FileWriter("./bd/fgts.csv"));
			bw.write(saida);
			bw.close();
			System.out.println("Arquivo criado com sucesso.");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
