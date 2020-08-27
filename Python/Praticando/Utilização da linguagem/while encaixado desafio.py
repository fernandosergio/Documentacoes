#usuario vai digita uma sequencia de numeros
#imprimi o fatorial do numero digitado
#while sem função
#entrada = 1
#while entrada => 0:
#    entrada = int(input("Digite um número natural ou 0 para parar: "))
#    i = 1
#    anterior = 1
#    while i <= entrada:
#        mult = anterior * i
#        anterior = mult
#        i = i + 1
#    print(mult)




# while com função
def fatorial (n):
    i = 1
    anterior = 1
    while i <= n :
        mult = anterior * i
        anterior = mult
        i = i + 1
    print(mult)

def main():
    entrada = 1
    while entrada >= 0:
        entrada = int(input("Digite um valor natural: "))
        fatorial(entrada)

main()
