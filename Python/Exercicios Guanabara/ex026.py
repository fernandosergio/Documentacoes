"""TTT."""
nome = input('Qual a frase? ').strip()
conta = nome.count('A' or 'a')
print(f'A letra A aparece {conta} vezes.')
procura = nome.find('A' or 'a') + 1
print(f'A primeira letra a aparece no indice {procura}')
pror = nome.rfind('a' or 'A')
print(f'A ultima letra A aparece no indice {pror}')
