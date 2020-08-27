"""Tanãnã."""
from math import sin, cos, tan, radians
en = int(input('Digite um ângulo qualquer: '))

sen = sin(radians(en))
cos = cos(radians(en))
tan = tan(radians(en))
print(
    f'O ângulo {en} tem seno {sen:.3f}, cosseno {cos:.3f} e tangente {tan:.3f}'
)
