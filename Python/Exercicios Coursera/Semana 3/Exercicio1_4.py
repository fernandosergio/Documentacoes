entrada = int(input("Digite um número: "))

divisao1 = entrada % 3
divisao2 = entrada % 5

if divisao1 == 0 and divisao2 == 0 :
    print("FizzBuzz")
else:
    print(entrada)
