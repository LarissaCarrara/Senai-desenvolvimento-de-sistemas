#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"Portuguese");
	
	int num1, num2,num3, media;
	
	printf("Digite três números inteiros:\n ");
	scanf("%d %d %d", &num1, &num2, &num3);
	
	media = (num1+ num2 + num3)/3;
	
	printf("Média entre %d, %d,%d = %d", num1, num2,num3, media);
}
