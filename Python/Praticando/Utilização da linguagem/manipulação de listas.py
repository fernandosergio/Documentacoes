#    fatiar listas
primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

primos[1:2] #   vai pegar o numero de indice 1 e vai fazer 2 -1
            #   e imprimir a quantidade 2-1 numeros


primos[2:7]     #   vai começa no indice 2 e vai pegar ate o indice menor o o fim
# no caso vai pegar os indices 2 até o 6


# clonar listas
lista1 = ["vermelho", "verde", "azul"]
lista2 = lista1 #clonou

lista2[0] = "rosa" # mudou o indice 0 pra rosa mas a lista1 tmb muda

#pra copiar as listar pode usar função
def clone (lista):
    clone = []
    for objeto in lista:
        clone.append(objeto)
    return clone

#o melhor metodo é
lista2 = lista[:]    # cria uma nova lista

# concatenação de listas
a = [2,5,3,6]
b = a + [5]     #   tem qe ser entre [] pra dar certo

#repetição de listas
a = [1,2,3]
a_triplicado = a * 3    #  repete a lista n vezes (3)

#remoção de listas
del a [1]    #   apagou o indice 1 da lista a
del a [1:5]   # mesmo esquema do fatiamento da lista
# 
