def repetição(altura,largura):
    x = 1
    y = 1
    while y < largura:
        print("#", end="")
        y = y + 1
    y = 1
    print("#")

def espaço (x):
    y = 1
    if x > 2:
        print("#",end="")
        while (x-2) >= y:
            print(" ",end="")
            y = y +1
        y = 1
        print("#")

lar = int(input("Digite a largura: "))
alt = int(input("Digite a altura: "))

def main():
    linha = 1
    while linha <= alt:
        if linha == 1 or linha == alt:
            repetição(alt,lar)
            linha = linha + 1
        else:
            espaço(lar)
            linha = linha + 1
main()
