"""Tanãnã."""
from math import sqrt, hypot    #NOQA

a = float(input('Digite o valor de um cateto: '))
b = float(input('Digite o valor do outro cateto: '))

# valor = (a ** 2 + b ** 2) ** (1/2)
# valor = sqrt((a**2) + (b**2))
valor = hypot(a, b)
print(f'A hipotenusa dos catetos {a} e {b} é {valor}')
