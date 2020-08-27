entrada = input('Digite algo: ')

print('O valor é do tipo', type(entrada))


def verificação(x):
    x.isalpha()
    x.isnumeric()
    print(f'Olá {entrada}')
    ...


verificação(entrada)
