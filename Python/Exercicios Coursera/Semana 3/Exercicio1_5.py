num1 = int(input("Digite o primeiro número: "))
num2 = int(input("Digite o segundo número: "))
num3 = int(input("Digite o terceiro número: "))

condição = num1 < num2 and num2 < num3

if condição == True :
    print("crescente")
else:
    print("não está na ordem crescente")
