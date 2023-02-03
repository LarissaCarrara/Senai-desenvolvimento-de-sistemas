package ex3;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Main {
	
	public static void main(String[] args) {
		int cont =0, n, valor=0,linhamax=0, linhamin=0;
		float media =0, preco =0, max=1, min=99999, valores[]= {0,0,0,0,0,0,0,0,0,0};
	
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
							if(cont > 1 && n==2) {
								//transformando em float
								valor += Float.parseFloat(vetor[2]);
								preco = Float.parseFloat(vetor[2]);
								
							}
					}
					System.out.println("\n");
					if(cont > 1) {
						valores[cont -2] = Float.parseFloat(vetor[2]);
						
					}
					
					if(preco > max) {
						max = preco;
						for(n=0; n<valores.length; n++) {
						
							if( max == valores[n]) {
							linhamax = n + 2;
						}
						}
					}
					if (preco < min) {
						min = preco;
						
					}
				}
				media = valor/(cont-1);
				System.out.printf("\nMédia: %.2f", media);
				System.out.printf("\nPreço max: %.2f", max);
				System.out.printf("\nLinha: %d", linhamax);
				System.out.printf("\nPreço min: %.2f", min);
				
		} catch (IOException e) {
			e.printStackTrace();

		  }

}
}