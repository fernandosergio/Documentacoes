lista = []
x = 1

while x != 0:
    lista.append(int(input("Digite um numero ou 0 para imprimir: ")))
    tam = len(lista) - 1
    if lista[tam] == 0:
        del lista[tam]
        x = 0

def contalista(x):
    y = -1
    n = 1
    while n <= len(x):
        print(lista[y])
        y = y - 1
        n = n + 1

contalista(lista)
