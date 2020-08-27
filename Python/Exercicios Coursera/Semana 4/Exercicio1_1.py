entrada = int(input("Digite um número natural: "))
i = 1
anterior = 1


while i <= entrada :
    mult = anterior * i
    anterior = mult
    i = i + 1


if entrada == 0:
    print(1)
else:
    print(mult)
