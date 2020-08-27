"""Tanãnã."""
num = int(input('Digite um número de 0 a 9999: '))
resto = num % 10
print(f'Unidade é igual a {resto}.')
num = num // 10
resto = num % 10
print(f'Dezena é igual a {resto}.')
num = num // 10
resto = num % 10
print(f'Centena igual a {resto}.')
num = num // 10
resto = num % 10
print(f'Milhar igual {resto}.')
