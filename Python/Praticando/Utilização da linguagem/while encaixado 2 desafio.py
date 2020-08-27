n = int(input("Digite um numero maior que 1: "))

fator = 2
mult = 0
x = 0

while n > 1:
    while n % fator == 0:
        mult = mult + 1
        n = n / fator
        x = x + 1
    if mult > 0:
        print("fator =", fator,"multiplicidade =",mult)
    if x == 1 :
        print("Número primo")
    fator = fator + 1
    mult = 0
