def computador_escolhe_jogada (n,m):
    if n <= m:
        return n
    else:
        if n % (m+1) > 0:
            return n % (m+1)
        return m

def usuario_escolhe_jogada (n,m):
    x = int(input("Quantas peças vai tirar? "))
    if x > m or x < 0:
        while x > m:
            x = int(input("Valor inválido! Digite um valor válido: "))
        return x
    else:
        return x

def partida():
    n = int(input("Quantas peças? "))
    m = int(input("Limite de peças por jogada? "))
    while m <1 or m > n:
        print("Q quantidade de preças jogadas devem ser menor ou igual a peças totais")
        m = int(input("Limite de peças por jogada? "))
    jogada = 0
    valor = 0
    if n % (m+1) == 0:
        print("\nVocê começa!")
        jogada = 1
        while n > 0:
            if jogada == 1:
                valor = usuario_escolhe_jogada(n,m)
                print("\nVocê tirou %d peça(s)" %(valor))
                n = n - valor
                print("\nAgora restam %d peças no tabuleiro" %(n))
                jogada = 2
            else:
                valor = computador_escolhe_jogada(n,m)
                print("\nO computador tirou %d peça(s)" %(valor))
                n = n - valor
                print("\nAgora restam %d peça(s)" %(n))
                jogada = 1
        if jogada == 1:
            print("\nFim do jogo! O computador ganhou!")
            return 2
        else:
            print("\nFim do jogo! Você ganhou!")
            return 1

    else:
        print("\nComputador começa! ")
        jogada = 2
        while n > 0:
            if jogada == 2:
                valor = computador_escolhe_jogada(n,m)
                print("\nO computador tirou %d peça(s)" %(valor))
                n = n - valor
                print("\nAgora restam %d peça(s)" %(n))
                jogada = 1
            else:
                valor = usuario_escolhe_jogada(n,m)
                print("\nVocê tirou %d peça(s)" %(valor))
                n = n - valor
                print("\nAgora restam %d peça(s)" %(n))
                jogada = 2
        if jogada == 1:
            print("Fim do jogo! O computador ganhou!\n")
            return 2
        else:
            print("Fim do jogo! Você ganhou!\n")
            return 1
    #realiza de acordo com a estrategia

def campeonato():
    quantidade_partida = 1
    comp = user = 0

    while quantidade_partida < 4:
        print("**** Rodada", quantidade_partida ,"****\n")
        if partida() == 1:
            user = user + 1
        else:
            comp = comp + 1
        quantidade_partida = quantidade_partida + 1

    print("**** Final do campeonato! ****\n")
    print("Placar: Você", user, "X", comp, "Computador")
    #realizar 3 partidas
    #mostar placar no final
    #mostar quem ganhou

def main():
    print("Bem-vindo ao jogo do NIM!")
    print("1 - para jogar uma partida isolada")
    print("2 - para jogar um campeonato")

    escolha = int(input("Escolha: "))
    while escolha != 1 and escolha != 2:
        print("Escolha uma opção válida!")
        escolha = int(input("Escolha: "))

    if escolha == 1:
        print("\nVocê escolheu uma partida isolada!\n")
        partida()
    else:
        if escolha == 2:
            print("\nVocê escolheu um campeonato!\n")
            campeonato()

main()
