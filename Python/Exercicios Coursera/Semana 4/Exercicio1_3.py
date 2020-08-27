entrada = int(input("Digite um número inteiro: "))
fim = False
soma = 0

while not fim:
    resto = entrada % 10
    inteiro = entrada // 10
    soma = soma  + resto
    entrada = inteiro
    if inteiro == 0:
        fim = True

print(soma)
