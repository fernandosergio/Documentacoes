n1 = int(input('Digite um valor: '))
n2 = int(input('Digite outro valor: '))

s = n1 + n2
d = n1 / n2
di = n1 // n2

print(f'A soma é {s}, a divisão é {d:.3f}', end=' ')   #NOQA .3f diz pra mostrar 3 numeros flutuantes depois do ponto
print(f'A divisão inteira é {di}')
