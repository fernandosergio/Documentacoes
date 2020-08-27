def soma_elementos (lista):
    soma = 0
    anterior = 0
    while len(lista) != 0:
        anterior = lista[0]
        soma = soma + anterior
        del lista[0]
    return soma 
