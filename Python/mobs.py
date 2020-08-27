mob = ['vaca','ovelha','Zumbie','Esqueleto','Aranha','Bruxa','ZombiePigman','Iron golem','White']
valor = [50000000,1000000000,50000000000,1000000000000,50000000000000,250000000000000,1000000000000000,50000000000000000,600000000000000]
vVenda = [12500,85000,5000000,75000000,250000000]
relacao = [0.025,0.0085,0.01,0.0075,0.0004]

def calc_relacao(preco, venda):
    x = venda * 100
    x = x / preco
    return x

def adiciona():
    entrada = input('Deseja adicionar algum mob?(sim ou nao) ')
    if entrada == 'sim':
        mon = input('Qual o mob? ')
        preco = int(input('Qual o preço? '))
        venda = int(input('Qual o preço de venda? '))
        mob.append(mon)
        valor.append(preco)
        vVenda.append(venda)
        relacao.append(calc_relacao(preco, venda))
    else:
        print('Ok, não há novo mob para adicionar')

def comparar():
    print('Vaca = 0, Ovelha = 1, zombie = 2, esqueleto = 3, aranha = 4, bruxa =5 , zombiepigman = 6, iron golem = 7 e wither = 8')
    mons1 = int(input('Digite o primeiro mob: '))
    mons2 = int(input('Digite o segundo mob: '))