"""Tanãnã."""
from random import choices, shuffle #NOQA
a = input('Digite o nome do primeiro aluno: ')
b = input('Digite o nome do segundo aluno: ')
c = input('Digite o nome do terceiro aluno: ')
d = input('Digite o nome do quarto aluno: ')
lista = [a, b, c, d]
# print(f'A ordem de apresentação será {choices([a, b, c ,d], k=4)}')
shuffle(lista)
print(f'A ordem de apresentação será {lista}')
