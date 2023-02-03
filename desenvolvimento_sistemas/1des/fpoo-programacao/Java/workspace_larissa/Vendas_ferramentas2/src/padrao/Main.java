package padrao;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		float investimento = 0, lucro = 0, lucroporc = 0;
		Venda venda[] = new Venda[10]; 
		System.out.println("Digite nome, qtd, preço de compra e de venda");
		for( int i = 0; i<2; i++) {
			venda[i] = new Venda();
			
			//produto
			venda[i].nome = scan.next();
			
			//quantidade
			venda[i].qtdcompra = scan.nextInt();
			
			//quantidade
			venda[i].qtdvenda = scan.nextInt();
			
			
			//preço
			venda[i].precocompra = scan.nextFloat();
			
			//preço
			venda[i].precovenda = scan.nextFloat();
			
			investimento += venda[i].precocompra * venda[i].qtdcompra;
			lucro += venda[i].precovenda - venda[i].precocompra;
		}	
		
			lucroporc = (lucro*100)/investimento;
			
		System.out.println("\n\tProduto\t\tQtdComp.\tQtdVend.\tPreçoComp.\tPreçoVend.\tInvestim.\tLucro\t\tLucro");
		
		for(int i=0; i<2; i++) {
		
			System.out.printf("\n\t%s\t\t %d\t\t %d\t\t %.2f\t\t %.2f\t\t%.2f\t\t%.2f\t\t%.2f%% ", venda[i].nome, venda[i].qtdcompra,venda[i].qtdvenda,  venda[i].precocompra, venda[i].precovenda,investimento, lucro, lucroporc);
		}
		

			
			
	}

}
