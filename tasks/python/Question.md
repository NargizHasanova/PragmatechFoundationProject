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

# Phython Modules

Говоря простым языком, модуль в Python это  просто файл, содержащий код на Python. Каждый модуль в Python может содержать переменные, объявления классов и функций. Кроме того, в модуле может находиться исполняемый код.Важно знать, что модуль загружается лишь однажды, независимо от того, сколько раз он был импортирован.

Sade dilnen desek modul bizim yaratdigimiz python faylidir(example.py).Icinde istediyimiz kodu yaziriq ve sonra basqa fayldan bu melumatlari goturmek ucun import yaziriq ve import etmek istediyimiz faylin adini(import example)(cagirdigimiz faylin sonunda .py yazmaga ehtiyyac yoxdur) 

# Built-in Modules and Custom Modules fərqi

Built-in modullari hazir bizim istifademiz ucun verilen modullardi.Custom modullari ise biz ozumuz yazib faylda save edirik ve sonradan istifade edirik.
 
# List,Tuple,Dict data növləri arasındakı oxşar və fərqli cəhətlər nələrdir?

List data novunun icindeki deyerleri deyismek olar,yeni deyerler elave etmek olar.

Tuple data novunde bu mumkun deyil.

Dict(словари) в Python - неупорядоченные коллекции произвольных объектов с доступом по ключу.

{'cat': 'кошка', 'dog': 'собака', 'bird': 'птица'}

"Неупорядоченный" – значит, что последовательность расположения пар не важна, в следствие чего обращение к элементам по индексам невозможно.Обращение происходит только по ключу:
 >>> a['cat']
     'кошка'
Словари, как и списки, являются изменяемым типом данных: позволительно изменять, добавлять и удалять элементы.
Dict-de index yoxdu,onun yerine acarlar var yuxarda qeyd olundugu kimi meselen 'cat','dog','bird' bular acarlardi ve bu acarlari cagirib hemen o acarin deyerini elde ede bilerik.

Demek esas ferq odur ki listde index var,deyerleri deyismek ve elave edib,silmek olur.Tuple-da deyerleri deyismek,elaveler elemek olmur.Dict-de ise listde kimi deyerleri deyismek,elaveler etmek olur,sadece index evezine acarlar istifade olunur.

