#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"Portuguese");
	
	int x1=10, y1=10, x2 = -30, y2 =109;
	
	if(x1<x2)
	printf("x1 a esquerda");
	else if(x1==x2)
	printf("mesmo ponto horizontal");
	else
	printf("x1 a direita");
	
	if(y1<y2)
	printf("y1 acima");
	else if(y1==y2)
	printf("mesmo ponto vertical");
	else{
		printf("y1 abaixo");
	}
}
