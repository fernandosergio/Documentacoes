x1 = int(input("Digite o valor do x1 no plano cartesiano: "))
y1 = int(input("Digite o valor do y1 no plano cartesiano: "))
x2 = int(input("Digite o valor do x2 no plano cartesiano: "))
y2 = int(input("Digite o valor do y2 no plano cartesiano: "))

import math

valorx = (x1 - x2) ** 2
valory = (y1 - y2) ** 2
distancia = math.sqrt(valorx + valory)

if distancia < 10 :
    print("perto")
else:
    print("longe")
