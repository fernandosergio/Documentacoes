"""Abrir um audio pelado."""
from pygame import mixer
mixer.init()
mixer.music.load('ex021.mp3')
mixer.music.play()
input('Digite algo para parar: ')
