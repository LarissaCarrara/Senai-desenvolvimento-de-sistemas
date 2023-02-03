package padrao;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		Interessados pessoa[] = new Interessados[20];
		int qtd = 0, idades = 0;
		int diags[] = { 0, 0, 0, 0, 0 };
		float media =0, media2=0, media3=0, media4=0, media5=0, media6=0;
		float  m2=0,m3=0,m4=0,m5=0,m6=0;

		System.out.println("digite a qtd, nome, sobrenome e idade");
		
		// quantidade de pessoas
		qtd = scan.nextInt();
	
		for (int i = 0; i < qtd; i++) {
			pessoa[i] = new Interessados();

			// nome
			System.out.println("digite o nome: ");
			pessoa[i].nome = scan.next();

			// sobrenome
			System.out.println("digite o sobrenome: ");
			pessoa[i].sobrenome = scan.next();

			// idade
			System.out.println("digite a idade: ");
			pessoa[i].idade = scan.nextInt();

			idades += pessoa[i].idade;

		}
		media = idades / qtd;
		for (int i = 0; i < qtd; i++) {
			if (pessoa[i].fase().equals("criança")) {
				diags[0]++;
				media2 += pessoa[i].idade;
			}
			if (pessoa[i].fase().equals("adolescente")) {
				diags[1]++;
				media3 += pessoa[i].idade;
			}
			if (pessoa[i].fase().equals("jovem")) {
				diags[2]++;
				media4 += pessoa[i].idade;
			}
			if (pessoa[i].fase().equals("adulto")) {
				diags[3]++;
				media5 += pessoa[i].idade;
			}
			if (pessoa[i].fase().equals("idoso")) {
				diags[4]++;
				media6 += pessoa[i].idade;
				
			}
		}
		m2= media2/diags[0];
		m3= media3/diags[1];
		m4= media4/diags[2];
		m5= media5/diags[3];
		m6= media6/diags[4];
		
		System.out.printf("Interessados:\n");
		for(int i=0; i<qtd; i++) {
			System.out.printf("\n%s", pessoa[i].toString());
		}
		
		
		System.out.printf("\n\n\n\tcriança:\t%d\tmedia:\t%.2f", diags[0], m2);
		System.out.printf("\n\tadolescente\t%d\tmedia:\t%.2f", diags[1],m3);
		System.out.printf("\n\tjovem\t\t%d\tmedia:\t%.2f", diags[2],m4);
		System.out.printf("\n\tadulto\t\t%d\tmedia:\t%.2f", diags[3],m5);
		System.out.printf("\n\tidoso\t\t%d\tmedia:\t%.2f", diags[4],m6);
		System.out.printf("\n\n\tMédia de idade geral dos interessados: %.2f", media);
		
		
	}

}
