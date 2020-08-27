def remove_repetidos (lista):
    list.sort(lista)
    lista.append(0)
    nova = []
    anterior = lista[0]
    for atual in range(0,len(lista)):
        if lista[atual] != anterior:
            nova.append(anterior)
        anterior = lista[atual]

    return nova
