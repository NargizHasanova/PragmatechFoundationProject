# Task 1
## 1-100 arasında tek ededleri ekrana cap edin
arasdirma algoritmi
demeli evvelce men bir deyisen teyinedib icerisine 1-100 qeder reqem yerlesdirmeliyem.deyisenim olsun 'x'.
100 dene reqemi men elle yaza bilmerem deye basqa bir yolunu tapmaliyam.Demeli hazir bir(built-in) funksiya olduguna inaniram ve googleda bele bir axtaris verirem:
- python built-in functions
acilan siyahidan mene lazim olan funksiyani(range) teyin edib onu istidafe edirem.Demeli heleki elde var ne?Deyisen ve hazir 1-100 qeder reqem create eden bir funksiya

## x=range(1,101)
## print(x)

Burda men 1den 100-e qeder siralamani elde etdim.Indi ise bu siralamadan tek ededleri secmeliyem.Yeni mentiqimizi ise salsaq reqem 2-ye bolunmurse tekdi.Yeni burda bir condition(şərt) yarandigini artiq hiss ede bilirik

## x=range(1,101)
## if x%2==1:
##   print(x)
Error.Bu islemedi cunki biz deyirikki eyer x deyeri tekdise ancaq o zaman print ele.Ancaq x-in hansi deyerini?100 dene deyer var ve biz hansi deyerden yoxlamaga basladigini qeyd elememisik.Demek basqa nese dusunmek lazimdi.Meselen her reqemi bir bir avtomatik(dongu seklinde)yoxlayan bir loop lazimdi bize .arasdirma edirem 

- python loops
Aha,for dongusu qarsima cixdi.Yaziram

## x=range(1,101)
## for item in x:
##     if item%2==1:
##         print(item)

yeni burda for, x-de olan her reqemi tek tek secir,for-un icerisindeki if ise ancaq tek reqemleri secme serti qoyur,sonda ise neticeni ekranda gormek ucun itemleri print edirik.Sonra ise gedib bir stekan cay ice bilerik(keksle)

