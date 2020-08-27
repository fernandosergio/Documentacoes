entrada = int(input("Por favor, entre com o número que deseja converter: "))



dia = entrada // (3600*24)
restodia = entrada % (3600*24)
horas = restodia // 3600
restohoras = restodia % 3600
minutos = restohoras // 60
segundos = restohoras % 60

print("%d dias, %d horas, %d minutos e %d segundos." %(dia,horas,minutos,segundos))
