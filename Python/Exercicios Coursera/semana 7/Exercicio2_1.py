def n_primos (x):
    fator = 2
    if x == 2:
        return True

    while x % fator != 0 and fator <= x/2:
        fator = fator + 1
    if x % fator == 0:
        return 0
    else:
        return 1




entrada = int(input("Digite um numero maior que 1: "))

n = 2
soma = 0
while n < entrada:
    if n_primos(n) == 1:
        soma = soma + 1
    n = n + 1

print(soma)
