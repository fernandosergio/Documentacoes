
a = int(input("Qual o valor de a?(x²)"))
b = int(input("Qual o valor de b?(x)"))
c = int(input("Qual o valor de c?(2)"))

import math
import sys

valordelta = b**2 - 4 * a * c

if valordelta < 0:
    print("Esta equação não possui raizes reais")
    sys.exit()

delta = math.sqrt(valordelta)
x1 = (-b + delta) / (2 * a)
x2 = (-b - delta) / (2 * a)

if valordelta == 0:
    print("A raiz desta equação é %d" %(x1))
else:
    print("As raízes desta equação são x'= %d e x''= %d" % (x1,x2))
