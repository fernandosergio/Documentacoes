# while cond:
    #while cond1:
        #comando

#laços aninhados

linha = 1
coluna = 1
while linha <= 10:
    while coluna <= 10:
        print(linha * coluna, end ="\t") #end = " " não muda de linha quando imprimir
        coluna = coluna + 1 #end = "\t" usa tab em vez de espaço
    linha = linha + 1
    coluna = 1
    print()
