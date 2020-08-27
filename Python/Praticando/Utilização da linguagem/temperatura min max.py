# Temperatura min e max

def minmax (x):
    list.sort(x)
    print("A temperatura miníma foi", x[1], "e a temperatura máxima foi",
                                                           x[len(x) - 1])

def temperatura():
    lista = [0]
    i = 0
    while lista[i] != "fim":
        entrada = input("Digite a temperatura ou fim para terminar: ")
        if entrada == "fim":
            break
        else:
            lista.append(int(entrada))
            i = i + 1
    del(lista[0])
    minmax(lista)

temperatura()
