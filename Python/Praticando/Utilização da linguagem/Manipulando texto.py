"""Opa."""
frase = 'Curso em Video Python'
frase[9]
frase[9:13]
frase[:15]
frase[:15]
frase[9::3]
len(frase)
frase.count('o')    # Conta os 'o' em frase
frase.count('o', 0, 13)     # Conta os 'o' entre 0 e 13
frase.find('deo')   # mostra aonde começa o d
frase.find('Android')  # vai dar -1 pq n tem
'Curso' in frase    # procura curso em frase e retorna True
frase.replace('Python', 'Android')  # subtitui o python por Android
frase.upper()   # Vai ficar tudo maiusculo
frase.lower()   # Vai ficar tudo minusculo
frase.capitalize()  # Vai ficar tudo minusculo mas o primeiro fica maiusculo
frase.title()   # A primeira letra de cada palavra fica maiusculo

frase = '   Aprenda Python  '
frase.strip()   # Tira os espaços inuteis dos lados
frase.rstrip()  # Tira os espaços da direita
frase.lstrip()  # Tira os espaços da esquerda

frase = 'Curso em Video Python'
frase.split()   # Divide pelos espaços e cada palavra tem indice novo
# Vai fazer uma lista com todas as palavras, cada palavra tem um numero
'-'.join(frase)  # vai por '-' no lugar dos espaços
divido = frase.split(frase)
print(divido[1])
print(divido[1][3])
