# Task 5. 'Javascript ne vaxtdan proqramlasdirma dili olub?' cumlesinin herf sayini tapin
cumle='Javascript ne vaxtdan proqramlasdirma dili olub?'
symbols="#?!,.$~/ "
for letter in cumle:
    for item in symbols:
        if letter==item:
            cumle=cumle.replace(letter,"")
print(len(cumle))
        
    