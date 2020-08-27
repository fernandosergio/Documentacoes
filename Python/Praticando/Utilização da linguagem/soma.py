quant = 1
soma = 0

while quant != 0:
    quant = int(input("Digite a quantidade de itens ou 0 para parar: "))
    valor = int(input("Digite o valor do item: "))
    if quant and valor != 0:
        soma = soma + (quant * valor)
    else:
        break

print(soma)
