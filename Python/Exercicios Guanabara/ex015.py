dias = int(input('Quantos dias foram alugados? '))
km = float(input('Quantos kilometros foram rodados? '))

pd = 60
pkm = 0.15

valor = (pd * dias) + (pkm * km)
print(f'O carro foi alugado por {dias} dias e rodou {km:.1f}Km.')
print(f'O valor do aluguel é R${valor:.2f}.')
