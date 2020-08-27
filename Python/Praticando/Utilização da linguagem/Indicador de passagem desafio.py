#indicadores de passagem que identifique dois numeros adjacentes iguais

num = int(input("Digite um número: "))

achei = False
fim = 1
anterior = 0

while fim != 0 and not achei :
    divisão = num % 10
    fim = num // 10
    num = fim
    if anterior == divisão :
      achei = True
    else:
      anterior = divisão

if achei:
    print("Contém números adjacentes iguas")
else:
    print("Não contem números adjacentes iguais")
