#refazer formula de bhaskara com funções

a = int(input("Qual o valor de a? "))
b = int(input("Qual o valor de b? "))
c = int(input("Qual o valor de c? "))
import math

def delta (a, b, c):
    return (b ** 2) - (4 * a * c)

def raizn (a,b,delta):
    x = (- b - math.sqrt(delta(a,b,c))) / (2 * a)
    return x

def raizp(a,b,delta):
    x = (-b + math.sqrt(delta(a,b,c))) / (2 * a)
    return x

if delta(a,b,c) < 0:
    print("Está equação não possui raizes reais")
else:
    if delta(a,b,c) == 0:
        print("A raiz desta equação é" %(raizp(a,b,delta(a,b,c))))
    else:
        if raizp(a,b,delta) > raizn(a,b,delta):
            print("As raízes são %f e %f" %(raizp(a,b,delta(a,b,c)),raizn(a,b,delta(a,b,c))))
        else:
            print("As raízes são %f e %f" %(raizn(a,b,delta(a,b,c)),raizp(a,b,delta(a,b,c))))
            
