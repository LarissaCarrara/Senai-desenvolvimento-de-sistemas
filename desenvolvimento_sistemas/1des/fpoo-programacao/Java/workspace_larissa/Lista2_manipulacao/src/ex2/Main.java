package ex2;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Main {

	public static void main(String[] args) {
		int cont =0, n, colunas =0;
		try {
		FileReader fr = new FileReader("./bd/dados2.txt");
		//construtor que recebe o objeto do tipo FileReader
		BufferedReader br = new BufferedReader( fr );
		
			//enquanto houver mais linhas
			while (br.ready()) {
				//lê a proxima linha
				cont++;
				String linha = br.readLine();
				String vetor[] = linha.split(";");
				//faz algo com a linha
				for(n=0; n<vetor.length; n++) {
					System.out.printf("\t%s\t", vetor[n]);
					colunas = n + 1;
				}
				System.out.println("\n");
			}
			System.out.printf("\nNúmero de linhas do arquivo: %d", cont);
			System.out.printf("\nNúmero de colunas: %d", colunas);
			br.close();
			fr.close();
			
		} catch (IOException e) {
		e.printStackTrace();
	}
	}
}
