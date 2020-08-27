aS = 6300
bC = 3780

cS = 4800
dC = 2880

EC = int(input("Quantos campeoes de 6300 restam?"))
FC = int(input("Quantos campeoes de 4800 restam?"))

Valor1 = aS * int(EC)
Valor2 = bC * int(EC)
Valor3 = cS * int(FC)
Valor4 = dC * int(FC)
TSF = Valor1 + Valor3
TCF = Valor2 + Valor4
resultado = TSF - TCF
print("Restam %s campeoes de 6300, %s de EA sem fragmento ou %s com fragmento." % (EC,Valor1,Valor2))
print("Restam %s campeoes de 4800, %s de EA sem fragmento ou %s com fragmento." % (FC,Valor3,Valor4))
print("Total de %s de EA sem fragmento ou %s com fragmento." % (TSF,TCF))
print("Economia de %s EA." %(resultado))
