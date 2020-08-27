numero = input("Digite o número a ser somado: ")
tamanho = len(numero)
i = 0
soma = 0

while i < tamanho :
    restinho = int(numero) % 10
    numero = int(numero) // 10
    soma = soma + restinho
    i = i + 1

print("A soma é", soma)
