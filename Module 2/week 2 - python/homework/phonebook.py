"""
1. Create list of options(names/number) for menu
2. Create menu with options
3. create if/then interactions for each option

"""

def print_menu():
    print ("1. look up an entry")
    print ("2. set an entry")
    print ("3. delete an entry")
    print ("4. list all entries")
    print ("5. quit")
    print ("What do you want to do, (1-5)?")

def name_number () :
        ["Melissa" : "281-330-8004"] :
        ["Jazz" : "631-545-9897"] :
        ["Igor" : "245-554-9347"] :
        

numbers = {}
menu_choice = 0
print_menu()
while menu_choice != 5:
    print int(input("type a number (1-5)"));
    if menu_choice == 1:
        print ("look up an entry")
    elif menu_choice == 2:
        print ("set an entry"):
    elif menu_choice == 3:
        print ("delete an entry")
    elif menu_choice == 4:
        print ("list all entries")
    elif menu_choice == 5:
        print ("quit")


    