meucartão = int(input("Digite o número do seu cartão: "))
cartãolido = 1
encontrei = False

while cartãolido != 0 and not encontrei:
    cartãolido = int(input("Digite o número do próximo cartão de credito"))
    if cartãolido == meucartão:
        encontrei = True

if encontrei:
        print("Aí sim hein cara")
else:
        print("Tá lá não hein")
