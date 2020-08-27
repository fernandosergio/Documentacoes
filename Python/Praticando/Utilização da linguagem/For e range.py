#for item in lista:  #   para tal variavel local na lista fazer
#    comando

primos = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]

for x in primos:
    print(x*x)

#   função range significa um intervalo de numeros

range(20):

#   for i in range(lista):  #   começa do zero e vai até o valor lista
#       comando

#   for i in range(inicio, fim) #diz o inicio e fim

#   for i in range(inicio, fim, passo)  passo diz quanto e quanto ele vai pegar

for i in range(20):  #   executa do 0 ao 19
    print(i)

for i range(10,20):     # imprime do 10 ao 19
    print(i)

for i in range(0, 100, 3):   #imprime de 0 a 99 de tres em tres
    print(i)

pares = range (0, 40, 2)    #   salva numa variavel o range

for i in pares:
    print(i)

numeros = range (100, 0, -5)

for x in numeros:   #   imprime ao contrario do 100 ao 0 de 5 em 5
    print(x)

for i in range(len(primos)):    #   vai salvar o cubo em cima do valor original
    primos[i] = primos[i] ** 3
    
