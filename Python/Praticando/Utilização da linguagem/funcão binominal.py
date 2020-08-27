#fazer funcao binominal nk=n!/k!(n-k)!
n = int(input("Digite o valor de n: "))
k = int(input("Digite o valor de k: "))
x = n - k

def fatorial (entrada) :
    i = 1
    anterior = 1
    while i <= entrada :
        mult = anterior * i
        anterior = mult
        i = i + 1
        return mult

binomial = (fatorial(n)) / (fatorial(k) * fatorial(x))
print(binomial)
