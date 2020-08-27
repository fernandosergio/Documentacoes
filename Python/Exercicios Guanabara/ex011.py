alt = float(input('Qual a altura da parede? '))
lar = float(input('Qual a largura da parede? '))


a = alt * lar
t = a / 2

print(f'A parede tem {a:.2f}m² e serão necessários {t:.2f}l de tinta')
