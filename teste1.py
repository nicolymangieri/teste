def imprime_shrek():
    print (" ⡴⠑⡄⠀⠀⠀⠀⠀⠀⠀ ⣀⣀⣤⣤⣤⣀⡀")
    print ("⠸⡇⠀⠿⡀⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀")
    print ("⠀⠀⠀⠀⠑⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆ ")
    print ("⠀⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆ ")
    print ("⠀⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢀⢴⣆ ")
    print ("⠀⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠸⣼⡿ ")
    print ("⠀⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉ ")
    print ("⠀⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇ ")
    print ("⠀⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇ ")
    print ("⠀⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿ ")
    print ("⠀⠀ ⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿ ")

def imprime_zap():
    print (".   ⣀⣴⣶⠾⠿⠿⣶⣦⣄⠀⠀⠀ ")
    print ("⠀⢠⣾⠟⠉⠀⠀⠀⠀⠀⠈⠻⣷⡄⠀ ")
    print ("⢠⣿⠃⠀⣴⣶⠀⠀⠀⠀⠀⠀⠈⢿⡆ ")
    print ("⣼⡇⠀⠀⣿⣿⠁⠀⠀⠀⠀⠀⠀⢸⣿ ")
    print ("⢻⡇⠀⠀⠈⢻⣦⣀⢀⣤⣄⠀⠀⢸⣿ ")
    print ("⠘⣿⡄⠀⠀⠀⠈⠻⠿⣿⠿⠀⢀⣾⠇ ")
    print ("⠀⣿⠃⣀⡀⠀⠀⠀⠀⠀⢀⣴⡿⠃⠀ ")
    print ("⣸⠿⠟⠛⠻⠿⣶⣶⣶⠿⠟⠋ ")

print ("você quer o Zap ou o Shrek?")
comando=input() 
print ("quantas vezes você quer?") 
quantas_vezes=int(input())
if comando =="shrek":
    while(quantas_vezes>0):
        imprime_shrek()
        quantas_vezes=quantas_vezes-1 

if comando =="zap":
    imprime_zap()