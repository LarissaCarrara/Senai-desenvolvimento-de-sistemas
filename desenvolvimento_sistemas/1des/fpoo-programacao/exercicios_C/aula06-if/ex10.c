#include <stdio.h>
#include <locale.h>
int main(){
	//Configurações e variáveis
	setlocale(LC_ALL,"");
	float n1, n2, n3;
	float media;
	printf("Digite as três notas do aluno (exemplo de nº cm vírgula: 3,5): ");
	scanf("%f %f %f",&n1, &n2, &n3);


	media = (float)(n1+n2+n3)/3;
	
	//Processamento
	if(media >= 6){
		printf("O aluno foi aprovado com a média de %.2f\n",media);
		
	}else if(media>= 4){
			printf("O aluno está de recuperação com a média de %.2f\n",media);
	}else{
		
			printf("O aluno foi reprovado com a média de %.2f\n", media);
	}
}
