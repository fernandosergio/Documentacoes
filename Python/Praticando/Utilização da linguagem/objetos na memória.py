a = "banana"
b = "banana"    #a e b apontam pro mesmo lugar na memoria

lista1 = [1,2,3]
lista2 = [1,2,3]    # lista 1 e 2 tem os mesmos valores mas apontam pra lugar diferentes

a is b #    vai dar true pq tem o mesmo lugar na memoria

lista1 is lista2    # vai dar false porque sao lugares diferentes na memoria
lista1 == lista2    # vai dar true pq tem os mesmo valores

origlist = [45,76,34,55]
origilist * 3   #vai repetir a lista 3 vezes

[origilist] * 3 #   vai fazer uma lista da lista 3 vezes repetida

newlist = [origilist] * 3   #apontam pra origilist

origilist[1] = 99
origilist   # vai mudar o indice 1
newlist   # vai mudar todos os indices 1 pq ta apontando a origilist
