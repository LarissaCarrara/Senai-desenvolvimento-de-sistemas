package ex1;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class Main {
	
	public static void main(String[] args) {
		int cont = 0, spacecount=1;
		int letra;
		try {
			FileReader fr = new FileReader("./bd/dados1.txt");
			//construtor que recebe o objeto do tipo FileReader
			BufferedReader br = new BufferedReader( fr );
			
			//enquanto houver mais linhas
			while( br.ready() ){
				cont++;
				//lê a proxima linha
				String linha = br.readLine();
				//lê quantos cracteres tem a linha
				System.out.println("A linha tem " + linha.length() + " letras");
				
				for( int i=0; i<linha.length(); i++ ){
			         if( linha.charAt(i) == ' ' ) {
			          spacecount++;
			        }
				}
				
				//lê quantas palavras tem a linha
				System.out.println("A linha tem " + spacecount + " palavras");
				//String vetor[] = linha.split(";");
				//System.out.println(Arrays.());
				
				//faz algo com a linha
				System.out.println(linha);
				System.out.println("\n\n");
				spacecount = 1;
			}
			
			br.close();
			fr.close();
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		System.out.printf("Número de linhas do arquivo: %d", cont);
	}
	
	
}
