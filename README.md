# PragmatechFoundationProject

## Translator ve assebler nədir? Compiler və interpreter ilə aralarındakı fərqlər nələrdir?
Kompyuter prosessoru ancaq maşın dilini anlaya bilir(machine language).Yəni 0 və 1-ləri.
Language translator isə bizim hər hansısa proqramlaşdırılma dilində yazdığımız kodu machine language-in anlamağı üçün tercume edir.
### Language translator-ların növləri
- compiler
- interpreter
Compiler high-level language-i(insan dilinə ən yaxın dil) machine language-e translate edir.Compiler bütün kodu birdən yoxlayır və agər səhv taparsa hec bir kodu calışdırmır.(C#)
İnterpreter isə hər bir sətri sıra ilə oxuyub ekranda calışdırır,hər hansısa bir səhv(error) qarşısına cıxana qədər(Javascript,PHP).Bizim isletdiyimiz brauzer ele interpretatordu.Assembler-proqram transyatorudu,assembler dilindəki mətnin maşın dilindəki proqrama.

## Rəqəm və ədədlərin maşın dilinə tərcümə olunma prosesini bilirik. Bəs hərflər və simvollar necə tərcümə olunur?
ASCII vasitəsi ilə.ASCII(American standard code for information interchange)- amerikalıların icra etdiyi hərflər və simvollar üçün bir kod standartıdı 


## Günümüzdə istifadə olunan Js,PHP,Python və C# dillərində ortaq istifadə olunan data növləri hansılardır və qısaca izahatlarını yazın

- integer (rəqəm)
- string (sətr)
- boolean (true,false)(doğru/yalnış)
- null (boşluq)
- array (massiv)

## Type Conversion ya da Type Casting nədir? Hansı hallarda ehtiyac duyulur?

Bir data type-i digər data typ-a keçməsi type conversion demekdi.Məsələn stringi integer-ə,integeri bolean-ə və s.
Type casting-in nə olduğunu tam olaraq anlaya bilmədim.

## Operator precedence nədir və əhəmiyyətini izah edin
operator üstünlüyü deməkdir.Kodun oxunması zamanı bir operand digər operantdan üstünolarsa ilk o operator isləmi yerinə yetirilir. 

## Automatic Type Conversion ve Type Conversion Methodlar arasındakı fərqləri izah edin.

Fərq ondadırki automatic type-da conversion avtomatik olur.