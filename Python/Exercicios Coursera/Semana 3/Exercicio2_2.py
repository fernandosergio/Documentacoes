
a = int(input("Qual o valor de a? "))
b = int(input("Qual o valor de b? "))
c = int(input("Qual o valor de c? "))

import math

valordelta = (b ** 2) - (4 * a * c)

if valordelta < 0:
    print("esta equação não possui raízes reais")
else:
    delta = math.sqrt(valordelta)
    x1 = (-b + delta) / (2 * a)
    x2 = (-b - delta) / (2 * a)
    if valordelta == 0:
         print("a raiz desta equação é %d", %(x1))
    else:
         if x1 < x2:
          print("as raízes da equação são %d e %d", %(x1,x2))
         else:
          print("as raízes da equação são %d e %d", %(x2,x1))
